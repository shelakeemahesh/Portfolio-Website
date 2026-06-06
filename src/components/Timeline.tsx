import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/timeline';
import type { TimelineEntry } from '../data/timeline';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const entryVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 24,
      stiffness: 80
    }
  }
};

const TimelineItem: React.FC<{ entry: TimelineEntry }> = ({ entry }) => {
  return (
    <motion.div
      variants={entryVariants}
      className="relative flex flex-col md:grid md:grid-cols-12 md:gap-8 items-start mb-12 md:mb-16 last:mb-0 w-full group"
    >
      
      {/* Left Column: Year */}
      <div className="md:col-span-3 text-left md:text-right pt-1 pl-6 md:pl-0">
        <span className="text-xs font-semibold text-goldPrimary tracking-[0.2em] uppercase font-sans">
          {entry.period}
        </span>
      </div>

      {/* Middle Bullet Node */}
      <div className="absolute left-0 md:left-[25%] top-2 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
        <div className="w-2.5 h-2.5 rotate-45 border border-goldPrimary bg-navyBg shadow-goldGlow group-hover:bg-goldPrimary transition-colors duration-300" />
      </div>

      {/* Right Column: Roles, Org, and Description */}
      <div className="md:col-span-8 pl-6 md:pl-0 w-full">
        <div className="glass-card-formal p-6 rounded-lg relative overflow-hidden">
          {/* Top shimmer accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-goldPrimary/30 to-transparent pointer-events-none" />
          
          {/* Role Header (clamp sized) */}
          <h3 
            className="font-heading font-light text-textPrimary mb-1.5 leading-snug group-hover:text-goldPrimary transition-colors duration-300"
            style={{ fontSize: 'clamp(1.05rem, 4vw, 1.3rem)' }}
          >
            {entry.role}
          </h3>

          <span className="text-[0.68rem] tracking-wider uppercase text-silverMuted font-medium font-sans block mb-3 animate-fade-up">
            {entry.organization} &nbsp;|&nbsp; {entry.location}
          </span>

          {/* Description */}
          <p className="text-xs text-textMuted font-sans font-light leading-relaxed max-w-full md:max-w-xl">
            {entry.description}
          </p>
        </div>
      </div>

    </motion.div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-28 relative overflow-hidden bg-navyBg border-b border-goldPrimary/10">
      
      {/* Decorative backdrop light glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-goldPrimary/[0.01] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading with clamp sizing */}
        <div className="text-center mb-20">
          <span className="formal-label mb-2 block">04 / Path</span>
          <h2 
            className="font-heading font-light text-textPrimary tracking-wide uppercase"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Experience & <span className="text-goldPrimary">Education</span>
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-goldPrimary to-transparent mt-4 mx-auto"></div>
        </div>

        {/* Timeline structural layout (pl-5 md:pl-8) */}
        <div className="relative w-full max-w-4xl mx-auto pl-5 md:pl-8">
          
          {/* Vertical gold gradient line */}
          <div className="absolute left-0 md:left-[25%] top-2 bottom-6 w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-goldPrimary/45 to-transparent pointer-events-none z-10" />

          {/* Timeline Node Entries */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="flex flex-col w-full"
          >
            {timeline.map((entry, idx) => (
              <TimelineItem key={idx} entry={entry} />
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;
