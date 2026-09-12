import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '../data/personal';

interface NavLink {
  number: string;
  label: string;
  href: string;
  targetId: string;
}

const navLinks: NavLink[] = [
  { number: '01', label: 'About', href: '#/about', targetId: 'about' },
  { number: '02', label: 'Skills', href: '#/skills', targetId: 'skills' },
  { number: '03', label: 'Projects', href: '#/projects', targetId: 'projects' },
  { number: '04', label: 'Experience', href: '#/experience', targetId: 'experience' },
  { number: '05', label: 'Contact', href: '#/contact', targetId: 'contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Scrollspy to set top-bar scroll states
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setOpen(false);
    const targetPath = targetId === 'hero' ? '/' : `/${targetId}`;
    navigate(targetPath);
  };

  // Determine active section based on path for desktop indicators
  const activeSection = location.pathname.replace('/', '') || 'hero';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled || open
            ? 'bg-[#07101f] border-b border-goldPrimary/20 shadow-xl h-[60px]'
            : 'bg-transparent border-b border-transparent h-[60px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-full flex items-center justify-between">
          
          {/* Monogram Logo - Cormorant Garamond, Gold with Responsive Clamp */}
          <a
            href="#/"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="font-heading font-light tracking-[0.12em] text-goldPrimary hover:text-goldLight transition-colors duration-300 select-none z-50"
            style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)' }}
          >
            MAHESH SHELAKE
          </a>

          {/* Desktop Links — hidden on mobile: */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <a
                  key={link.targetId}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.targetId)}
                  className={`relative py-1.5 text-[0.78rem] font-medium uppercase tracking-[0.15em] transition-colors duration-300 hover:text-goldPrimary ${
                    isActive ? 'text-goldPrimary' : 'text-silverMuted'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-goldPrimary" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hamburger — visible only on mobile: */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center w-11 h-11 relative focus:outline-none md:hidden z-50 rounded-md border border-goldPrimary/30 bg-goldPrimary/10 text-goldPrimary"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block absolute h-[2px] w-5 bg-goldPrimary rounded transition-all duration-300 ease-in-out ${
                open ? 'rotate-45 bg-goldLight' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`block absolute h-[2px] w-5 bg-goldPrimary rounded transition-all duration-300 ease-in-out ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block absolute h-[2px] w-5 bg-goldPrimary rounded transition-all duration-300 ease-in-out ${
                open ? '-rotate-45 bg-goldLight' : 'translate-y-1.5'
              }`}
            />
          </button>

        </div>
      </header>

      {/* Mobile Drawer (Rendered as sibling outside <header> to avoid containing block bugs) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 z-[95] flex flex-col justify-between overflow-y-auto px-6 py-8"
            style={{
              height: 'calc(100dvh - 60px)',
              backgroundColor: '#07101f',
            }}
          >
            <nav className="flex flex-col w-full space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.targetId;
                return (
                  <a
                    key={link.targetId}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.targetId)}
                    className={`flex items-center gap-4 py-3.5 px-4 rounded-lg border transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-goldPrimary/15 border-goldPrimary/40 text-goldPrimary shadow-[0_0_15px_rgba(200,169,110,0.15)] font-semibold'
                        : 'border-goldPrimary/5 text-textPrimary hover:bg-goldPrimary/5 hover:border-goldPrimary/20 hover:text-goldLight'
                    }`}
                  >
                    <span className="text-[0.72rem] font-mono tracking-widest text-goldPrimary/60">
                      {link.number}
                    </span>
                    <span className="text-base uppercase tracking-[0.16em] font-sans">
                      {link.label}
                    </span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-goldPrimary shadow-[0_0_6px_#c8a96e]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Bottom Quick Links & CV download inside Drawer */}
            <div className="pt-8 border-t border-goldPrimary/15 flex flex-col gap-4 mt-auto">
              <a
                href={personal.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="w-full py-3.5 rounded-lg text-center text-xs uppercase tracking-widest font-semibold bg-goldPrimary text-navyBg hover:bg-goldLight transition-colors duration-300 shadow-lg"
              >
                Download CV
              </a>
              <div className="flex justify-center items-center gap-6 text-xs text-silverMuted font-sans pt-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-goldPrimary transition-colors duration-300 uppercase tracking-wider"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-goldPrimary transition-colors duration-300 uppercase tracking-wider"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-goldPrimary transition-colors duration-300 uppercase tracking-wider"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
