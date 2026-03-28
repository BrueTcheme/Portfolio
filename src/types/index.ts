/**
 * Core TypeScript interfaces for Developer Portfolio
 */

export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'realtime' | 'devops';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  techStack?: string;
  location?: string;
  slug: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface DeveloperInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  skills: {
    languages: string[];
    databases: string[];
    tools: string[];
    methodologies: string[];
  };
  experience: {
    company: string;
    role: string;
    location: string;
    period: string;
    highlights: string[];
  }[];
  education: string[];
  languages: { name: string; level: string }[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'freelance' | 'fulltime' | 'collaboration';
  message: string;
  timestamp: Date;
}
