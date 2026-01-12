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

// CONMEBOL Teams (6 spots)
const ARGENTINA = createTeam('arg', 'Argentina', 'ARG', 'CONMEBOL', 1, 2020, '🇦🇷');
const BRAZIL = createTeam('bra', 'Brazil', 'BRA', 'CONMEBOL', 4, 1940, '🇧🇷');
const URUGUAY = createTeam('uru', 'Uruguay', 'URU', 'CONMEBOL', 12, 1830, '🇺🇾');
const COLOMBIA = createTeam('col', 'Colombia', 'COL', 'CONMEBOL', 13, 1820, '🇨🇴');
const ECUADOR = createTeam('ecu', 'Ecuador', 'ECU', 'CONMEBOL', 30, 1690, '🇪🇨');
const CHILE = createTeam('chi', 'Chile', 'CHI', 'CONMEBOL', 35, 1670, '🇨🇱');

// CONCACAF Teams (6 spots including hosts + 3 more)
const JAMAICA = createTeam('jam', 'Jamaica', 'JAM', 'CONCACAF', 55, 1580, '🇯🇲');
const PANAMA = createTeam('pan', 'Panama', 'PAN', 'CONCACAF', 50, 1610, '🇵🇦');
const COSTA_RICA = createTeam('crc', 'Costa Rica', 'CRC', 'CONCACAF', 45, 1640, '🇨🇷');

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

// AFC Teams (8 spots)
const JAPAN = createTeam('jpn', 'Japan', 'JPN', 'AFC', 17, 1785, '🇯🇵');
const KOREA_REPUBLIC = createTeam('kor', 'Korea Republic', 'KOR', 'AFC', 20, 1765, '🇰🇷');
const IRAN = createTeam('irn', 'Iran', 'IRN', 'AFC', 21, 1755, '🇮🇷');
const AUSTRALIA = createTeam('aus', 'Australia', 'AUS', 'AFC', 23, 1740, '🇦🇺');
const SAUDI_ARABIA = createTeam('ksa', 'Saudi Arabia', 'KSA', 'AFC', 52, 1600, '🇸🇦');
const QATAR = createTeam('qat', 'Qatar', 'QAT', 'AFC', 48, 1620, '🇶🇦');
const IRAQ = createTeam('irq', 'Iraq', 'IRQ', 'AFC', 54, 1585, '🇮🇶');
const UAE = createTeam('uae', 'UAE', 'UAE', 'AFC', 60, 1545, '🇦🇪');

// OFC Teams (1-2 spots)
const NEW_ZEALAND = createTeam('nzl', 'New Zealand', 'NZL', 'OFC', 95, 1450, '🇳🇿');

// Playoff winners / remaining spots
const PERU = createTeam('per', 'Peru', 'PER', 'CONMEBOL', 33, 1675, '🇵🇪');
const VENEZUELA = createTeam('ven', 'Venezuela', 'VEN', 'CONMEBOL', 46, 1630, '🇻🇪');
const WALES = createTeam('wal', 'Wales', 'WAL', 'UEFA', 29, 1700, '🏴󠁧󠁢󠁷󠁬󠁳󠁿');

export const allTeams: Team[] = [
  // Pot 1 (Top seeds)
  ARGENTINA, FRANCE, ENGLAND, SPAIN, BRAZIL, GERMANY, PORTUGAL, NETHERLANDS,
  BELGIUM, ITALY, CROATIA, URUGUAY,

  // Pot 2
  MOROCCO, COLOMBIA, USA, MEXICO, JAPAN, KOREA_REPUBLIC, IRAN, DENMARK,
  SWITZERLAND, SENEGAL, AUSTRALIA, AUSTRIA,

  // Pot 3
  UKRAINE, SERBIA, POLAND, TURKEY, NIGERIA, EGYPT, ECUADOR, CANADA,
  CAMEROON, ALGERIA, CHILE, PERU,

  // Pot 4
  IVORY_COAST, TUNISIA, QATAR, SAUDI_ARABIA, COSTA_RICA, PANAMA, JAMAICA, IRAQ,
  UAE, VENEZUELA, SOUTH_AFRICA, NEW_ZEALAND, WALES
];

// Group 48 teams into 12 groups of 4
export const getInitialGroups = () => {
  const groups = [
    { name: 'A', teams: [USA, NETHERLANDS, SENEGAL, JAMAICA] },
    { name: 'B', teams: [ARGENTINA, DENMARK, NIGERIA, COSTA_RICA] },
    { name: 'C', teams: [FRANCE, IRAN, AUSTRALIA, NEW_ZEALAND] },
    { name: 'D', teams: [ENGLAND, JAPAN, POLAND, IRAQ] },
    { name: 'E', teams: [SPAIN, KOREA_REPUBLIC, ECUADOR, TUNISIA] },
    { name: 'F', teams: [BRAZIL, SWITZERLAND, CAMEROON, JAMAICA] },
    { name: 'G', teams: [GERMANY, MOROCCO, CHILE, UAE] },
    { name: 'H', teams: [PORTUGAL, MEXICO, SERBIA, PANAMA] },
    { name: 'I', teams: [BELGIUM, COLOMBIA, UKRAINE, SOUTH_AFRICA] },
    { name: 'J', teams: [ITALY, AUSTRIA, EGYPT, QATAR] },
    { name: 'K', teams: [CROATIA, CANADA, ALGERIA, SAUDI_ARABIA] },
    { name: 'L', teams: [URUGUAY, TURKEY, IVORY_COAST, VENEZUELA] },
  ];

  return groups;
};

export const getTeamById = (id: string): Team | undefined => {
  return allTeams.find(team => team.id === id);
};

export const getTeamByCode = (code: string): Team | undefined => {
  return allTeams.find(team => team.code === code);
};
