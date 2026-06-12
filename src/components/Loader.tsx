'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-hero-radial"
        >
          <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-30" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative h-36 w-36"
            >
              {/* Rotating gold halo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent, #F5B335, transparent 70%)',
                  WebkitMask:
                    'radial-gradient(circle, transparent 60%, #000 62%)',
                  mask: 'radial-gradient(circle, transparent 60%, #000 62%)',
                }}
              />
              {/* White brand chip with G emblem */}
              <div className="absolute inset-3 grid place-items-center rounded-full bg-white shadow-2xl ring-1 ring-white/40">
                <div className="relative h-20 w-20">
                  <Image
                    src="/images/logo-mark.png"
                    alt=""
                    fill
                    sizes="80px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                GAVIRNENI
              </p>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-400">
                Private Limited
              </p>
              <p className="mt-3 text-[10px] font-semibold tracking-[0.32em] text-slate-300">
                CONNECTING OPPORTUNITIES · ENHANCING LIVES
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
