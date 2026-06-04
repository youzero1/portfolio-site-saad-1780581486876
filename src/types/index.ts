export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image: string;
};

export type Skill = {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools';
};

export type NavLink = {
  label: string;
  href: string;
};

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
};
