import { Download, MapPin, Calendar, Briefcase } from 'lucide-react';

const AVATAR_URL = 'https://xjsyjqzrtpgndomemxcg.supabase.co/storage/v1/object/public/prompt-images/build-images/1780582237593-user1.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand font-semibold tracking-widest text-sm uppercase mb-2">Who I Am</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — image block */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={AVATAR_URL}
                  alt="John Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-surface-3 rounded-2xl px-4 py-3 border border-white/10 shadow-xl">
                <p className="text-xs text-slate-400">Experience</p>
                <p className="text-2xl font-bold text-white">5+ yrs</p>
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Passionate developer who loves building things for the web.
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              I&apos;m a full-stack developer specializing in React, TypeScript, and Node.js.
              I enjoy solving complex problems, learning new technologies, and collaborating
              with talented teams to build impactful products.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me hiking, reading about system design,
              or contributing to open-source projects.
            </p>

            {/* Info chips */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-surface-3 rounded-xl px-4 py-3">
                <MapPin size={18} className="text-brand" />
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="text-sm font-semibold text-white">San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-3 rounded-xl px-4 py-3">
                <Calendar size={18} className="text-brand" />
                <div>
                  <p className="text-xs text-slate-500">Available</p>
                  <p className="text-sm font-semibold text-white">Open to offers</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-3 rounded-xl px-4 py-3">
                <Briefcase size={18} className="text-brand" />
                <div>
                  <p className="text-xs text-slate-500">Employment</p>
                  <p className="text-sm font-semibold text-white">Full-time / Remote</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-3 rounded-xl px-4 py-3">
                <Download size={18} className="text-brand" />
                <div>
                  <p className="text-xs text-slate-500">Resume</p>
                  <p className="text-sm font-semibold text-brand cursor-pointer hover:underline">Download CV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
