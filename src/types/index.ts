export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'AI/ML' | 'Frontend' | 'Backend' | 'Tools' | 'Cloud';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}