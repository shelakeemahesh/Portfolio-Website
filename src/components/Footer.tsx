import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#07101f] border-t border-goldPrimary/20 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[0.72rem] text-textMuted tracking-wider font-sans font-light">
          &copy; 2026 Mahesh Shelake &middot; Pune, India &middot; Built with React + Three.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
