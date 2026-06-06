import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ScrollManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const targetId = path.replace('/', '');

    if (!targetId) {
      // Scroll to top for root path
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const target = document.getElementById(targetId);
    if (target) {
      const timer = setTimeout(() => {
        const offset = 80; // height of fixed navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: targetId === 'hero' ? 0 : offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return null;
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollManager />
      <div className="relative min-h-screen bg-navyBg text-textPrimary overflow-x-hidden selection:bg-goldPrimary selection:text-navyBg font-sans">
        
        {/* Floating 2D Particle Background connected with lines (fixed, z-index 0) */}
        <BackgroundCanvas />

        {/* Fixed Navigation Bar */}
        <Navbar />

        {/* Main Content Sections wrapped in Hashing Router (relative z-index 10) */}
        <main className="relative z-10">
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        </main>

        {/* Bottom Footer Section */}
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;
