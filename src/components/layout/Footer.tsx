import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="text-brand" size={20} />
          <span className="font-semibold text-white">DevPortfolio</span>
        </div>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} John Developer. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
