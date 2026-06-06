import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavLink {
  label: string;
  href: string;
  targetId: string;
}

const navLinks: NavLink[] = [
  { label: 'About', href: '#/about', targetId: 'about' },
  { label: 'Skills', href: '#/skills', targetId: 'skills' },
  { label: 'Projects', href: '#/projects', targetId: 'projects' },
  { label: 'Experience', href: '#/experience', targetId: 'experience' },
  { label: 'Contact', href: '#/contact', targetId: 'contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

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
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled || open
          ? 'bg-navyBg/90 border-b border-goldPrimary/20 backdrop-blur-md shadow-lg h-[60px]'
          : 'bg-transparent border-b border-transparent h-[60px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-full flex items-center justify-between">
        
        {/* Monogram Logo - Cormorant Garamond, Gold with Responsive Clamp */}
        <a
          href="#/"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="font-heading font-light tracking-[0.12em] text-goldPrimary hover:text-goldLight transition-colors duration-300"
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
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center items-center w-11 h-11 relative focus:outline-none md:hidden z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block absolute h-[2px] w-6 bg-silverMuted rounded transition-all duration-300 ease-in-out ${
              open ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`block absolute h-[2px] w-6 bg-silverMuted rounded transition-all duration-300 ease-in-out ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block absolute h-[2px] w-6 bg-silverMuted rounded transition-all duration-300 ease-in-out ${
              open ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </button>

      </div>

      {/* Drawer: */}
      {open && (
        <div 
          className="md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] z-[99] bg-[#07101f]/98 backdrop-blur-[20px] overflow-y-auto flex flex-col"
        >
          <nav className="flex flex-col w-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <a
                  key={link.targetId}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.targetId)}
                  className={`text-[1.1rem] py-[1.2rem] px-[2rem] border-b border-goldPrimary/10 block w-full text-left uppercase tracking-[0.15em] font-sans font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-goldPrimary bg-goldPrimary/5'
                      : 'text-silverMuted hover:text-goldPrimary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
