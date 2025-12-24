
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-white mb-4">About Me</h2>
        <p className="text-slate-400 max-w-4xl mx-auto text-lg leading-relaxed">
          Dedicated Computer Science student specializing in Data Science and Full-Stack Development. 
          Expert at building intelligent, AI-native systems by orchestrating high-reasoning models like 
          <span className="text-lime-400"> Gemini Pro</span>. Proficient in Node.js, the MERN stack, and 
          AI Vision/NLP, with a focus on deploying high-impact software solutions through 
          end-to-end AI integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="glass-terminal p-10 rounded-2xl border-lime-400/20 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-lime-400 shadow-[0_0_15px_rgba(190,242,100,0.5)]"></div>
          <div className="mb-4 inline-block p-4 bg-lime-400/10 rounded-full text-lime-400">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="text-5xl font-black text-lime-400 mb-2">25%</div>
          <div className="text-xl font-bold text-white mb-1">Resource Optimization</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest">Efficiency Gained</div>
        </div>

        <div className="glass-terminal p-10 rounded-2xl border-white/5 text-center group">
          <div className="mb-4 inline-block p-4 bg-white/5 rounded-full text-white">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="text-5xl font-black text-white mb-2">Gemini Pro</div>
          <div className="text-xl font-bold text-white mb-1">Core Logic Expert</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest">AI Orchestration</div>
        </div>

        <div className="glass-terminal p-10 rounded-2xl border-white/5 text-center group">
          <div className="mb-4 inline-block p-4 bg-white/5 rounded-full text-white">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
          </div>
          <div className="text-5xl font-black text-white mb-2">4+</div>
          <div className="text-xl font-bold text-white mb-1">Production Projects</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest">Industry Ready</div>
        </div>
      </div>

      <div className="glass-terminal p-12 rounded-2xl border-white/5">
        <h3 className="text-2xl font-black text-white mb-8 border-l-4 border-lime-400 pl-4">Professional Focus</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-lime-400 font-bold mb-4 uppercase text-sm tracking-widest">Current Role</h4>
            <p className="text-white text-lg font-medium">3rd Year Student @ Impact College of Engineering & Applied Sciences</p>
            <p className="text-slate-500 mt-2">Specializing in Computer Science & Engineering (Data Science)</p>
          </div>
          <div>
            <h4 className="text-lime-400 font-bold mb-4 uppercase text-sm tracking-widest">Languages Proficiency</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> English (Professional)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Kannada (Native)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span> Hindi (Professional)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
