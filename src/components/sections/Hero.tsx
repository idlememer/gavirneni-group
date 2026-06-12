'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Briefcase,
  ShieldCheck,
  Plane,
  Globe2,
  Building2,
  Car,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import Counter from '@/components/motion/Counter';
import { brand } from '@/lib/brand';

const floaters = [
  { Icon: Briefcase, top: '14%', left: '6%', delay: 0.1 },
  { Icon: ShieldCheck, top: '24%', right: '8%', delay: 0.25 },
  { Icon: Plane, top: '56%', left: '4%', delay: 0.4 },
  { Icon: Globe2, top: '70%', right: '10%', delay: 0.55 },
  { Icon: Building2, top: '38%', left: '12%', delay: 0.7 },
  { Icon: Car, top: '46%', right: '14%', delay: 0.85 },
];

const stats = [
  { value: 250, suffix: '+', label: 'Clients Served' },
  { value: 12, suffix: '', label: 'States Covered' },
  { value: 40, suffix: '+', label: 'Service Lines' },
  { value: 24, suffix: '/7', label: 'Trusted Support' },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-radial">
      {/* animated bg */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-lg opacity-30" />
      <div className="bg-noise pointer-events-none absolute inset-0 -z-10" />
      <motion.div
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 -z-10 h-[520px] w-[520px] rounded-full bg-royal-500/30 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -30, 10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -right-32 -z-10 h-[560px] w-[560px] rounded-full bg-gold-400/20 blur-[120px]"
      />

      {/* Floaters */}
      {floaters.map(({ Icon, top, left, right, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 + delay, duration: 0.6, ease: 'easeOut' }}
          style={{ top, left, right }}
          className="absolute hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 6 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
            className="glass-dark grid h-14 w-14 place-items-center rounded-2xl text-gold-300 shadow-2xl ring-1 ring-white/15"
          >
            <Icon className="h-6 w-6" />
          </motion.div>
        </motion.div>
      ))}

      <div className="container-page relative pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-40 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5" />
          {brand.tagline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="mx-auto mt-6 max-w-4xl text-center font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Your One-Stop{' '}
          <span className="relative whitespace-nowrap">
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              Digital &amp; Business
            </span>
          </span>{' '}
          Service Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          Government services, global opportunities, digital solutions &amp; business support —
          handled by one team, under one trusted roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.6 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href="/services" className="btn-gold">
            Explore Services
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-light"
          >
            <MessageCircle className="h-4 w-4" /> Contact on WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.75, duration: 0.7 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 md:mt-20 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-dark rounded-2xl px-4 py-5 text-center ring-1 ring-white/10"
            >
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-300">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade into white */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
