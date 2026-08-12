import { useEffect, useState, useRef } from 'react';

// Featured Agentic Projects & Systems Architecture
const AGENTIC_PROJECTS = [
  {
    id: 'multi-agent-orchestrator',
    title: 'Multi-Agent Task Orchestrator',
    category: 'Agent Architecture',
    badge: 'Multi-Agent System',
    desc: 'Autonomous multi-agent coordination engine that decomposes complex operational goals into specialized sub-tasks, managing state handoffs, tool execution, and dynamic model selection.',
    tags: ['Multi-Agent Systems', 'Tool Calling', 'State Management', 'Model Routing'],
    highlights: ['Subagent Delegation', 'Automated Loop Recovery', 'Dynamic Tools']
  },
  {
    id: 'agentic-rag-engine',
    title: 'Agentic RAG & Knowledge Synthesizer',
    category: 'Information Retrieval',
    badge: 'RAG Architecture',
    desc: 'Intelligent retrieval-augmented generation engine utilizing query decomposition, vector embeddings, and multi-step reasoning to synthesize verifiable answers from complex document stores.',
    tags: ['RAG Architecture', 'Vector Search', 'Semantic Retrieval', 'Context Windowing'],
    highlights: ['Query Decomposition', 'Context Filtering', 'Source Attribution']
  },
  {
    id: 'agent-eval-harness',
    title: 'Agent Evaluation & Safety Guardrails',
    category: 'System Governance',
    badge: 'Eval Framework',
    desc: 'Automated evaluation suite for verifying agent tool executions, enforcing strict behavioral boundaries, and measuring step-by-step reasoning accuracy across complex task trajectories.',
    tags: ['Eval Harnesses', 'Guardrails', 'Human-in-the-Loop', 'Reliability Evals'],
    highlights: ['Trajectory Scopes', 'Boundary Checks', 'Deterministic Fallbacks']
  },
  {
    id: 'homelab-llm-gateway',
    title: 'Homelab Inference & Model Gateway',
    category: 'Infrastructure',
    badge: 'Local LLM Architecture',
    desc: 'Self-hosted LLM runtime environment orchestrating local open-weights models (Hermes) with hybrid cloud fallbacks for private, low-latency agent execution.',
    tags: ['Hermes Models', 'Local Inference', 'OpenRouter API', 'Hybrid Architecture'],
    highlights: ['Local Execution', 'API Fallbacks', 'Low Latency']
  }
];

// Reverse chronological timeline item data representing Spencer's career steps (Present to Past)
const TIMELINE_DATA = [
  {
    id: 6,
    era: 'Engineering Era (Present)',
    title: 'Software & Agentic Systems',
    subtitle: 'Client Relations, Dental Tech & BSE Software Engineering (Candidate)',
    roles: [
      'Client Relations & Web Marketing — DentalQore (American Fork, UT)',
      'Software Engineering Student — BYU–Idaho',
      'Regional Account Executive — AutoWeb (American Fork, UT)'
    ],
    valueStatement: 'Bridges client relations and web technology with software engineering & AI systems. Fuses active client retention and SEO architecture with autonomous agent workflows and executive operational leadership.',
    desc: 'Leading client relations and digital web strategy at DentalQore while completing my Bachelor of Science in Software Engineering at BYU–Idaho. Architecting SEO and web performance initiatives that enhance search visibility and patient acquisition, while actively engineering AI agent workflows, function calling, local LLM inference (Hermes), and RAG systems.',
    metrics: [
      { label: 'Current Role', value: 'Client Relations (DentalQore)' },
      { label: 'Academics', value: 'BSE Final Year (BYU-Idaho)' },
      { label: 'Core Stack', value: 'React / Node / C# / TypeScript / Hermes / Python' }
    ],
    badges: ['Dental Tech & SEO Strategy', 'Client Relations & Retention', 'BSE Software Engineering', 'Autonomous Agents', 'Multi-Agent Workflows', 'LLM Tool Calling']
  },
  {
    id: 5,
    era: 'Nonprofit Leadership Era',
    title: 'Nonprofit Operations & Executive Leadership',
    subtitle: '24/7 Facility Operations, Budget Administration & Team Leadership',
    roles: ['Chief Operating Officer — Good Samaritan Rescue Mission (Corpus Christi, TX)'],
    valueStatement: 'Led day-to-day administrative logistics for a 24/7 crisis center. Managed 45+ staff and navigated complex regulatory compliance, public relations, and public/private funding channels.',
    desc: 'Directed comprehensive day-to-day administrative and facility operations for a 350-bed emergency housing shelter operating continuously 24/7/365. Led a cross-functional staff of 45+ personnel across multiple departments, guaranteeing uninterrupted delivery of critical care infrastructure, residential services, and three daily meals. Handled policy implementation, budget execution, compliance audits, public relations, and stakeholder alignment to sustain operational excellence and community trust.',
    metrics: [
      { label: 'Shelter Capacity', value: '350 Residents' },
      { label: 'Staff Led', value: '45+ Members' }
    ],
    badges: ['Executive Operations', '24/7 Facility Management', 'Budget & Compliance', 'Nonprofit Leadership', 'Stakeholder Relations']
  },
  {
    id: 4,
    era: 'Leadership Era',
    title: 'Operations Management',
    subtitle: 'Multi-Unit Retail Operations, Financial Oversight & Talent Acquisition',
    roles: ['Regional Operations Manager — BatteriesPlus (Eastern WA / Northern ID)'],
    valueStatement: 'Directed multi-unit regional retail activity, store audits, and administrative logistics. Managed AP/AR flows, executed asset acquisitions, and built leadership pipelines.',
    desc: 'Oversaw multi-unit retail operations across Eastern Washington and Northern Idaho, managing all regional commercial activity and strategic growth initiatives. Directly responsible for hiring and mentoring store managers, conducting audits, and directing financial workflows including P&L oversight, AP/AR administration, and asset acquisition. Focused on improving operational efficiencies, managing overhead, and optimizing unit profitability across all retail locations.',
    metrics: [
      { label: 'P&L Oversight', value: 'Multi-Unit' },
      { label: 'Coverage', value: 'Eastern WA / Northern ID' }
    ],
    badges: ['Multi-Unit Retail', 'P&L Oversight', 'AP/AR Workflows', 'Asset Acquisition', 'Talent Acquisition']
  },
  {
    id: 3,
    era: 'B2B Sales Era',
    title: 'B2B Cellular Sales',
    subtitle: 'Account Management, Contract Negotiation & Business Solutions',
    roles: ['Account Manager — T-Mobile USA (Eastern WA / Northern ID)'],
    valueStatement: 'Managed high-value ARR commercial contracts and account pipelines. Specialized in negotiating SLAs, mitigating churn, and aligning corporate communication infrastructure.',
    desc: 'Transitioned from consumer retail to enterprise accounts, providing cellular voice and data architecture to local companies. Conducted needs-analysis consultations, drafted service level agreements (SLAs), and negotiated volume discount pricing. Cultivated long-term commercial accounts, keeping client churn minimal through proactive relationship audits.',
    metrics: [
      { label: 'Client Retention', value: '96%' },
      { label: 'Contract Signings', value: '$250k+ ARR' }
    ],
    badges: ['Account Management', 'SLA Drafting', 'Contract Negotiation', 'Commercial Sales', 'Client Retention']
  },
  {
    id: 2,
    era: 'Retail Sales Era',
    title: 'Cellular Retail Sales',
    subtitle: 'Direct Consumer Sales & Consultative Customer Relations',
    roles: ['Sales Consultant — Sprint/Nextel (Spokane, WA)'],
    valueStatement: 'Mastered consultative sales and direct client relations. Developed a sharp feedback loop for active listening and translating complex technical specifications into consumer benefits.',
    desc: 'Engaged with prospective clients daily to solve communication and cellular hardware needs. Consistently exceeded sales quotas, ranked in top percentiles for accessory and protection plan attach-rates, and acted as a technical product advisor. Mastered active listening, objection handling, and translating technical specs into consumer benefits.',
    metrics: [
      { label: 'Sales Quota', value: '120% Avg' },
      { label: 'Region Rank', value: 'Top 10%' }
    ],
    badges: ['Direct Sales', 'Customer Relations', 'Active Listening', 'Objection Handling', 'Product Advisory']
  },
  {
    id: 1,
    era: 'Hospitality Era',
    title: 'Hospitality & Restaurant Operations',
    subtitle: 'Full-Scale Operations, P&L Ownership & Team Development',
    roles: ['General Manager — The American Diner (Spokane, WA)'],
    valueStatement: 'Refined high-pressure operations and supply chain management. Fused strict cost controls with customer-first leadership to maximize cash flow and unit economics.',
    desc: 'Directed full-scale operations for a high-volume fast-casual dining establishment, holding ultimate accountability for P&L performance, inventory supply chains, and staff lifecycle management. Spearheaded product procurement and vendor negotiations while orchestrating labor scheduling, recruitment, onboarding, and performance management. Established robust operational standards and quality controls to drive brand loyalty, improve unit economics, and ensure complete regulatory compliance.',
    metrics: [
      { label: 'Establishment', value: 'Full Operations' },
      { label: 'Team Size', value: '15+ Crew' }
    ],
    badges: ['P&L Ownership', 'Procurement & Inventory', 'Labor Scheduling', 'Talent Acquisition', 'Regulatory Compliance']
  }
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [showProjects, setShowProjects] = useState(false);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);

  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % AGENTIC_PROJECTS.length);
  };

  const handlePrevProject = () => {
    setActiveProjectIndex((prev) => (prev - 1 + AGENTIC_PROJECTS.length) % AGENTIC_PROJECTS.length);
  };

  // Parallax scroll effect and timeline progress calculator
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate the height scroll progress of the timeline
        // Progress starts when top of timeline is at middle of viewport
        const startOffset = rect.top - viewportHeight * 0.5;
        const totalHeight = rect.height;

        if (startOffset < 0) {
          const scrolled = -startOffset;
          const pct = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100));
          setProgressHeight(pct);
        } else {
          setProgressHeight(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Custom mouse move tilt effect handler
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const maxTilt = 6; // Limit angle for a subtle effect
    const rotateX = ((yc - y) / yc) * maxTilt;
    const rotateY = ((x - xc) / xc) * maxTilt;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  const scrollToContent = () => {
    const content = document.getElementById('main-content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeProject = AGENTIC_PROJECTS[activeProjectIndex];

  return (
    <div>
      {/* Hero Canopy Section */}
      <section className="hero" ref={heroRef}>
        <div 
          className="hero-bg-container" 
          style={{ transform: `scale(1.05) translateY(${scrollY * 0.35}px)` }} 
        >
          <video 
            className="hero-video" 
            src="/forest-hero-1280-2.mp4"
            poster="/forest-poster.jpg"
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="hero-overlay" />
        </div>
        <div className="mist-layer mist-layer-1" />
        <div className="mist-layer mist-layer-2" />
        <div className="rain-overlay" />
        
        <div className="hero-content">
          <blockquote className="hero-quote">
            "The forest speaks in whispers of mist and pine—where every path is a question, and every shadow a memory."
          </blockquote>
          <cite className="hero-quote-author">— Washington Forests</cite>
        </div>

        <button className="hero-scroll-btn" onClick={scrollToContent} aria-label="Scroll to profile content">
          <span>Discover My Path</span>
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      {/* Main Profile & Timeline Section */}
      <main className="main-content" id="main-content">
        
        <div className="container">
          
          {/* Tech Block Container wrapping Profile & Projects with dynamic 100vw Circuit Motion Background */}
          <div className="tech-block-wrapper">
            
            {/* Full-Bleed 100vw SVG Tech Circuit & Data Stream Motion Background dynamically covering profile & dropdown showcase */}
            <div className="fullbleed-circuit-bg">
              <svg className="circuit-svg" viewBox="0 0 1920 1000" preserveAspectRatio="none">
                {/* Extended Full-Bleed Circuit Traces */}
                <path d="M 0 100 L 400 100 L 550 240 L 1400 240 L 1550 120 L 1920 120" stroke="rgba(116, 198, 157, 0.25)" strokeWidth="1.5" fill="none" />
                <path d="M 0 550 L 500 550 L 700 380 L 1500 380 L 1700 550 L 1920 550" stroke="rgba(116, 198, 157, 0.2)" strokeWidth="1.5" fill="none" />
                <path d="M 300 0 L 300 350 L 600 350 L 900 650 L 1600 650 L 1920 850" stroke="rgba(116, 198, 157, 0.2)" strokeWidth="1.5" fill="none" />
                <path d="M 1600 0 L 1600 280 L 1250 580 L 350 580 L 100 820" stroke="rgba(116, 198, 157, 0.25)" strokeWidth="1.5" fill="none" />
                <path d="M 1200 100 L 800 100 L 550 320 L 0 320" stroke="rgba(116, 198, 157, 0.2)" strokeWidth="1.5" fill="none" />
                
                {/* Junction Nodes */}
                <circle cx="400" cy="100" r="4" fill="rgba(116, 198, 157, 0.6)" />
                <circle cx="550" cy="240" r="4" fill="rgba(116, 198, 157, 0.6)" />
                <circle cx="1400" cy="240" r="4" fill="rgba(116, 198, 157, 0.6)" />
                <circle cx="700" cy="380" r="4" fill="rgba(116, 198, 157, 0.6)" />
                <circle cx="600" cy="350" r="4" fill="rgba(116, 198, 157, 0.6)" />
                <circle cx="1250" cy="580" r="4" fill="rgba(116, 198, 157, 0.6)" />
                <circle cx="350" cy="580" r="4" fill="rgba(116, 198, 157, 0.6)" />

                {/* Animated Glowing Data Pulses */}
                <path d="M 0 100 L 400 100 L 550 240 L 1400 240 L 1550 120 L 1920 120" className="data-pulse pulse-1" stroke="var(--color-rain-glow)" strokeWidth="2.5" fill="none" />
                <path d="M 0 550 L 500 550 L 700 380 L 1500 380 L 1700 550 L 1920 550" className="data-pulse pulse-2" stroke="var(--color-rain-glow)" strokeWidth="2.5" fill="none" />
                <path d="M 1600 0 L 1600 280 L 1250 580 L 350 580 L 100 820" className="data-pulse pulse-3" stroke="var(--color-rain-glow)" strokeWidth="2.5" fill="none" />
                <path d="M 1200 100 L 800 100 L 550 320 L 0 320" className="data-pulse pulse-4" stroke="var(--color-rain-glow)" strokeWidth="2.5" fill="none" />
              </svg>
            </div>

            {/* Editorial 2-Column Split Profile Overview */}
            <section className="profile-section animate-on-scroll">
              <div className="profile-split-grid">
                
                {/* Left Column: Title, Subtitle, Highlights, Socials */}
                <div className="profile-info-col">
                  <h1 className="profile-title">Spencer Lowe</h1>
                  <p className="profile-subtitle">Software Engineer & Agentic Systems Developer</p>
                  
                  <div className="profile-highlights">
                    <span className="highlight-badge highlight-badge-primary">BSE Software Engineering (BYU-Idaho)</span>
                    <span className="highlight-badge">Dental Tech & Client Relations</span>
                    <span className="highlight-badge">Agentic AI & Multi-Agent Workflows</span>
                    <span className="highlight-badge">LLM Tool-Calling & RAG Architecture</span>
                    <span className="highlight-badge">Full-Stack Systems (C# / React / Node)</span>
                    <span className="highlight-badge">Executive Operations & Governance</span>
                  </div>

                  {/* Social & Contact Bar */}
                  <div className="social-links-bar">
                    <a 
                      href="https://github.com/NeedleEater" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                      aria-label="GitHub Profile"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/spencerlowe87" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn"
                      aria-label="LinkedIn Profile"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="mailto:spencer@spencerlowe.com" 
                      className="social-btn"
                      aria-label="Email Spencer Lowe"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span>Email</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Glassmorphic Bio Card */}
                <div className="profile-bio-col">
                  <div className="profile-bio-card">
                    <div className="bio-card-content">
                      <p>
                        Bridging software engineering, strategic leadership, and agentic AI, I specialize in full-stack web architectures, autonomous agent workflows, and fluid interactive applications while completing my Bachelor of Science in Software Engineering at BYU–Idaho.
                      </p>
                      <p>
                        In my engineering practice, I focus on building stateful multi-agent systems, tool-calling workflows, local LLM orchestration (Hermes), and RAG architectures that automate complex operations with built-in evaluation guardrails.
                      </p>
                      <p>
                        My earlier career includes executive leadership as COO of a 350-bed crisis shelter and managing multi-unit retail P&L operations—experience that provides a deep foundation in systems governance, operational reliability, and stakeholder alignment.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Revealable / Expandable Agentic Projects Section */}
            <section className="projects-toggle-section animate-on-scroll">
              <div className="projects-reveal-banner">
                <button 
                  className="projects-toggle-btn"
                  onClick={() => setShowProjects(!showProjects)}
                  aria-expanded={showProjects}
                >
                  <div className="toggle-btn-left">
                    <span className="toggle-badge">INTERACTIVE SHOWCASE</span>
                    <span className="toggle-title">Featured Agentic Projects Architecture</span>
                  </div>
                  <div className="toggle-btn-right">
                    <span className="toggle-action-text">{showProjects ? 'Collapse Projects' : 'Explore Projects'}</span>
                    <svg 
                      className={`toggle-chevron ${showProjects ? 'open' : ''}`}
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2"
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </button>

                {/* Revealable Showcase Carousel */}
                {showProjects && (
                  <div className="showcase-container animate-card-fade">
                    {/* Left Column: Spotlight Header, Progress Bar, Nav Controls & Quick Selector */}
                    <div className="showcase-nav-col">
                      <div className="showcase-meta">
                        <span className="showcase-label">FEATURED AGENTIC PROJECTS</span>
                        <span className="showcase-counter">0{activeProjectIndex + 1} &mdash; 0{AGENTIC_PROJECTS.length}</span>
                      </div>
                      
                      <h2 className="showcase-title">Agentic Systems Architecture</h2>
                      <p className="showcase-subtitle">Explore multi-agent frameworks, local LLM gateways, and autonomous tooling.</p>
                      
                      {/* Progress bar */}
                      <div className="showcase-progress-track">
                        <div 
                          className="showcase-progress-bar"
                          style={{ width: `${((activeProjectIndex + 1) / AGENTIC_PROJECTS.length) * 100}%` }}
                        />
                      </div>

                      {/* Quick Project Select Tabs */}
                      <div className="showcase-selector-list">
                        {AGENTIC_PROJECTS.map((proj, pIdx) => (
                          <button
                            key={proj.id}
                            className={`showcase-selector-btn ${pIdx === activeProjectIndex ? 'active' : ''}`}
                            onClick={() => setActiveProjectIndex(pIdx)}
                          >
                            <span className="selector-num">0{pIdx + 1}</span>
                            <span className="selector-name">{proj.title}</span>
                          </button>
                        ))}
                      </div>

                      {/* Large Navigation Action Buttons */}
                      <div className="showcase-action-btns">
                        <button className="showcase-arrow-btn" onClick={handlePrevProject} aria-label="Previous project">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M15 18l-6-6 6-6"/>
                          </svg>
                          <span>Prev</span>
                        </button>
                        <button className="showcase-arrow-btn highlight" onClick={handleNextProject} aria-label="Next project">
                          <span>Next</span>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M9 18l6-6-6-6"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Active Spotlight Card */}
                    <div className="showcase-stage-col">
                      <div 
                        key={activeProject.id} 
                        className="showcase-active-card animate-card-fade"
                        onMouseMove={handleMouseMove} 
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="showcase-card-header">
                          <span className="showcase-card-category">{activeProject.category}</span>
                          <span className="showcase-card-badge">{activeProject.badge}</span>
                        </div>
                        
                        <h3 className="showcase-card-title">{activeProject.title}</h3>
                        <p className="showcase-card-desc">{activeProject.desc}</p>
                        
                        <div className="showcase-highlights">
                          <span className="highlights-label">Architecture Highlights:</span>
                          <div className="highlights-chips">
                            {activeProject.highlights.map((h, hIdx) => (
                              <span key={hIdx} className="highlight-chip">⚡ {h}</span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="showcase-tags">
                          {activeProject.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="showcase-tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Timeline Showcase */}
          <section className="timeline-section">
            <div 
              className="timeline-parallax-bg" 
              style={{ transform: `translateY(${scrollY * 0.08}px)` }} 
            />
            <h2 className="timeline-section-title animate-on-scroll">Experience & Milestones</h2>
            
            <div className="timeline-container" ref={timelineRef}>
              <div 
                className="timeline-progress-line" 
                style={{ height: `${progressHeight}%` }} 
              />
              {TIMELINE_DATA.map((item, idx) => {
                const alignClass = idx % 2 === 0 ? 'left' : 'right';
                return (
                  <div 
                    key={item.id} 
                    className={`timeline-item ${alignClass} animate-on-scroll`}
                  >
                    <div className="timeline-node" />
                    
                    <div className="timeline-card-wrapper">
                      <div 
                        className="timeline-card"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      >
                        <span className="card-era">{item.era}</span>
                        <h3 className="card-title">{item.title}</h3>
                        {item.roles && (
                          <div className="card-roles">
                            {item.roles.map((role, rIdx) => (
                              <div key={rIdx} className="card-role">{role}</div>
                            ))}
                          </div>
                        )}
                        <h4 className="card-subtitle">{item.subtitle}</h4>
                        <div className="card-description">
                          <p>{item.desc}</p>
                        </div>
                        
                        <div className="card-metrics">
                          {item.metrics.map((m, mIdx) => (
                            <div className="metric-item" key={mIdx}>
                              <span className="metric-label">{m.label}</span>
                              <span className="metric-value">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="timeline-badges-wrapper">
                      <div className="timeline-badges-card">
                        <h5 className="badges-card-title">Strategic Value & Skills</h5>
                        {item.valueStatement && (
                          <p className="badges-card-value-statement">{item.valueStatement}</p>
                        )}
                        <div className="badges-grid">
                          {item.badges.map((badge, bIdx) => (
                            <span 
                              key={bIdx} 
                              className="tech-badge"
                              style={{ animationDelay: `${bIdx * 60}ms` }}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          
        </div>
      </main>

      {/* Footer & Contact info */}
      <footer className="footer">
        <div className="container">
          <div className="footer-contact animate-on-scroll">
            <p className="footer-contact-label">Let's build the future together</p>
            <a 
              href="mailto:spencer@spencerlowe.com" 
              className="footer-email"
              aria-label="Email Spencer Lowe"
            >
              spencer@spencerlowe.com
            </a>
            
            <div className="footer-social-links">
              <a 
                href="https://github.com/NeedleEater" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                GitHub
              </a>
              <span className="footer-link-divider">•</span>
              <a 
                href="https://www.linkedin.com/in/spencerlowe87" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="footer-meta">
            <span>&copy; {new Date().getFullYear()} Spencer Lowe. All rights reserved.</span>
            <span><span className="footer-meta-emoji">☀️</span> Made in the Valleys of Utah <span className="footer-meta-emoji delay">🏜️</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
