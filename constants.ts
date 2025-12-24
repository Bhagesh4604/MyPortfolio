
import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'nxt-tutor',
    title: 'NXT Tutor',
    description: 'Vision-powered native language learning platform using Gemini Pro for reasoning and Gemini 2.5 Flash for real-time IDE analysis.',
    tags: ['Gemini Pro', 'Gemini 2.5 Flash', 'Vision AI', 'Node.js'],
    gradient: 'from-lime-600 to-emerald-500',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'web3-intel',
    title: 'Web3 Intelligence',
    description: 'MEV detection and prevention tool with Gemini Pro risk reporting and Arbitrum SDK integration for L1-L2 bridging.',
    tags: ['Arbitrum SDK', 'WebSockets', 'Private RPCs', 'Ethers.js'],
    gradient: 'from-purple-600 to-indigo-500',
    span: 'md:col-span-2'
  },
  {
    id: 'ai-hospital',
    title: 'AI Hospital System',
    description: 'Gemini-powered triage and GPS ambulance tracking system achieving 25% resource optimization.',
    tags: ['MERN', 'Gemini AI', 'Predictive Modeling'],
    gradient: 'from-blue-600 to-cyan-500',
    span: 'md:col-span-1'
  },
  {
    id: 'acciradar',
    title: 'ACCIRADAR',
    description: 'Real-time IoT accident detection system using statistical analysis for high-reliability emergency alerts.',
    tags: ['IoT', 'Statistical Analysis', 'Python'],
    gradient: 'from-orange-600 to-red-500',
    span: 'md:col-span-1'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'AI Orchestration',
    skills: ['Gemini Pro', 'Gemini 2.5 Flash', 'Prompt Engineering (CoT)', 'Multimodal RAG']
  },
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'Node.js', 'Java', 'SQL', 'Python (Scikit-Learn, Pandas)', 'C']
  },
  {
    title: 'Web Development',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSockets', 'Tailwind CSS']
  },
  {
    title: 'Web3 & Tools',
    skills: ['Ethers.js', 'Arbitrum SDK', 'Hardhat', 'Private RPCs', 'Tableau', 'Power BI', 'Git']
  }
];
