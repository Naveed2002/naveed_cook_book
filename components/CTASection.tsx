'use client';

import { useEffect, useState } from 'react';
import { MagneticButton } from '@/components/MagneticButton';
import { profile } from '@/data/portfolio';

export function CTASection() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const formatted = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      });
      setTime(formatted);
    };

    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-4 pb-16 pt-20 sm:px-6 lg:px-8">
      <div className="rounded-[2.4rem] border border-black/10 bg-[#121212] px-6 py-10 text-white shadow-soft sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">Let’s build</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl lg:text-[5rem] lg:leading-[0.9]">
              Ready to start?
            </h2>
          </div>

          <div className="flex justify-start lg:justify-end">
            <MagneticButton href={`mailto:${profile.email}`} className="bg-white text-black">Start a project</MagneticButton>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <a href={`mailto:${profile.email}`} className="transition hover:text-white">{profile.email}</a>
            <span className="hidden h-1 w-1 rounded-full bg-white/50 sm:inline-block" />
            <span>{profile.location}</span>
          </div>

          <div className="flex items-center gap-4">
            <a href={profile.fiverr} target="_blank" rel="noreferrer" className="transition hover:text-white">Fiverr</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          </div>
        </div>

        <footer className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 {profile.name}</div>
          <div>Local time: {time || '—'}</div>
        </footer>
      </div>
    </section>
  );
}
