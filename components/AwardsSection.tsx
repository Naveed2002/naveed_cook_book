import { motion } from 'framer-motion';
import { awards } from '@/data/portfolio';

export function AwardsSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-black/10 bg-white/80 p-5 shadow-soft sm:p-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/55">Recognition</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {awards.map((award, index) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="rounded-2xl border border-black/10 bg-[#f8f8f5] px-4 py-5 text-center text-sm font-medium text-black/75"
            >
              {award}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
