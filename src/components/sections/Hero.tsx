import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
            JD
          </div>
        </div>

        <p className="text-brand font-semibold tracking-widest text-sm uppercase mb-3">
          Hello, World! I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          John Developer
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6">
          Full-Stack{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">
            Software Engineer
          </span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft beautiful, performant web applications with modern tools.
          Passionate about clean code, great UX, and turning ideas into reality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollTo('projects')}
            className="px-8 py-3 rounded-xl bg-brand hover:bg-brand-dark text-white font-semibold text-base transition-colors shadow-lg shadow-brand/30"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 rounded-xl border border-white/20 hover:border-brand text-slate-300 hover:text-white font-semibold text-base transition-colors"
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="mailto:john@example.com"
            className="text-slate-400 hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </div>

        <button
          onClick={() => scrollTo('about')}
          className="animate-bounce text-slate-500 hover:text-brand transition-colors"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
}
