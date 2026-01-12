import type {
  Team,
  Group,
  GroupStanding,
  Match,
  MatchProbability,
  TeamProbabilities,
  MatchupProbability,
  SimulationResult,
  KnockoutRound
} from '../types';

// Calculate win probability using Elo rating difference
export const calculateMatchProbability = (teamA: Team, teamB: Team): MatchProbability => {
  const eloDiff = teamA.eloRating - teamB.eloRating;

  // Expected score based on Elo formula
  const expectedA = 1 / (1 + Math.pow(10, -eloDiff / 400));
  const expectedB = 1 - expectedA;

  // Adjust for draws (about 25% of matches end in draws)
  const drawProbability = 0.25 * (1 - Math.abs(expectedA - 0.5));

  const teamAWin = expectedA * (1 - drawProbability * 0.5);
  const teamBWin = expectedB * (1 - drawProbability * 0.5);
  const draw = 1 - teamAWin - teamBWin;

  return {
    teamAWin: Math.round(teamAWin * 1000) / 1000,
    draw: Math.round(draw * 1000) / 1000,
    teamBWin: Math.round(teamBWin * 1000) / 1000,
  };
};

// Simulate a single match
export const simulateMatch = (
  teamA: Team,
  teamB: Team,
  allowDraw: boolean = true
): { winner: Team | null; scoreA: number; scoreB: number } => {
  const prob = calculateMatchProbability(teamA, teamB);
  const random = Math.random();

  // Generate realistic scores
  const avgGoals = 2.5;
  const generateScore = (winProb: number) => {
    const base = Math.random() * avgGoals * (0.5 + winProb);
    return Math.floor(base + Math.random() * 1.5);
  };

  if (random < prob.teamAWin) {
    const scoreA = generateScore(prob.teamAWin) + 1;
    const scoreB = Math.min(scoreA - 1, generateScore(prob.teamBWin));
    return { winner: teamA, scoreA, scoreB };
  } else if (random < prob.teamAWin + prob.draw && allowDraw) {
    const score = Math.floor(Math.random() * 3);
    return { winner: null, scoreA: score, scoreB: score };
  } else {
    const scoreB = generateScore(prob.teamBWin) + 1;
    const scoreA = Math.min(scoreB - 1, generateScore(prob.teamAWin));
    return { winner: teamB, scoreA, scoreB };
  }
};

// Simulate knockout match (must have a winner)
export const simulateKnockoutMatch = (teamA: Team, teamB: Team): {
  winner: Team;
  scoreA: number;
  scoreB: number;
  penaltiesA?: number;
  penaltiesB?: number;
} => {
  const result = simulateMatch(teamA, teamB, true);

  if (result.winner) {
    return {
      winner: result.winner,
      scoreA: result.scoreA,
      scoreB: result.scoreB
    };
  }

  // Penalty shootout
  const penaltiesA = 3 + Math.floor(Math.random() * 3);
  let penaltiesB = 3 + Math.floor(Math.random() * 3);

  // Ensure different scores
  if (penaltiesA === penaltiesB) {
    penaltiesB = Math.random() > 0.5 ? penaltiesA + 1 : penaltiesA - 1;
    if (penaltiesB < 0) penaltiesB = penaltiesA + 1;
  }

  return {
    winner: penaltiesA > penaltiesB ? teamA : teamB,
    scoreA: result.scoreA,
    scoreB: result.scoreB,
    penaltiesA,
    penaltiesB,
  };
};

// Simulate group stage
export const simulateGroupStage = (group: Group): GroupStanding[] => {
  const standings: Map<string, GroupStanding> = new Map();

  // Initialize standings
  group.teams.forEach(team => {
    standings.set(team.id, {
      team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
    });
  });

  // Each team plays every other team once
  for (let i = 0; i < group.teams.length; i++) {
    for (let j = i + 1; j < group.teams.length; j++) {
      const teamA = group.teams[i];
      const teamB = group.teams[j];
      const result = simulateMatch(teamA, teamB, true);

      const standingA = standings.get(teamA.id)!;
      const standingB = standings.get(teamB.id)!;

      standingA.played++;
      standingB.played++;
      standingA.goalsFor += result.scoreA;
      standingA.goalsAgainst += result.scoreB;
      standingB.goalsFor += result.scoreB;
      standingB.goalsAgainst += result.scoreA;

      if (result.winner === teamA) {
        standingA.won++;
        standingA.points += 3;
        standingB.lost++;
      } else if (result.winner === teamB) {
        standingB.won++;
        standingB.points += 3;
        standingA.lost++;
      } else {
        standingA.drawn++;
        standingB.drawn++;
        standingA.points++;
        standingB.points++;
      }
    }
  }

  // Update goal differences and sort
  const sortedStandings = Array.from(standings.values())
    .map(s => ({
      ...s,
      goalDifference: s.goalsFor - s.goalsAgainst,
    }))
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      return 0;
    });

  return sortedStandings;
};

// Simulate entire tournament once
export const simulateTournament = (groups: Group[]): SimulationResult => {
  const groupResults = new Map<string, GroupStanding[]>();
  const knockoutTeams: Team[] = [];
  const thirdPlaceTeams: { team: Team; standing: GroupStanding }[] = [];

  // Simulate group stage
  groups.forEach(group => {
    const standings = simulateGroupStage(group);
    groupResults.set(group.name, standings);

    // Top 2 from each group advance
    knockoutTeams.push(standings[0].team);
    knockoutTeams.push(standings[1].team);

    // Collect 3rd place teams for comparison
    if (standings[2]) {
      thirdPlaceTeams.push({ team: standings[2].team, standing: standings[2] });
    }
  });

  // Best 8 third-place teams advance
  const sortedThirdPlace = thirdPlaceTeams
    .sort((a, b) => {
      if (b.standing.points !== a.standing.points) return b.standing.points - a.standing.points;
      if (b.standing.goalDifference !== a.standing.goalDifference)
        return b.standing.goalDifference - a.standing.goalDifference;
      return b.standing.goalsFor - a.standing.goalsFor;
    })
    .slice(0, 8);

  sortedThirdPlace.forEach(({ team }) => knockoutTeams.push(team));

  // Simulate knockout rounds
  const knockoutResults: Match[] = [];

  // Round of 32
  let currentRound: Team[] = knockoutTeams;
  let nextRound: Team[] = [];
  let roundName: KnockoutRound = 'round-of-32';

  while (currentRound.length > 1) {
    nextRound = [];
    for (let i = 0; i < currentRound.length; i += 2) {
      const teamA = currentRound[i];
      const teamB = currentRound[i + 1];

      if (!teamA || !teamB) {
        if (teamA) nextRound.push(teamA);
        continue;
      }

      const result = simulateKnockoutMatch(teamA, teamB);

      knockoutResults.push({
        id: `${roundName}-${i / 2}`,
        round: roundName,
        teamA,
        teamB,
        scoreA: result.scoreA,
        scoreB: result.scoreB,
        penaltiesA: result.penaltiesA,
        penaltiesB: result.penaltiesB,
        winner: result.winner,
      });

      nextRound.push(result.winner);
    }

    currentRound = nextRound;

    // Update round name
    if (roundName === 'round-of-32') roundName = 'round-of-16';
    else if (roundName === 'round-of-16') roundName = 'quarter-finals';
    else if (roundName === 'quarter-finals') roundName = 'semi-finals';
    else if (roundName === 'semi-finals') roundName = 'final';
  }

  // Get final positions
  const finalMatch = knockoutResults.find(m => m.round === 'final');
  const semiFinals = knockoutResults.filter(m => m.round === 'semi-finals');

  const winner = finalMatch?.winner!;
  const finalist = finalMatch?.teamA === winner ? finalMatch?.teamB! : finalMatch?.teamA!;

  const thirdPlaceContenders = semiFinals
    .map(m => m.teamA === m.winner ? m.teamB : m.teamA)
    .filter((t): t is Team => t !== null);

  const thirdPlaceMatch = simulateKnockoutMatch(thirdPlaceContenders[0], thirdPlaceContenders[1]);

  return {
    winner,
    finalist,
    thirdPlace: thirdPlaceMatch.winner,
    fourthPlace: thirdPlaceMatch.winner === thirdPlaceContenders[0]
      ? thirdPlaceContenders[1]
      : thirdPlaceContenders[0],
    groupResults,
    knockoutResults,
  };
};

// Run Monte Carlo simulation
export const runMonteCarlo = (
  groups: Group[],
  iterations: number = 10000
): {
  teamProbabilities: TeamProbabilities[];
  matchupProbabilities: MatchupProbability[];
} => {
  const teamStats = new Map<string, {
    team: Team;
    exitGroupStage: number;
    reachRoundOf32: number;
    reachRoundOf16: number;
    reachQuarterFinals: number;
    reachSemiFinals: number;
    reachFinal: number;
    winTournament: number;
  }>();

  const matchupCounts = new Map<string, {
    teamA: Team;
    teamB: Team;
    count: number;
    rounds: Map<string, number>;
  }>();

  // Initialize team stats
  groups.forEach(group => {
    group.teams.forEach(team => {
      teamStats.set(team.id, {
        team,
        exitGroupStage: 0,
        reachRoundOf32: 0,
        reachRoundOf16: 0,
        reachQuarterFinals: 0,
        reachSemiFinals: 0,
        reachFinal: 0,
        winTournament: 0,
      });
    });
  });

  // Run simulations
  for (let i = 0; i < iterations; i++) {
    const result = simulateTournament(groups);

    // Track group stage exits
    result.groupResults.forEach((standings) => {
      standings.slice(3).forEach(standing => {
        const stats = teamStats.get(standing.team.id);
        if (stats) stats.exitGroupStage++;
      });
    });

    // Track knockout progress
    const knockoutTeamIds = new Set<string>();
    const roundTeams = new Map<string, Set<string>>();

    result.knockoutResults.forEach(match => {
      if (match.teamA) knockoutTeamIds.add(match.teamA.id);
      if (match.teamB) knockoutTeamIds.add(match.teamB.id);

      const roundKey = match.round as string;
      if (!roundTeams.has(roundKey)) {
        roundTeams.set(roundKey, new Set());
      }
      if (match.teamA) roundTeams.get(roundKey)!.add(match.teamA.id);
      if (match.teamB) roundTeams.get(roundKey)!.add(match.teamB.id);

      // Track matchups
      if (match.teamA && match.teamB) {
        const key = [match.teamA.id, match.teamB.id].sort().join('-');
        if (!matchupCounts.has(key)) {
          matchupCounts.set(key, {
            teamA: match.teamA.id < match.teamB.id ? match.teamA : match.teamB,
            teamB: match.teamA.id < match.teamB.id ? match.teamB : match.teamA,
            count: 0,
            rounds: new Map(),
          });
        }
        const matchup = matchupCounts.get(key)!;
        matchup.count++;
        matchup.rounds.set(match.round, (matchup.rounds.get(match.round) || 0) + 1);
      }
    });

    // Update team progression stats
    knockoutTeamIds.forEach(teamId => {
      const stats = teamStats.get(teamId);
      if (stats) stats.reachRoundOf32++;
    });

    roundTeams.get('round-of-16')?.forEach(teamId => {
      const stats = teamStats.get(teamId);
      if (stats) stats.reachRoundOf16++;
    });

    roundTeams.get('quarter-finals')?.forEach(teamId => {
      const stats = teamStats.get(teamId);
      if (stats) stats.reachQuarterFinals++;
    });

    roundTeams.get('semi-finals')?.forEach(teamId => {
      const stats = teamStats.get(teamId);
      if (stats) stats.reachSemiFinals++;
    });

    roundTeams.get('final')?.forEach(teamId => {
      const stats = teamStats.get(teamId);
      if (stats) stats.reachFinal++;
    });

    // Tournament winner
    const winnerStats = teamStats.get(result.winner.id);
    if (winnerStats) winnerStats.winTournament++;
  }

  // Convert to probabilities
  const teamProbabilities: TeamProbabilities[] = Array.from(teamStats.values())
    .map(stats => ({
      team: stats.team,
      exitGroupStage: stats.exitGroupStage / iterations,
      reachRoundOf32: stats.reachRoundOf32 / iterations,
      reachRoundOf16: stats.reachRoundOf16 / iterations,
      reachQuarterFinals: stats.reachQuarterFinals / iterations,
      reachSemiFinals: stats.reachSemiFinals / iterations,
      reachFinal: stats.reachFinal / iterations,
      winTournament: stats.winTournament / iterations,
    }))
    .sort((a, b) => b.winTournament - a.winTournament);

  // Convert matchup counts to probabilities
  const matchupProbabilities: MatchupProbability[] = Array.from(matchupCounts.values())
    .map(matchup => ({
      teamA: matchup.teamA,
      teamB: matchup.teamB,
      probability: matchup.count / iterations,
      round: 'round-of-16' as KnockoutRound, // Simplified
    }))
    .filter(m => m.probability > 0.01) // Only significant matchups
    .sort((a, b) => b.probability - a.probability);

  return { teamProbabilities, matchupProbabilities };
};

// Format probability as percentage
export const formatProbability = (prob: number): string => {
  return `${(prob * 100).toFixed(1)}%`;
};
