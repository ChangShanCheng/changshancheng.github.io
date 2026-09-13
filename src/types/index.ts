export type ProjectCategory = 'Document AI' | 'Agent & KG' | 'Cloud & Web' | 'Side Project' | 'Research';

export interface Project {
  id: number;
  title: string;
  period: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  highlights: string[];
  metric?: string;
  github?: string;
  demo?: string;
}

export type SkillCategory = 'LLM & Agents' | 'Document AI / CV' | 'Data & ML' | 'Backend' | 'Frontend' | 'Cloud & DevOps' | 'Security';

export interface SkillGroup {
  category: SkillCategory;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
  tags?: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  note?: string;
}
