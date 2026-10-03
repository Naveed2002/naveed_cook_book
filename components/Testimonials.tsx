'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { testimonials } from '@/data/portfolio';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((value) => (value - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex((value) => (value + 1) % testimonials.length);

  const visibleTestimonials = [0, 1, 2].map((offset) => testimonials[(activeIndex + offset) % testimonials.length]);

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/55">Clients are saying</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-black sm:text-5xl">Feedback that sticks.</h2>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={prev} className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:bg-black hover:text-white" aria-label="Previous testimonial">
            <ChevronLeft size={18} />
          </button>
          <button type="button" onClick={next} className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:bg-black hover:text-white" aria-label="Next testimonial">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <AnimatePresence mode="wait">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${activeIndex + index}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-soft"
            >
              <div className="mb-6 flex items-center gap-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-black">{testimonial.name}</div>
                  <div className="text-sm text-black/55">{testimonial.location}</div>
                </div>
              </div>

              <p className="text-xl font-medium leading-relaxed tracking-[-0.04em] text-black">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm uppercase tracking-[0.12em] text-black/45">{testimonial.role}</div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
