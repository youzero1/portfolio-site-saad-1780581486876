import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import clsx from 'clsx';
import { navLinks } from '@/lib/data';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(['about', 'skills', 'projects', 'contact']);

  const handleNav = (href: string) => {
    setOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className="text-brand" size={24} />
            <span className="font-bold text-xl text-white">DevPortfolio</span>
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={clsx(
                      'text-sm font-medium transition-colors',
                      activeId === id
                        ? 'text-brand'
                        : 'text-slate-400 hover:text-white'
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => handleNav('#contact')}
                className="px-4 py-2 rounded-lg bg-brand hover:bg-brand-dark text-white text-sm font-medium transition-colors"
              >
                Hire Me
              </button>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface-2 border-t border-white/10 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-slate-300 hover:text-white font-medium w-full text-left transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleNav('#contact')}
                className="w-full px-4 py-2 rounded-lg bg-brand hover:bg-brand-dark text-white text-sm font-medium transition-colors"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
