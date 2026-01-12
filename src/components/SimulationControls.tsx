import { useState } from 'react';
import './SimulationControls.css';

interface SimulationControlsProps {
  onRunSimulation: (iterations: number) => void;
  onReset: () => void;
  isSimulating: boolean;
  simulationCount: number;
}

export const SimulationControls = ({
  onRunSimulation,
  onReset,
  isSimulating,
  simulationCount,
}: SimulationControlsProps) => {
  const [iterations, setIterations] = useState(10000);

  const presetIterations = [1000, 5000, 10000, 50000, 100000];

  return (
    <div className="simulation-controls">
      <h2>Tournament Simulation</h2>

      <div className="controls-content">
        <div className="iteration-selector">
          <label>Number of Simulations:</label>
          <div className="iteration-buttons">
            {presetIterations.map(preset => (
              <button
                key={preset}
                className={`preset-btn ${iterations === preset ? 'active' : ''}`}
                onClick={() => setIterations(preset)}
                disabled={isSimulating}
              >
                {preset.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <button
            className="run-btn"
            onClick={() => onRunSimulation(iterations)}
            disabled={isSimulating}
          >
            {isSimulating ? (
              <>
                <span className="spinner"></span>
                Running...
              </>
            ) : (
              <>Run Simulation</>
            )}
          </button>

          {simulationCount > 0 && (
            <button
              className="reset-btn"
              onClick={onReset}
              disabled={isSimulating}
            >
              Reset
            </button>
          )}
        </div>

        {simulationCount > 0 && (
          <div className="simulation-info">
            Based on {simulationCount.toLocaleString()} simulated tournaments
          </div>
        )}
      </div>

      <div className="methodology">
        <h4>Methodology</h4>
        <p>
          Probabilities are calculated using Monte Carlo simulation with an
          Elo-based match outcome model. Each simulation runs the entire
          tournament from group stage through the final, tracking team
          progression and matchups.
        </p>
      </div>
    </div>
  );
};
