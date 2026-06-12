'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  FileBadge,
  ScrollText,
  Receipt,
  ShieldCheck,
  Stamp,
  KeyRound,
  Award,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const items = [
  { Icon: Building2, title: 'Private Limited Registration' },
  { Icon: Building2, title: 'LLP Registration' },
  { Icon: Receipt, title: 'GST Filing & Registration' },
  { Icon: ShieldCheck, title: 'FCRA Registration' },
  { Icon: Stamp, title: 'Trademark Support' },
  { Icon: KeyRound, title: 'DSC Services' },
  { Icon: Award, title: 'MSME / Udyam Registration' },
  { Icon: ScrollText, title: 'ROC & Compliance Filings' },
];

export default function BusinessServices() {
  return (
    <section id="business" className="section bg-white">
      <div className="container-page">
        <Reveal className="grid items-end gap-6 sm:grid-cols-[1fr,auto]">
          <div>
            <span className="eyebrow">Business & Legal Services</span>
            <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
              Set up, scale and <span className="gradient-text">stay compliant.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Company registrations, tax compliance and trademark protection — handled by
              chartered professionals you can trust.
            </p>
          </div>
          <Link href="/business" className="btn-ghost shrink-0">
            All business services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/60 p-6 shadow-card-premium transition-shadow duration-300 hover:shadow-card-premium-hover"
              >
                {/* Document illustration */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-20 rotate-6 rounded-md border border-slate-200 bg-white shadow-sm">
                  <div className="m-2 space-y-1.5">
                    <div className="h-1.5 w-10 rounded-full bg-royal-100" />
                    <div className="h-1.5 w-12 rounded-full bg-slate-100" />
                    <div className="h-1.5 w-8 rounded-full bg-slate-100" />
                    <div className="h-1.5 w-12 rounded-full bg-slate-100" />
                    <div className="h-3 w-6 rounded bg-gold-200" />
                  </div>
                </div>
                <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-royal-50 text-royal-700 ring-1 ring-royal-100">
                  <it.Icon className="h-5 w-5" />
                </div>
                <p className="relative mt-5 font-display text-base font-bold text-slate-900">
                  {it.title}
                </p>
                <div className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                  <ShieldCheck className="h-3 w-3" /> Compliance Ready
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
