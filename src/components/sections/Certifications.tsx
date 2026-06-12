'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, BadgeCheck, Building2, FileCheck, Stamp } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';
import { brand } from '@/lib/brand';

const seals = [
  { Icon: BadgeCheck, title: 'CSC Certified', desc: 'Authorised Common Service Centre' },
  { Icon: Building2, title: 'Companies Act 2013', desc: 'Registered Private Limited entity' },
  { Icon: FileCheck, title: 'GST Registered', desc: 'Compliant tax practices' },
  { Icon: Stamp, title: 'Udyam / MSME', desc: 'Recognised MSME enterprise' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section relative isolate overflow-hidden bg-slate-50">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Certifications & Trust</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            A company you can <span className="gradient-text">verify and trust.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Officially incorporated, CSC-certified, GST registered and MSME recognised — every
            credential is verifiable on government portals.
          </p>
        </Reveal>

        {/* Banner */}
        <Reveal delay={0.1} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border border-royal-100 bg-white p-6 shadow-card-premium sm:p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-100/60 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-royal-100/60 blur-3xl" />

            <div className="relative grid items-center gap-6 sm:grid-cols-[auto,1fr,auto]">
              {/* Animated seal */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="relative grid h-24 w-24 place-items-center rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #0B2E83, #F5B335, #0B2E83)',
                }}
              >
                <div className="grid h-20 w-20 place-items-center rounded-full bg-white">
                  <ShieldCheck className="h-8 w-8 text-royal-700" />
                </div>
              </motion.div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal-700">
                  Officially Registered
                </p>
                <p className="mt-1 font-display text-lg font-bold text-slate-900 sm:text-xl">
                  {brand.legalName}
                </p>
                <div className="mt-3 grid gap-1.5 text-sm text-slate-600 sm:grid-cols-2">
                  <p>
                    <span className="text-slate-500">CIN:</span>{' '}
                    <span className="font-semibold text-slate-900">{brand.cin}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">PAN:</span>{' '}
                    <span className="font-semibold text-slate-900">{brand.pan}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Incorporated:</span>{' '}
                    <span className="font-semibold text-slate-900">{brand.incorporated}</span>
                  </p>
                  <p>
                    <span className="text-slate-500">Status:</span>{' '}
                    <span className="font-semibold text-emerald-700">Active</span>
                  </p>
                </div>
              </div>

              <a
                href="https://www.mca.gov.in"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost shrink-0"
              >
                Verify on MCA
              </a>
            </div>
          </div>
        </Reveal>

        {/* Seals grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {seals.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card-premium">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-50 text-gold-700 ring-1 ring-gold-200">
                  <s.Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-display text-sm font-bold text-slate-900">{s.title}</p>
                <p className="mt-1 text-xs text-slate-600">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
