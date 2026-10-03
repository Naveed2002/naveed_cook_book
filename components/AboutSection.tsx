'use client';

import { motion } from 'framer-motion';
import { fadeUp, wordReveal } from '@/lib/animations';
import { aboutBio, profile } from '@/data/portfolio';

const words = aboutBio.split(' ');

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-2 shadow-soft">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-[540px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <motion.p variants={fadeUp} className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/55">
            About
          </motion.p>

          <h2 className="max-w-[620px] text-4xl font-semibold tracking-[-0.07em] text-black sm:text-5xl lg:text-[4.2rem] lg:leading-[0.96]">
            I build apps that people actually enjoy using.
          </h2>

          <motion.p className="flex max-w-xl flex-wrap gap-x-2 text-lg leading-relaxed text-black/65">
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={wordReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.04 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
