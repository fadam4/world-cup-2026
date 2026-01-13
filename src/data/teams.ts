import type { Team, Confederation } from '../types';

// FIFA World Cup 2026 - 48 Teams
// Ratings are estimated based on current FIFA rankings and historical performance

const createTeam = (
  id: string,
  name: string,
  code: string,
  confederation: Confederation,
  fifaRanking: number,
  eloRating: number,
  flag: string
): Team => ({
  id,
  name,
  code,
  confederation,
  fifaRanking,
  eloRating,
  flag,
});

// Host nations
const USA = createTeam('usa', 'United States', 'USA', 'CONCACAF', 11, 1810, '🇺🇸');
const MEXICO = createTeam('mex', 'Mexico', 'MEX', 'CONCACAF', 15, 1760, '🇲🇽');
const CANADA = createTeam('can', 'Canada', 'CAN', 'CONCACAF', 40, 1680, '🇨🇦');

// UEFA Teams (16 spots)
const FRANCE = createTeam('fra', 'France', 'FRA', 'UEFA', 2, 1985, '🇫🇷');
const ENGLAND = createTeam('eng', 'England', 'ENG', 'UEFA', 4, 1945, '🏴󠁧󠁢󠁥󠁮󠁧󠁿');
const SPAIN = createTeam('esp', 'Spain', 'ESP', 'UEFA', 3, 1960, '🇪🇸');
const GERMANY = createTeam('ger', 'Germany', 'GER', 'UEFA', 6, 1905, '🇩🇪');
const PORTUGAL = createTeam('por', 'Portugal', 'POR', 'UEFA', 5, 1920, '🇵🇹');
const NETHERLANDS = createTeam('ned', 'Netherlands', 'NED', 'UEFA', 7, 1890, '🇳🇱');
const ITALY = createTeam('ita', 'Italy', 'ITA', 'UEFA', 8, 1880, '🇮🇹');
const BELGIUM = createTeam('bel', 'Belgium', 'BEL', 'UEFA', 9, 1870, '🇧🇪');
const CROATIA = createTeam('cro', 'Croatia', 'CRO', 'UEFA', 10, 1855, '🇭🇷');
const DENMARK = createTeam('den', 'Denmark', 'DEN', 'UEFA', 18, 1780, '🇩🇰');
const SWITZERLAND = createTeam('sui', 'Switzerland', 'SUI', 'UEFA', 16, 1790, '🇨🇭');
const AUSTRIA = createTeam('aut', 'Austria', 'AUT', 'UEFA', 22, 1750, '🇦🇹');
const UKRAINE = createTeam('ukr', 'Ukraine', 'UKR', 'UEFA', 24, 1735, '🇺🇦');
const SERBIA = createTeam('srb', 'Serbia', 'SRB', 'UEFA', 26, 1720, '🇷🇸');
const POLAND = createTeam('pol', 'Poland', 'POL', 'UEFA', 25, 1730, '🇵🇱');
const TURKEY = createTeam('tur', 'Turkey', 'TUR', 'UEFA', 28, 1710, '🇹🇷');
const SCOTLAND = createTeam('sco', 'Scotland', 'SCO', 'UEFA', 41, 1640, '🏴󠁧󠁢󠁳󠁣󠁴󠁿');
const NORWAY = createTeam('nor', 'Norway', 'NOR', 'UEFA', 43, 1635, '🇳🇴');

// CONMEBOL Teams (6 spots)
const ARGENTINA = createTeam('arg', 'Argentina', 'ARG', 'CONMEBOL', 1, 2020, '🇦🇷');
const BRAZIL = createTeam('bra', 'Brazil', 'BRA', 'CONMEBOL', 4, 1940, '🇧🇷');
const URUGUAY = createTeam('uru', 'Uruguay', 'URU', 'CONMEBOL', 12, 1830, '🇺🇾');
const COLOMBIA = createTeam('col', 'Colombia', 'COL', 'CONMEBOL', 13, 1820, '🇨🇴');
const ECUADOR = createTeam('ecu', 'Ecuador', 'ECU', 'CONMEBOL', 30, 1690, '🇪🇨');
const PARAGUAY = createTeam('par', 'Paraguay', 'PAR', 'CONMEBOL', 56, 1575, '🇵🇾');

// CONCACAF Teams (6 spots including hosts + 3 more)
const JAMAICA = createTeam('jam', 'Jamaica', 'JAM', 'CONCACAF', 55, 1580, '🇯🇲');
const PANAMA = createTeam('pan', 'Panama', 'PAN', 'CONCACAF', 50, 1610, '🇵🇦');
const COSTA_RICA = createTeam('crc', 'Costa Rica', 'CRC', 'CONCACAF', 45, 1640, '🇨🇷');
const HAITI = createTeam('hai', 'Haiti', 'HAI', 'CONCACAF', 85, 1480, '🇭🇹');
const CURACAO = createTeam('cuw', 'Curaçao', 'CUW', 'CONCACAF', 82, 1490, '🇨🇼');
const CAPE_VERDE = createTeam('cpv', 'Cape Verde', 'CPV', 'CAF', 70, 1530, '🇨🇻');

// CAF Teams (9 spots)
const MOROCCO = createTeam('mar', 'Morocco', 'MAR', 'CAF', 14, 1815, '🇲🇦');
const SENEGAL = createTeam('sen', 'Senegal', 'SEN', 'CAF', 19, 1770, '🇸🇳');
const NIGERIA = createTeam('nga', 'Nigeria', 'NGA', 'CAF', 27, 1715, '🇳🇬');
const EGYPT = createTeam('egy', 'Egypt', 'EGY', 'CAF', 32, 1680, '🇪🇬');
const CAMEROON = createTeam('cmr', 'Cameroon', 'CMR', 'CAF', 38, 1655, '🇨🇲');
const ALGERIA = createTeam('alg', 'Algeria', 'ALG', 'CAF', 36, 1660, '🇩🇿');
const IVORY_COAST = createTeam('civ', "Côte d'Ivoire", 'CIV', 'CAF', 39, 1650, '🇨🇮');
const TUNISIA = createTeam('tun', 'Tunisia', 'TUN', 'CAF', 42, 1645, '🇹🇳');
const SOUTH_AFRICA = createTeam('rsa', 'South Africa', 'RSA', 'CAF', 58, 1560, '🇿🇦');
const GHANA = createTeam('gha', 'Ghana', 'GHA', 'CAF', 62, 1540, '🇬🇭');

// AFC Teams (8 spots)
const JAPAN = createTeam('jpn', 'Japan', 'JPN', 'AFC', 17, 1785, '🇯🇵');
const KOREA_REPUBLIC = createTeam('kor', 'Korea Republic', 'KOR', 'AFC', 20, 1765, '🇰🇷');
const IRAN = createTeam('irn', 'Iran', 'IRN', 'AFC', 21, 1755, '🇮🇷');
const AUSTRALIA = createTeam('aus', 'Australia', 'AUS', 'AFC', 23, 1740, '🇦🇺');
const SAUDI_ARABIA = createTeam('ksa', 'Saudi Arabia', 'KSA', 'AFC', 52, 1600, '🇸🇦');
const QATAR = createTeam('qat', 'Qatar', 'QAT', 'AFC', 48, 1620, '🇶🇦');
const IRAQ = createTeam('irq', 'Iraq', 'IRQ', 'AFC', 54, 1585, '🇮🇶');
const UAE = createTeam('uae', 'UAE', 'UAE', 'AFC', 60, 1545, '🇦🇪');
const UZBEKISTAN = createTeam('uzb', 'Uzbekistan', 'UZB', 'AFC', 64, 1535, '🇺🇿');
const JORDAN = createTeam('jor', 'Jordan', 'JOR', 'AFC', 68, 1525, '🇯🇴');

// OFC Teams (1-2 spots)
const NEW_ZEALAND = createTeam('nzl', 'New Zealand', 'NZL', 'OFC', 95, 1450, '🇳🇿');

// Playoff winners and additional teams
const WALES = createTeam('wal', 'Wales', 'WAL', 'UEFA', 29, 1700, '🏴󠁧󠁢󠁷󠁬󠁳󠁿');
// Playoff spots (using likely qualifiers until playoffs conclude in March 2026)
const PLAYOFF_UEFA_A = ITALY; // Italy, Wales, Bosnia-Herzegovina, Northern Ireland
const PLAYOFF_UEFA_C = TURKEY; // Turkey, Romania, Slovakia, Kosovo
const PLAYOFF_UEFA_D = DENMARK; // Denmark, Czechia, Republic of Ireland, North Macedonia
const PLAYOFF_UEFA_F = POLAND; // Placeholder for European playoff team
const PLAYOFF_FIFA_1 = WALES; // FIFA playoff winner 1 (TBD)
const PLAYOFF_FIFA_2 = NORWAY; // FIFA playoff winner 2 (TBD)

export const allTeams: Team[] = [
  // Pot 1 (Top seeds)
  ARGENTINA, FRANCE, ENGLAND, SPAIN, BRAZIL, GERMANY, PORTUGAL, NETHERLANDS,
  BELGIUM, ITALY, CROATIA, URUGUAY,

  // Pot 2
  MOROCCO, COLOMBIA, USA, MEXICO, JAPAN, KOREA_REPUBLIC, IRAN, DENMARK,
  SWITZERLAND, SENEGAL, AUSTRALIA, AUSTRIA,

  // Pot 3
  UKRAINE, SERBIA, POLAND, TURKEY, NIGERIA, EGYPT, ECUADOR, CANADA,
  NORWAY, ALGERIA, WALES, SCOTLAND,

  // Pot 4
  IVORY_COAST, TUNISIA, QATAR, SAUDI_ARABIA, COSTA_RICA, PANAMA, JAMAICA,
  PARAGUAY, SOUTH_AFRICA, NEW_ZEALAND, HAITI, CURACAO, CAPE_VERDE, GHANA,
  UZBEKISTAN, JORDAN
];

// Group 48 teams into 12 groups of 4
// Based on official FIFA World Cup 2026 Draw (December 5, 2025)
export const getInitialGroups = () => {
  const groups = [
    { name: 'A', teams: [MEXICO, KOREA_REPUBLIC, SOUTH_AFRICA, PLAYOFF_UEFA_D] },
    { name: 'B', teams: [CANADA, SWITZERLAND, QATAR, PLAYOFF_UEFA_A] },
    { name: 'C', teams: [BRAZIL, MOROCCO, HAITI, SCOTLAND] },
    { name: 'D', teams: [USA, PARAGUAY, AUSTRALIA, PLAYOFF_UEFA_C] },
    { name: 'E', teams: [GERMANY, CURACAO, IVORY_COAST, ECUADOR] },
    { name: 'F', teams: [NETHERLANDS, JAPAN, PLAYOFF_UEFA_F, TUNISIA] },
    { name: 'G', teams: [BELGIUM, EGYPT, IRAN, NEW_ZEALAND] },
    { name: 'H', teams: [SPAIN, CAPE_VERDE, SAUDI_ARABIA, URUGUAY] },
    { name: 'I', teams: [FRANCE, SENEGAL, NORWAY, PLAYOFF_FIFA_2] },
    { name: 'J', teams: [ARGENTINA, ALGERIA, AUSTRIA, JORDAN] },
    { name: 'K', teams: [PORTUGAL, UZBEKISTAN, COLOMBIA, PLAYOFF_FIFA_1] },
    { name: 'L', teams: [ENGLAND, CROATIA, GHANA, PANAMA] },
  ];

  return groups;
};

export const getTeamById = (id: string): Team | undefined => {
  return allTeams.find(team => team.id === id);
};

export const getTeamByCode = (code: string): Team | undefined => {
  return allTeams.find(team => team.code === code);
};
