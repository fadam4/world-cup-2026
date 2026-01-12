import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>
          <span className="trophy">🏆</span>
          FIFA World Cup 2026 Simulator
        </h1>
        <p className="subtitle">
          USA • Mexico • Canada
        </p>
        <p className="description">
          Monte Carlo simulation of the 48-team tournament
        </p>
      </div>
    </header>
  );
};
