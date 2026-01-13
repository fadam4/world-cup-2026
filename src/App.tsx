import { useState } from 'react';
import {
  Header,
  GroupStage,
  SimulationControls,
  TeamProbabilitiesTable,
  MatchupExplorer,
  Schedule,
} from './components';
import { useSimulation } from './hooks/useSimulation';
import './App.css';

type TabId = 'groups' | 'probabilities' | 'matchups' | 'schedule';

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('groups');
  const {
    groups,
    teamProbabilities,
    matchupProbabilities,
    isSimulating,
    simulationCount,
    runSimulation,
    resetSimulation,
  } = useSimulation();

  const tabs: { id: TabId; label: string }[] = [
    { id: 'groups', label: 'Groups' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'probabilities', label: 'Probabilities' },
    { id: 'matchups', label: 'Matchups' },
  ];

  return (
    <div className="app">
      <Header />

      <SimulationControls
        onRunSimulation={runSimulation}
        onReset={resetSimulation}
        isSimulating={isSimulating}
        simulationCount={simulationCount}
      />

      <nav className="tab-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {tab.id === 'probabilities' && simulationCount > 0 && (
              <span className="badge">New</span>
            )}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {activeTab === 'groups' && <GroupStage groups={groups} />}
        {activeTab === 'schedule' && (
          <Schedule
            groups={groups}
            simulationResults={[]}
            simulationCount={simulationCount}
          />
        )}
        {activeTab === 'probabilities' && (
          <TeamProbabilitiesTable probabilities={teamProbabilities} />
        )}
        {activeTab === 'matchups' && (
          <MatchupExplorer matchupProbabilities={matchupProbabilities} />
        )}
      </main>

      <footer className="footer">
        <p>
          FIFA World Cup 2026 Simulator • Probabilities based on Elo ratings and Monte Carlo simulation
        </p>
      </footer>
    </div>
  );
}

export default App;
