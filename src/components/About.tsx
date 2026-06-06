import React from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';

const About: React.FC = () => {
  const techChips = [
    'Spring Boot', 'React.js', 'Java', 'JavaScript ES6+',
    'MySQL', 'PostgreSQL', 'MongoDB', 'JWT', 'Spring Security', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-16 md:py-28 relative overflow-hidden bg-[#07101f] border-b border-goldPrimary/10">
      
      {/* Decorative backdrop light washes */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-goldPrimary/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
          
          {/* Left Column: Bio & Tech Chips */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Formal Section Title & Label */}
            <span className="formal-label mb-2 block">01 / About Me</span>
            <h2 
              className="font-heading font-light text-textPrimary leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
            >
              Crafting <span className="text-goldPrimary">Digital Experiences</span>
            </h2>
            <div className="h-[1px] w-14 bg-gradient-to-r from-goldPrimary to-transparent mt-4 mb-8"></div>

            {/* Biography details */}
            <div className="text-textMuted font-sans text-sm md:text-base font-light leading-relaxed space-y-5 mb-10">
              <p>
                I am a final-year Computer Engineering student at Sinhgad College of
                Engineering, Pune (SPPU), graduating in 2026 with a CGPA of 6.91/10.
                My expertise spans Spring Boot microservices, React.js with JavaScript
                ES6+, and cloud deployment on Render and Railway.
              </p>
              <p>
                I enjoy building systems that are both performant and maintainable —
                from JWT-secured REST APIs with Spring Security to dynamic React
                frontends with real-time data. I completed an internship at CUBAN IT
                PVT LTD as a Java Developer Intern in Dec 2024–Jan 2025.
              </p>
            </div>

            {/* Technical Chips */}
            <div className="flex flex-wrap gap-1.5">
              {techChips.map((chip) => (
                <span
                  key={chip}
                  className="px-2 md:px-3.5 py-1.5 rounded text-[0.68rem] tracking-wider uppercase font-medium border border-goldPrimary/15 bg-[#0b1b35] text-goldPrimary select-none"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Certifications Row */}
            <div className="mt-8 flex flex-col gap-2">
              <span className="text-[0.62rem] uppercase tracking-widest text-textMuted block font-sans font-semibold">
                Certifications
              </span>
              <div className="flex flex-col gap-2 text-xs text-textMuted font-sans">
                {personal.certifications.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-goldPrimary transition-colors duration-300 w-fit"
                  >
                    <span>🏅</span>
                    <span className="font-semibold text-textPrimary hover:underline">{cert.title}</span>
                    <span>—</span>
                    <span>{cert.platform}</span>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Stats Cards & Currently Building Card */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 w-full min-w-0"
          >
            
            {/* 3 Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {personal.stats.map((stat) => (
                <div key={stat.label} className="glass-card-formal p-3 rounded-lg text-center flex flex-col justify-center items-center">
                  <span 
                    className="font-heading font-light text-goldPrimary mb-1"
                    style={{ fontSize: 'clamp(1.5rem, 6vw, 2rem)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[0.68rem] tracking-wider uppercase text-textMuted block truncate max-w-full">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently Building Card */}
            <div className="glass-card-formal p-6 rounded-lg relative overflow-hidden group w-full min-w-0">
              {/* Gold Shimmer Hover Element */}
              <div className="shimmer-bg absolute top-0 left-0 right-0 h-[1.5px] shimmer-trigger pointer-events-none" />

              <h3 className="text-sm font-bold font-heading uppercase tracking-wider text-textPrimary mb-4 select-none block truncate">
                Current Projects Status
              </h3>

              <div className="space-y-4 text-xs font-sans w-full min-w-0">
                
                {/* Product 1 */}
                <div className="flex items-center justify-between py-2 border-b border-goldPrimary/5 min-w-0 w-full gap-2">
                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <span className="font-semibold text-textPrimary block truncate" title="NexusHR">
                      NexusHR
                    </span>
                    <span className="text-[10px] text-textMuted block truncate" title="HR Management Platform">
                      HR Management Platform
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-[3px] border border-goldPrimary/30 bg-goldPrimary/5 text-[9px] font-semibold tracking-wider text-goldPrimary uppercase select-none shrink-0">
                    Live
                  </span>
                </div>

                {/* Product 2 */}
                <div className="flex items-center justify-between py-2 border-b border-goldPrimary/5 min-w-0 w-full gap-2">
                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <span className="font-semibold text-textPrimary block truncate" title="E-Commerce App">
                      E-Commerce App
                    </span>
                    <span className="text-[10px] text-textMuted block truncate" title="Full-Stack Shopping Platform">
                      Full-Stack Shopping Platform
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-[3px] border border-goldPrimary/30 bg-goldPrimary/5 text-[9px] font-semibold tracking-wider text-goldPrimary uppercase select-none shrink-0">
                    Live
                  </span>
                </div>

                {/* Product 3 */}
                <div className="flex items-center justify-between py-2 min-w-0 w-full gap-2">
                  <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <span className="font-semibold text-textPrimary block truncate" title="Money Manager">
                      Money Manager
                    </span>
                    <span className="text-[10px] text-textMuted block truncate" title="Personal Finance Tracker">
                      Personal Finance Tracker
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-[3px] border border-goldPrimary/30 bg-goldPrimary/5 text-[9px] font-semibold tracking-wider text-goldPrimary uppercase select-none shrink-0">
                    Live
                  </span>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
