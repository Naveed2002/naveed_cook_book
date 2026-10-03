'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { projects } from '@/data/portfolio';

export function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/55">Show, don’t tell</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-black sm:text-5xl">Selected work.</h2>
        </div>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 px-5 py-5 shadow-sm transition sm:px-8 sm:py-7"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setPointer({ x: event.clientX - rect.left, y: event.clientY - rect.top });
            }}
            onMouseEnter={() => setHoveredProject(project.slug)}
            onMouseLeave={() => setHoveredProject(null)}
            whileHover={{ y: -2 }}
          >
            <div className="grid items-center gap-4 lg:grid-cols-[1.2fr_0.8fr_0.7fr]">
              <div className="min-w-0">
                <div className="mb-2 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 bg-black/[0.02] px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.06em] text-black sm:text-3xl">{project.title}</h3>
              </div>

              <div className="text-sm leading-relaxed text-black/65">{project.summary}</div>

              <div className="flex items-center justify-start gap-4 lg:justify-end">
                <span className="text-sm font-medium text-black/60">{project.category}</span>
                <Link href={`/case-study/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-black">
                  Explore <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-8 top-1/2 z-10 hidden w-64 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-2 shadow-soft md:block"
              animate={{
                opacity: hoveredProject === project.slug ? 1 : 0,
                x: hoveredProject === project.slug ? pointer.x - 120 : 24,
                y: hoveredProject === project.slug ? pointer.y - 220 : 12,
                scale: hoveredProject === project.slug ? 1 : 0.96,
              }}
              transition={{ type: 'spring', stiffness: 280, damping: 25 }}
            >
              <img src={project.image} alt={project.title} className="h-40 w-full rounded-[1rem] object-cover" />
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
