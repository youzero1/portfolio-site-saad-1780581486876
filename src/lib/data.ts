import type { Project, Skill, NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce app with cart, checkout, and admin dashboard built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task manager with drag-and-drop, labels, and team collaboration features.',
    tags: ['React', 'TypeScript', 'Zustand', 'Vite'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather forecasting app with interactive charts and location-based search.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80',
  },
  {
    id: 4,
    title: 'Developer Blog',
    description: 'A markdown-powered personal blog with syntax highlighting and dark mode.',
    tags: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
  },
  {
    id: 5,
    title: 'REST API Server',
    description: 'A production-grade REST API with JWT auth, rate limiting, and comprehensive docs.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Swagger'],
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
  {
    id: 6,
    title: 'AI Chat Interface',
    description: 'A sleek AI chat interface with streaming responses, conversation history, and prompt templates.',
    tags: ['React', 'OpenAI', 'TypeScript', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
  { name: 'Next.js', level: 85, category: 'Frontend' },
  { name: 'HTML / CSS', level: 97, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Express', level: 78, category: 'Backend' },
  { name: 'PostgreSQL', level: 72, category: 'Backend' },
  { name: 'MongoDB', level: 70, category: 'Backend' },
  { name: 'REST APIs', level: 88, category: 'Backend' },
  { name: 'Git & GitHub', level: 90, category: 'Tools' },
  { name: 'Docker', level: 65, category: 'Tools' },
  { name: 'Vite', level: 85, category: 'Tools' },
  { name: 'Figma', level: 60, category: 'Tools' },
];
