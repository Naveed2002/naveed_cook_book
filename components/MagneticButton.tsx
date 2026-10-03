'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';

type MagneticButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
};

export function MagneticButton({ href, children, className = '' }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.01 }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-black/10 bg-black px-6 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 ${className}`}
    >
      <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-500 group-hover:scale-y-100" />
      <span className="relative z-10 transition-colors duration-300 group-hover:text-black">{children}</span>
    </motion.a>
  );
}
