
import React, { useRef, useState } from 'react';

const PROJECTS_EXTENDED = [
  {
    id: 'nxt-tutor',
    title: 'NXT Tutor',
    subtitle: 'Vision-Powered Native Language Learning',
    description: 'Multimodal AI educational platform providing high-reasoning debugging and contextual coding solutions.',
    githubUrl: 'https://github.com/Bhagesh4604/Buildathon',
    bullets: [
      'Architected logic flow using Gemini Pro for reasoning & contextual coding solutions',
      'Leveraged Gemini 2.5 Flash for real-time vision via screen capture',
      'Implemented Multilingual Support for Kannada and Hindi using system-level orchestration',
      'Engineered low-latency feedback loop for instant visual hints'
    ],
    tags: ['Gemini Pro', 'Gemini 2.5 Flash', 'Vision AI', 'Multilingual'],
    date: '2025',
    status: 'Multimodal AI System',
    accent: 'lime-400'
  },
  {
    id: 'web3-intel',
    title: 'Web3 Intelligence',
    subtitle: 'MEV Detection, Prevention & Bridge Tool',
    description: 'Advanced security tool for mempool monitoring and automated user risk reporting.',
    githubUrl: 'https://github.com/Bhagesh4604/Sanctum-Relay',
    bullets: [
      'Integrated Gemini Pro to generate automated risk reports from mempool activity',
      'Built monitoring engine using Node.js & WebSockets for real-time exploit detection',
      'Engineered Secure Transaction Layer via private RPCs to bypass public mempools',
      'Integrated Arbitrum SDK for automated L1-to-L2 asset bridging'
    ],
    tags: ['Arbitrum SDK', 'Private RPCs', 'WebSockets', 'Web3 Security'],
    date: '2025',
    status: 'Improved security',
    accent: 'purple-500'
  },
  {
    id: 'hospital-optimizer',
    title: 'AI Hospital Management System',
    subtitle: 'Healthcare & Emergency Orchestration',
    description: 'High-performance medical platform featuring Gemini-driven triage, sub-second EMS tracking, and dynamic resource scaling.',
    githubUrl: 'https://github.com/Bhagesh4604/ShreeMedicare',
    bullets: [
      'Built a triage portal using Google Gemini for departmental recommendations and medical disclaimers based on patient input',
      'Engineered a staff-facing acuity tool that categorizes emergency severity by analyzing live vitals from incoming ambulances',
      'Designed a real-time Command Center UI with interactive floor plans and color-coded bed availability tracking',
      'Architected a live GPS engine using Node.js & OSRM API for sub-second map updates and accurate ETAs',
      'Developed a paramedic mobile app that streams heart rate and BP data to the ER via WebSockets with FCM dispatch alerts'
    ],
    tags: ['Gemini Pro', 'Node.js', 'WebSockets', 'OSRM API', 'FCM'],
    date: '2024',
    status: 'Production Ready',
    accent: 'blue-500'
  },
  {
    id: 'acciradar',
    title: 'ACCIRADAR',
    subtitle: 'Real-time Accident Detection',
    description: 'IoT emergency response system triggering immediate authority alerts upon collision detection.',
    githubUrl: 'https://github.com/Bhagesh4604/AcciRadar',
    bullets: [
      'Designed automated emergency response system for real-time collision detection',
      'Applied Statistical Analysis to sensor data to filter false alarms',
      'Engineered immediate authority alert triggering mechanisms',
      'High-reliability critical accident identification'
    ],
    tags: ['IoT', 'Data Science', 'Statistical Analysis', 'Python'],
    date: '2023',
    status: 'IoT & Data Project',
    accent: 'red-500'
  },
  {
    id: 'fake-urls',
    title: 'Fake URLs Detection',
    subtitle: 'AI-Powered Security Classifier',
    description: 'Intelligent system to identify and flag malicious or fraudulent URLs using advanced pattern matching.',
    githubUrl: 'https://github.com/Bhagesh4604/FakeURLsDetection',
    bullets: [
      'Implemented deep-learning classifiers for high-accuracy URL detection',
      'Integrated real-time scanning APIs for live threat intelligence',
      'Developed a user-friendly interface for instant link safety checks',
      'Optimized pattern matching algorithms for zero-day phishing protection'
    ],
    tags: ['AI Security', 'Python', 'React.js', 'Pattern Matching'],
    date: '2024',
    status: 'Security Project',
    accent: 'indigo-500'
  }
];

const ProjectCard: React.FC<{ project: typeof PROJECTS_EXTENDED[0] }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Smooth tilt mapping: max 5 degrees
    const rotateX = (mouseY / (rect.height / 2)) * -5;
    const rotateY = (mouseX / (rect.width / 2)) * 5;
    
    // Glare position mapping (0-100)
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setRotate({ x: rotateX, y: rotateY });
    setGlarePos({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <a 
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-none no-underline decoration-transparent"
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.04 : 1})`,
          transition: isHovered 
            ? 'transform 0.1s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out' 
            : 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.7s ease, border-color 0.7s ease',
          boxShadow: isHovered 
            ? `0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px -5px rgba(190, 242, 100, 0.15)` 
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
        className={`glass-terminal rounded-2xl border ${isHovered ? 'border-lime-400/40' : 'border-white/5'} overflow-hidden group relative clickable`}
      >
        {/* Dynamic Glare/Spotlight Effect */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
            zIndex: 2
          }}
        />

        <div className={`h-1.5 w-full bg-${project.accent} opacity-30 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_rgba(190,242,100,0.3)]`}></div>
        
        <div className="p-8 md:p-12 pointer-events-none relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="transform group-hover:translate-x-1 transition-transform duration-500">
              <h3 className={`text-3xl md:text-4xl font-black text-${project.accent} mb-1 drop-shadow-sm`}>{project.title}</h3>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">{project.subtitle}</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 group-hover:border-lime-400 group-hover:bg-lime-400/10 group-hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-white group-hover:text-lime-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-black uppercase px-4 py-1.5 bg-white/5 border border-white/10 text-slate-400 rounded-lg group-hover:border-lime-400/30 group-hover:text-slate-100 group-hover:bg-white/10 transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed group-hover:text-white transition-colors duration-500 max-w-2xl">
            {project.description}
          </p>

          <ul className="space-y-4 mb-14">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-400 font-medium group-hover:text-slate-200 transition-colors duration-500">
                <span className="w-2 h-2 rounded-full bg-lime-400 mt-2 flex-shrink-0 shadow-[0_0_12px_rgba(190,242,100,0.8)] group-hover:scale-125 transition-transform duration-500"></span>
                <span className="leading-tight">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-10 border-t border-white/5">
            <div className="flex items-center gap-2.5 text-slate-500 text-sm font-bold group-hover:text-slate-300 transition-colors duration-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              {project.date}
            </div>
            <div className="text-lime-400 text-sm font-black italic flex items-center gap-2.5 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              {project.status}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const ProjectGrid: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 reveal">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
          Technical <span className="text-lime-400 underline decoration-white/10 underline-offset-8">Projects</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          Architecting AI-native systems with deep logic and real-time intelligence. Click any card to view the repository.
        </p>
      </div>

      <div className="space-y-12">
        {PROJECTS_EXTENDED.map((project) => (
          <div key={project.id} className="reveal">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
