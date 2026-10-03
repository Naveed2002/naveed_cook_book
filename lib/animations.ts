export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const wordReveal = {
  hidden: { opacity: 0.25, color: '#a1a1aa' },
  visible: {
    opacity: 1,
    color: '#121212',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
