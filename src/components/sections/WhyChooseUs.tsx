'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  Zap,
  Globe2,
  Wallet,
  Smile,
  FileCheck,
  Lock,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const items = [
  { Icon: ShieldCheck, title: 'Trusted Services', desc: 'Verified processes and licensed support.' },
  { Icon: Sparkles, title: 'Expert Guidance', desc: 'Specialists across every domain we cover.' },
  { Icon: Zap, title: 'Fast Processing', desc: 'Time-bound turnarounds you can plan around.' },
  { Icon: Globe2, title: 'Pan India Support', desc: 'Serving customers across all 28 states.' },
  { Icon: Wallet, title: 'Affordable Pricing', desc: 'Transparent fees, no hidden charges.' },
  { Icon: Smile, title: 'Customer Satisfaction', desc: 'Repeat customers across every division.' },
  { Icon: FileCheck, title: 'Professional Documentation', desc: 'Paperwork done right, the first time.' },
  { Icon: Lock, title: 'Secure Transactions', desc: 'Bank-grade security across all payments.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why Gavirneni</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            Built on <span className="gradient-text">trust, speed and care.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Everything we do is anchored to one promise — make every interaction feel premium,
            honest and effortless.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50 p-5 shadow-card-premium transition-shadow duration-300 hover:shadow-card-premium-hover"
            >
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gold-200/0 transition-colors duration-500 group-hover:bg-gold-200/40 group-hover:blur-2xl" />
              <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-royal-gradient text-white shadow-glow-royal">
                <it.Icon className="h-5 w-5" />
              </div>
              <p className="relative mt-4 font-display text-sm font-bold text-slate-900">
                {it.title}
              </p>
              <p className="relative mt-1 text-xs leading-relaxed text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
