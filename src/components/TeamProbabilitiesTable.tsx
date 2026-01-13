import { useState } from 'react';
import type { TeamProbabilities } from '../types';
import { formatProbability } from '../utils/simulation';
import './TeamProbabilitiesTable.css';

interface TeamProbabilitiesTableProps {
  probabilities: TeamProbabilities[];
}

type SortField = 'winTournament' | 'reachFinal' | 'reachSemiFinals' | 'reachQuarterFinals' | 'reachRoundOf16' | 'reachRoundOf32' | 'name';

export const TeamProbabilitiesTable = ({ probabilities }: TeamProbabilitiesTableProps) => {
  const [sortField, setSortField] = useState<SortField>('winTournament');
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(field === 'name');
    }
  };

  const sortedProbabilities = [...probabilities].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'name') {
      comparison = a.team.name.localeCompare(b.team.name);
    } else {
      comparison = b[sortField] - a[sortField];
    }
    return sortAsc ? -comparison : comparison;
  });

  const getProbabilityClass = (prob: number): string => {
    if (prob >= 0.5) return 'prob-high';
    if (prob >= 0.25) return 'prob-medium';
    if (prob >= 0.1) return 'prob-low';
    return 'prob-very-low';
  };

  if (probabilities.length === 0) {
    return (
      <div className="team-probabilities empty">
        <h2>Team Probabilities</h2>
        <p className="no-data">Run a simulation to see probabilities</p>
      </div>
    );
  }

  return (
    <div className="team-probabilities">
      <h2>Team Probabilities</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('name')} className="sortable">
                Team {sortField === 'name' && (sortAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('reachRoundOf32')} className="sortable">
                R32 {sortField === 'reachRoundOf32' && (sortAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('reachRoundOf16')} className="sortable">
                R16 {sortField === 'reachRoundOf16' && (sortAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('reachQuarterFinals')} className="sortable">
                QF {sortField === 'reachQuarterFinals' && (sortAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('reachSemiFinals')} className="sortable">
                SF {sortField === 'reachSemiFinals' && (sortAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('reachFinal')} className="sortable">
                Final {sortField === 'reachFinal' && (sortAsc ? '↑' : '↓')}
              </th>
              <th onClick={() => handleSort('winTournament')} className="sortable highlight">
                Winner {sortField === 'winTournament' && (sortAsc ? '↑' : '↓')}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProbabilities.map((tp, index) => (
              <tr key={tp.team.id} className={index < 10 ? 'top-team' : ''}>
                <td className="team-cell">
                  <span className="rank">{index + 1}</span>
                  <span className="flag">{tp.team.code}</span>
                  <span className="name">{tp.team.name}</span>
                </td>
                <td className={getProbabilityClass(tp.reachRoundOf32)}>
                  {formatProbability(tp.reachRoundOf32)}
                </td>
                <td className={getProbabilityClass(tp.reachRoundOf16)}>
                  {formatProbability(tp.reachRoundOf16)}
                </td>
                <td className={getProbabilityClass(tp.reachQuarterFinals)}>
                  {formatProbability(tp.reachQuarterFinals)}
                </td>
                <td className={getProbabilityClass(tp.reachSemiFinals)}>
                  {formatProbability(tp.reachSemiFinals)}
                </td>
                <td className={getProbabilityClass(tp.reachFinal)}>
                  {formatProbability(tp.reachFinal)}
                </td>
                <td className={`highlight ${getProbabilityClass(tp.winTournament)}`}>
                  {formatProbability(tp.winTournament)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
