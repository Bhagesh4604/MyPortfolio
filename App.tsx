
import React, { useEffect } from 'react';
import { NeuralNoise } from './components/NeuralNoise';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import SkillsMarquee from './components/SkillsMarquee';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import Contact from './components/Contact';
import CursorFollower from './components/CursorFollower';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-slate-200 selection:bg-lime-400/30 overflow-x-hidden">
      <CursorFollower />
      <NeuralNoise opacity={0.6} pointerStrength={1.2} timeScale={0.8} />
      
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#home" className="glass-terminal px-6 py-3 rounded-xl pointer-events-auto border-white/5 flex items-center gap-3 cursor-none">
            <div className="w-3 h-3 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(190,242,100,0.8)]"></div>
            <span className="font-black text-white tracking-tighter text-xl uppercase">B.BIRADAR</span>
          </a>
          <div className="hidden md:flex glass-terminal px-8 py-3 rounded-xl pointer-events-auto gap-10 text-xs font-black text-slate-400 tracking-widest uppercase">
             <a href="#home" className="hover:text-lime-400 transition-colors cursor-none">Home</a>
             <a href="#about" className="hover:text-lime-400 transition-colors cursor-none">About</a>
             <a href="#projects" className="hover:text-lime-400 transition-colors cursor-none">Projects</a>
             <a href="mailto:bhageshbiradar820@gmail.com" className="hover:text-lime-400 transition-colors cursor-none">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <div className="reveal">
          <Hero />
        </div>
        
        <div id="about" className="reveal">
          <AboutSection />
        </div>

        <div className="reveal">
          <EducationSection />
        </div>

        <div className="reveal">
          <ProjectGrid />
        </div>

        <div id="skills" className="reveal">
          <SkillsMarquee />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
