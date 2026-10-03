'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { pricingServices, type ServiceTab } from '@/data/portfolio';

const tabs: { key: ServiceTab; label: string }[] = [
  { key: 'mobile', label: 'Flutter App' },
  { key: 'saas', label: 'SaaS Web App' },
  { key: 'erp', label: 'ERP System' },
  { key: 'consultation', label: 'Consultation' },
];

export function ServicesPricing() {
  const [activeTab, setActiveTab] = useState<ServiceTab>('mobile');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1);

  const currentService = pricingServices[activeTab];

  return (
    <section id="services" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/55">Services & pricing</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-black sm:text-5xl">Clear packages, thoughtful delivery.</h2>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className="relative rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-black/75 transition"
          >
            {tab.key === activeTab && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-black"
                transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              />
            )}
            <span className={tab.key === activeTab ? 'relative z-10 text-white' : 'relative z-10'}>{tab.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.12em] text-black/50">{currentService.title}</p>
            <p className="mt-2 max-w-2xl text-base text-black/65">{currentService.description}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {currentService.tiers.map((tier, index) => (
              <motion.div
                key={`${activeTab}-${tier.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex h-full flex-col rounded-[2rem] border border-black/10 bg-white/80 p-5 shadow-soft"
              >
                <div className={`mb-4 rounded-2xl bg-gradient-to-r ${tier.accent} p-0.5`}>
                  <div className="rounded-[0.9rem] bg-white/90 px-4 py-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/45">{tier.name}</div>
                    <div className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-black">{tier.price}</div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-black/65">{tier.description}</p>

                <button type="button" className="mt-6 rounded-full bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-black/90">
                  {tier.cta}
                </button>

                <div className="mt-6 border-t border-black/10 pt-4">
                  <button
                    type="button"
                    className="mb-3 flex w-full items-center justify-between text-left text-sm font-medium text-black"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <span>What’s included</span>
                    <span className={`transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}>⌄</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {expandedIndex === index && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        className="space-y-2 overflow-hidden text-sm text-black/60"
                      >
                        {tier.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-black/60" />
                            {item}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
