// FIFA World Cup 2026 Knockout Bracket Structure
// Defines which group positions feed into which knockout matches

import { getThirdPlaceAllocationFromFIFA, GROUP_WINNERS_VS_THIRD_PLACE } from './thirdPlaceAllocations';

export interface BracketMatchup {
  matchNumber: number;
  teamASource: string; // e.g., "1A", "2B", "3ABCD", "W73"
  teamBSource: string;
  possibleThirdPlaceGroups?: string[]; // For third-place team positions
}

// Group winners that play against third-place teams (from FIFA Annex C)
// These are: A, B, D, E, G, I, K, L
export const GROUP_WINNERS_PLAYING_THIRD_PLACE = GROUP_WINNERS_VS_THIRD_PLACE;

// Round of 32 bracket structure
// Based on FIFA official bracket with third-place team allocations
export const roundOf32Bracket: BracketMatchup[] = [
  { matchNumber: 73, teamASource: '1A', teamBSource: '3*' }, // 3* means third-place team (determined by FIFA allocation)
  { matchNumber: 74, teamASource: '2A', teamBSource: '2B' },
  { matchNumber: 75, teamASource: '1B', teamBSource: '3*' },
  { matchNumber: 76, teamASource: '2C', teamBSource: '2D' },
  { matchNumber: 77, teamASource: '1C', teamBSource: '2F' }, // 1C plays a second-place team
  { matchNumber: 78, teamASource: '2E', teamBSource: '2H' },
  { matchNumber: 79, teamASource: '1D', teamBSource: '3*' },
  { matchNumber: 80, teamASource: '2G', teamBSource: '1H' }, // 1H plays a second-place team
  { matchNumber: 81, teamASource: '1E', teamBSource: '3*' },
  { matchNumber: 82, teamASource: '2I', teamBSource: '2J' },
  { matchNumber: 83, teamASource: '1F', teamBSource: '2K' }, // 1F plays a second-place team
  { matchNumber: 84, teamASource: '1J', teamBSource: '2L' }, // 1J plays a second-place team
  { matchNumber: 85, teamASource: '1G', teamBSource: '3*' },
  { matchNumber: 86, teamASource: '1K', teamBSource: '3*' },
  { matchNumber: 87, teamASource: '1I', teamBSource: '3*' },
  { matchNumber: 88, teamASource: '1L', teamBSource: '3*' },
];

// Map group winner to match number (for third-place allocations)
export const GROUP_WINNER_TO_MATCH: { [key: string]: number } = {
  'A': 73,
  'B': 75,
  'D': 79,
  'E': 81,
  'G': 85,
  'K': 86,
  'I': 87,
  'L': 88,
};

// Get third-place allocation using official FIFA Annex C data
export function getThirdPlaceAllocation(qualifyingThirdPlaceGroups: string[]): Map<number, string> {
  // Use the official FIFA allocation
  const allocationByGroupWinner = getThirdPlaceAllocationFromFIFA(qualifyingThirdPlaceGroups);

  // Convert from groupWinner -> thirdPlaceGroup to matchNumber -> thirdPlaceGroup
  const allocation = new Map<number, string>();

  for (const [groupWinner, thirdPlaceGroup] of allocationByGroupWinner.entries()) {
    const matchNumber = GROUP_WINNER_TO_MATCH[groupWinner];
    if (matchNumber) {
      allocation.set(matchNumber, thirdPlaceGroup);
    }
  }

  return allocation;
}

// Helper to determine if a source involves a third-place team
export function isThirdPlacePosition(source: string): boolean {
  return source.startsWith('3');
}

// Helper to parse a team source designation
export function parseTeamSource(source: string): {
  type: 'group-winner' | 'group-runner-up' | 'third-place' | 'knockout-winner' | 'knockout-loser';
  group?: string;
  possibleGroups?: string[];
  fromMatch?: number;
} {
  if (source.startsWith('1')) {
    return { type: 'group-winner', group: source.substring(1) };
  } else if (source.startsWith('2')) {
    return { type: 'group-runner-up', group: source.substring(1) };
  } else if (source.startsWith('3')) {
    const possibleGroups = source.substring(1).split('');
    return { type: 'third-place', possibleGroups };
  } else if (source.startsWith('W')) {
    return { type: 'knockout-winner', fromMatch: parseInt(source.substring(1)) };
  } else if (source.startsWith('L')) {
    return { type: 'knockout-loser', fromMatch: parseInt(source.substring(1)) };
  }
  throw new Error(`Unknown team source format: ${source}`);
}
