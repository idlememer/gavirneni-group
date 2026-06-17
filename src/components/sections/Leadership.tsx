'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Globe2, BrainCircuit, Quote } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const founders = [
  {
    name: 'Gavirneni Karthikeya Chowdary',
    role: 'Founder & Director',
    credential: 'MBA – Global Business, London, UK',
    image: '/images/founder-karthikeya.jpg',
    bullets: [
      { Icon: Globe2, text: 'Background in International Business' },
      { Icon: BrainCircuit, text: 'Ex-Prison Officer · HMP Bedford, United Kingdom' },
    ],
    bio: 'Brings global perspective and rare operational discipline to the organisation — shaped by hands-on UK public-service experience as an HM Prison Service officer at HMP Bedford. That background of structured process, accountability and people-handling now drives Gavirneni Group’s international strategy and cross-border partnerships.',
  },
  {
    name: 'Rishitha Karuturi',
    role: 'Co-Founder',
    credential: 'PhD Scholar · Applied Psychology',
    image: null,
    initials: 'RK',
    bullets: [
      { Icon: BrainCircuit, text: 'Psychologist · PhD scholar in Applied Psychology' },
      { Icon: Globe2, text: 'Specialist in human-behaviour & client-centred practice' },
    ],
    bio: 'Contributes deep expertise in human behaviour, communication and client-centred practices — anchoring the group’s customer-first philosophy.',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section relative isolate overflow-hidden bg-slate-50">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-royal-100/40 blur-3xl"
      />

      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Leadership</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            From the <span className="gradient-text">founders.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Gavirneni Private Limited is led by a husband-and-wife founding team — combining
            structured global thinking with a people-focused approach.
          </p>
        </Reveal>

        {/* Joint founders' note */}
        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card-premium sm:p-10">
            <Quote
              className="absolute -right-2 -top-2 h-32 w-32 text-royal-50"
              aria-hidden
            />
            <p className="relative max-w-3xl font-display text-lg leading-relaxed text-slate-800 sm:text-xl">
              “Together, we combine{' '}
              <span className="gradient-text font-bold">structured thinking</span> with a{' '}
              <span className="gradient-text font-bold">people-focused approach</span> — to build a
              purposeful and forward-looking enterprise that genuinely improves how Indians access
              opportunity.”
            </p>
            <p className="relative mt-5 text-sm font-semibold text-royal-700">
              — Gavirneni Karthikeya Chowdary &amp; Rishitha Karuturi · Founders
            </p>
          </div>
        </Reveal>

        {/* Founder cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card-premium transition-shadow duration-300 hover:shadow-card-premium-hover"
              >
                <div className="grid items-stretch sm:grid-cols-[auto,1fr]">
                  {/* Portrait or initials */}
                  <div className="relative h-72 sm:h-auto sm:w-56">
                    {f.image ? (
                      <>
                        <Image
                          src={f.image}
                          alt={f.name}
                          fill
                          sizes="(min-width: 640px) 224px, 100vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-royal-900/55 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="relative grid h-full w-full place-items-center bg-royal-gradient">
                        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-30" />
                        <motion.div
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                          className="relative grid h-28 w-28 place-items-center rounded-full border-4 border-white/15 bg-white/10 backdrop-blur-md"
                        >
                          <span className="font-display text-4xl font-extrabold text-white">
                            {f.initials}
                          </span>
                        </motion.div>
                        <span className="relative mt-4 inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">
                          Co-Founder
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  <div className="flex flex-col justify-center p-6 sm:p-7">
                    <p className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                      {f.name}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-royal-700">
                      {f.role}
                    </p>
                    <span className="badge-gold mt-2 inline-flex">
                      {f.credential}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.bio}</p>

                    <ul className="mt-4 space-y-2">
                      {f.bullets.map((b) => (
                        <li
                          key={b.text}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-50 text-gold-700 ring-1 ring-gold-200">
                            <b.Icon className="h-3 w-3" />
                          </span>
                          {b.text}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                      <a
                        href="#"
                        aria-label={`${f.name} on LinkedIn`}
                        className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:border-royal-300 hover:bg-royal-50 hover:text-royal-700"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Connect
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
