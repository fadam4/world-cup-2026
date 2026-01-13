import { useState, useMemo } from 'react';
import type { Team, MatchupProbability } from '../types';
import { calculateMatchProbability, formatProbability } from '../utils/simulation';
import { allTeams } from '../data/teams';
import './MatchupExplorer.css';

interface MatchupExplorerProps {
  matchupProbabilities: MatchupProbability[];
}

export const MatchupExplorer = ({ matchupProbabilities }: MatchupExplorerProps) => {
  const [teamA, setTeamA] = useState<Team | null>(null);
  const [teamB, setTeamB] = useState<Team | null>(null);

  const sortedTeams = useMemo(() =>
    [...allTeams].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  const matchProbability = useMemo(() => {
    if (!teamA || !teamB || teamA.id === teamB.id) return null;
    return calculateMatchProbability(teamA, teamB);
  }, [teamA, teamB]);

  const meetingProbability = useMemo(() => {
    if (!teamA || !teamB) return null;
    const key = [teamA.id, teamB.id].sort().join('-');
    const matchup = matchupProbabilities.find(
      m => [m.teamA.id, m.teamB.id].sort().join('-') === key
    );
    return matchup?.probability || 0;
  }, [teamA, teamB, matchupProbabilities]);

  return (
    <div className="matchup-explorer">
      <h2>Match Probability Calculator</h2>

      <div className="team-selectors">
        <div className="team-selector">
          <label>Team 1</label>
          <select
            value={teamA?.id || ''}
            onChange={(e) => setTeamA(sortedTeams.find(t => t.id === e.target.value) || null)}
          >
            <option value="">Select a team...</option>
            {sortedTeams.map(team => (
              <option key={team.id} value={team.id}>
                {team.code} {team.name}
              </option>
            ))}
          </select>
        </div>

        <div className="vs">VS</div>

        <div className="team-selector">
          <label>Team 2</label>
          <select
            value={teamB?.id || ''}
            onChange={(e) => setTeamB(sortedTeams.find(t => t.id === e.target.value) || null)}
          >
            <option value="">Select a team...</option>
            {sortedTeams.map(team => (
              <option key={team.id} value={team.id}>
                {team.code} {team.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {teamA && teamB && teamA.id !== teamB.id && matchProbability && (
        <div className="matchup-result">
          <div className="teams-display">
            <div className="team-display">
              <span className="flag">{teamA.code}</span>
              <span className="name">{teamA.name}</span>
              <span className="rating">ELO: {teamA.eloRating}</span>
            </div>
            <div className="team-display">
              <span className="flag">{teamB.code}</span>
              <span className="name">{teamB.name}</span>
              <span className="rating">ELO: {teamB.eloRating}</span>
            </div>
          </div>

          <div className="probability-bar">
            <div
              className="team-a-prob"
              style={{ width: `${matchProbability.teamAWin * 100}%` }}
            >
              {formatProbability(matchProbability.teamAWin)}
            </div>
            <div
              className="draw-prob"
              style={{ width: `${matchProbability.draw * 100}%` }}
            >
              {formatProbability(matchProbability.draw)}
            </div>
            <div
              className="team-b-prob"
              style={{ width: `${matchProbability.teamBWin * 100}%` }}
            >
              {formatProbability(matchProbability.teamBWin)}
            </div>
          </div>

          <div className="probability-labels">
            <span>{teamA.code} Win</span>
            <span>Draw</span>
            <span>{teamB.code} Win</span>
          </div>

          {matchupProbabilities.length > 0 && (
            <div className="meeting-probability">
              <h4>Chance of Meeting in Tournament</h4>
              <p className="meeting-value">
                {meetingProbability !== null && meetingProbability > 0
                  ? formatProbability(meetingProbability)
                  : 'Very unlikely (<1%)'}
              </p>
            </div>
          )}
        </div>
      )}

      {matchupProbabilities.length > 0 && (
        <div className="likely-matchups">
          <h3>Most Likely Matchups</h3>
          <ul className="matchup-list">
            {matchupProbabilities.slice(0, 15).map((matchup, index) => (
              <li key={index} className="matchup-item">
                <span className="matchup-teams">
                  {matchup.teamA.code} vs {matchup.teamB.code}
                </span>
                <span className="matchup-prob">
                  {formatProbability(matchup.probability)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
