'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { faqs } from '@/data/portfolio';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/55">FAQ</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-black sm:text-5xl">Everything you need to know.</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/80 shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="text-lg font-medium text-black">{faq.question}</span>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-base leading-relaxed text-black/65 sm:px-6">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
