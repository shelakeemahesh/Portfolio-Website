import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroCanvas from './HeroCanvas';
import { personal } from '../data/personal';

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
          className="flex flex-col justify-center text-left pt-12 md:pt-0"
        >
          {/* Label tag with gold left line */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-goldPrimary"></span>
            <span className="text-[0.68rem] tracking-[0.25em] font-semibold text-goldPrimary uppercase">
              Portfolio 2026
            </span>
          </div>

          {/* Large Name with clamp sizing */}
          <h1 
            className="font-heading font-light mb-4 tracking-normal text-textPrimary leading-[1.1]"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)' }}
          >
            {personal.firstName} <br className="hidden md:inline" />
            <span className="font-medium text-goldPrimary">{personal.lastName}</span>
          </h1>

          {/* Role Subtitle */}
          <span className="text-[0.8rem] font-medium tracking-[0.18em] uppercase text-silverMuted mb-6 block">
            {personal.role}
          </span>

          {/* Bio Description (100% max-width on mobile) */}
          <p className="text-sm lg:text-base text-textMuted max-w-full md:max-w-xl mb-10 leading-relaxed font-light font-sans">
            {personal.summary}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            
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
        </motion.div>

        {/* Right Column: HeroCanvas R3F Canvas */}
        <div className="w-full h-[280px] md:h-full relative flex items-center justify-center mt-8 md:mt-0">
          <HeroCanvas />
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
