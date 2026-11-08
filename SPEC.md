# Technical Specification: Spencer Lowe Mission Control & Telemetry Portfolio

## 1. Executive Summary & Objective
Transform the personal web application for **Spencer Lowe** into an elite, high-density **Mission Control & Telemetry Command Interface** that demonstrates his dual identity:
1. **Agentic Systems Architect**: Engineering autonomous multi-agent systems, function-calling pipelines, localized open-weights LLM inference (Hermes 3), deterministic guardrails, and hybrid RAG.
2. **Executive Operational Leader**: Battle-tested governance derived from directing a 24/7 350-bed crisis shelter with 45+ personnel, managing multi-unit retail P&L, and leading client retention/SEO at DentalQore.

## 2. Design System Architecture: Orbital Telemetry & Systems HUD
- **Canvas / Ground Void**: Deep telemetry void (`#080c14` / `#0e1320`), crosshatched with a subtle synthetic SVG/CSS hairline grid at 32px intervals (`rgba(56, 189, 248, 0.03)`).
- **Surface Elevation**:
  - Bays & Module Tiles: `#0d121f` surfaced with 1px border `#1e293b`.
  - Floating HUD Overlays: `#131b2e` with 1px border `rgba(0, 242, 254, 0.35)` and subtle inner edge highlight.
- **Color Roles**:
  - Primary Telemetry (`#00f2fe`): Electric Cyan for active execution, cursor focus, node triggers.
  - Secondary Telemetry (`#10b981` / `#4edea3`): Precision Emerald for verified status, nominal beacons, pass states.
  - Alert / Telemetry Warn (`#f59e0b`): Signal Amber for latency thresholds, warnings, and active checkpoints.
  - Critical Alert (`#ef4444`): Crimson for anomalies and boundary trips.
  - Ink & Neutrals: High-luminance white (`#f8fafc`) for headers, Slate (`#94a3b8`) for descriptions, Dimmed Phosphor (`#475569`) for micro-tags.
- **Typography**:
  - Display / Headlines: `Space Grotesk`
  - Body & Documentation: `Geist`
  - Instruments, Code, & Telemetry: `JetBrains Mono`

## 3. Structural Sections & Interactive Components
1. **Command Bar Header (`TopNavBar`)**:
   - Fixed HUD banner with live status pulse (`SYS.STATUS: LIVE • DENTALQORE CLIENT RETENTION • BYU-IDAHO BSE`).
   - Monospace telemetry navigation links (`ORCHESTRATION`, `BENTO PLATFORMS`, `CAREER MATRIX`, `DISPATCH TERM`).
   - Quick action triggers (`INITIALIZE UPLINK`, LinkedIn link).
2. **Hero Viewport (Cockpit / Mission Control Stage)**:
   - **Left Column (Executive Dossier)**:
     - Track-tight Space Grotesk headline: *"Engineering resilient multi-agent systems with executive operational governance."*
     - Executive summary highlighting the intersection of autonomous agents with 24/7 crisis center leadership.
     - 4-metric telemetry cluster: 45+ Direct Staff (COO), 350-Bed Crisis Facility, <74ms Local Inference (Hermes 3), 99.94% Tool Execution Fidelity.
     - Quick CTA buttons (`EXPLORE AGENTIC SUITE`, `INSPECT OPERATIONAL DOSSIER`).
   - **Right Column (Live Agent Orchestration Canvas)**:
     - Real-time sub-second mission control clock (`HH:MM:SS.mmm`).
     - Interactive 3-mode tab switcher:
       1. `ROUTING TOPOLOGY`: Interactive DAG node graph with Orchestrator Node routing to Research Subagent (`search_arxiv`), Synthesis Subagent (`Hermes-3-8B-Q4`), and Guardrail Filter (`boundary_eval`).
       2. `STREAMING TELEMETRY (JSON)`: Live interactive JSON RPC trace with auto-flush and expandable argument payloads.
       3. `STATE BUFFER & MEMORY`: Ephemeral memory session, vector index (Qdrant HNSW), rollback checkpoints, and LAN containment rule.
     - Real-time sparkline telemetry (token velocity counter at 94.2 t/s, 0.00% error rate).
3. **Agentic Systems Architecture Suite (Uncollapsed Bento Grid)**:
   - 4 full-width/2x2 interactive cards (no collapsed accordions):
     - **Card 1: Multi-Agent Task Orchestrator** (LangGraph DAG execution, dynamic tool registration, self-healing loop recovery).
     - **Card 2: Agentic RAG & Knowledge Synthesizer** (Dense HNSW + sparse BM25 hybrid retrieval, cross-encoder rerank, attribution tokens).
     - **Card 3: Deterministic Safety Guardrails** (Pydantic V2 schema enforcement, prompt firewall, tool sandboxing).
     - **Card 4: Homelab Model Gateway** (Self-hosted 24GB VRAM cluster running quantized Hermes-3 via vLLM/Ollama, zero data leakage).
4. **Executive Operations & Leadership Matrix (Dual-Track Chronology)**:
   - Comprehensive 6-era breakdown proving that software reliability stems from high-pressure real-world leadership:
     - Era 06: Present — Software Engineering (BYU-Idaho) & Client Relations (DentalQore)
     - Era 05: Chief Operating Officer — Good Samaritan Rescue Mission (350 beds, 45+ personnel, 24/7 operations)
     - Era 04: Regional Operations Manager — BatteriesPlus (Multi-unit retail P&L, Eastern WA / Northern ID)
     - Era 03: Enterprise Account Manager — T-Mobile USA ($250k+ ARR contracts, 96.2% retention)
     - Era 02: Consultative Solutions Advisor — Sprint/Nextel (Top 10% regional ranking, push-to-talk fleet)
     - Era 01: General Manager — The American Diner (Full establishment P&L, 15+ crew)
5. **Terminal Dispatch Console & Footer**:
   - Simulated interactive Bash terminal prompt (`> echo $SPENCER_LOWE_TARGET_ROLES`, `> initiate-handshake`).
   - One-click copyable curl/PGP command.
   - Direct communication channels (mailto: `spencer@spencerlowe.com`, verified LinkedIn, GitHub).
   - Bottom status bar with geo metadata (`ENGINEERED IN UTAH // AIR-GAPPED HARDWARE CERTIFIED`).

## 4. Engineering & Implementation Requirements
- Pure React 19 + Vite component architecture.
- Modular component division in `src/components/`:
  - `CommandBar.jsx`
  - `HeroCockpit.jsx`
  - `OrchestrationCanvas.jsx`
  - `BentoPlatforms.jsx`
  - `CareerMatrix.jsx`
  - `TerminalDispatch.jsx`
  - `Footer.jsx`
- Clean CSS variables in `src/index.css` reflecting the `Orbital Telemetry & Systems HUD` tokens.
- Responsive reflow: Desktop 12-column cockpit $\rightarrow$ Tablet 6-column reflow $\rightarrow$ Mobile single-column stacked telemetry with zero horizontal overflow.
- All builds must pass `npm run build` and `npm run lint` with 0 warnings/errors.
