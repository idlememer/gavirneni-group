'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plane, Globe2, ArrowRight, MapPin, Users, FileCheck } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const countries = [
  { name: 'Dubai · UAE', flag: '🇦🇪', image: '/images/dubai.jpg', salary: 'AED 2,500 – 6,500', roles: 'Driver · Hospitality · Construction' },
  { name: 'Bahrain', flag: '🇧🇭', image: '/images/bahrain.jpg', salary: 'BHD 180 – 450', roles: 'Technician · Sales · Industrial' },
  { name: 'Kuwait', flag: '🇰🇼', image: '/images/kuwait.jpg', salary: 'KWD 180 – 400', roles: 'Hospitality · Cleaning · Industrial' },
  { name: 'Germany', flag: '🇩🇪', image: '/images/germany.jpg', salary: 'EUR 2,400 – 4,200', roles: 'Ausbildung · Nursing · IT' },
  { name: 'Serbia · EU', flag: '🇷🇸', image: '/images/serbia.jpg', salary: 'EUR 600 – 1,200', roles: 'Schengen pathway · Industrial' },
];

const process = [
  { step: '01', Icon: Users, title: 'Counselling', desc: 'Understand your goals, skills and preferences.' },
  { step: '02', Icon: FileCheck, title: 'Documentation', desc: 'Resume, certificates, visa & embassy paperwork.' },
  { step: '03', Icon: Plane, title: 'Interview & Visa', desc: 'Employer interview coordination and visa support.' },
  { step: '04', Icon: Globe2, title: 'Onboarding', desc: 'Pre-departure briefing and arrival assistance.' },
];

export default function FlyBridge() {
  return (
    <section id="flybridge" className="section relative isolate overflow-hidden bg-royal-950 text-white">
      <div className="absolute inset-0 -z-10 bg-hero-radial opacity-90" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-sm opacity-25" />

      {/* Animated flight path */}
      <svg
        viewBox="0 0 800 200"
        className="absolute inset-x-0 top-24 -z-10 w-full opacity-30"
        aria-hidden
      >
        <defs>
          <linearGradient id="path-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#F5B335" stopOpacity="0" />
            <stop offset=".5" stopColor="#F5B335" stopOpacity=".7" />
            <stop offset="1" stopColor="#F5B335" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,150 C200,30 400,180 600,60 S800,80 800,80"
          stroke="url(#path-grad)"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
        />
      </svg>

      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          {/* FlyBridge sub-brand logo */}
          <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white px-4 py-2.5 shadow-2xl">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/images/logo-flybridge.png"
                alt="FlyBridge — A Gavirneni Group Company"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="text-left leading-tight">
              <p className="font-display text-sm font-bold text-royal-700">FlyBridge</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
                A Gavirneni Group Company
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
            <Plane className="h-3.5 w-3.5" /> FlyBridge Overseas
          </span>
          <h2 className="heading-display mt-4 text-4xl text-white sm:text-5xl">
            Build a global career with{' '}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              FlyBridge
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Trusted overseas recruitment — Gulf, EU and beyond. Verified employers, complete
            visa &amp; interview coordination, and end-to-end candidate support.
          </p>
        </Reveal>

        {/* Country grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {countries.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/40 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    <span className="text-base leading-none">{c.flag}</span>
                    <MapPin className="h-3 w-3" />
                  </div>
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="font-display text-lg font-bold leading-tight text-white">
                      {c.name}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                      {c.salary}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{c.roles}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Process */}
        <Reveal delay={0.1} className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            How we place you abroad
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
              >
                <p className="font-display text-2xl font-extrabold text-gold-400/70">{p.step}</p>
                <p.Icon className="mt-3 h-5 w-5 text-gold-300" />
                <p className="mt-3 font-display text-sm font-bold text-white">{p.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link href="/overseas#apply" className="btn-gold">
            Apply for International Opportunities <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/overseas" className="btn-outline-light">
            View all countries
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
