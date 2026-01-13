import { useState, useMemo, type ReactElement } from 'react';
import type { Group, SimulationResult } from '../types';
import { worldCup2026Schedule } from '../data/schedule';
import { getTeamByCode } from '../data/teams';
import './Schedule.css';

interface ScheduleProps {
  groups: Group[];
  simulationResults: SimulationResult[];
  simulationCount: number;
}

type RoundFilter = 'all' | 'group' | 'round-of-32' | 'round-of-16' | 'quarter-finals' | 'semi-finals' | 'final' | 'third-place';

const ROUND_LABELS: Record<string, string> = {
  'all': 'All Matches',
  'group': 'Group Stage',
  'round-of-32': 'Round of 32',
  'round-of-16': 'Round of 16',
  'quarter-finals': 'Quarter Finals',
  'semi-finals': 'Semi Finals',
  'third-place': 'Third Place',
  'final': 'Final',
};

export const Schedule = ({ simulationCount }: ScheduleProps) => {
  const [selectedRound, setSelectedRound] = useState<RoundFilter>('all');

  // Filter matches by selected round
  const filteredMatches = useMemo(() => {
    if (selectedRound === 'all') {
      return worldCup2026Schedule;
    }
    return worldCup2026Schedule.filter(match => match.round === selectedRound);
  }, [selectedRound]);

  // Group matches by date for better organization
  const matchesByDate = useMemo(() => {
    const grouped = new Map<string, typeof filteredMatches>();
    filteredMatches.forEach(match => {
      const existing = grouped.get(match.date) || [];
      existing.push(match);
      grouped.set(match.date, existing);
    });
    return Array.from(grouped.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filteredMatches]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString + 'T12:00:00'); // Add time to avoid timezone issues
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderTeamDisplay = (designation: string, isGroupStage: boolean): ReactElement => {
    if (isGroupStage) {
      // For group stage, show actual team
      const team = getTeamByCode(designation);
      return (
        <div className="team-display">
          <span className="team-code">{designation}</span>
          <span className="team-name">{team?.name || designation}</span>
        </div>
      );
    }

    // For knockout stage with simulations
    if (simulationCount === 0) {
      // No simulations run yet - show designation only
      return (
        <div className="team-display knockout-placeholder">
          <span className="team-designation">{designation}</span>
        </div>
      );
    }

    // Show team probabilities (placeholder for now - will be enhanced)
    return (
      <div className="team-display knockout-with-probs">
        <span className="team-designation">{designation}</span>
        <span className="team-probs-hint">(probabilities calculated)</span>
      </div>
    );
  };

  return (
    <div className="schedule">
      <div className="schedule-header">
        <h2>Tournament Schedule</h2>
        <div className="round-filter">
          <label htmlFor="round-select">Filter by Round:</label>
          <select
            id="round-select"
            value={selectedRound}
            onChange={(e) => setSelectedRound(e.target.value as RoundFilter)}
          >
            {Object.entries(ROUND_LABELS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {matchesByDate.length === 0 ? (
        <div className="no-matches">
          <p>No matches found for the selected round.</p>
        </div>
      ) : (
        <div className="schedule-content">
          {matchesByDate.map(([date, matches]) => (
            <div key={date} className="date-group">
              <h3 className="date-header">{formatDate(date)}</h3>
              <div className="matches-list">
                {matches.map(match => {
                  const isGroupStage = match.round === 'group';
                  return (
                    <div key={match.matchNumber} className={`match-card ${match.round}`}>
                      <div className="match-header">
                        <span className="match-number">Match {match.matchNumber}</span>
                        {match.group && <span className="match-group">Group {match.group}</span>}
                        {!isGroupStage && (
                          <span className="match-round">{ROUND_LABELS[match.round]}</span>
                        )}
                      </div>

                      <div className="match-details">
                        <div className="match-time-venue">
                          <div className="match-time">
                            <span className="time-icon">🕐</span>
                            <span>{match.time} Local</span>
                          </div>
                          <div className="match-venue">
                            <span className="venue-icon">🏟️</span>
                            <span className="venue-name">{match.venue}</span>
                            <span className="venue-city">{match.city}</span>
                          </div>
                        </div>

                        <div className="match-teams">
                          {renderTeamDisplay(match.teamADesignation, isGroupStage)}
                          <span className="vs">vs</span>
                          {renderTeamDisplay(match.teamBDesignation, isGroupStage)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {simulationCount === 0 && selectedRound !== 'all' && selectedRound !== 'group' && (
        <div className="simulation-hint">
          <p>💡 Run simulations to see which teams are likely to play in knockout matches!</p>
        </div>
      )}
    </div>
  );
};
