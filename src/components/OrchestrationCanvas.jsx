import { useEffect, useState } from 'react';

const TABS = [
  { id: 'trace', label: 'ROUTING TOPOLOGY', icon: 'account_tree' },
  { id: 'logs', label: 'STREAMING TELEMETRY (JSON)', icon: 'terminal' },
  { id: 'state', label: 'STATE BUFFER & MEMORY', icon: 'memory' },
];

function formatClock(date) {
  const hrs = String(date.getUTCHours()).padStart(2, '0');
  const mins = String(date.getUTCMinutes()).padStart(2, '0');
  const secs = String(date.getUTCSeconds()).padStart(2, '0');
  const ms = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${hrs}:${mins}:${secs}.${ms}`;
}

function RoutingTopology() {
  return (
    <div className="topo-panel">
      <div className="node-row orchestrator-node">
        <div className="node-main">
          <span className="node-icon">
            <span className="material-symbols-outlined">psychology</span>
          </span>
          <div>
            <div className="node-title">NODE_00: ORCHESTRATOR_DISPATCHER</div>
            <div className="node-sub">POLICY: Dynamic Re-route • Intent Decomposition</div>
          </div>
        </div>
        <span className="node-chip">DISPATCHING 3 SUB-TASKS</span>
      </div>

      <div className="connector-row" aria-hidden="true">
        <span>│ (task: arxiv_deep)</span>
        <span>│ (task: hermes_synth)</span>
        <span>│ (task: eval_guard)</span>
      </div>

      <div className="subagent-grid">
        <div className="subagent-card">
          <div className="subagent-top">
            <span className="subagent-id">SUBAGENT_A</span>
            <span className="dot dot-emerald" />
          </div>
          <div className="subagent-name">Research Agent</div>
          <div className="subagent-detail">
            TOOL: <code className="code-cyan">search_arxiv</code>
          </div>
          <div className="progress-track">
            <div className="progress-fill fill-emerald" style={{ width: '80%' }} />
          </div>
          <div className="subagent-status">STATUS: 12 Papers Indexed</div>
        </div>

        <div className="subagent-card highlighted">
          <div className="corner-cut" aria-hidden="true" />
          <div className="subagent-top">
            <span className="subagent-id">SUBAGENT_B</span>
            <span className="radar-pulse dot dot-cyan" />
          </div>
          <div className="subagent-name cyan">Synthesis Agent</div>
          <div className="subagent-detail">
            MODEL: <code className="code-cyan">Hermes-3-8B-Q4</code>
          </div>
          <div className="progress-track">
            <div className="progress-fill fill-cyan animate-pulse-width" style={{ width: '66%' }} />
          </div>
          <div className="subagent-status cyan">STREAMING: 1,842 Tokens</div>
        </div>

        <div className="subagent-card">
          <div className="subagent-top">
            <span className="subagent-id emerald">GUARD_NODE</span>
            <span className="dot dot-emerald" />
          </div>
          <div className="subagent-name">Deterministic Filter</div>
          <div className="subagent-detail">
            CHECK: <code className="code-emerald">boundary_eval</code>
          </div>
          <div className="progress-track">
            <div className="progress-fill fill-emerald" style={{ width: '100%' }} />
          </div>
          <div className="subagent-status emerald">EVAL: 100% COMPLIANT</div>
        </div>
      </div>

      <div className="sink-row">
        <span className="sink-label">
          <span className="material-symbols-outlined emerald-text">verified</span>
          <span>STATE_HANDOFF: Aggregated Context validated via Pydantic model</span>
        </span>
        <span className="sink-chip">P95: 78.4ms</span>
      </div>
    </div>
  );
}

function StreamingTelemetry() {
  return (
    <div className="log-panel terminal-scroll">
      <div className="log-head">
        <span>LIVE JSON RPC TRACE // SUBAGENT_INTERCEPT</span>
        <span className="emerald-text">AUTO-FLUSH: ON</span>
      </div>
      <pre className="log-code">
        {'{\n'}
        {'  '}<span className="j-key">"timestamp"</span>: <span className="j-str">"2025-05-18T14:02:18.421Z"</span>{',\n'}
        {'  '}<span className="j-key">"trace_id"</span>: <span className="j-str">"trc_8f99a0b12e"</span>{',\n'}
        {'  '}<span className="j-key">"active_orchestrator"</span>: <span className="j-bool">"SpencerLowe_AgenticCore_v4"</span>{',\n'}
        {'  '}<span className="j-key">"subagent"</span>: {'{\n'}
        {'    '}<span className="j-key">"id"</span>: <span className="j-str">"subagent_synthesis_hermes"</span>{',\n'}
        {'    '}<span className="j-key">"vram_allocated_gb"</span>: <span className="j-num">5.82</span>{',\n'}
        {'    '}<span className="j-key">"tool_call"</span>: {'{\n'}
        {'      '}<span className="j-key">"name"</span>: <span className="j-bool">"synthesize_operational_directives"</span>{',\n'}
        {'      '}<span className="j-key">"arguments"</span>: {'{\n'}
        {'        '}<span className="j-key">"context_depth"</span>: <span className="j-num">4</span>{',\n'}
        {'        '}<span className="j-key">"grounding_docs"</span>: [<span className="j-str">"gsm_emergency_sop_2024"</span>, <span className="j-str">"dentalqore_retention_sla"</span>]{',\n'}
        {'        '}<span className="j-key">"safety_gate"</span>: <span className="j-bool">true</span>{'\n'}
        {'      }\n'}
        {'    }\n'}
        {'  },\n'}
        {'  '}<span className="j-key">"latency_breakdown"</span>: {'{\n'}
        {'    '}<span className="j-key">"vector_knn_ms"</span>: <span className="j-num">12.1</span>{',\n'}
        {'    '}<span className="j-key">"hermes_first_token_ms"</span>: <span className="j-num">31.8</span>{',\n'}
        {'    '}<span className="j-key">"validation_overhead_ms"</span>: <span className="j-num">3.4</span>{'\n'}
        {'  },\n'}
        {'  '}<span className="j-key">"state_sync"</span>: <span className="j-bool">"COMMITTED"</span>{'\n'}
        {'}'}
      </pre>
    </div>
  );
}

function StateBuffer() {
  return (
    <div className="state-panel terminal-scroll">
      <div className="log-head">
        <span>AGENTIC RUNTIME MEMORY BUFFER // HYBRID PERSISTENCE</span>
      </div>
      <div className="state-grid">
        <div className="state-card">
          <span className="state-label">SHORT_TERM_KV:</span>
          <span className="state-value cyan">Active Session: #9421-CX</span>
          <p className="state-note">64 messages in ephemeral memory window.</p>
        </div>
        <div className="state-card">
          <span className="state-label">VECTOR_INDEX:</span>
          <span className="state-value emerald">HNSW Local Embeddings (Qdrant)</span>
          <p className="state-note">Index count: 48,190 vectors [Cosine 0.94].</p>
        </div>
        <div className="state-card">
          <span className="state-label">ROLLBACK_CHECKPOINT:</span>
          <span className="state-value white">state_hash_bf39e1</span>
          <p className="state-note">Fault-tolerant recovery delta ready.</p>
        </div>
        <div className="state-card">
          <span className="state-label">OPERATIONAL SAFETY:</span>
          <span className="state-value emerald">Zero Exfiltration Rule (ENFORCED)</span>
          <p className="state-note">Outbound socket sandboxed to LAN only.</p>
        </div>
      </div>
    </div>
  );
}

export default function OrchestrationCanvas() {
  const [activeTab, setActiveTab] = useState('trace');
  const [clock, setClock] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const id = setInterval(() => setClock(formatClock(new Date())), 53);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="orch-canvas hud-edge-glow" id="orchestration">
      <div className="orch-header">
        <div className="orch-title-group">
          <span className="orch-title">SEC-01 // AGENTIC DISPATCH TOPOLOGY</span>
          <span className="status-chip live">EXEC: RUNNING</span>
        </div>
        <div className="orch-stats">
          <span>
            TOKENS/S: <strong className="cyan-text">94.2</strong>
          </span>
          <span>
            MEM_BUFFER: <strong className="emerald-text">412 MB</strong>
          </span>
          <span>
            EPOCH: <span className="orch-clock">{clock}</span>
          </span>
        </div>
      </div>

      <div className="orch-tabs" role="tablist" aria-label="Orchestration views">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`orch-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="orch-body" role="tabpanel">
        {activeTab === 'trace' && <RoutingTopology />}
        {activeTab === 'logs' && <StreamingTelemetry />}
        {activeTab === 'state' && <StateBuffer />}
      </div>

      <div className="orch-footer">
        <div className="orch-velocity">
          <span className="material-symbols-outlined emerald-text">show_chart</span>
          <svg
            className="sparkline"
            viewBox="0 0 120 24"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              points="0,18 10,14 20,16 30,9 40,12 50,7 60,11 70,4 80,8 90,3 100,6 110,2 120,5"
              fill="none"
              stroke="var(--primary-cyan)"
              strokeWidth="1.5"
            />
          </svg>
          <span>TOKEN VELOCITY:</span>
          <span className="cyan-text strong">94.2 t/s</span>
          <span className="divider">│</span>
          <span>
            ERROR RATE: <span className="emerald-text strong">0.00%</span>
          </span>
        </div>
        <div className="orch-host">
          <span className="dot dot-emerald" />
          <span>HOST: SPENCER-WORKSTATION-01 [vLLM-CONTAINER]</span>
        </div>
      </div>
    </div>
  );
}
