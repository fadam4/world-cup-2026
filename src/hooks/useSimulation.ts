import { useState, useCallback } from 'react';
import type { Group, TeamProbabilities, MatchupProbability } from '../types';
import { runMonteCarlo } from '../utils/simulation';
import { getInitialGroups } from '../data/teams';

interface UseSimulationReturn {
  groups: Group[];
  teamProbabilities: TeamProbabilities[];
  matchupProbabilities: MatchupProbability[];
  isSimulating: boolean;
  simulationCount: number;
  runSimulation: (iterations: number) => void;
  resetSimulation: () => void;
}

export const useSimulation = (): UseSimulationReturn => {
  const [groups] = useState<Group[]>(getInitialGroups);
  const [teamProbabilities, setTeamProbabilities] = useState<TeamProbabilities[]>([]);
  const [matchupProbabilities, setMatchupProbabilities] = useState<MatchupProbability[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationCount, setSimulationCount] = useState(0);

  const runSimulation = useCallback((iterations: number) => {
    setIsSimulating(true);

    // Use setTimeout to allow UI to update
    setTimeout(() => {
      const results = runMonteCarlo(groups, iterations);
      setTeamProbabilities(results.teamProbabilities);
      setMatchupProbabilities(results.matchupProbabilities);
      setSimulationCount(iterations);
      setIsSimulating(false);
    }, 50);
  }, [groups]);

  const resetSimulation = useCallback(() => {
    setTeamProbabilities([]);
    setMatchupProbabilities([]);
    setSimulationCount(0);
  }, []);

  return {
    groups,
    teamProbabilities,
    matchupProbabilities,
    isSimulating,
    simulationCount,
    runSimulation,
    resetSimulation,
  };
};
