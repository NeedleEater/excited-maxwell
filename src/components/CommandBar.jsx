const NAV_ITEMS = [
  { label: '01 // ORCHESTRATION', href: '#orchestration' },
  { label: '02 // BENTO PLATFORMS', href: '#bento-platforms' },
  { label: '03 // CAREER MATRIX', href: '#career-matrix' },
  { label: '04 // DISPATCH TERM', href: '#dispatch-term' },
];

export default function CommandBar() {
  return (
    <header className="cmdbar">
      <div className="cmdbar-brand">
        <div className="brand-identity">
          <span className="beacon" aria-hidden="true">
            <span className="beacon-ring radar-pulse" />
            <span className="beacon-core" />
          </span>
          <a className="brand-link" href="#hero">
            SYS.ARCH // SPENCER LOWE [OP-CON]
          </a>
        </div>
        <div className="brand-status">
          <span className="status-chip live">SYS.STATUS: LIVE</span>
          <span className="brand-status-text">
            DENTALQORE CLIENT RETENTION • BYU-IDAHO BSE
          </span>
        </div>
      </div>

      <nav className="cmdbar-nav" aria-label="Command Navigation">
        {NAV_ITEMS.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={index === 0 ? 'active' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="cmdbar-actions">
        <a
          className="dossier-link"
          href="https://www.linkedin.com/in/spencerlowe87"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined">badge</span>
          <span>EXEC_DOSSIER</span>
        </a>
        <a className="uplink-btn" href="#dispatch-term">
          <span className="material-symbols-outlined">bolt</span>
          <span>INITIALIZE UPLINK</span>
        </a>
      </div>
    </header>
  );
}
