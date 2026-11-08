---
name: Orbital Telemetry & Systems HUD
colors:
  surface: '#0e1320'
  surface-dim: '#0e1320'
  surface-bright: '#343947'
  surface-container-lowest: '#090e1b'
  surface-container-low: '#161b29'
  surface-container: '#1a1f2d'
  surface-container-high: '#252a38'
  surface-container-highest: '#303443'
  on-surface: '#dee2f5'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dee2f5'
  inverse-on-surface: '#2b303e'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dce6'
  primary: '#e0fdff'
  on-primary: '#00373a'
  primary-container: '#00f2fe'
  on-primary-container: '#006a70'
  inverse-primary: '#00696f'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#fff5ee'
  on-tertiary: '#472a00'
  tertiary-container: '#ffd3a1'
  on-tertiary-container: '#875400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ff6ff'
  primary-fixed-dim: '#00dce6'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0e1320'
  on-background: '#dee2f5'
  surface-variant: '#303443'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  metric-xl:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  metric-md:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: -0.01em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  micro-tag:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.08em
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
  space-2xl: 3rem
---

## Brand & Style
This design system defines an operational, mission-critical workspace for high-level software engineering, autonomous agent orchestration, and executive technical operations. Drawing directly from aerospace flight software, deep-space telemetry ground stations, and high-throughput developer consoles, the aesthetic projects uncompromising precision, technical authority, and total system transparency.

The visual language rejects decorative ornamentation in favor of instrumental density, high-information bandwidth, and razor-sharp structural delineation. Interfaces are organized as instrument clusters and data terminals:
- **Atmospheric Palette:** Midnight void foundations punctuated by luminescent primary emitters and status signals.
- **Architectural Tenets:** Unyielding modularity, micro-ruled metric matrices, subtle synthetic scanline/grid overlays, and unambiguous spatial hierarchies.
- **Tone & Demeanor:** Controlled, analytical, high-acuity, and authoritative. Designed for engineers, researchers, and technical leaders who evaluate capabilities through structural rigor, measurable telemetry, and functional command rather than marketing gloss.

## Colors
The color architecture functions strictly as an operational status system. Color carries functional diagnostic weight, separating foundational surfaces, active instruments, system health signals, and nominal/fault states.

### Core Roles
- **Base Surfaces & Canvas:** Deep telemetry space tones. The primary void canvas is `#080c14`, stepped up through `#0d121f` (containers, terminal cells) to `#131b2e` (elevated control heads, hovered data racks). Structural division borders use muted optical boundaries (`#1e293b` and translucent cyan tints).
- **Primary Telemetry (`#00f2fe`):** Electric Cyan represents active execution, primary callouts, focus rings, focused data streams, and dynamic system state.
- **Secondary Telemetry (`#10b981`):** Precision Emerald signals nominal statuses, verified uptime, authenticated agents, and operational equilibrium.
- **Auxiliary Vector (`#38bdf8`):** Atmospheric Cyan/Sky handles structural secondary indicators, linked node dependencies, and secondary metrics.
- **Alert / Intervention (`#f59e0b`):** Amber Warn denotes threshold overshoots, pending reviews, latency spikes, and agentic fallback conditions.
- **Critical Abort (`#ef4444`):** Red Alert signals anomalous termination, pipeline failure, and high-risk interventions.
- **Data Neutrals & Ink:** High-luminance white (`#f8fafc`) for dominant figures and critical headings; mid-tone slate (`#94a3b8`) for operational copy; dimmed phosphor (`#475569`) for grid labels, bracket markings, and structural micro-metadata.

## Typography
Typographic rhythm balances structural geometric display forms with rigorous monospaced data streams and highly readable explanatory prose:
- **Headlines & Identifiers (Space Grotesk):** Engineered, architectural display typography. Tight line heights and negative letter-spacing reinforce structural compression and control room authority.
- **Narrative & Prose (Geist):** Clean, crisp, neutral sans-serif handling dense systems architecture briefs, strategic documentation, and case retrospectives without fatigue.
- **Instruments, Metrics & Telemetry (JetBrains Mono):** Dedicated to technical readouts, operational logs, latency markers, commit hashes, code tokens, and system counters. Always formatted with tabular numerical figures to preserve column alignment under real-time state mutations.
- **Case Formatting:** Technical metadata and status tags enforce all-caps transformation (`text-transform: uppercase`) paired with positive tracking (`0.06em` to `0.08em`) for immediate scannability.

## Layout & Spacing
The layout follows a high-density, multi-panel HUD framework governed by an adaptive 12-column matrix with strict coordinate logic.

### Grid & Composition Rules
- **Desktop (1280px+):** Strict 12-column division with `1.5rem` gutters. Layouts partition into distinct command sectors: persistent telemetry status bar (header), left/right modular instrument racks, and a dominant center operations canvas.
- **Tablet (768px - 1279px):** 6-column reflow. Peripheral instrument racks collapse into modular stacked drawers and tabbed viewports. Gutters calibrate to `1rem` and canvas margins to `2rem`.
- **Mobile (<768px):** Single-column stacked telemetry stream with fixed viewport edge pinning (`1rem` margins). Horizontal scrollers preserve dense micro-gauge readouts without line wraps.
- **Spacing Principle:** Compact, structural padding. Component interiors favor `space-sm` (`0.5rem`) to `space-md` (`0.75rem`) to eliminate artificial buffer bloat and maintain tactical density. Section boundaries rarely exceed `space-2xl` (`3rem`), preserving the continuous spatial continuity of an active mission control console.

## Elevation & Depth
Elevation eschews soft, diffuse corporate drop shadows. Depth is achieved entirely through calibrated tonal surfaces, structural low-contrast borders, and focused electrical luminescence.

### Spatial Stratification
1. **Ground Void (Level 0):** `#080c14` with a hairline crosshatch background grid rendered in `rgba(56, 189, 248, 0.03)` at 32px intervals.
2. **Terminal Bays & Module Tiles (Level 1):** `#0d121f` surfaced with a solid 1px border of `#1e293b`. Inner margins feature subtle technical framing indicators (corner crosshairs or cut tick-marks).
3. **Floating HUD Overlays & Modal Diagnostics (Level 2):** `#131b2e` with a 1px border of `rgba(0, 242, 254, 0.35)` and a razor-thin internal edge ring (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08)`).
4. **Active/Targeted Focal Emittance:** Interaction triggers an electric hairline glow using pure primary tinting: `0 0 12px rgba(0, 242, 254, 0.25), 0 0 1px rgba(0, 242, 254, 0.8)`. Diffuse blur radii remain strictly under 16px to prevent wash-out.

## Shapes
Geometry is strictly mechanical, non-rounded, and surgical:
- **Zero Radius (`roundedness: 0`):** All panels, buttons, cards, status pills, and input controls employ pure 0px squared corners. This reflects physical avionics panels, chassis enclosures, and digital oscilloscopes.
- **Chamfered / Beveled Accents:** Primary instrument containers and highlighted hero modules utilize CSS clip-path chamfered corners (angled 45° cuts of 4px to 8px) on opposing diagonal vertices (top-left / bottom-right) to reinforce engineered aerospace construction.
- **Bracket Motifs:** High-priority cards feature decorative or structural outer bracket lines (`[` and `]`) rendered in hairline CSS pseudo-elements to isolate core mission metrics.

## Components

### Buttons & Action Triggers
- **Primary Control Unit:** Squared boundary, `#00f2fe` solid background or black background with 1px `#00f2fe` border. Text in `JetBrains Mono` bold uppercase. Hover shifts to an inverted electric state with an instantaneous 100ms optical transition and a faint `rgba(0, 242, 254, 0.2)` cyan halo.
- **Secondary Command:** Dark `#0d121f` base, 1px `#334155` border, `#94a3b8` label. Hover illuminates border to `#38bdf8` and text to `#f8fafc`.
- **System Destructive / Override:** Crimson outline (`#ef4444`), dark ground, transitioning to solid alert red on confirmation hold.

### Micro-Badges & Status Telemetry Pills
- **Execution State:** Height 20px, font `micro-tag` (10px monospaced), padding `0 6px`, square corners.
- **Nominal / Live:** `#10b981` text, `rgba(16, 185, 129, 0.1)` fill, 1px `rgba(16, 185, 129, 0.4)` border. Prefixed with a pulsating 4px green beacon dot.
- **Degraded / Standby:** `#f59e0b` text, `rgba(245, 158, 11, 0.1)` fill, 1px `rgba(245, 158, 11, 0.3)` border.
- **Static Metadata:** `#475569` border, `#94a3b8` text, `#080c14` fill.

### Cards & Module Containers
- **Dashboard Data Tile:** `#0d121f` background, 1px border `#1e293b`. Top bar contains a 24px header strip with monospaced panel coordinates (e.g., `SEC-04 // SYS.AGNT`), right-aligned latency/uptime stats, and an optional 1px horizontal rule separating title from data body.
- **Project & Portfolio Deck:** Multi-tier architectural breakdown. Shows architecture diagrams, interactive terminal traces, agentic system throughput, and live github/deployment links framed in an avionics chassis.

### Lists & Telemetry Streams
- High-density tabular layout. Alternating micro-striping (`rgba(255, 255, 255, 0.015)` on even rows), hairline dividers `#131b2e`, numerical columns right-aligned in `JetBrains Mono`. Monospace timestamps pinned to the left column.

### Form Inputs & Terminal Command Prompts
- Background `#05080f`, inset border `#1e293b`, text `#f8fafc`. Focus replaces border with 1px `#00f2fe` and a faint internal glow. Monospaced prompt prefix (`> ` or `sys:~$ `) in `#00f2fe`.

### Domain-Specific Additions
- **Oscilloscope / Telemetry Sparlines:** Embedded SVG canvas elements tracing real-time system metrics (e.g., tokens/sec, workflow latency, memory usage) using glowing `#00f2fe` and `#10b981` lines with gradient drop-offs to transparent.
- **Architecture Node Graph:** Monospaced vector nodes detailing autonomous agent pipelines, routing models, LLM orchestrators, and executive automation loops.