'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Building2,
  Receipt,
  Stamp,
  Network,
  Train,
  Handshake,
  Eye,
  X,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

type Certificate = {
  Icon: typeof FileText;
  title: string;
  authority: string;
  file: string;
  accent: string;
};

const ALL_CERTIFICATES: Record<string, Certificate> = {
  incorporation: {
    Icon: Building2,
    title: 'Certificate of Incorporation',
    authority: 'Ministry of Corporate Affairs · Govt. of India',
    file: '/certificates/certificate-of-incorporation.pdf',
    accent: 'from-royal-600 to-royal-800',
  },
  gst: {
    Icon: Receipt,
    title: 'GST Registration Certificate',
    authority: 'Goods & Services Tax · Govt. of India',
    file: '/certificates/gst-registration.pdf',
    accent: 'from-indigo-600 to-royal-700',
  },
  udyamFull: {
    Icon: Stamp,
    title: 'Udyam Registration (Full)',
    authority: 'Ministry of MSME · Govt. of India',
    file: '/certificates/udyam-full.pdf',
    accent: 'from-gold-500 to-gold-700',
  },
  udyam: {
    Icon: Stamp,
    title: 'Udyam Registration Certificate',
    authority: 'Ministry of MSME · Govt. of India',
    file: '/certificates/udyam-registration.pdf',
    accent: 'from-gold-500 to-gold-700',
  },
  eGovernance: {
    Icon: Network,
    title: 'E-Governance Certificate',
    authority: 'Authorised E-Governance Service Centre',
    file: '/certificates/e-governance.pdf',
    accent: 'from-emerald-600 to-royal-700',
  },
  irctc: {
    Icon: Train,
    title: 'IRCTC Authorised Agent',
    authority: 'Indian Railway Catering & Tourism Corp.',
    file: '/certificates/irctc-agent.pdf',
    accent: 'from-sky-600 to-royal-700',
  },
  cscPartner: {
    Icon: Handshake,
    title: 'CSC Partner Certificate',
    authority: 'Common Service Centre · Digital India',
    file: '/certificates/csc-partner.pdf',
    accent: 'from-rose-500 to-royal-700',
  },
};

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  show?: Array<keyof typeof ALL_CERTIFICATES>;
  background?: 'white' | 'slate';
};

export default function CertificateGallery({
  eyebrow = 'Official Credentials',
  title = (
    <>
      Verified certificates,{' '}
      <span className="gradient-text">publicly available.</span>
    </>
  ),
  description = 'Every credential below is a real government-issued certificate — view each one inline to verify authenticity.',
  show,
  background = 'white',
}: Props) {
  const items = (show ?? (Object.keys(ALL_CERTIFICATES) as Array<keyof typeof ALL_CERTIFICATES>)).map(
    (key) => ALL_CERTIFICATES[key],
  );

  const [active, setActive] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section
      id="certificates"
      className={`section ${background === 'white' ? 'bg-white' : 'bg-slate-50'}`}
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card-premium transition-shadow duration-300 hover:shadow-card-premium-hover"
              >
                {/* Document preview */}
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  className="relative aspect-[4/3] overflow-hidden bg-slate-50 text-left"
                  aria-label={`View ${c.title}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-90`} />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-20"
                  />
                  {/* Stylised document */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative w-3/5 -rotate-3 transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105">
                      <div className="aspect-[3/4] rounded-md border border-white/40 bg-white/90 p-3 shadow-xl backdrop-blur-sm">
                        <div className="mb-2 flex items-center gap-1.5">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <div className="h-1 w-12 rounded-full bg-slate-200" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1 w-full rounded-full bg-slate-200" />
                          <div className="h-1 w-5/6 rounded-full bg-slate-200" />
                          <div className="h-1 w-4/6 rounded-full bg-slate-200" />
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-1">
                          <div className="h-1 rounded-full bg-slate-200" />
                          <div className="h-1 rounded-full bg-slate-200" />
                          <div className="h-1 rounded-full bg-slate-200" />
                        </div>
                        <div className="absolute bottom-2 right-2 grid h-7 w-7 place-items-center rounded-full bg-gold-100 ring-1 ring-gold-300">
                          <Stamp className="h-3.5 w-3.5 text-gold-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Icon chip */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    <c.Icon className="h-3.5 w-3.5" />
                    PDF
                  </div>
                </button>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-base font-bold leading-tight text-slate-900 sm:text-lg">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{c.authority}</p>

                  <div className="mt-5 flex items-center gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setActive(c)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-royal-50 px-3.5 py-1.5 text-xs font-semibold text-royal-700 ring-1 ring-royal-100 transition-colors duration-200 hover:bg-royal-100"
                    >
                      <Eye className="h-3.5 w-3.5" /> View
                    </button>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Viewer modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-royal-950/80 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-card-premium-hover"
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Header */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-white px-5 py-3.5">
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-bold text-slate-900 sm:text-base">
                    {active.title}
                  </p>
                  <p className="truncate text-[11px] text-slate-500">{active.authority}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close viewer"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors duration-200 hover:bg-slate-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* PDF — toolbar suppressed so browsers do not surface download/print */}
              <div className="relative flex-1 bg-slate-100">
                <iframe
                  src={`${active.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={active.title}
                  className="absolute inset-0 h-full w-full"
                />
                {/* Invisible overlay strip on the right where Chrome shows the floating zoom/download bar */}
                <div
                  aria-hidden
                  className="pointer-events-auto absolute right-0 top-0 h-full w-14 bg-transparent"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              {/* Footer note */}
              <div className="border-t border-slate-100 bg-slate-50 px-5 py-2.5 text-[11px] text-slate-500">
                For viewing only. To request a verified copy, contact the Gavirneni team.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
