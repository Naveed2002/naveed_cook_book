'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/MagneticButton';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { heroBadges, heroLogos, heroStats, profile } from '@/data/portfolio';

function MarqueeStrip() {
  const repeated = [...heroLogos, ...heroLogos];

  return (
    <div className="overflow-hidden rounded-full border border-black/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm">
      <div className="flex min-w-max gap-8 whitespace-nowrap text-sm font-medium tracking-[0.16em] text-black/55 uppercase motion-safe:animate-marquee">
        {repeated.map((logo, index) => (
          <span key={`${logo}-${index}`} className="inline-flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-black/40" />
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-36">
      <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-black/70 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.h1 variants={fadeUp} className="max-w-[1200px] text-[3.3rem] font-semibold leading-[0.9] tracking-[-0.07em] text-black sm:text-[5rem] lg:text-[7rem] xl:text-[8rem]">
            <span className="block">Flutter apps, SaaS</span>
            <span className="block">& ERP systems</span>
            <span className="block text-black/70">that scale.</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="max-w-2xl text-base text-black/70 sm:text-lg">
            I build iOS and Android apps, SaaS web products and ERP systems for education and growing companies — with a focus on clear UX and product results.
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <MagneticButton href="#contact">Book a discovery call</MagneticButton>
            <a href="#work" className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-black transition hover:bg-white">
              View work
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="min-w-[160px] rounded-2xl border border-black/10 bg-white/80 px-4 py-3 shadow-sm">
                <div className="text-2xl font-semibold tracking-[-0.06em] text-black">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-black/55">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="pt-4">
            <MarqueeStrip />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
