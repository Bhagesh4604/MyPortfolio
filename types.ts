
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  span?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
