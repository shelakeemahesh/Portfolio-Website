import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { ExternalLink } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 24,
      stiffness: 70
    }
  }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="glass-card-formal group flex flex-col justify-between p-5 md:p-8 rounded-lg relative overflow-hidden h-full"
    >
      {/* Top gold shimmer hover line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-goldPrimary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Background faded large index number (clamp sized) */}
      <span 
        className="absolute top-4 right-6 font-heading font-light text-goldPrimary/8 pointer-events-none select-none"
        style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}
      >
        {project.id}
      </span>

      <div className="relative z-10">
        
        {/* Category Label / Subtitle */}
        <span className="text-[0.62rem] tracking-[0.25em] font-semibold text-silverMuted uppercase block mb-3">
          {project.subtitle}
        </span>

        {/* Title (clamp sized) */}
        <h3 
          className="font-bold font-heading mb-4 text-textPrimary group-hover:text-goldPrimary transition-colors duration-300 select-none"
          style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)' }}
        >
          {project.title}
        </h3>

        {/* Description (0.78rem text size, 1.65 line-height, no fixed pixel widths) */}
        <p 
          className="text-textMuted font-sans font-light mb-6 max-w-full md:max-w-sm"
          style={{ fontSize: '0.78rem', lineHeight: '1.65' }}
        >
          {project.description}
        </p>

        {/* Stack (flex-wrap and gap-1) */}
        <div className="flex flex-wrap gap-1 mb-8">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="text-[0.62rem] font-sans tracking-wide uppercase px-2 py-0.5 rounded border border-goldPrimary/15 bg-[#0b1b35] text-goldPrimary select-none"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* Footer link triggers (gold outline style) */}
      <div className="flex gap-4 items-center pt-4 border-t border-goldPrimary/10 mt-auto relative z-10">
        
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-goldPrimary hover:text-goldLight transition-colors duration-300 border border-goldPrimary/20 hover:border-goldPrimary/50 px-3 py-1.5 rounded bg-goldPrimary/5"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Code</span>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-goldPrimary hover:text-goldLight transition-colors duration-300 border border-goldPrimary/20 hover:border-goldPrimary/50 px-3 py-1.5 rounded bg-goldPrimary/5 ml-auto"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-28 relative overflow-hidden bg-navyBg border-b border-goldPrimary/10">
      
      {/* Decorative backdrop wash */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-goldPrimary/[0.015] rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section title with clamp sizing */}
        <div className="text-center mb-20">
          <span className="formal-label mb-2 block">03 / Portfolio</span>
          <h2 
            className="font-heading font-light text-textPrimary tracking-wide uppercase"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Featured <span className="text-goldPrimary">Works</span>
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-goldPrimary to-transparent mt-4 mx-auto"></div>
        </div>

        {/* 2 Column Layout - grid-cols-1 md:grid-cols-2, gap-4 md:gap-6 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
