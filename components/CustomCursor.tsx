'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const springX = useSpring(x, { stiffness: 550, damping: 35, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 550, damping: 35, mass: 0.3 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);
    const handleHover = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactive = !!target?.closest('a, button, input, textarea, [data-interactive="true"]');
      setIsHovering(interactive);
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerleave', handleLeave);
    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleHover);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', handleLeave);
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', handleHover);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden h-5 w-5 rounded-full border border-black/20 bg-black/10 mix-blend-difference md:block"
      style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0, scale: isHovering ? 1.8 : 1 }}
      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
    />
  );
}
