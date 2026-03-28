import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Real-Time Communication Platform',
    category: 'realtime',
    year: '2025',
    slug: 'realtime-communication-platform',
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Built real-time communication modules using WebRTC & Socket.IO, managing high user concurrency with scalable Node.js backend services.',
    client: 'Senwell Global',
    techStack: 'React.js, Node.js, WebRTC, Socket.IO, MongoDB',
    location: 'Pune, India',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'WebRTC video call interface',
        aspectRatio: 'landscape',
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Server architecture diagram',
        aspectRatio: 'landscape',
      },
      {
        id: '1-3',
        src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Code editor with Socket.IO implementation',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '2',
    title: 'Feedback Analytics Dashboard',
    category: 'fullstack',
    year: '2024',
    slug: 'feedback-analytics-dashboard',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Designed and built a Feedback Analytics Dashboard using React.js and Node.js for real-time data insights, with AI summarization via custom APIs to automate high-volume content processing.',
    client: 'Fayredge',
    techStack: 'React.js, Node.js, TailwindCSS, AI APIs, AWS EC2',
    location: 'Bengaluru, India',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Analytics dashboard overview',
        aspectRatio: 'landscape',
      },
      {
        id: '2-2',
        src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Data visualization components',
        aspectRatio: 'landscape',
      },
      {
        id: '2-3',
        src: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'AI summarization feature',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '3',
    title: 'Cloud Deployment Pipeline',
    category: 'devops',
    year: '2024',
    slug: 'cloud-deployment-pipeline',
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Deployed and configured production applications on AWS EC2 using SSH and Nginx, with Docker containerization and automated CI/CD pipelines.',
    techStack: 'AWS EC2, Docker, Nginx, SSH, Git',
    location: 'Remote',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Cloud infrastructure visualization',
        aspectRatio: 'landscape',
      },
      {
        id: '3-2',
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Server monitoring dashboard',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '4',
    title: 'REST API Integration Hub',
    category: 'backend',
    year: '2024',
    slug: 'rest-api-integration-hub',
    coverImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Integrated 8+ REST APIs into internal dashboards with critical UI enhancements, building full-stack modules using React, Node.js, and MongoDB.',
    client: 'Curly Braces',
    techStack: 'React.js, Node.js, MongoDB, REST APIs',
    location: 'Mumbai, India',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'API documentation interface',
        aspectRatio: 'landscape',
      },
      {
        id: '4-2',
        src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Code implementation',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '5',
    title: 'Reusable Component Library',
    category: 'frontend',
    year: '2024',
    slug: 'reusable-component-library',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Developed various reusable UI components with React Hooks & TailwindCSS, increasing development speed across multiple projects.',
    client: 'Fayredge',
    techStack: 'React.js, TypeScript, TailwindCSS, Storybook',
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Component library showcase',
        aspectRatio: 'landscape',
      },
      {
        id: '5-2',
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'React component code',
        aspectRatio: 'landscape',
      },
    ],
  },
  {
    id: '6',
    title: 'MongoDB Performance Optimization',
    category: 'backend',
    year: '2025',
    slug: 'mongodb-optimization',
    coverImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Optimized MongoDB queries and schema designs, reducing application bottlenecks and supporting large datasets for production-level applications.',
    client: 'Senwell Global',
    techStack: 'MongoDB, Node.js, Redis, Performance Profiling',
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Database performance metrics',
        aspectRatio: 'landscape',
      },
      {
        id: '6-2',
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Query optimization results',
        aspectRatio: 'landscape',
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
