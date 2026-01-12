// Team and Tournament Types for FIFA World Cup 2026

export type Confederation = 'UEFA' | 'CONMEBOL' | 'CONCACAF' | 'CAF' | 'AFC' | 'OFC';

export interface Team {
  id: string;
  name: string;
  code: string; // 3-letter country code
  confederation: Confederation;
  fifaRanking: number;
  eloRating: number;
  flag: string; // emoji flag
}

export interface GroupStanding {
  team: Team;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface Group {
  name: string; // A-L
  teams: Team[];
  standings?: GroupStanding[];
}

export type KnockoutRound =
  | 'round-of-32'
  | 'round-of-16'
  | 'quarter-finals'
  | 'semi-finals'
  | 'third-place'
  | 'final';

export interface Match {
  id: string;
  round: 'group' | KnockoutRound;
  group?: string; // Group name for group stage matches
  teamA: Team | null;
  teamB: Team | null;
  scoreA?: number;
  scoreB?: number;
  penaltiesA?: number;
  penaltiesB?: number;
  winner?: Team;
}

export interface MatchProbability {
  teamAWin: number;
  draw: number;
  teamBWin: number;
}

export interface TeamProbabilities {
  team: Team;
  exitGroupStage: number;
  reachRoundOf32: number;
  reachRoundOf16: number;
  reachQuarterFinals: number;
  reachSemiFinals: number;
  reachFinal: number;
  winTournament: number;
}

export interface MatchupProbability {
  teamA: Team;
  teamB: Team;
  probability: number; // Probability these two teams will meet
  round: KnockoutRound | 'group';
}

export interface SimulationResult {
  winner: Team;
  finalist: Team;
  thirdPlace: Team;
  fourthPlace: Team;
  groupResults: Map<string, GroupStanding[]>;
  knockoutResults: Match[];
}

export interface TournamentState {
  groups: Group[];
  knockoutMatches: Match[];
  teamProbabilities: TeamProbabilities[];
  matchupProbabilities: MatchupProbability[];
  simulationCount: number;
}
