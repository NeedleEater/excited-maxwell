import { useEffect, useState, useRef } from 'react';

// Timeline item data representing Spencer's career steps
const TIMELINE_DATA = [
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
    id: 6,
    era: 'Engineering Era',
    title: 'Software & Technology',
    subtitle: 'BSE Software Engineering (Candidate) & Full-Stack Development',
    roles: [
      'Regional Account Executive — AutoWeb (American Fork, UT)',
      'Client Relations — DentalQore (American Fork, UT)'
    ],
    valueStatement: 'Bridges the gap between technical execution and business growth. Fuses advanced full-stack systems engineering with digital marketing, search visibility, and client retention funnels.',
    desc: 'Pursuing my Bachelor of Science in Software Engineering at BYU–Idaho while working in the web development and technology sector. Currently focusing on account management and client relations, where I actively apply and expand my engineering skills, design systems knowledge, and technical problem-solving to deliver optimized solutions and drive client success.',
    metrics: [
      { label: 'Academics', value: 'BSE Final Year' },
      { label: 'Core Stack', value: 'React / JS / Node / C# / C++ / .NET' }
    ],
    badges: ['React & JSX', 'JavaScript ES6+', 'Vite & Node.js', 'SEO Architecture', 'Design Systems', 'Systems Scaling']
  }
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);

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

  return (
    <div>
      {/* Hero Canopy Section */}
      <section className="hero" ref={heroRef}>
        <div 
          className="hero-bg" 
          style={{ transform: `scale(1.05) translateY(${scrollY * 0.35}px)` }} 
        />
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
          <span>Discover the Path</span>
          <svg viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </section>

      {/* Main Profile & Timeline Section */}
      <main className="main-content" id="main-content">
        <div className="container">
          
          {/* Profile Overview */}
          <section className="profile-section animate-on-scroll">
            <h1 className="profile-title">Spencer Lowe</h1>
            <p className="profile-subtitle">Software Engineer & Operations Leader</p>
            <div className="profile-bio">
              <p>
                Bridging software engineering and strategic leadership, I specialize in frontend development, design systems, and fluid interactive applications while completing advanced backend coursework in my Software Engineering program at BYU–Idaho.
              </p>
              <p>
                I work in the dental technology sector, architecting SEO and web marketing initiatives that enhance search visibility, optimize patient acquisition journeys, and align digital performance with practice growth targets.
              </p>
              <p>
                My earlier career includes regional leadership over multi-unit retail operations and serving as COO for a nonprofit operating a large homeless shelter, experience that shapes my ability to align software systems, operations, and stakeholder needs to drive long-term business value.
              </p>
            </div>
            
            <div className="profile-highlights">
              <span className="highlight-badge">BSE Software Engineering</span>
              <span className="highlight-badge">Dental Tech & SEO Strategy</span>
              <span className="highlight-badge">COO & Executive Operations</span>
              <span className="highlight-badge">Multi-Unit Financial Oversight</span>
              <span className="highlight-badge">Frontend & Design Systems</span>
              <span className="highlight-badge">Patient Acquisition & Growth</span>
            </div>
          </section>

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
              href="mailto:hisexcellency@spencerlowe.com" 
              className="footer-email"
              aria-label="Email Spencer Lowe"
            >
              hisexcellency@spencerlowe.com
            </a>
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
