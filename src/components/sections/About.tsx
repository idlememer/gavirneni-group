'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, HeartHandshake, Users, Sparkle } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const pillars = [
  { Icon: ShieldCheck, title: 'Transparency', desc: 'Clear pricing, no hidden steps.' },
  { Icon: HeartHandshake, title: 'Customer-first', desc: 'Help at every stage of your journey.' },
  { Icon: Users, title: 'Professional Guidance', desc: 'Trained advisors at every counter.' },
  { Icon: Sparkle, title: 'Digital Empowerment', desc: 'Modern tools, simple experience.' },
];

const timeline = [
  { year: '2026', title: 'Incorporated', desc: 'Gavirneni Private Limited registered under the Companies Act, 2013.' },
  { year: '2026', title: 'CSC Division', desc: 'Launched Gavirneni CSC & Online Services for government workflows.' },
  { year: '2026', title: 'FlyBridge', desc: 'Overseas recruitment division begins Gulf & EU placements.' },
  { year: '2026', title: 'Digital + Business', desc: 'Added digital marketing, branding and company registration.' },
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-page grid items-start gap-14 lg:grid-cols-[1.1fr,1fr]">
        <Reveal>
          <span className="eyebrow">About Gavirneni</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            A multi-service business group <br />
            built for <span className="gradient-text">modern India.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            Headquartered in Andhra Pradesh, Gavirneni Private Limited brings together
            government services, overseas opportunities, digital solutions and business
            support — under a single, trusted brand. Our mission is to make essential
            services accessible, transparent and effortless for every Indian household and
            entrepreneur.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-card-premium transition-shadow duration-300 hover:shadow-card-premium-hover"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-royal-50 text-royal-700 ring-1 ring-royal-100">
                  <p.Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-slate-900">{p.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/about" className="btn-ghost mt-8">
            Discover our story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        {/* Visual block */}
        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[40px] bg-gradient-to-br from-royal-100/60 via-transparent to-gold-100/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-card-premium-hover">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/about-founder.jpg"
                  alt="Karthikeya Chowdary Gavirneni — Founder & Director"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-royal-900/10 to-transparent" />
                {/* Floating logo card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-5 top-5 flex items-center gap-2.5 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-card-premium backdrop-blur-md"
                >
                  <div className="relative h-11 w-11 shrink-0">
                    <Image
                      src="/images/logo-mark.png"
                      alt=""
                      fill
                      sizes="44px"
                      className="object-contain"
                    />
                  </div>
                  <div className="leading-tight">
                    <p className="font-display text-sm font-extrabold tracking-tight text-royal-900">
                      GAVIRNENI
                    </p>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-700">
                      Private Limited
                    </p>
                  </div>
                </motion.div>

                {/* Bottom founder credit */}
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300">
                    Founder &amp; Director
                  </p>
                  <p className="mt-1 font-display text-lg font-bold leading-tight text-white">
                    Karthikeya Chowdary Gavirneni
                  </p>
                  <p className="mt-1.5 text-[11px] text-slate-200">
                    MBA, United Kingdom · International Business
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-5 shadow-card-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal-700">
                Our Timeline
              </p>
              <ol className="mt-4 space-y-4">
                {timeline.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className="relative flex gap-4 pl-5"
                  >
                    <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-gold-400 ring-4 ring-gold-100" />
                    {i < timeline.length - 1 && (
                      <span className="absolute left-[3px] top-3.5 h-full w-px bg-slate-200" />
                    )}
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-royal-700">
                        {t.year}
                      </p>
                      <p className="text-sm font-bold text-slate-900">{t.title}</p>
                      <p className="text-xs text-slate-500">{t.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
