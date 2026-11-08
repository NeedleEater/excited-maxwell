export default function Footer() {
  return (
    <footer className="ground-footer">
      <div className="footer-identity">
        <span className="dot dot-emerald" />
        <span>
          SPENCER LOWE // MISSION GROUND CONTROL V4.2.0 • ALL SYSTEMS
          OPERATIONAL [NOMINAL 99.98% TELEMETRY]
        </span>
      </div>

      <div className="footer-links">
        <a href="#hero">LIVE TELEMETRY FEED</a>
        <span className="slash">/</span>
        <a href="https://github.com/spencerlowe" target="_blank" rel="noopener noreferrer">
          GITHUB ORG [SRC]
        </a>
        <span className="slash">/</span>
        <a href="#bento-platforms">HOMELAB GATEWAY</a>
        <span className="slash">/</span>
        <a href="#dispatch-term">ENCRYPTED PGP HOOK</a>
        <span className="slash">/</span>
        <span className="emerald-text">SYS.STATUS: NOMINAL</span>
      </div>

      <div className="footer-geo">ENGINEERED IN UTAH // AIR-GAPPED HARDWARE CERTIFIED</div>
    </footer>
  );
}
