# Implementation Brief: Spencer Lowe Mission Control & Telemetry Portfolio

## Overview
This brief guides OpenCode (`worker1`) through replacing the previous "Forest & Mist" portfolio with the newly synthesized **Orbital Telemetry & Systems HUD** mission control architecture.

The complete reference design is located at:
- Prototype HTML: `.stitch/designs/mission-control.html`
- Design Tokens & Specs: `.stitch/DESIGN.md`
- Master Architecture Spec: `SPEC.md`

---

## 1. Typography & Global Tokens (`src/index.css`)
Update `src/index.css` to define the new design tokens and styles:
- **Fonts**:
  - `Space Grotesk`: 400, 500, 600, 700 (Display & Headlines)
  - `Geist`: 300, 400, 500, 600 (Body & Documentation)
  - `JetBrains Mono`: 400, 500, 600 (Telemetry, Code, Monospace Readouts)
- **Palette**:
  - `--bg-canvas`: `#080c14` (Deep Ground Void)
  - `--bg-surface`: `#0e1320`
  - `--bg-container`: `#0d121f`
  - `--bg-container-high`: `#161b29`
  - `--bg-container-highest`: `#252a38`
  - `--border-subtle`: `#1e293b`
  - `--border-highlight`: `rgba(0, 242, 254, 0.35)`
  - `--primary-cyan`: `#00f2fe`
  - `--primary-glow`: `rgba(0, 242, 254, 0.25)`
  - `--secondary-emerald`: `#10b981` (and `#4edea3`)
  - `--warning-amber`: `#f59e0b`
  - `--critical-red`: `#ef4444`
  - `--text-white`: `#f8fafc` / `#dee2f5`
  - `--text-slate`: `#94a3b8` / `#b9cacb`
  - `--text-muted`: `#475569`
- **Synthetic Background Grid**:
  ```css
  .telemetry-grid {
    background-image: 
      linear-gradient(to right, rgba(56, 189, 248, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
    background-size: 32px 32px;
  }
  ```
- **HUD Utilities**:
  - `.hud-edge-glow`: `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 0 12px rgba(0, 242, 254, 0.08);`
  - `.cyan-glow-hover:hover`: `box-shadow: 0 0 14px rgba(0, 242, 254, 0.28), 0 0 1px rgba(0, 242, 254, 0.9);`
  - Pulsing radar beacon keyframe animation.
  - Zero-radius square edge styling for tactical avionics look.

---

## 2. Component Structure in `src/components/`

### A. `src/components/CommandBar.jsx`
- Fixed top navigation bar (`border-b border-[#1e293b] bg-[#090e1b] sticky top-0 z-50`).
- Left: Pulsing emerald beacon (`radar-pulse`), branding: `SYS.ARCH // SPENCER LOWE [OP-CON]`, and live status chip: `SYS.STATUS: LIVE • DENTALQORE CLIENT RETENTION • BYU-IDAHO BSE`.
- Center: Telemetry navigation anchors: `01 // ORCHESTRATION`, `02 // BENTO PLATFORMS`, `03 // CAREER MATRIX`, `04 // DISPATCH TERM`.
- Right: `INITIALIZE UPLINK` button (smooth scrolls to `#dispatch-term`) and direct LinkedIn link.

### B. `src/components/HeroCockpit.jsx`
- 12-column asymmetric layout (`grid grid-cols-1 lg:grid-cols-12 gap-6 items-start`).
- **Left Column (`lg:col-span-5`)**:
  - Overline badge: `SYS-ID: SPENCER-LOWE // SPEC: AGENTIC-AI & OP-EXEC • LOC: UT // PING: 18MS`
  - Display headline in Space Grotesk: *"Engineering resilient <span className="text-[#00f2fe] underline decoration-[#00f2fe]/40 underline-offset-8">multi-agent systems</span> with executive operational governance."*
  - Bio paragraph describing Spencer's rare combination of bleeding-edge autonomous agent development (function calling, stateful delegation graphs, localized Hermes inference, agentic RAG) with real-world high-stakes crisis leadership (former COO commanding 24/7 emergency infrastructure across 45+ staff and 350 beds; currently scaling client retention and web marketing at DentalQore while completing BSE at BYU-Idaho).
  - 4-metric telemetry cluster:
    1. `45+` — Direct Staff // COO Crisis Op
    2. `350-BED` — 24/7 Rescue Facility
    3. `<74ms` — Local Inference P95 (Hermes 3 on Self-Hosted Rig)
    4. `99.94%` — Tool Execution Fidelity (Guardrailed Deterministic Runs)
  - Action buttons: `EXPLORE AGENTIC SUITE` and `INSPECT OPERATIONAL DOSSIER`.
  - Architecture footnote: `STACK: LANGGRAPH • VLLM • HERMES-3 • FASTAPI • DOCKER | 100% AIRGAPPED CAPABLE`.

### C. `src/components/OrchestrationCanvas.jsx`
- Sits in `lg:col-span-7` inside `HeroCockpit`.
- Tactical terminal header bar with live tokens/sec counter (`94.2 t/s`), memory buffer (`412 MB`), and a sub-second real-time mission clock (`HH:MM:SS.mmm` updated via `useEffect`).
- Interactive 3-tab switch with state:
  1. **ROUTING TOPOLOGY (`trace`)**:
     - `NODE_00: ORCHESTRATOR_DISPATCHER` delegating to 3 subagents:
       - Subagent A: Research Agent (`search_arxiv`) — 12 papers indexed
       - Subagent B: Synthesis Agent (`Hermes-3-8B-Q4`) — streaming 1,842 tokens
       - Guard Node: Deterministic Filter (`boundary_eval`) — 100% compliant
     - Sink node: `STATE_HANDOFF: Aggregated Context validated via Pydantic model (P95: 78.4ms)`.
  2. **STREAMING TELEMETRY (JSON) (`logs`)**:
     - Terminal stream displaying syntax-highlighted live JSON RPC trace with `trace_id`, `active_orchestrator`, tool arguments, and latency breakdown.
  3. **STATE BUFFER & MEMORY (`state`)**:
     - 4 telemetry cards: Short-Term KV session buffer, Qdrant Vector Index (48,190 vectors), Rollback Checkpoint, and Zero Exfiltration safety firewall.
- Bottom sparkline strip with token velocity and active host tag: `HOST: SPENCER-WORKSTATION-01 [vLLM-CONTAINER]`.

### D. `src/components/BentoPlatforms.jsx`
- Section 02: `SYSTEMS ARCHITECTURE // 02 CORE PLATFORMS`.
- Interactive 4-card bento grid (uncollapsed, always visible):
  - **Card 1: Multi-Agent Task Orchestrator** (LangGraph DAG, dynamic tool registration, self-healing loop recovery, visual runtime DAG flow).
  - **Card 2: Agentic RAG & Knowledge Synthesizer** (Dense HNSW + sparse BM25 hybrid retrieval, cross-encoder rerank, recall/NDCG stats, attribution tokens).
  - **Card 3: Deterministic Safety Guardrails** (Pydantic V2 schema enforcement, prompt firewall, tool sandboxing, 100% pass rate).
  - **Card 4: Homelab Model Gateway** (Self-hosted 24GB VRAM rig, Hermes-3 models, vLLM/Ollama, sub-80ms TTFT, zero external data leakage).

### E. `src/components/CareerMatrix.jsx`
- Section 03: `OPERATIONAL FOUNDATION // 03 HIGH-STAKES GOVERNANCE`.
- Subtitle: *"Real-World Crisis Leadership Fuels Software Reliability — Software reliability does not originate solely in unit tests—it originates in high-pressure organizational leadership where systems cannot fail."*
- 6-era high-density tactical card matrix (3x2 grid):
  - **Era 06 (Present)**: Software Engineering & Client Relations — DentalQore & BYU-Idaho BSE Candidate.
  - **Era 05 (Executive)**: Chief Operating Officer — Good Samaritan Rescue Mission (350 beds, 45+ direct staff, 24/7 uninterrupted crisis operations).
  - **Era 04 (Multi-Unit)**: Regional Operations Manager — BatteriesPlus (Multi-unit retail P&L, talent acquisition, Eastern WA & Northern ID).
  - **Era 03 (Enterprise B2B)**: Enterprise Account Manager — T-Mobile USA ($250k+ ARR contracts, 96.2% retention, SLAs).
  - **Era 02 (Technical Sales)**: Consultative Solutions Advisor — Sprint/Nextel (Push-to-talk fleet dispatch, top 10% regional ranking).
  - **Era 01 (Foundation)**: General Manager — The American Diner (Full establishment P&L, supply chain procurement, 15+ crew).

### F. `src/components/TerminalDispatch.jsx` & `src/components/Footer.jsx`
- Section 04: `COMMUNICATION UPLINK // 04 DISPATCH TERM`.
- Interactive simulated Bash prompt (`> echo $SPENCER_LOWE_TARGET_ROLES`, `> initiate-handshake`).
- One-click copy command: `curl -s https://spencerlowe.com/key.pub | gpg --import`.
- Direct contact cards for `spencer@spencerlowe.com`, verified LinkedIn, and GitHub.
- Ground Control footer: `SPENCER LOWE // MISSION GROUND CONTROL V4.2.0 • ALL SYSTEMS OPERATIONAL [NOMINAL 99.98% TELEMETRY] • ENGINEERED IN UTAH`.

---

## 3. Main Assembly (`src/App.jsx`)
- Assembles `CommandBar`, `HeroCockpit`, `BentoPlatforms`, `CareerMatrix`, `TerminalDispatch`, and `Footer`.
- Update `index.html` title, meta description, and Google Fonts links to include `Space Grotesk`, `Geist`, and `JetBrains Mono`.

## 4. Quality & Build Gates
- Run `npm run build` — must build cleanly with 0 errors.
- Run `npm run lint` — must pass ESLint with 0 errors.
- Ensure all interactive tabs, clocks, and copy buttons work without console errors.
