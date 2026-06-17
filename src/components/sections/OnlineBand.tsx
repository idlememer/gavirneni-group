'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Laptop, Clock, Fuel, MapPin, ArrowRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import { brand } from '@/lib/brand';

const bullets = [
  { Icon: Clock, label: 'Save time' },
  { Icon: Fuel, label: 'Save travel & fuel' },
  { Icon: MapPin, label: 'Pan-India delivery' },
];

export default function OnlineBand() {
  return (
    <section className="section-tight relative isolate overflow-hidden bg-royal-gradient text-white">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-sm opacity-20" />
      <motion.div
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-gold-400/20 blur-[120px]"
      />

      <div className="container-page">
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-[auto,1fr,auto]">
            <div className="hidden h-20 w-20 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md md:grid">
              <Laptop className="h-9 w-9 text-gold-300" />
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                {brand.onlineBand.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                {brand.onlineBand.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">
                {brand.onlineBand.sub}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {bullets.map((b) => (
                  <span
                    key={b.label}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100"
                  >
                    <b.Icon className="h-3.5 w-3.5 text-gold-300" />
                    {b.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                Start Online <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/services" className="btn-outline-light">
                View services
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
