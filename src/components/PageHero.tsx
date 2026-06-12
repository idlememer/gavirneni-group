'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs?: Crumb[];
};

export default function PageHero({ eyebrow, title, description, breadcrumbs }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial pt-28 pb-16 text-white sm:pt-32 md:pt-36 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-lg opacity-25" />
      <motion.div
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-royal-500/30 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -30, 10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -right-32 -z-10 h-96 w-96 rounded-full bg-gold-400/20 blur-[120px]"
      />

      <div className="container-page">
        {breadcrumbs && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 flex items-center gap-1.5 text-xs text-slate-300"
          >
            <Link href="/" className="inline-flex items-center gap-1 hover:text-white">
              <Home className="h-3.5 w-3.5" /> Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                {b.href ? (
                  <Link href={b.href} className="hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-slate-200">{b.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
