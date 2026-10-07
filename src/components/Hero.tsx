import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroCanvas from './HeroCanvas';
import { personal } from '../data/personal';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty('--mouse-x', `${x}px`);
    heroRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleScrollToAbout = () => {
    navigate('/about');
  };

  const handleLinkClick = (targetId: string) => {
    const targetPath = targetId === 'hero' ? '/' : `/${targetId}`;
    navigate(targetPath);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100dvh] flex justify-center items-center overflow-hidden bg-navyBg select-none pt-20 md:pt-16 pb-12 md:py-0"
      style={{
        '--spotlight': 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(200, 169, 110, 0.05), transparent 70%)',
      } as React.CSSProperties}
    >
      {/* Spotlight Canvas Background Layer - Disabled on Touch Devices */}
      {!isTouchDevice && (
        <div 
          className="absolute inset-0 pointer-events-none z-10"
          style={{ background: 'var(--spotlight)' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-12 w-full h-full relative z-20 flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center py-6 md:py-0">
        
        {/* Left Column: Bio Details & Typography */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center text-left pt-8 md:pt-0"
        >
          {/* Attention-grabbing Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-goldPrimary/30 bg-goldPrimary/10 backdrop-blur-md mb-6 w-fit shadow-[0_0_15px_rgba(200,169,110,0.12)] select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[0.66rem] tracking-[0.2em] font-semibold text-goldPrimary uppercase">
              Java Full Stack Developer &bull; Pune, India
            </span>
          </div>

          {/* Large Name with clamp sizing */}
          <h1 
            className="font-heading font-light mb-4 tracking-normal text-textPrimary leading-[1.08]"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 4.5rem)' }}
          >
            {personal.firstName} <br className="hidden md:inline" />
            <span className="font-medium text-goldPrimary">{personal.lastName}</span>
          </h1>

          {/* Role Subtitle & Core Stack Tagline */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-[0.82rem] font-medium tracking-[0.18em] uppercase text-silverMuted block">
              {personal.role}
            </span>
            <span className="text-goldPrimary/60 text-xs hidden sm:inline">&bull;</span>
            <span className="text-[0.72rem] tracking-wider uppercase text-goldLight/90 font-mono hidden sm:inline">
              Spring Boot & React
            </span>
          </div>

          {/* Bio Description (100% max-width on mobile) */}
          <p className="text-sm lg:text-base text-textMuted max-w-full md:max-w-xl mb-8 leading-relaxed font-light font-sans">
            {personal.summary}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
            
            {/* View Projects (Gold filled) */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#/projects"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('projects');
              }}
              className="px-6 py-3 rounded text-[0.72rem] uppercase tracking-widest font-semibold text-navyBg bg-goldPrimary shadow-goldGlow hover:bg-goldLight transition-all duration-300 cursor-pointer w-full sm:w-auto text-center block"
            >
              View Projects
            </motion.a>

            {/* Download CV (Outline, links to local public file with direct download attribute) */}
            <motion.a
              whileHover={{ scale: 1.03, borderColor: '#e2c98a', color: '#e2c98a' }}
              whileTap={{ scale: 0.98 }}
              href={personal.resumeUrl}
              download
              className="px-6 py-3 rounded text-[0.72rem] uppercase tracking-widest font-semibold border border-goldPrimary/40 text-goldPrimary bg-transparent transition-all duration-300 cursor-pointer w-full sm:w-auto text-center block"
            >
              Download CV
            </motion.a>

          </div>

          {/* Quick Connect Row */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-goldPrimary/15 w-full sm:w-auto">
            <span className="text-[0.66rem] uppercase tracking-widest text-silverMuted font-sans">
              Connect:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-lg border border-goldPrimary/25 hover:border-goldPrimary bg-goldPrimary/5 hover:bg-goldPrimary/15 flex items-center justify-center text-goldPrimary hover:text-goldLight transition-all duration-300"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg border border-goldPrimary/25 hover:border-goldPrimary bg-goldPrimary/5 hover:bg-goldPrimary/15 flex items-center justify-center text-goldPrimary hover:text-goldLight transition-all duration-300"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
                className="w-8 h-8 rounded-lg border border-goldPrimary/25 hover:border-goldPrimary bg-goldPrimary/5 hover:bg-goldPrimary/15 flex items-center justify-center text-goldPrimary hover:text-goldLight transition-all duration-300"
              >
                <MailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Canvas & Profile Portrait Centerpiece */}
        <div className="w-full relative flex items-center justify-center mt-10 md:mt-0 py-6 min-h-[380px] md:min-h-[500px]">
          
          {/* Ambient 3D Three.js WebGL Canvas Layer */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <HeroCanvas />
          </div>

          {/* Foreground Portrait Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Multi-layered Ambient Gold Lighting Aura */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-goldPrimary/30 via-goldLight/20 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />
            <div className="absolute -inset-10 bg-goldPrimary/10 rounded-full blur-3xl pointer-events-none -z-20" />

            {/* Portrait Card Container with Hover Float and Depth */}
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative group cursor-pointer"
            >
              {/* Outer Glowing Border Ring */}
              <div className="p-2 sm:p-2.5 md:p-3 rounded-2xl md:rounded-3xl bg-gradient-to-b from-goldPrimary/50 via-goldPrimary/15 to-goldPrimary/40 shadow-[0_20px_50px_rgba(7,16,31,0.95),0_0_35px_rgba(200,169,110,0.25)] backdrop-blur-xl border border-goldPrimary/40">
                
                {/* Photo Wrapper */}
                <div className="relative w-[230px] h-[275px] sm:w-[260px] sm:h-[315px] md:w-[290px] md:h-[355px] lg:w-[325px] lg:h-[395px] rounded-xl md:rounded-2xl overflow-hidden bg-[#07101f]">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.04] brightness-[1.02]"
                  />
                  
                  {/* Subtle Cinematic Vignette at Base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-[#07101f]/20 to-transparent pointer-events-none" />

                  {/* Gold Shimmer Line across top on hover */}
                  <div className="shimmer-bg absolute top-0 left-0 right-0 h-[1.5px] shimmer-trigger pointer-events-none" />

                  {/* Floating Identity Tag Inside Base */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-left pointer-events-none z-10">
                    <div>
                      <p className="text-sm md:text-base font-heading font-semibold text-textPrimary tracking-wide drop-shadow-md">
                        {personal.name}
                      </p>
                      <p className="text-[9px] md:text-[10px] font-sans text-goldPrimary tracking-[0.2em] uppercase font-medium">
                        {personal.role}
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-goldPrimary/50 bg-goldPrimary/20 backdrop-blur-md flex items-center justify-center text-[10px] text-goldLight font-bold shadow-goldGlow">
                      MS
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge: Available to Hire (Top-Right) */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3.5 -right-3.5 md:-top-4 md:-right-5 glass-panel-formal px-3 py-1.5 md:px-3.5 md:py-2 rounded-full flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-goldPrimary/40 select-none z-20"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] md:text-[10px] font-semibold tracking-wider text-textPrimary uppercase">
                  Available to Hire
                </span>
              </motion.div>

              {/* Floating Live Badge: Core Specialization (Bottom-Left) */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                className="absolute -bottom-3.5 -left-3.5 md:-bottom-4 md:-left-5 glass-panel-formal px-3.5 py-2 md:px-4 md:py-2.5 rounded-xl flex items-center gap-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-goldPrimary/40 select-none z-20"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-goldPrimary/15 border border-goldPrimary/40 flex items-center justify-center text-goldPrimary text-xs md:text-sm font-bold shrink-0">
                  ⚡
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] md:text-[11px] font-bold text-textPrimary leading-tight">
                    Spring Boot & React
                  </span>
                  <span className="text-[8px] md:text-[9px] text-silverMuted tracking-wider uppercase">
                    Microservices & Cloud
                  </span>
                </div>
              </motion.div>

              {/* Floating Live Badge: Projects Count (Top-Left on large screens) */}
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="hidden lg:flex absolute top-12 -left-8 glass-panel-formal px-3 py-1.5 rounded-lg items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-goldPrimary/30 select-none z-20"
              >
                <span className="text-goldPrimary font-bold text-xs">{personal.stats[0]?.value || '6+'}</span>
                <span className="text-[9px] tracking-wider text-silverMuted uppercase font-medium">
                  Live Projects
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* Bouncing Gold Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <button
          onClick={handleScrollToAbout}
          className="flex flex-col items-center gap-2.5 text-silverMuted hover:text-goldPrimary transition-colors duration-300"
          aria-label="Scroll to About"
        >
          <span className="text-[0.62rem] uppercase tracking-[0.25em] font-medium font-sans">Scroll</span>
          <div className="w-[1px] h-10 bg-goldPrimary/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-goldPrimary animate-scroll-drop" />
          </div>
        </button>
      </div>

    </section>
  );
};

export default Hero;
