import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import clsx from 'clsx';
import { projects } from '@/lib/data';
import type { Project } from '@/types';

type Filter = 'All' | 'React' | 'Node.js' | 'TypeScript' | 'Next.js';
const FILTERS: Filter[] = ['All', 'React', 'TypeScript', 'Node.js', 'Next.js'];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-surface-2 rounded-2xl overflow-hidden border border-white/10 hover:border-brand/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1">
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-2/80 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand border border-brand/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Github size={15} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-brand hover:text-white transition-colors"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="py-24 bg-surface-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand font-semibold tracking-widest text-sm uppercase mb-2">What I&apos;ve Built</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Projects</h2>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-semibold transition-colors',
                active === f
                  ? 'bg-brand text-white'
                  : 'bg-surface-3 text-slate-400 hover:text-white border border-white/10'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
