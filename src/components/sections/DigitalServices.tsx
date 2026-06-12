'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  ShoppingCart,
  Palette,
  PenTool,
  Search,
  MessageSquareShare,
  Server,
  Mail,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const items = [
  { Icon: Code2, title: 'Website Development', desc: 'Lightning-fast custom sites built with Next.js.' },
  { Icon: Smartphone, title: 'Mobile App Development', desc: 'Native & hybrid iOS / Android apps.' },
  { Icon: ShoppingCart, title: 'E-Commerce Solutions', desc: 'Stores with payments, inventory, shipping.' },
  { Icon: Palette, title: 'Graphic Design', desc: 'Logos, posters, social creatives, print.' },
  { Icon: PenTool, title: 'Branding', desc: 'Identity systems, guidelines, packaging.' },
  { Icon: Search, title: 'SEO', desc: 'Technical, on-page, content & link building.' },
  { Icon: MessageSquareShare, title: 'Social Media Management', desc: 'Strategy, content calendar, ads.' },
  { Icon: Server, title: 'Hosting & Domains', desc: 'Domain, hosting, SSL, email setup.' },
  { Icon: Mail, title: 'Email & SMS Marketing', desc: 'Automated campaigns and bulk delivery.' },
];

export default function DigitalServices() {
  return (
    <section id="digital" className="section relative isolate overflow-hidden bg-slate-50">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(11,46,131,0.08),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(245,179,53,0.08),transparent_50%)]"
      />

      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Digital Services</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            Web, mobile &amp; marketing — <span className="gradient-text">crafted to convert.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            A complete digital studio under one roof — built for startups, MSMEs and enterprises
            that demand performance and design.
          </p>
        </Reveal>

        {/* Dashboard mockup hint */}
        <Reveal delay={0.1} className="mt-12">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card-premium-hover">
            <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-3 rounded-md bg-slate-50 px-2.5 py-0.5 text-[11px] text-slate-500">
                gavirnenigroup.com / dashboard
              </span>
            </div>
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {[
                { label: 'Traffic', value: '+128%', tone: 'royal' },
                { label: 'Conversions', value: '+64%', tone: 'gold' },
                { label: 'Engagement', value: '12 min', tone: 'royal' },
              ].map((m) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {m.label}
                  </p>
                  <p
                    className={`font-display text-2xl font-bold ${
                      m.tone === 'gold' ? 'text-gold-700' : 'text-royal-700'
                    }`}
                  >
                    {m.value}
                  </p>
                  <div className="mt-3 h-14 overflow-hidden rounded-md bg-white">
                    <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
                      <motion.path
                        d="M0,50 C30,20 60,55 90,35 S150,10 200,30"
                        stroke={m.tone === 'gold' ? '#F5B335' : '#0B2E83'}
                        strokeWidth="2.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: 'easeInOut' }}
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-card-premium transition-shadow duration-300 hover:shadow-card-premium-hover"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-royal-100/0 blur-3xl transition-colors duration-500 group-hover:bg-royal-200/50"
                />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-royal-600 to-royal-900 text-gold-300 shadow-glow-royal">
                  <it.Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-bold text-slate-900">
                  {it.title}
                </h3>
                <p className="relative mt-1 text-sm leading-relaxed text-slate-600">{it.desc}</p>
                <Link
                  href="/digital"
                  className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal-700 transition-colors hover:text-royal-900"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
