'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const reviews = [
  {
    name: 'Ravi Teja',
    role: 'Self-Employed · Vijayawada',
    rating: 5,
    text:
      'I got my passport and Aadhaar updates done in one visit. The team is professional and quick. Highly recommend Gavirneni CSC.',
  },
  {
    name: 'Pavan Kumar',
    role: 'Hospitality · Dubai',
    rating: 5,
    text:
      'FlyBridge placed me in a Dubai hotel within 60 days. Visa, interview and documentation — all sorted by their team.',
  },
  {
    name: 'Lakshmi Devi',
    role: 'Small Business Owner',
    rating: 5,
    text:
      'I registered my MSME and got GST through Gavirneni. Transparent pricing and timely updates. Truly trustworthy.',
  },
  {
    name: 'Anil Reddy',
    role: 'Founder · Hyderabad',
    rating: 5,
    text:
      'Their digital team built our entire brand identity and website. Clean execution, premium output.',
  },
  {
    name: 'Karthik',
    role: 'Industrial Technician · Bahrain',
    rating: 5,
    text:
      'The pre-departure briefing FlyBridge gave me made the transition abroad smooth. Forever grateful.',
  },
];

export default function Testimonials() {
  // Duplicate for seamless marquee
  const loop = [...reviews, ...reviews];

  return (
    <section className="section relative isolate overflow-hidden bg-white">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Stories</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            What our clients <span className="gradient-text">say about us.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From hometown government desks to global recruitment journeys — real reviews from
            real clients.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex w-max gap-4 px-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          {loop.map((r, i) => (
            <div
              key={i}
              className="w-[300px] shrink-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-card-premium sm:w-[360px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-royal-200" />
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-700">{r.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-royal-gradient text-sm font-bold text-white">
                  {r.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{r.name}</p>
                  <p className="text-[11px] text-slate-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Google-style trust bar */}
      <div className="container-page mt-10">
        <Reveal>
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center sm:flex-row sm:gap-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-sm text-slate-700">
              <span className="font-bold text-slate-900">4.9 / 5</span> · Rated by 250+ happy
              clients across India &amp; overseas placements.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
