import type { DeveloperInfo } from '@/types';

export const photographerInfo: DeveloperInfo = {
  name: 'Shashikant Kanole',
  tagline: 'Full Stack Developer',
  heroIntroduction: 'Building scalable web applications with React, Node.js, and cloud technologies.',
  biography: `Full-stack developer with 2 years of experience building scalable web applications using React.js, Node.js, Next.js, MongoDB, and AWS. Expert in developing real-time systems, REST APIs, and cloud-based deployments. Currently deepening expertise in Docker and holding JLPT N3 level comprehension in Japanese.

My journey in software development has taken me through diverse roles — from crafting real-time communication modules with WebRTC & Socket.IO at Senwell Global, to building AI-powered analytics dashboards at Fayredge, and contributing to full-stack modules at Curly Braces. Each experience has sharpened my ability to deliver production-ready, performant solutions.`,
  approach: `I believe great software emerges from clean architecture, thoughtful user experience, and robust engineering practices. Whether it's optimizing database queries, designing reusable component systems, or deploying to cloud infrastructure, I focus on building solutions that are maintainable, scalable, and impactful.

My technical toolkit spans the full stack — from responsive React frontends with TailwindCSS to Node.js backends with MongoDB, all deployed on AWS with CI/CD best practices.`,
  skills: {
    languages: ['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Next.js', 'HTML', 'CSS'],
    databases: ['MongoDB', 'MySQL'],
    tools: ['AWS (EC2)', 'Docker', 'WebRTC', 'Socket.IO', 'Git', 'Nginx'],
    methodologies: ['Agile Development', 'DevOps basics', 'REST API Design'],
  },
  experience: [
    {
      company: 'Senwell Global',
      role: 'Software Developer',
      location: 'Pune, Maharashtra',
      period: '07/2025 – Present',
      highlights: [
        'Created real-time communication modules using WebRTC & Socket.IO',
        'Engineered scalable backend services with Node.js & Next.js',
        'Optimized MongoDB queries and schema designs',
        'Enhanced logging and monitoring pipelines',
      ],
    },
    {
      company: 'Fayredge',
      role: 'Software Developer',
      location: 'Bengaluru, Karnataka',
      period: '10/2024 – 07/2025',
      highlights: [
        'Built a Feedback Analytics Dashboard with React.js and Node.js',
        'Integrated AI summarization via custom APIs',
        'Developed reusable UI components with React Hooks & TailwindCSS',
        'Deployed production apps on AWS EC2 using SSH and Nginx',
      ],
    },
    {
      company: 'Curly Braces',
      role: 'Software Developer',
      location: 'Mumbai, Maharashtra',
      period: '09/2023 – 09/2024',
      highlights: [
        'Contributed to full-stack modules using React, Node.js, and MongoDB',
        'Integrated 8+ REST APIs into internal dashboards',
      ],
    },
  ],
  education: [
    'PG - DAC (Diploma in Advanced Computing), Juhu Mumbai',
    'B.Tech, SGGS Institute of Engineering & Technology, Nanded',
  ],
  languages: [
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Japanese', level: 'Daily Conversation (JLPT N3)' },
  ],
  location: 'Pune, India',
  email: 'shashikantkanole17@gmail.com',
  phone: '+91 9404490975',
  availability: 'Open to new opportunities',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/shashikant-kanole',
    github: 'https://github.com/shashikantkanole',
  },
  // Photo by ThisisEngineering on Unsplash
  portraitImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1080',
};
