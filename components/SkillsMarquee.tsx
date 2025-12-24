
import React from 'react';

const TECH_ITEMS = [
  { name: 'Gemini Pro', category: 'AI Orchestration', color: 'text-lime-400' },
  { name: 'Gemini 2.5 Flash', category: 'Vision AI', color: 'text-emerald-400' },
  { name: 'Node.js', category: 'Backend', color: 'text-purple-400' },
  { name: 'React.js', category: 'Frontend', color: 'text-blue-400' },
  { name: 'Arbitrum SDK', category: 'Web3', color: 'text-indigo-400' },
  { name: 'Python', category: 'Data Science', color: 'text-green-400' },
  { name: 'Java', category: 'Programming', color: 'text-orange-400' },
  { name: 'SQL', category: 'Database', color: 'text-cyan-400' },
  { name: 'Tableau', category: 'Analytics', color: 'text-yellow-400' },
  { name: 'Power BI', category: 'Analytics', color: 'text-yellow-500' }
];

const SkillsMarquee: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-black text-white mb-4">Technical Toolkit</h2>
        <p className="text-slate-400">Tools and technologies for building AI-native intelligence</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-6 max-w-7xl mx-auto">
        {TECH_ITEMS.map((tech, i) => (
          <div 
            key={tech.name} 
            className={`glass-terminal p-8 rounded-2xl border-white/5 min-w-[180px] text-center transition-all hover:-translate-y-2 hover:border-lime-400/50 tech-drift`}
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <div className="text-2xl font-black text-white mb-2 tracking-tighter">{tech.name}</div>
            <div className={`text-[10px] font-black uppercase tracking-widest ${tech.color}`}>{tech.category}</div>
          </div>
        ))}
      </div>

      <div className="absolute -bottom-10 -left-10 flex gap-2 opacity-50 pointer-events-none">
        {['Gemini Pro', 'Python', 'MERN', 'Web3'].map((name, i) => (
          <div key={name} className="px-6 py-3 rounded-full bg-slate-800 text-white text-xs font-bold border border-white/10 tech-drift" style={{ animationDelay: `${i * 0.3}s` }}>
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMarquee;
