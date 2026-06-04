import { useState } from 'react';
import clsx from 'clsx';
import { skills } from '@/lib/data';
import type { Skill } from '@/types';

type Category = 'All' | 'Frontend' | 'Backend' | 'Tools';

const CATEGORIES: Category[] = ['All', 'Frontend', 'Backend', 'Tools'];

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="bg-surface-3 rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-white">{skill.name}</span>
        <span className="text-xs text-slate-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-surface-2 rounded-full overflow-hidden">
        <div
          className="h-2 bg-gradient-to-r from-brand to-accent rounded-full transition-all duration-700"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All'
    ? skills
    : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand font-semibold tracking-widest text-sm uppercase mb-2">What I Know</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Skills & Expertise</h2>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-semibold transition-colors',
                active === cat
                  ? 'bg-brand text-white'
                  : 'bg-surface-2 text-slate-400 hover:text-white border border-white/10'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
