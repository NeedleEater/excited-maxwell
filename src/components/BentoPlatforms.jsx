function CardHeader({ module, title, badge, icon, tone = 'cyan' }) {
  return (
    <div className="bento-head">
      <div className="bento-head-left">
        <span className={`bento-icon ${tone}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </span>
        <div>
          <span className="bento-kicker">{module}</span>
          <h3 className="bento-title">{title}</h3>
        </div>
      </div>
      <span className={`badge ${tone === 'emerald' ? 'badge-emerald' : 'badge-cyan'}`}>
        {badge}
      </span>
    </div>
  );
}

function TagRow({ tags }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function BentoPlatforms() {
  return (
    <section className="section" id="bento-platforms">
      <div className="section-head">
        <div>
          <div className="section-eyebrow">SYSTEMS ARCHITECTURE // 02 CORE PLATFORMS</div>
          <h2 className="section-title">
            Production-Ready Autonomous Agent Infrastructure
          </h2>
          <p className="section-desc">
            Engineered with strict zero-data-leakage architecture, deterministic
            tool-calling validation, and resilient state graphs to deliver
            reliable automation in high-acuity environments.
          </p>
        </div>
        <div className="section-side">
          <span className="pill emerald">AUTONOMY LEVEL: L4</span>
          <span className="pill cyan">LOCAL-FIRST</span>
        </div>
      </div>

      <div className="bento-grid">
        <article className="bento-card hud-edge-glow cyan-glow-hover">
          <CardHeader
            module="MOD-01 // AGENT ORCHESTRATION"
            title="Multi-Agent Task Orchestrator"
            badge="STABLE PROD"
            icon="schema"
            tone="emerald"
          />
          <p className="bento-desc">
            Stateful graph router capable of decomposing ambiguous user objectives
            into deterministic DAG executions. Features dynamic tool registration,
            circular loop prevention, and graceful self-healing fallback when
            sub-agents encounter anomalous tool outputs.
          </p>

          <div className="term-box">
            <div className="term-box-head">
              <span>RUNTIME EXECUTION GRAPH</span>
              <span className="cyan-text">DAG V4.1</span>
            </div>
            <div className="dag-flow">
              <div className="dag-node">[Intent Parse]</div>
              <span className="dag-arrow">➔</span>
              <div className="dag-node cyan-border white-text">[Parallel Delegation]</div>
              <span className="dag-arrow">➔</span>
              <div className="dag-node green-border emerald-text">[Pydantic Barrier]</div>
            </div>
          </div>

          <div className="bento-footer">
            <TagRow tags={['LANGGRAPH', 'TOOL CALLING', 'STATE MACHINES']} />
            <div className="bento-stat cyan-text">ACCURACY: 99.8%</div>
          </div>
        </article>

        <article className="bento-card hud-edge-glow cyan-glow-hover">
          <CardHeader
            module="MOD-02 // RETRIEVAL PIPELINE"
            title="Agentic RAG & Knowledge Synthesizer"
            badge="HYBRID RETRIEVAL"
            icon="manage_search"
            tone="cyan"
          />
          <p className="bento-desc">
            High-precision query expansion and multi-step retrieval pipeline
            combining dense vector embeddings (HNSW) with sparse BM25 keyword
            matching and cross-encoder reranking. Guarantees factual grounding
            with inline sentence-level attribution tokens.
          </p>

          <div className="term-box">
            <div className="term-box-head">
              <span>RETRIEVAL METRICS (BEIR BENCHMARK)</span>
              <span className="emerald-text">EVAL: PASS</span>
            </div>
            <div className="metric-row">
              <div className="mini-metric">
                <div className="mini-label">NDCG@10</div>
                <div className="mini-value white-text">0.892</div>
              </div>
              <div className="mini-metric">
                <div className="mini-label">RECALL@5</div>
                <div className="mini-value emerald-text">96.4%</div>
              </div>
              <div className="mini-metric">
                <div className="mini-label">RERANK P90</div>
                <div className="mini-value cyan-text">14.2ms</div>
              </div>
            </div>
          </div>

          <div className="bento-footer">
            <TagRow tags={['QDRANT', 'CROSS-ENCODERS', 'HYBRID RERANK']} />
            <div className="bento-stat emerald-text">HALLUCINATION: &lt;0.2%</div>
          </div>
        </article>

        <article className="bento-card hud-edge-glow cyan-glow-hover">
          <CardHeader
            module="MOD-03 // SAFETY & EVALUATION"
            title="Deterministic Safety Guardrails"
            badge="CONTAINMENT ACTIVE"
            icon="security"
            tone="emerald"
          />
          <p className="bento-desc">
            Zero-tolerance behavioral containment and tool-execution sandboxing.
            Implements pre-execution boundary checks, schema validation, and
            trajectory evaluation to prevent prompt injections, jailbreaks, and
            destructive lateral operations.
          </p>

          <div className="term-box guard-list">
            <div className="term-box-head">
              <span>VALIDATION SUITE</span>
              <span className="emerald-text">AUDIT: CLEAN</span>
            </div>
            <div className="validation-row">
              <span>• JSON Schema Strict Compliance:</span>
              <span className="emerald-text">ENFORCED (100%)</span>
            </div>
            <div className="validation-row">
              <span>• Prompt Injection Heuristic Guard:</span>
              <span className="emerald-text">ZERO EXPLOITS</span>
            </div>
            <div className="validation-row">
              <span>• Outbound Rate-Limiting Barrier:</span>
              <span className="cyan-text">60 REQ/MIN MAX</span>
            </div>
          </div>

          <div className="bento-footer">
            <TagRow tags={['PYDANTIC V2', 'NEVALS', 'PROMPT FIREWALL']} />
            <div className="bento-stat emerald-text">PASS RATE: 100.0%</div>
          </div>
        </article>

        <article className="bento-card hud-edge-glow cyan-glow-hover">
          <CardHeader
            module="MOD-04 // HARDWARE & SERVING"
            title="Homelab Model Gateway (Self-Hosted)"
            badge="LAN AIR-GAPPED"
            icon="dns"
            tone="cyan"
          />
          <p className="bento-desc">
            Self-hosted high-throughput inference cluster running open-weights
            Hermes-3 models via vLLM and Ollama. Designed for enterprise
            zero-data-leakage environments where proprietary API leakage is
            unacceptable.
          </p>

          <div className="term-box">
            <div className="term-box-head">
              <span>HARDWARE TELEMETRY &amp; VLLM RUNTIME</span>
              <span className="cyan-text">ONLINE</span>
            </div>
            <div className="metric-row">
              <div className="mini-metric">
                <div className="mini-label">VRAM POOL</div>
                <div className="mini-value white-text">24 GB</div>
              </div>
              <div className="mini-metric">
                <div className="mini-label">MODEL BASE</div>
                <div className="mini-value emerald-text">HERMES-3</div>
              </div>
              <div className="mini-metric">
                <div className="mini-label">QUANTIZATION</div>
                <div className="mini-value cyan-text">AWQ / 4-BIT</div>
              </div>
            </div>
          </div>

          <div className="bento-footer">
            <TagRow tags={['VLLM', 'DOCKER', 'CUDA', 'OLLAMA']} />
            <div className="bento-stat cyan-text">SUB-80MS TTFT</div>
          </div>
        </article>
      </div>
    </section>
  );
}
