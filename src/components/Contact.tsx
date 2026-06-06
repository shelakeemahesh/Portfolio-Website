import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { personal } from '../data/personal';

interface ContactCardProps {
  monogram: string;
  label: string;
  value: string;
  href: string;
  actionText?: string;
  onActionClick?: (e: React.MouseEvent) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  monogram,
  label,
  value,
  href,
  actionText,
  onActionClick
}) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith('mailto:') || href.startsWith('tel:') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      className="glass-card-formal flex items-center gap-5 p-3 md:p-4 rounded-lg border border-goldPrimary/20 hover:border-goldPrimary/50 hover:bg-goldPrimary/[0.02] transition-all duration-300 w-full text-left group min-w-0"
    >
      {/* 36x36 Monogram Box - shrink-0 and min-w-[36px] */}
      <div className="w-9 h-9 border border-goldPrimary/45 bg-[#0b1b35] flex items-center justify-center font-heading text-goldPrimary text-sm font-semibold rounded shrink-0 min-w-[36px] shadow-goldGlow">
        {monogram}
      </div>

      {/* Label and Value */}
      <div className="flex-1 min-w-0">
        <span className="text-[0.62rem] uppercase tracking-widest text-textMuted block font-sans mb-0.5">
          {label}
        </span>
        <span 
          className="font-sans font-medium text-textPrimary group-hover:text-goldPrimary transition-colors duration-300 overflow-hidden text-ellipsis whitespace-nowrap block"
          style={{ fontSize: '0.78rem' }}
        >
          {value}
        </span>
      </div>

      {/* Actions */}
      <div className="shrink-0">
        {onActionClick && actionText ? (
          <button
            onClick={onActionClick}
            className="p-2 border border-goldPrimary/20 hover:border-goldPrimary/50 text-goldPrimary bg-goldPrimary/5 rounded transition-all duration-300 flex items-center justify-center"
            title={actionText}
          >
            {actionText === 'Copied' ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        ) : (
          <ExternalLink className="w-3.5 h-3.5 text-goldPrimary/40 group-hover:text-goldPrimary transition-colors duration-300" />
        )}
      </div>

    </motion.a>
  );
};

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-28 relative overflow-hidden bg-[#07101f] border-b border-goldPrimary/10">
      
      {/* Decorative background light washes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-goldPrimary/[0.01] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading with clamp sizing */}
        <div className="text-center mb-20">
          <span className="formal-label mb-2 block">05 / Connection</span>
          <h2 
            className="font-heading font-light text-textPrimary tracking-wide uppercase"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            Get In <span className="text-goldPrimary">Touch</span>
          </h2>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-goldPrimary to-transparent mt-4 mx-auto"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Quote Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col text-left"
          >
            <blockquote 
              className="font-heading italic font-light text-textPrimary leading-relaxed mb-6 select-none"
              style={{ fontSize: 'clamp(1.5rem, 6vw, 2.2rem)' }}
            >
              "Let's build something <br className="hidden md:inline" />
              <span className="text-goldPrimary">remarkable</span> together."
            </blockquote>
            <p className="text-xs text-textMuted leading-relaxed font-sans font-light max-w-sm">
              I am prepared to design, develop, and maintain performant full-stack microservices and client portals. Reach out through the channels to coordinate.
            </p>
          </motion.div>

          {/* Right Column: Connection Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col gap-4 w-full min-w-0"
          >
            {/* Email Card */}
            <ContactCard
              monogram="EM"
              label="Secure Email"
              value={personal.email}
              href={`mailto:${personal.email}`}
              actionText={copied ? 'Copied' : 'Copy'}
              onActionClick={handleCopyEmail}
            />

            {/* Phone Card */}
            <ContactCard
              monogram="PH"
              label="Direct Phone"
              value={personal.phone}
              href={`tel:${personal.phone}`}
            />

            {/* GitHub Card */}
            <ContactCard
              monogram="GH"
              label="GitHub"
              value={personal.github}
              href={personal.github}
            />

            {/* LinkedIn Card */}
            <ContactCard
              monogram="LI"
              label="LinkedIn"
              value={personal.linkedin}
              href={personal.linkedin}
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
