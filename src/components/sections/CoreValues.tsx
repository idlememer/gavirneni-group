'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Eye,
  Target,
  Heart,
  Users,
  Award,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import { brand } from '@/lib/brand';

const icons = [ShieldCheck, Eye, Target, Heart, Users, Award];

export default function CoreValues() {
  return (
    <section id="values" className="section relative isolate overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-royal-100/40 blur-3xl"
      />
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Our Core Values</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            The principles we <span className="gradient-text">never compromise on.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Six promises that govern every counter, call and contract at Gavirneni Group.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brand.coreValues.map((v, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-7 shadow-card-premium transition-shadow duration-300 hover:shadow-card-premium-hover"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold-200/0 blur-3xl transition-colors duration-500 group-hover:bg-gold-200/40"
                />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-royal-gradient text-gold-300 shadow-glow-royal">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="relative mt-5 font-display text-xl font-bold text-slate-900">
                  {v.title}
                </p>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
