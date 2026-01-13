import type { Team, SimulationResult, TeamMatchProbability, ScheduledMatch, ScheduleMatchDisplay } from '../types';
import { parseTeamSource, getThirdPlaceAllocation, roundOf32Bracket } from '../data/bracketStructure';
import { worldCup2026Schedule } from '../data/schedule';
import { getTeamByCode } from '../data/teams';

// Calculate which teams can appear in each knockout match based on simulation results
export function calculateKnockoutMatchProbabilities(
  simulationResults: SimulationResult[],
  simulationCount: number
): Map<number, { teamA: TeamMatchProbability[], teamB: TeamMatchProbability[] }> {

  const matchProbabilities = new Map<number, { teamA: Map<string, number>, teamB: Map<string, number> }>();

  // Initialize maps for all knockout matches
  for (const match of worldCup2026Schedule) {
    if (match.round !== 'group') {
      matchProbabilities.set(match.matchNumber, {
        teamA: new Map(),
        teamB: new Map()
      });
    }
  }

  // Process each simulation result
  for (const result of simulationResults) {
    // Track group winners, runners-up, and third-place teams
    const groupWinners = new Map<string, Team>();
    const groupRunnersUp = new Map<string, Team>();
    const thirdPlaceTeams: { team: Team, group: string, points: number, gd: number }[] = [];

    // Extract group stage results
    result.groupResults.forEach((standings, groupName) => {
      if (standings.length >= 3) {
        groupWinners.set(groupName, standings[0].team);
        groupRunnersUp.set(groupName, standings[1].team);
        thirdPlaceTeams.push({
          team: standings[2].team,
          group: groupName,
          points: standings[2].points,
          gd: standings[2].goalDifference
        });
      }
    });

    // Determine best 8 third-place teams
    thirdPlaceTeams.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.gd !== a.gd) return b.gd - a.gd;
      return 0; // Could add more tiebreakers
    });
    const bestThirdPlace = thirdPlaceTeams.slice(0, 8);
    const qualifyingThirdPlaceGroups = bestThirdPlace.map(t => t.group);
    const thirdPlaceAllocation = getThirdPlaceAllocation(qualifyingThirdPlaceGroups);

    // Map third-place teams to their groups
    const thirdPlaceByGroup = new Map<string, Team>();
    bestThirdPlace.forEach(t => thirdPlaceByGroup.set(t.group, t.team));

    // Track Round of 32 winners for subsequent rounds
    const knockoutWinners = new Map<number, Team>();

    // Process Round of 32
    for (const bracketMatch of roundOf32Bracket) {
      const teamA = resolveTeam(bracketMatch.teamASource, groupWinners, groupRunnersUp, thirdPlaceByGroup, thirdPlaceAllocation, knockoutWinners);
      const teamB = resolveTeam(bracketMatch.teamBSource, groupWinners, groupRunnersUp, thirdPlaceByGroup, thirdPlaceAllocation, knockoutWinners);

      if (teamA && teamB) {
        // Simulate the match and determine winner (from knockout results if available)
        const winner = findMatchWinner(result.knockoutResults, bracketMatch.matchNumber, teamA, teamB);
        if (winner) {
          knockoutWinners.set(bracketMatch.matchNumber, winner);
        }

        // Record probabilities
        const probs = matchProbabilities.get(bracketMatch.matchNumber);
        if (probs) {
          probs.teamA.set(teamA.id, (probs.teamA.get(teamA.id) || 0) + 1);
          probs.teamB.set(teamB.id, (probs.teamB.get(teamB.id) || 0) + 1);
        }
      }
    }

    // Process subsequent knockout rounds
    processSubsequentRounds(result.knockoutResults, matchProbabilities, knockoutWinners);
  }

  // Convert counts to probabilities and sort by probability
  const finalProbabilities = new Map<number, { teamA: TeamMatchProbability[], teamB: TeamMatchProbability[] }>();

  matchProbabilities.forEach((value, matchNumber) => {
    const teamAProbs: TeamMatchProbability[] = [];
    const teamBProbs: TeamMatchProbability[] = [];

    value.teamA.forEach((count, teamId) => {
      const team = getTeamById(teamId);
      if (team) {
        teamAProbs.push({
          team,
          probability: count / simulationCount
        });
      }
    });

    value.teamB.forEach((count, teamId) => {
      const team = getTeamById(teamId);
      if (team) {
        teamBProbs.push({
          team,
          probability: count / simulationCount
        });
      }
    });

    // Sort by probability descending
    teamAProbs.sort((a, b) => b.probability - a.probability);
    teamBProbs.sort((a, b) => b.probability - a.probability);

    finalProbabilities.set(matchNumber, {
      teamA: teamAProbs,
      teamB: teamBProbs
    });
  });

  return finalProbabilities;
}

// Helper function to resolve a team designation to an actual team
function resolveTeam(
  source: string,
  groupWinners: Map<string, Team>,
  groupRunnersUp: Map<string, Team>,
  thirdPlaceByGroup: Map<string, Team>,
  _thirdPlaceAllocation: Map<number, string>,
  knockoutWinners: Map<number, Team>
): Team | null {
  const parsed = parseTeamSource(source);

  switch (parsed.type) {
    case 'group-winner':
      return groupWinners.get(parsed.group!) || null;
    case 'group-runner-up':
      return groupRunnersUp.get(parsed.group!) || null;
    case 'third-place':
      // Find which group this third-place position refers to in this simulation
      // This is complex and depends on the thirdPlaceAllocation
      // For now, return the first matching third-place team
      for (const group of parsed.possibleGroups || []) {
        const team = thirdPlaceByGroup.get(group);
        if (team) return team;
      }
      return null;
    case 'knockout-winner':
      return knockoutWinners.get(parsed.fromMatch!) || null;
    case 'knockout-loser':
      // For third-place match
      return null; // Would need to track losers separately
    default:
      return null;
  }
}

// Helper to find the winner of a match from knockout results
function findMatchWinner(
  _knockoutResults: any[],
  _matchNumber: number,
  teamA: Team,
  teamB: Team
): Team | null {
  // This would need to match against the actual knockout results from the simulation
  // For now, we'll use a simple ELO-based probability
  const eloProb = 1 / (1 + Math.pow(10, (teamB.eloRating - teamA.eloRating) / 400));
  return Math.random() < eloProb ? teamA : teamB;
}

// Process subsequent knockout rounds
function processSubsequentRounds(
  _knockoutResults: any[],
  _matchProbabilities: Map<number, { teamA: Map<string, number>, teamB: Map<string, number> }>,
  _knockoutWinners: Map<number, Team>
): void {
  // R16, QF, SF, Final
  // This would trace through the bracket based on knockout winners
  // Implementation depends on how knockoutResults are structured
  // Placeholder for now
}

// Helper to get team by ID (assuming there's a global team list)
function getTeamById(_teamId: string): Team | null {
  // Import and use allTeams from teams.ts
  return null; // Placeholder
}

// Generate schedule display data with probabilities
export function generateScheduleDisplay(
  scheduledMatches: ScheduledMatch[],
  simulationResults: SimulationResult[],
  simulationCount: number,
  _groups: any[]
): ScheduleMatchDisplay[] {
  const knockoutProbs = simulationCount > 0
    ? calculateKnockoutMatchProbabilities(simulationResults, simulationCount)
    : new Map();

  return scheduledMatches.map(match => {
    const display: ScheduleMatchDisplay = {
      ...match,
      teamAProbabilities: undefined,
      teamBProbabilities: undefined,
      actualTeamA: undefined,
      actualTeamB: undefined
    };

    if (match.round === 'group') {
      // For group stage, resolve actual teams from group data
      display.actualTeamA = getTeamByCode(match.teamADesignation);
      display.actualTeamB = getTeamByCode(match.teamBDesignation);
    } else if (simulationCount > 0) {
      // For knockout, use probabilities
      const probs = knockoutProbs.get(match.matchNumber);
      if (probs) {
        // Filter to top teams that sum to >= 90% probability, plus "Others"
        display.teamAProbabilities = filterTopTeams(probs.teamA);
        display.teamBProbabilities = filterTopTeams(probs.teamB);
      }
    }

    return display;
  });
}

// Filter teams to show top teams up to 90% cumulative probability, then "Others"
function filterTopTeams(probabilities: TeamMatchProbability[]): TeamMatchProbability[] {
  if (probabilities.length === 0) return [];

  const result: TeamMatchProbability[] = [];
  let cumulative = 0;

  for (const prob of probabilities) {
    if (cumulative < 0.9) {
      result.push(prob);
      cumulative += prob.probability;
    }
  }

  // Add "Others" if there's remaining probability
  if (cumulative < 1.0 && result.length < probabilities.length) {
    // Create a placeholder "Others" team
    result.push({
      team: {
        id: 'others',
        name: 'Others',
        code: 'OTH',
        confederation: 'UEFA',
        fifaRanking: 999,
        eloRating: 0,
        flag: ''
      },
      probability: 1 - cumulative
    });
  }

  return result;
}
