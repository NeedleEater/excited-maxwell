import { useState } from 'react';

const CONNECT_COMMAND = 'curl -s https://spencerlowe.com/key.pub | gpg --import';

export default function TerminalDispatch() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONNECT_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section" id="dispatch-term">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">COMMUNICATION UPLINK // 04 DISPATCH TERM</div>
          <h2 className="section-title">
            Initialize Encrypted Dispatch with Spencer Lowe
          </h2>
          <p className="section-desc">
            Available for Senior Agentic Systems Architecture, Autonomous
            Infrastructure Consulting, and Technical Operations Leadership.
          </p>
        </div>
        <div className="pgp-status">
          <span className="dot dot-emerald" />
          <span>PGP VERIFIED // 4096-BIT RSA READY</span>
        </div>
      </div>

      <div className="dispatch-box hud-edge-glow">
        <div className="terminal">
          <div className="terminal-head">
            <span className="terminal-head-label">
              <span className="material-symbols-outlined cyan-text">terminal</span>
              <span>BASH // DISPATCH-GATEWAY.SH</span>
            </span>
            <span className="emerald-text">READY FOR INPUT</span>
          </div>
          <div className="terminal-body">
            <div>
              <span className="prompt">&gt; echo $SPENCER_LOWE_TARGET_ROLES</span>
            </div>
            <div className="terminal-output">
              [ &quot;Agentic Systems Architect&quot;, &quot;Autonomous AI
              Engineer&quot;, &quot;VP of Operations / TechOps Director&quot; ]
            </div>
            <div className="terminal-gap">
              <span className="prompt">&gt; cat /sys/comm/routing.json</span>
            </div>
            <div className="terminal-output emerald-text">
              {'{ "primary_uplink": "spencer@spencerlowe.com", "response_sla": "< 4 hours", "location": "Utah / Remote" }'}
            </div>
            <div className="terminal-gap handshake-line">
              <span className="prompt">&gt;</span>
              <span className="cyan-text">initiate-handshake --target=spencer</span>
              <span className="typing-cursor" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="contact-grid">
          <a className="contact-card" href="mailto:spencer@spencerlowe.com">
            <div className="contact-top">
              <span className="contact-kicker cyan-text">DIRECT CHANNEL</span>
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <div className="contact-value">spencer@spencerlowe.com</div>
              <div className="contact-note">Encrypted Direct Inbox</div>
            </div>
            <div className="contact-action cyan-text">
              <span>SEND TRANSMISSION</span>
              <span>➔</span>
            </div>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/in/spencerlowe87"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-top">
              <span className="contact-kicker emerald-text">PROFESSIONAL DOSSIER</span>
              <span className="material-symbols-outlined">person</span>
            </div>
            <div>
              <div className="contact-value">linkedin.com/in/spencerlowe87</div>
              <div className="contact-note">Verified Executive Profile</div>
            </div>
            <div className="contact-action emerald-text">
              <span>VIEW DOSSIER</span>
              <span>➔</span>
            </div>
          </a>

          <a
            className="contact-card"
            href="https://github.com/spencerlowe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-top">
              <span className="contact-kicker cyan-text">REPOSITORIES &amp; AGENTS</span>
              <span className="material-symbols-outlined">code</span>
            </div>
            <div>
              <div className="contact-value">github.com/spencerlowe</div>
              <div className="contact-note">Open Architecture &amp; RAG Code</div>
            </div>
            <div className="contact-action cyan-text">
              <span>INSPECT REPOSITORIES</span>
              <span>➔</span>
            </div>
          </a>
        </div>

        <div className="copy-row">
          <div className="copy-lead">
            <span className="material-symbols-outlined">content_copy</span>
            <span>CLI Quick Connect:</span>
            <code className="copy-cmd">{CONNECT_COMMAND}</code>
          </div>
          <button type="button" className="copy-btn" onClick={handleCopy}>
            {copied ? 'COPIED ✓' : 'COPY CMD'}
          </button>
        </div>
      </div>
    </section>
  );
}
