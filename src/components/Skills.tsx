import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/skills';
import type { Skill } from '../data/skills';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="mb-8 w-full select-none">
      
      {/* Skill Name & Level */}
      <div className="flex justify-between items-center mb-2.5 text-[0.8rem] font-semibold tracking-wider uppercase font-sans">
        <span className="text-silverMuted">{skill.name}</span>
        <span className="text-goldPrimary font-medium">{skill.percentage}%</span>
      </div>

      {/* Progress Track (2px height, 100% width, no fixed pixel widths) */}
      <div className="h-[2px] w-full bg-white/10 relative rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 50 }}
          className="h-full bg-gradient-to-r from-goldPrimary to-goldLight relative rounded-full"
        >
          {/* Gold bullet circle dot (6x6px) at the right end */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[6px] h-[6px] rounded-full bg-goldLight shadow-[0_0_8px_rgba(226,201,138,0.7)]" />
        </motion.div>
      </div>

    </div>
  );
};

const Skills: React.FC = () => {
  const frontendCategory = {
    title: "Frontend Development",
    skills: skills.filter((s) => s.category === 'frontend')
  };

  const backendCategory = {
    title: "Backend & Database",
    skills: skills.filter((s) => s.category === 'backend' || s.category === 'database')
  };

  return (
    <section 
      id="skills" 
      className="py-16 md:py-28 relative overflow-hidden bg-navyBg"
      style={{
        backgroundImage: 'linear-gradient(180deg, #07101f 0%, #050d1a 50%, #07101f 100%)'
      }}
    >
      {/* Background radial lights */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-goldPrimary/[0.015] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title with clamp sizing */}
        <div className="text-center mb-20">
          <span className="formal-label mb-2 block">02 / Capabilities</span>
          <h2 
            className="font-heading font-light text-textPrimary tracking-wide uppercase"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Technical <span className="text-goldPrimary">Expertise</span>
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-goldPrimary to-transparent mt-4 mx-auto"></div>
        </div>

        {/* 2 Column Layout - grid-cols-1 md:grid-cols-2, gap-8 md:gap-16 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Column 1: Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3.5 mb-10 border-b border-goldPrimary/10 pb-4">
              <div className="w-[6px] h-[6px] rotate-45 border border-goldPrimary bg-goldPrimary/20"></div>
              <h3 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-textPrimary">
                {frontendCategory.title}
              </h3>
            </div>
            
            <div className="flex flex-col">
              {frontendCategory.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* Column 2: Backend */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3.5 mb-10 border-b border-goldPrimary/10 pb-4">
              <div className="w-[6px] h-[6px] rotate-45 border border-goldPrimary bg-goldPrimary/20"></div>
              <h3 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-textPrimary">
                {backendCategory.title}
              </h3>
            </div>
            
            <div className="flex flex-col">
              {backendCategory.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
