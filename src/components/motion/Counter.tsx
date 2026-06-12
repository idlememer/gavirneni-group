'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export default function Counter({
  to,
  duration = 1.4,
  suffix = '',
  prefix = '',
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {Math.round(val).toLocaleString('en-IN')}
      {suffix}
    </motion.span>
  );
}
