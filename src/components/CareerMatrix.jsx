const ERAS = [
  {
    code: 'ERA 06 // PRESENT',
    badge: 'ACTIVE MISSION',
    title: 'Software Engineering & Client Relations',
    org: 'DentalQore (Client Retention) & BYU-Idaho (BSE Candidate)',
    desc: 'Bridging autonomous agent research with enterprise retention. Architecting automated client escalation triage and workflow automations while completing intensive Bachelor of Science in Software Engineering coursework.',
    metrics: [
      ['Client Retention Rate:', 'High Tier', 'emerald'],
      ['Domain Focus:', 'Agentic Tool Pipelines', 'cyan'],
    ],
    active: true,
  },
  {
    code: 'ERA 05 // EXECUTIVE',
    badge: 'CRISIS LEADERSHIP',
    title: 'Chief Operating Officer (COO)',
    org: 'Good Samaritan Rescue Mission (350-Bed Facility)',
    desc: 'Commanded 24/7 high-stakes operations across 45+ staff members. Directed physical plant logistics, security protocols, emergency shelter safety compliance, and inter-agency municipal emergency services coordination.',
    metrics: [
      ['Personnel Scope:', '45+ Direct Staff', 'emerald'],
      ['Operational Uptime:', '100% 24/7 Continuity', 'emerald'],
    ],
  },
  {
    code: 'ERA 04 // MULTI-UNIT',
    badge: 'P&L MANAGEMENT',
    title: 'Regional Operations Manager',
    org: 'BatteriesPlus (Eastern WA & Northern ID)',
    desc: 'Multi-unit commercial retail operations, regional P&L management, technician recruitment, inventory distribution pipelines, and technical commercial accounts across two distinct state jurisdictions.',
    metrics: [
      ['Territory Reach:', 'Regional Tri-State', 'white'],
      ['Operational Margin:', 'Double-digit growth', 'emerald'],
    ],
  },
  {
    code: 'ERA 03 // ENTERPRISE B2B',
    badge: 'TELECOM CONTRACTS',
    title: 'Enterprise Account Manager',
    org: 'T-Mobile USA (Corporate B2B Division)',
    desc: 'Negotiated complex $250k+ ARR corporate telecom contracts, enterprise device fleet management, service level agreements (SLAs), and mission-critical client support systems.',
    metrics: [
      ['Client Retention:', '96.2% Annual Retention', 'emerald'],
      ['Contract Negotiation:', '$250k+ Tier', 'cyan'],
    ],
  },
  {
    code: 'ERA 02 // TECHNICAL SALES',
    badge: 'INFRASTRUCTURE',
    title: 'Consultative Solutions Advisor',
    org: 'Sprint / Nextel Communications',
    desc: 'Direct client consultative technical hardware architectures, cellular dispatch infrastructure, and push-to-talk field systems. Awarded top 10% regional sales ranking.',
    metrics: [
      ['Regional Ranking:', 'Top 10% Division', 'emerald'],
      ['Field Systems:', 'Push-To-Talk / Fleet', 'white'],
    ],
  },
  {
    code: 'ERA 01 // FOUNDATION',
    badge: 'SUPPLY CHAIN',
    title: 'General Manager',
    org: 'The American Diner (High-Volume Hospitality)',
    desc: 'Led entire establishment operations: high-stress commercial food production, vendor supply chain logistics, profit margin audits, and direct daily leadership of 15+ shift staff.',
    metrics: [
      ['Crew Headcount:', '15+ Direct Crew', 'white'],
      ['Operational Rhythm:', 'Zero-Fail Fast Flow', 'emerald'],
    ],
  },
];

export default function CareerMatrix() {
  return (
    <section className="section" id="career-matrix">
      <div className="section-head">
        <div>
          <div className="section-eyebrow emerald">OPERATIONAL FOUNDATION // 03 HIGH-STAKES GOVERNANCE</div>
          <h2 className="section-title">
            Real-World Crisis Leadership Fuels Software Reliability
          </h2>
          <p className="section-desc">
            Software reliability does not originate solely in unit tests—it
            originates in high-pressure organizational leadership where systems
            cannot fail. A battle-tested leadership trajectory spanning crisis
            facilities, multi-unit retail P&amp;L, and high-retention enterprise
            client relations.
          </p>
        </div>
        <div className="career-side-card">
          <div className="career-side-label">TOTAL CAREER TIMELINE</div>
          <div className="career-side-value">14+ YEARS EXECUTIVE EXPERIENCE</div>
        </div>
      </div>

      <div className="era-grid">
        {ERAS.map((era) => (
          <article
            className={`era-card hud-edge-glow${era.active ? ' active' : ''}`}
            key={era.code}
          >
            <div className="era-head">
              <span className={`era-code${era.active ? ' cyan-text' : ''}`}>{era.code}</span>
              <span className={`badge ${era.active ? 'badge-cyan' : 'badge-muted'}`}>
                {era.badge}
              </span>
            </div>
            <h3 className="era-title">{era.title}</h3>
            <div className="era-org">{era.org}</div>
            <p className="era-desc">{era.desc}</p>
            <div className="era-metrics">
              {era.metrics.map(([label, value, tone]) => (
                <div className="era-metric" key={label}>
                  <span>{label}</span>
                  <span className={`${tone}-text`}>{value}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
