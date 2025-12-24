
import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="glass-terminal rounded-3xl p-10 border border-white/5">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <span className="p-2 bg-lime-400/10 rounded-lg text-lime-400">🎓</span>
            Education
          </h3>
          <div className="space-y-8">
            <div>
              <p className="text-lime-400 font-black text-xs uppercase tracking-[0.3em] mb-2">B.E. in CSE (Data Science)</p>
              <h4 className="text-2xl font-black text-white tracking-tight">Impact College of Engineering and Applied Sciences</h4>
              <p className="text-slate-400 font-medium">Visvesvaraya Technological University (VTU) | Bangalore</p>
              <p className="text-slate-500 font-bold mt-1">2023 – 2027</p>
            </div>
            <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10">
               <div>
                 <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Current Standing</p>
                 <p className="text-white font-bold">3rd Year Student</p>
               </div>
               <div className="text-right">
                 <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Academic CGPA</p>
                 <p className="text-3xl font-black text-lime-400">7.26 <span className="text-xs text-slate-500 font-medium">/ 10.0</span></p>
               </div>
            </div>
          </div>
        </div>

        <div className="glass-terminal rounded-3xl p-10 border border-white/5">
          <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
            <span className="p-2 bg-purple-500/10 rounded-lg text-purple-400">🚀</span>
            Professional Summary
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6 font-medium">
            Dedicated Computer Science student specializing in Data Science and Full-Stack Development. Expert at building intelligent, AI-native systems by orchestrating high-reasoning models like <span className="text-white">Gemini Pro</span>. Focusing on deploying high-impact software solutions through end-to-end AI integration and automated logic.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
               <p className="text-[10px] font-black text-slate-500 mb-1 uppercase tracking-widest">Core Competency</p>
               <p className="text-white text-sm font-bold">AI Orchestration</p>
             </div>
             <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
               <p className="text-[10px] font-black text-slate-500 mb-1 uppercase tracking-widest">Ecosystem</p>
               <p className="text-white text-sm font-bold">Web3 & MERN</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
