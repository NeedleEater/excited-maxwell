import OrchestrationCanvas from './OrchestrationCanvas.jsx';

const METRICS = [
  {
    label: 'COMMAND REACH',
    value: '45+',
    tone: 'emerald',
    sub: 'DIRECT STAFF // COO CRISIS OP',
  },
  {
    label: 'CRITICAL INFRASTRUCTURE',
    value: '350-BED',
    tone: 'cyan',
    sub: '24/7 RESCUE FACILITY',
  },
  {
    label: 'LOCAL INFERENCE P95',
    value: '<74ms',
    tone: 'emerald',
    sub: 'HERMES 3 8B ON SELF-HOSTED RIG',
  },
  {
    label: 'TOOL EXECUTION FIDELITY',
    value: '99.94%',
    tone: 'white',
    sub: 'GUARDRAILED DETERMINISTIC RUNS',
  },
];

export default function HeroCockpit() {
  return (
    <section className="hero-cockpit" id="hero">
      <div className="hero-left">
        <div className="hero-overline">
          <div className="sys-id">
            <span className="sys-id-dot" />
            <span>SYS-ID: SPENCER-LOWE // SPEC: AGENTIC-AI &amp; OP-EXEC</span>
          </div>
          <span className="hero-loc">LOC: UT // PING: 18MS</span>
        </div>

        <div className="hero-copy">
          <h1 className="hero-title">
            Engineering resilient{' '}
            <span className="accent">multi-agent systems</span> with executive
            operational governance.
          </h1>
          <p className="hero-bio">
            The rare convergence of bleeding-edge autonomous agent development
            (function calling, stateful delegation graphs, localized Hermes
            inference, agentic RAG) and real-world high-stakes crisis leadership.
            Former COO commanding 24/7 emergency infrastructure across 45+ staff
            and 350 beds; currently scaling client retention and workflow
            automation at DentalQore while completing a BSE at BYU-Idaho.
          </p>
        </div>

        <div className="metric-grid">
          {METRICS.map((metric) => (
            <div className="metric-tile hud-edge-glow" key={metric.label}>
              <div className="metric-label">{metric.label}</div>
              <div className={`metric-value ${metric.tone}`}>{metric.value}</div>
              <div className="metric-sub">{metric.sub}</div>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a className="btn-primary cyan-glow-hover" href="#bento-platforms">
            <span className="material-symbols-outlined">hub</span>
            <span>EXPLORE AGENTIC SUITE</span>
          </a>
          <a className="btn-secondary" href="#career-matrix">
            <span className="material-symbols-outlined">analytics</span>
            <span>INSPECT OPERATIONAL DOSSIER</span>
          </a>
        </div>

        <div className="stack-footnote">
          <span>STACK: LANGGRAPH • VLLM • HERMES-3 • FASTAPI • DOCKER</span>
          <strong>100% AIRGAPPED CAPABLE</strong>
        </div>
      </div>

      <OrchestrationCanvas />
    </section>
  );
}
