
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Ready to build the future with AI";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="mb-6">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
          Bhagesh <span className="text-lime-400">Biradar</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-medium">
          3rd Year CSE (Data Science) @ Impact College
        </p>
      </div>

      <div className="flex gap-3 mb-12">
        {['AI Orchestration', 'LLM Integration', 'Web3 Intelligence'].map((tag) => (
          <span key={tag} className="px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/5 text-xs font-bold text-lime-400 tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      {/* Terminal Window */}
      <div className="w-full max-w-3xl glass-terminal rounded-xl overflow-hidden shadow-2xl mb-12 border border-white/5 reveal">
        <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <span className="text-[10px] mono text-slate-500 ml-2">terminal</span>
        </div>
        <div className="p-8 text-left mono text-sm md:text-base space-y-3 leading-relaxed">
          <div>
            <span className="text-lime-400">$</span> <span className="text-white">whoami</span>
            <p className="text-lime-400 mt-1">&gt; Bhagesh Biradar - Data Science Student</p>
          </div>
          <div>
            <span className="text-lime-400">$</span> <span className="text-white">skills --list</span>
            <p className="text-lime-400 mt-1">&gt; AI Orchestration • LLM Integration • Web3 Intelligence</p>
          </div>
          <div>
            <span className="text-lime-400">$</span> <span className="text-white">projects --featured</span>
            <p className="text-lime-400 mt-1">&gt; NXT Tutor • Web3 Tool • Hospital Optimizer • Acciradar</p>
          </div>
          <div>
            <span className="text-lime-400">$</span> <span className="text-white">status</span>
            <p className="text-lime-400 mt-1">&gt; {text}<span className="inline-block w-2 h-5 bg-lime-400 ml-1 align-middle cursor-blink"></span></p>
          </div>
        </div>
      </div>

      {/* Animated Arrow Pointer */}
      <div className="mb-6 animate-bounce-subtle">
        <svg className="w-6 h-6 text-lime-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a href="#projects" className="px-10 py-4 bg-lime-400 text-black rounded-xl font-black transition-all hover:scale-105 accent-glow cursor-none">
          View Projects
        </a>
        <a href="https://github.com/Bhagesh4604" target="_blank" className="px-10 py-4 bg-transparent border border-white/10 text-white rounded-xl font-black transition-all hover:bg-white/5 flex items-center gap-2 cursor-none">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/></svg>
           GitHub
        </a>
        <a href="https://linkedin.com/in/bhagesh-biradar-885996260" target="_blank" className="px-10 py-4 bg-transparent border border-white/10 text-white rounded-xl font-black transition-all hover:bg-white/5 flex items-center gap-2 cursor-none">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
           LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
