// FIFA World Cup 2026 Knockout Bracket Structure
// Defines which group positions feed into which knockout matches

export interface BracketMatchup {
  matchNumber: number;
  teamASource: string; // e.g., "1A", "2B", "3ABCD", "W73"
  teamBSource: string;
  possibleThirdPlaceGroups?: string[]; // For third-place team positions
}

// Round of 32 bracket structure
// Third-place team designations (e.g., "3ABCD") mean one of the best 3rd place teams from those groups
// The specific assignment depends on which groups finish with the best 8 third-place teams
export const roundOf32Bracket: BracketMatchup[] = [
  { matchNumber: 73, teamASource: '1A', teamBSource: '3CDEF', possibleThirdPlaceGroups: ['C', 'D', 'E', 'F'] },
  { matchNumber: 74, teamASource: '2A', teamBSource: '2B' },
  { matchNumber: 75, teamASource: '1B', teamBSource: '3ADEFG', possibleThirdPlaceGroups: ['A', 'D', 'E', 'F', 'G'] },
  { matchNumber: 76, teamASource: '2C', teamBSource: '2D' },
  { matchNumber: 77, teamASource: '1C', teamBSource: '3ABFGH', possibleThirdPlaceGroups: ['A', 'B', 'F', 'G', 'H'] },
  { matchNumber: 78, teamASource: '2E', teamBSource: '2F' },
  { matchNumber: 79, teamASource: '1D', teamBSource: '3BCEFH', possibleThirdPlaceGroups: ['B', 'C', 'E', 'F', 'H'] },
  { matchNumber: 80, teamASource: '2G', teamBSource: '2H' },
  { matchNumber: 81, teamASource: '1E', teamBSource: '3ABCDG', possibleThirdPlaceGroups: ['A', 'B', 'C', 'D', 'G'] },
  { matchNumber: 82, teamASource: '2I', teamBSource: '2J' },
  { matchNumber: 83, teamASource: '1F', teamBSource: '3ABCDE', possibleThirdPlaceGroups: ['A', 'B', 'C', 'D', 'E'] },
  { matchNumber: 84, teamASource: '2K', teamBSource: '2L' },
  { matchNumber: 85, teamASource: '1G', teamBSource: '3ACDFH', possibleThirdPlaceGroups: ['A', 'C', 'D', 'F', 'H'] },
  { matchNumber: 86, teamASource: '1H', teamBSource: '2J' },
  { matchNumber: 87, teamASource: '1I', teamBSource: '3ABEGH', possibleThirdPlaceGroups: ['A', 'B', 'E', 'G', 'H'] },
  { matchNumber: 88, teamASource: '1J', teamBSource: '3BCDFH', possibleThirdPlaceGroups: ['B', 'C', 'D', 'F', 'H'] },
];

// Third-place team allocation logic
// This maps the 495 possible combinations of 8 qualifying third-place teams to their R32 matches
// Format: combination of groups (e.g., "ABCDEFGH") -> match assignments
// NOTE: This is a simplified version. Full 495 combinations to be added from FIFA regulations Annex C

export interface ThirdPlaceAllocation {
  qualifyingGroups: string; // e.g., "ABCDEFGH" sorted alphabetically
  allocations: {
    [matchNumber: number]: string; // match number -> group letter
  };
}

// Simplified third-place allocation logic
// In reality, there are 495 possible combinations (C(12,8) = 495)
// This function determines which 3rd place team goes to which match based on which 8 groups qualify
export function getThirdPlaceAllocation(qualifyingThirdPlaceGroups: string[]): Map<number, string> {
  // Sort the qualifying groups to create a consistent key
  // const sorted = [...qualifyingThirdPlaceGroups].sort().join('');
  // TODO: Use sorted key to look up exact allocation from FIFA Annex C (495 combinations)

  // This is a placeholder implementation
  // TODO: Replace with the complete 495 combinations from FIFA Annex C
  // For now, we'll use a simplified allocation based on the pattern from the bracket

  const allocation = new Map<number, string>();

  // Simple heuristic: assign third place teams to matches in order
  // Match 73: 3CDEF -> prioritize C,D,E,F
  if (qualifyingThirdPlaceGroups.includes('C')) allocation.set(73, 'C');
  else if (qualifyingThirdPlaceGroups.includes('D')) allocation.set(73, 'D');
  else if (qualifyingThirdPlaceGroups.includes('E')) allocation.set(73, 'E');
  else if (qualifyingThirdPlaceGroups.includes('F')) allocation.set(73, 'F');

  // Match 75: 3ADEFG -> prioritize A,D,E,F,G
  if (qualifyingThirdPlaceGroups.includes('A')) allocation.set(75, 'A');
  else if (qualifyingThirdPlaceGroups.includes('D') && allocation.get(73) !== 'D') allocation.set(75, 'D');
  else if (qualifyingThirdPlaceGroups.includes('E') && allocation.get(73) !== 'E') allocation.set(75, 'E');
  else if (qualifyingThirdPlaceGroups.includes('F') && allocation.get(73) !== 'F') allocation.set(75, 'F');
  else if (qualifyingThirdPlaceGroups.includes('G')) allocation.set(75, 'G');

  // Match 77: 3ABFGH -> prioritize A,B,F,G,H
  if (qualifyingThirdPlaceGroups.includes('B')) allocation.set(77, 'B');
  else if (qualifyingThirdPlaceGroups.includes('A') && allocation.get(75) !== 'A') allocation.set(77, 'A');
  else if (qualifyingThirdPlaceGroups.includes('F') && !Array.from(allocation.values()).includes('F')) allocation.set(77, 'F');
  else if (qualifyingThirdPlaceGroups.includes('G') && allocation.get(75) !== 'G') allocation.set(77, 'G');
  else if (qualifyingThirdPlaceGroups.includes('H')) allocation.set(77, 'H');

  // Match 79: 3BCEFH -> prioritize B,C,E,F,H
  const usedGroups = new Set(Array.from(allocation.values()));
  for (const group of ['B', 'C', 'E', 'F', 'H']) {
    if (qualifyingThirdPlaceGroups.includes(group) && !usedGroups.has(group)) {
      allocation.set(79, group);
      usedGroups.add(group);
      break;
    }
  }

  // Match 81: 3ABCDG
  for (const group of ['A', 'B', 'C', 'D', 'G']) {
    if (qualifyingThirdPlaceGroups.includes(group) && !usedGroups.has(group)) {
      allocation.set(81, group);
      usedGroups.add(group);
      break;
    }
  }

  // Match 83: 3ABCDE
  for (const group of ['A', 'B', 'C', 'D', 'E']) {
    if (qualifyingThirdPlaceGroups.includes(group) && !usedGroups.has(group)) {
      allocation.set(83, group);
      usedGroups.add(group);
      break;
    }
  }

  // Match 85: 3ACDFH
  for (const group of ['A', 'C', 'D', 'F', 'H']) {
    if (qualifyingThirdPlaceGroups.includes(group) && !usedGroups.has(group)) {
      allocation.set(85, group);
      usedGroups.add(group);
      break;
    }
  }

  // Match 87: 3ABEGH
  for (const group of ['A', 'B', 'E', 'G', 'H']) {
    if (qualifyingThirdPlaceGroups.includes(group) && !usedGroups.has(group)) {
      allocation.set(87, group);
      usedGroups.add(group);
      break;
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
