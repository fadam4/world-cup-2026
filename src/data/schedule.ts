import type { ScheduledMatch } from '../types';

// FIFA World Cup 2026 Complete Match Schedule
// 104 matches from June 11 - July 19, 2026

export const worldCup2026Schedule: ScheduledMatch[] = [
  // GROUP STAGE - 72 matches (6 matches per group × 12 groups)
  // Matchday 1
  { matchNumber: 1, round: 'group', date: '2026-06-11', time: '13:00', venue: 'Estadio Azteca', city: 'Mexico City', group: 'A', teamADesignation: 'MEX', teamBDesignation: 'RSA' },
  { matchNumber: 2, round: 'group', date: '2026-06-11', time: '16:00', venue: 'Estadio Azteca', city: 'Mexico City', group: 'A', teamADesignation: 'KOR', teamBDesignation: 'DEN' },
  { matchNumber: 3, round: 'group', date: '2026-06-12', time: '15:00', venue: 'BMO Field', city: 'Toronto', group: 'B', teamADesignation: 'CAN', teamBDesignation: 'QAT' },
  { matchNumber: 4, round: 'group', date: '2026-06-12', time: '18:00', venue: 'BMO Field', city: 'Toronto', group: 'B', teamADesignation: 'SUI', teamBDesignation: 'ITA' },
  { matchNumber: 5, round: 'group', date: '2026-06-12', time: '12:00', venue: 'SoFi Stadium', city: 'Los Angeles', group: 'D', teamADesignation: 'USA', teamBDesignation: 'AUS' },
  { matchNumber: 6, round: 'group', date: '2026-06-12', time: '15:00', venue: 'SoFi Stadium', city: 'Los Angeles', group: 'D', teamADesignation: 'PAR', teamBDesignation: 'TUR' },
  { matchNumber: 7, round: 'group', date: '2026-06-13', time: '15:00', venue: 'Rose Bowl', city: 'Pasadena', group: 'F', teamADesignation: 'NED', teamBDesignation: 'POL' },
  { matchNumber: 8, round: 'group', date: '2026-06-13', time: '18:00', venue: 'Rose Bowl', city: 'Pasadena', group: 'F', teamADesignation: 'JPN', teamBDesignation: 'TUN' },
  { matchNumber: 9, round: 'group', date: '2026-06-13', time: '18:00', venue: 'MetLife Stadium', city: 'New York/New Jersey', group: 'C', teamADesignation: 'BRA', teamBDesignation: 'MAR' },
  { matchNumber: 10, round: 'group', date: '2026-06-13', time: '21:00', venue: 'MetLife Stadium', city: 'New York/New Jersey', group: 'C', teamADesignation: 'HAI', teamBDesignation: 'SCO' },
  { matchNumber: 11, round: 'group', date: '2026-06-14', time: '12:00', venue: 'NRG Stadium', city: 'Houston', group: 'E', teamADesignation: 'GER', teamBDesignation: 'CUW' },
  { matchNumber: 12, round: 'group', date: '2026-06-14', time: '15:00', venue: 'NRG Stadium', city: 'Houston', group: 'E', teamADesignation: 'CIV', teamBDesignation: 'ECU' },
  { matchNumber: 13, round: 'group', date: '2026-06-14', time: '15:00', venue: 'Hard Rock Stadium', city: 'Miami', group: 'H', teamADesignation: 'ESP', teamBDesignation: 'CPV' },
  { matchNumber: 14, round: 'group', date: '2026-06-14', time: '18:00', venue: 'Hard Rock Stadium', city: 'Miami', group: 'H', teamADesignation: 'KSA', teamBDesignation: 'URU' },
  { matchNumber: 15, round: 'group', date: '2026-06-15', time: '12:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', group: 'G', teamADesignation: 'BEL', teamBDesignation: 'EGY' },
  { matchNumber: 16, round: 'group', date: '2026-06-15', time: '15:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', group: 'G', teamADesignation: 'IRN', teamBDesignation: 'NZL' },
  { matchNumber: 17, round: 'group', date: '2026-06-15', time: '15:00', venue: 'Lincoln Financial Field', city: 'Philadelphia', group: 'I', teamADesignation: 'FRA', teamBDesignation: 'SEN' },
  { matchNumber: 18, round: 'group', date: '2026-06-15', time: '18:00', venue: 'Lincoln Financial Field', city: 'Philadelphia', group: 'I', teamADesignation: 'NOR', teamBDesignation: 'NOR' },
  { matchNumber: 19, round: 'group', date: '2026-06-16', time: '18:00', venue: 'Estadio BBVA', city: 'Monterrey', group: 'K', teamADesignation: 'POR', teamBDesignation: 'UZB' },
  { matchNumber: 20, round: 'group', date: '2026-06-16', time: '21:00', venue: 'Estadio BBVA', city: 'Monterrey', group: 'K', teamADesignation: 'COL', teamBDesignation: 'WAL' },
  { matchNumber: 21, round: 'group', date: '2026-06-16', time: '12:00', venue: 'Lumen Field', city: 'Seattle', group: 'L', teamADesignation: 'ENG', teamBDesignation: 'CRO' },
  { matchNumber: 22, round: 'group', date: '2026-06-16', time: '15:00', venue: 'Lumen Field', city: 'Seattle', group: 'L', teamADesignation: 'GHA', teamBDesignation: 'PAN' },
  { matchNumber: 23, round: 'group', date: '2026-06-16', time: '15:00', venue: 'AT&T Stadium', city: 'Dallas', group: 'J', teamADesignation: 'ARG', teamBDesignation: 'ALG' },
  { matchNumber: 24, round: 'group', date: '2026-06-16', time: '18:00', venue: 'AT&T Stadium', city: 'Dallas', group: 'J', teamADesignation: 'AUT', teamBDesignation: 'JOR' },

  // Matchday 2
  { matchNumber: 25, round: 'group', date: '2026-06-17', time: '15:00', venue: 'Estadio Akron', city: 'Guadalajara', group: 'A', teamADesignation: 'MEX', teamBDesignation: 'KOR' },
  { matchNumber: 26, round: 'group', date: '2026-06-17', time: '18:00', venue: 'Estadio Akron', city: 'Guadalajara', group: 'A', teamADesignation: 'RSA', teamBDesignation: 'DEN' },
  { matchNumber: 27, round: 'group', date: '2026-06-17', time: '12:00', venue: 'BC Place', city: 'Vancouver', group: 'B', teamADesignation: 'CAN', teamBDesignation: 'SUI' },
  { matchNumber: 28, round: 'group', date: '2026-06-17', time: '15:00', venue: 'BC Place', city: 'Vancouver', group: 'B', teamADesignation: 'QAT', teamBDesignation: 'ITA' },
  { matchNumber: 29, round: 'group', date: '2026-06-18', time: '15:00', venue: 'Gillette Stadium', city: 'Boston', group: 'C', teamADesignation: 'BRA', teamBDesignation: 'HAI' },
  { matchNumber: 30, round: 'group', date: '2026-06-18', time: '18:00', venue: 'Gillette Stadium', city: 'Boston', group: 'C', teamADesignation: 'MAR', teamBDesignation: 'SCO' },
  { matchNumber: 31, round: 'group', date: '2026-06-18', time: '18:00', venue: 'Arrowhead Stadium', city: 'Kansas City', group: 'D', teamADesignation: 'USA', teamBDesignation: 'PAR' },
  { matchNumber: 32, round: 'group', date: '2026-06-18', time: '21:00', venue: 'Arrowhead Stadium', city: 'Kansas City', group: 'D', teamADesignation: 'AUS', teamBDesignation: 'TUR' },
  { matchNumber: 33, round: 'group', date: '2026-06-19', time: '12:00', venue: "Levi's Stadium", city: 'San Francisco Bay Area', group: 'E', teamADesignation: 'GER', teamBDesignation: 'CIV' },
  { matchNumber: 34, round: 'group', date: '2026-06-19', time: '15:00', venue: "Levi's Stadium", city: 'San Francisco Bay Area', group: 'E', teamADesignation: 'CUW', teamBDesignation: 'ECU' },
  { matchNumber: 35, round: 'group', date: '2026-06-19', time: '15:00', venue: 'SoFi Stadium', city: 'Los Angeles', group: 'F', teamADesignation: 'NED', teamBDesignation: 'JPN' },
  { matchNumber: 36, round: 'group', date: '2026-06-19', time: '18:00', venue: 'SoFi Stadium', city: 'Los Angeles', group: 'F', teamADesignation: 'POL', teamBDesignation: 'TUN' },
  { matchNumber: 37, round: 'group', date: '2026-06-20', time: '15:00', venue: 'Hard Rock Stadium', city: 'Miami', group: 'G', teamADesignation: 'BEL', teamBDesignation: 'IRN' },
  { matchNumber: 38, round: 'group', date: '2026-06-20', time: '18:00', venue: 'Hard Rock Stadium', city: 'Miami', group: 'G', teamADesignation: 'EGY', teamBDesignation: 'NZL' },
  { matchNumber: 39, round: 'group', date: '2026-06-20', time: '18:00', venue: 'MetLife Stadium', city: 'New York/New Jersey', group: 'H', teamADesignation: 'ESP', teamBDesignation: 'KSA' },
  { matchNumber: 40, round: 'group', date: '2026-06-20', time: '21:00', venue: 'MetLife Stadium', city: 'New York/New Jersey', group: 'H', teamADesignation: 'CPV', teamBDesignation: 'URU' },
  { matchNumber: 41, round: 'group', date: '2026-06-21', time: '12:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', group: 'I', teamADesignation: 'FRA', teamBDesignation: 'NOR' },
  { matchNumber: 42, round: 'group', date: '2026-06-21', time: '15:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', group: 'I', teamADesignation: 'SEN', teamBDesignation: 'NOR' },
  { matchNumber: 43, round: 'group', date: '2026-06-21', time: '15:00', venue: 'NRG Stadium', city: 'Houston', group: 'J', teamADesignation: 'ARG', teamBDesignation: 'AUT' },
  { matchNumber: 44, round: 'group', date: '2026-06-21', time: '18:00', venue: 'NRG Stadium', city: 'Houston', group: 'J', teamADesignation: 'ALG', teamBDesignation: 'JOR' },
  { matchNumber: 45, round: 'group', date: '2026-06-22', time: '18:00', venue: 'Estadio BBVA', city: 'Monterrey', group: 'K', teamADesignation: 'POR', teamBDesignation: 'COL' },
  { matchNumber: 46, round: 'group', date: '2026-06-22', time: '21:00', venue: 'Estadio BBVA', city: 'Monterrey', group: 'K', teamADesignation: 'UZB', teamBDesignation: 'WAL' },
  { matchNumber: 47, round: 'group', date: '2026-06-22', time: '12:00', venue: 'Lumen Field', city: 'Seattle', group: 'L', teamADesignation: 'ENG', teamBDesignation: 'GHA' },
  { matchNumber: 48, round: 'group', date: '2026-06-22', time: '15:00', venue: 'Lumen Field', city: 'Seattle', group: 'L', teamADesignation: 'CRO', teamBDesignation: 'PAN' },

  // Matchday 3 (simultaneous kickoffs within each group)
  { matchNumber: 49, round: 'group', date: '2026-06-23', time: '15:00', venue: 'Estadio Azteca', city: 'Mexico City', group: 'A', teamADesignation: 'MEX', teamBDesignation: 'DEN' },
  { matchNumber: 50, round: 'group', date: '2026-06-23', time: '15:00', venue: 'Estadio Akron', city: 'Guadalajara', group: 'A', teamADesignation: 'KOR', teamBDesignation: 'RSA' },
  { matchNumber: 51, round: 'group', date: '2026-06-24', time: '15:00', venue: 'BMO Field', city: 'Toronto', group: 'B', teamADesignation: 'CAN', teamBDesignation: 'ITA' },
  { matchNumber: 52, round: 'group', date: '2026-06-24', time: '15:00', venue: 'BC Place', city: 'Vancouver', group: 'B', teamADesignation: 'SUI', teamBDesignation: 'QAT' },
  { matchNumber: 53, round: 'group', date: '2026-06-25', time: '15:00', venue: 'MetLife Stadium', city: 'New York/New Jersey', group: 'C', teamADesignation: 'BRA', teamBDesignation: 'SCO' },
  { matchNumber: 54, round: 'group', date: '2026-06-25', time: '15:00', venue: 'Hard Rock Stadium', city: 'Miami', group: 'C', teamADesignation: 'MAR', teamBDesignation: 'HAI' },
  { matchNumber: 55, round: 'group', date: '2026-06-25', time: '18:00', venue: 'SoFi Stadium', city: 'Los Angeles', group: 'D', teamADesignation: 'USA', teamBDesignation: 'TUR' },
  { matchNumber: 56, round: 'group', date: '2026-06-25', time: '18:00', venue: 'AT&T Stadium', city: 'Dallas', group: 'D', teamADesignation: 'PAR', teamBDesignation: 'AUS' },
  { matchNumber: 57, round: 'group', date: '2026-06-26', time: '15:00', venue: 'NRG Stadium', city: 'Houston', group: 'E', teamADesignation: 'GER', teamBDesignation: 'ECU' },
  { matchNumber: 58, round: 'group', date: '2026-06-26', time: '15:00', venue: "Levi's Stadium", city: 'San Francisco Bay Area', group: 'E', teamADesignation: 'CIV', teamBDesignation: 'CUW' },
  { matchNumber: 59, round: 'group', date: '2026-06-26', time: '18:00', venue: 'Rose Bowl', city: 'Pasadena', group: 'F', teamADesignation: 'NED', teamBDesignation: 'TUN' },
  { matchNumber: 60, round: 'group', date: '2026-06-26', time: '18:00', venue: 'Lumen Field', city: 'Seattle', group: 'F', teamADesignation: 'JPN', teamBDesignation: 'POL' },
  { matchNumber: 61, round: 'group', date: '2026-06-27', time: '15:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', group: 'G', teamADesignation: 'BEL', teamBDesignation: 'NZL' },
  { matchNumber: 62, round: 'group', date: '2026-06-27', time: '15:00', venue: 'Arrowhead Stadium', city: 'Kansas City', group: 'G', teamADesignation: 'IRN', teamBDesignation: 'EGY' },
  { matchNumber: 63, round: 'group', date: '2026-06-27', time: '18:00', venue: 'Hard Rock Stadium', city: 'Miami', group: 'H', teamADesignation: 'ESP', teamBDesignation: 'URU' },
  { matchNumber: 64, round: 'group', date: '2026-06-27', time: '18:00', venue: 'Lincoln Financial Field', city: 'Philadelphia', group: 'H', teamADesignation: 'KSA', teamBDesignation: 'CPV' },
  { matchNumber: 65, round: 'group', date: '2026-06-27', time: '21:00', venue: 'MetLife Stadium', city: 'New York/New Jersey', group: 'I', teamADesignation: 'FRA', teamBDesignation: 'NOR' },
  { matchNumber: 66, round: 'group', date: '2026-06-27', time: '21:00', venue: 'Gillette Stadium', city: 'Boston', group: 'I', teamADesignation: 'SEN', teamBDesignation: 'NOR' },
  { matchNumber: 67, round: 'group', date: '2026-06-27', time: '21:00', venue: 'AT&T Stadium', city: 'Dallas', group: 'J', teamADesignation: 'ARG', teamBDesignation: 'JOR' },
  { matchNumber: 68, round: 'group', date: '2026-06-27', time: '21:00', venue: 'NRG Stadium', city: 'Houston', group: 'J', teamADesignation: 'AUT', teamBDesignation: 'ALG' },
  { matchNumber: 69, round: 'group', date: '2026-06-27', time: '21:00', venue: 'Estadio BBVA', city: 'Monterrey', group: 'K', teamADesignation: 'POR', teamBDesignation: 'WAL' },
  { matchNumber: 70, round: 'group', date: '2026-06-27', time: '21:00', venue: 'Estadio Akron', city: 'Guadalajara', group: 'K', teamADesignation: 'COL', teamBDesignation: 'UZB' },
  { matchNumber: 71, round: 'group', date: '2026-06-27', time: '21:00', venue: 'Lumen Field', city: 'Seattle', group: 'L', teamADesignation: 'ENG', teamBDesignation: 'PAN' },
  { matchNumber: 72, round: 'group', date: '2026-06-27', time: '21:00', venue: 'BC Place', city: 'Vancouver', group: 'L', teamADesignation: 'CRO', teamBDesignation: 'GHA' },

  // ROUND OF 32 - 16 matches (June 28 - July 3)
  // Based on official FIFA bracket structure from Annex C
  { matchNumber: 73, round: 'round-of-32', date: '2026-06-28', time: '15:00', venue: 'SoFi Stadium', city: 'Los Angeles', teamADesignation: '1A', teamBDesignation: '3*' },
  { matchNumber: 74, round: 'round-of-32', date: '2026-06-28', time: '18:00', venue: 'Estadio Azteca', city: 'Mexico City', teamADesignation: '2A', teamBDesignation: '2B' },
  { matchNumber: 75, round: 'round-of-32', date: '2026-06-28', time: '12:00', venue: 'Arrowhead Stadium', city: 'Kansas City', teamADesignation: '1B', teamBDesignation: '3*' },
  { matchNumber: 76, round: 'round-of-32', date: '2026-06-28', time: '15:00', venue: 'MetLife Stadium', city: 'New York/New Jersey', teamADesignation: '2C', teamBDesignation: '2D' },
  { matchNumber: 77, round: 'round-of-32', date: '2026-06-29', time: '15:00', venue: 'AT&T Stadium', city: 'Dallas', teamADesignation: '1C', teamBDesignation: '2F' },
  { matchNumber: 78, round: 'round-of-32', date: '2026-06-29', time: '18:00', venue: 'NRG Stadium', city: 'Houston', teamADesignation: '2E', teamBDesignation: '2H' },
  { matchNumber: 79, round: 'round-of-32', date: '2026-06-29', time: '12:00', venue: 'Rose Bowl', city: 'Pasadena', teamADesignation: '1D', teamBDesignation: '3*' },
  { matchNumber: 80, round: 'round-of-32', date: '2026-06-29', time: '15:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', teamADesignation: '2G', teamBDesignation: '1H' },
  { matchNumber: 81, round: 'round-of-32', date: '2026-06-30', time: '15:00', venue: 'Hard Rock Stadium', city: 'Miami', teamADesignation: '1E', teamBDesignation: '3*' },
  { matchNumber: 82, round: 'round-of-32', date: '2026-06-30', time: '18:00', venue: "Levi's Stadium", city: 'San Francisco Bay Area', teamADesignation: '2I', teamBDesignation: '2J' },
  { matchNumber: 83, round: 'round-of-32', date: '2026-06-30', time: '12:00', venue: 'Gillette Stadium', city: 'Boston', teamADesignation: '1F', teamBDesignation: '2K' },
  { matchNumber: 84, round: 'round-of-32', date: '2026-06-30', time: '15:00', venue: 'Lincoln Financial Field', city: 'Philadelphia', teamADesignation: '1J', teamBDesignation: '2L' },
  { matchNumber: 85, round: 'round-of-32', date: '2026-07-01', time: '15:00', venue: 'Lumen Field', city: 'Seattle', teamADesignation: '1G', teamBDesignation: '3*' },
  { matchNumber: 86, round: 'round-of-32', date: '2026-07-01', time: '18:00', venue: 'BMO Field', city: 'Toronto', teamADesignation: '1K', teamBDesignation: '3*' },
  { matchNumber: 87, round: 'round-of-32', date: '2026-07-01', time: '12:00', venue: 'Estadio BBVA', city: 'Monterrey', teamADesignation: '1I', teamBDesignation: '3*' },
  { matchNumber: 88, round: 'round-of-32', date: '2026-07-01', time: '15:00', venue: 'BC Place', city: 'Vancouver', teamADesignation: '1L', teamBDesignation: '3*' },

  // ROUND OF 16 - 8 matches (July 4-6)
  { matchNumber: 89, round: 'round-of-16', date: '2026-07-04', time: '15:00', venue: 'AT&T Stadium', city: 'Dallas', teamADesignation: 'W73', teamBDesignation: 'W74' },
  { matchNumber: 90, round: 'round-of-16', date: '2026-07-04', time: '18:00', venue: 'Rose Bowl', city: 'Pasadena', teamADesignation: 'W75', teamBDesignation: 'W76' },
  { matchNumber: 91, round: 'round-of-16', date: '2026-07-05', time: '15:00', venue: 'Hard Rock Stadium', city: 'Miami', teamADesignation: 'W77', teamBDesignation: 'W78' },
  { matchNumber: 92, round: 'round-of-16', date: '2026-07-05', time: '18:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', teamADesignation: 'W79', teamBDesignation: 'W80' },
  { matchNumber: 93, round: 'round-of-16', date: '2026-07-06', time: '15:00', venue: 'Arrowhead Stadium', city: 'Kansas City', teamADesignation: 'W81', teamBDesignation: 'W82' },
  { matchNumber: 94, round: 'round-of-16', date: '2026-07-06', time: '18:00', venue: 'MetLife Stadium', city: 'New York/New Jersey', teamADesignation: 'W83', teamBDesignation: 'W84' },
  { matchNumber: 95, round: 'round-of-16', date: '2026-07-06', time: '12:00', venue: 'SoFi Stadium', city: 'Los Angeles', teamADesignation: 'W85', teamBDesignation: 'W86' },
  { matchNumber: 96, round: 'round-of-16', date: '2026-07-06', time: '15:00', venue: 'Lincoln Financial Field', city: 'Philadelphia', teamADesignation: 'W87', teamBDesignation: 'W88' },

  // QUARTER-FINALS - 4 matches (July 9-10)
  { matchNumber: 97, round: 'quarter-finals', date: '2026-07-09', time: '15:00', venue: 'SoFi Stadium', city: 'Los Angeles', teamADesignation: 'W89', teamBDesignation: 'W90' },
  { matchNumber: 98, round: 'quarter-finals', date: '2026-07-09', time: '18:00', venue: 'Arrowhead Stadium', city: 'Kansas City', teamADesignation: 'W91', teamBDesignation: 'W92' },
  { matchNumber: 99, round: 'quarter-finals', date: '2026-07-10', time: '15:00', venue: 'Gillette Stadium', city: 'Boston', teamADesignation: 'W93', teamBDesignation: 'W94' },
  { matchNumber: 100, round: 'quarter-finals', date: '2026-07-10', time: '18:00', venue: 'Hard Rock Stadium', city: 'Miami', teamADesignation: 'W95', teamBDesignation: 'W96' },

  // SEMI-FINALS - 2 matches (July 14-15)
  { matchNumber: 101, round: 'semi-finals', date: '2026-07-14', time: '18:00', venue: 'AT&T Stadium', city: 'Dallas', teamADesignation: 'W97', teamBDesignation: 'W98' },
  { matchNumber: 102, round: 'semi-finals', date: '2026-07-15', time: '18:00', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', teamADesignation: 'W99', teamBDesignation: 'W100' },

  // THIRD PLACE MATCH - 1 match (July 18)
  { matchNumber: 103, round: 'third-place', date: '2026-07-18', time: '15:00', venue: 'Hard Rock Stadium', city: 'Miami', teamADesignation: 'L101', teamBDesignation: 'L102' },

  // FINAL - 1 match (July 19)
  { matchNumber: 104, round: 'final', date: '2026-07-19', time: '15:00', venue: 'MetLife Stadium', city: 'New York/New Jersey', teamADesignation: 'W101', teamBDesignation: 'W102' },
];

// Helper function to get matches by round
export const getMatchesByRound = (round: string): ScheduledMatch[] => {
  return worldCup2026Schedule.filter(match => match.round === round);
};

// Helper function to get group stage matches by group
export const getGroupMatches = (group: string): ScheduledMatch[] => {
  return worldCup2026Schedule.filter(match => match.group === group);
};
