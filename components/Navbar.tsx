'use client';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/data/portfolio';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? latest;
    setVisible(latest < previous || latest < 60);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: visible ? 0 : -110, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full border border-black/10 bg-white/70 px-4 py-3 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.04)] sm:px-6">
          <Link href="#top" className="text-base font-semibold tracking-[-0.04em] text-black">
            Naveed Ahamed
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-black/65 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-black">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-50 px-3 py-1.5 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-200/60 md:inline-flex"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.14)]" />
              Available for projects
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 md:hidden"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span className="relative h-4 w-5">
                <span className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-black" />
                <span className="absolute inset-x-0 top-1.5 h-0.5 rounded-full bg-black" />
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-black" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl border border-black/10 bg-white/95 p-4 shadow-soft backdrop-blur-xl md:hidden"
          >
            <div className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-2xl px-3 py-2 text-base font-medium text-black/80">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
