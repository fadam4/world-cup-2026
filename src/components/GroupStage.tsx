import type { Group } from '../types';
import './GroupStage.css';

interface GroupStageProps {
  groups: Group[];
}

export const GroupStage = ({ groups }: GroupStageProps) => {
  return (
    <div className="group-stage">
      <h2>Group Stage</h2>
      <div className="groups-grid">
        {groups.map(group => (
          <div key={group.name} className="group-card">
            <h3>Group {group.name}</h3>
            <ul className="team-list">
              {group.teams.map((team, index) => (
                <li key={team.id} className="team-item">
                  <span className="team-seed">{index + 1}</span>
                  <span className="team-flag">{team.flag}</span>
                  <span className="team-name">{team.name}</span>
                  <span className="team-rating">{team.eloRating}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
