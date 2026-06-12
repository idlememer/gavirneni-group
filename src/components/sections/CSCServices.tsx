'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Fingerprint,
  CreditCard,
  BookUser,
  Car,
  IdCard,
  FileBadge,
  Receipt,
  GraduationCap,
  Banknote,
  ShieldPlus,
  Send,
  Hammer,
  Signature,
  Briefcase,
  FileSignature,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const services = [
  { Icon: Fingerprint, title: 'Aadhaar Services' },
  { Icon: CreditCard, title: 'PAN Card' },
  { Icon: BookUser, title: 'Passport' },
  { Icon: Car, title: 'RTA / RTO' },
  { Icon: IdCard, title: 'Driving License' },
  { Icon: FileBadge, title: 'Certificate Services' },
  { Icon: Receipt, title: 'Utility Bill Payments' },
  { Icon: GraduationCap, title: 'Online Exam Applications' },
  { Icon: Banknote, title: 'AEPS Banking' },
  { Icon: ShieldPlus, title: 'Insurance Services' },
  { Icon: Send, title: 'Money Transfer' },
  { Icon: Hammer, title: 'E-Shram Services' },
  { Icon: Signature, title: 'Digital Signature (DSC)' },
  { Icon: Briefcase, title: 'Udyam Registration' },
  { Icon: FileSignature, title: 'GST Registration' },
];

const trust = [
  { Icon: Lock, label: 'Secure' },
  { Icon: ShieldCheck, label: 'Govt. Assisted' },
  { Icon: CheckCircle2, label: 'Reliable' },
  { Icon: Zap, label: 'Fast Processing' },
];

export default function CSCServices() {
  return (
    <section id="csc" className="section relative isolate overflow-hidden bg-white">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-royal-100/40 blur-3xl"
      />
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          {/* Sub-brand logo */}
          <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-2.5 shadow-card-premium">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src="/images/logo-csc.png"
                alt="Gavirneni CSC & Online Services"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="text-left leading-tight">
              <p className="font-display text-sm font-bold text-royal-700">
                Gavirneni CSC &amp; Online Services
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-700">
                A Gavirneni Group Company
              </p>
            </div>
          </div>
          <span className="eyebrow">CSC & Government Services</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            All your government work — <span className="gradient-text">done right here.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From Aadhaar to GST registration, our certified CSC desk handles applications,
            renewals and payments with secure, end-to-end support.
          </p>
        </Reveal>

        {/* Trust badges */}
        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {trust.map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-royal-100 bg-royal-50 px-3 py-1.5 text-xs font-semibold text-royal-700"
            >
              <t.Icon className="h-3.5 w-3.5 text-gold-600" />
              {t.label}
            </span>
          ))}
        </Reveal>

        {/* Service grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.03, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-card-premium transition-shadow duration-300 hover:shadow-card-premium-hover"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold-200/0 transition-colors duration-500 group-hover:bg-gold-200/50 group-hover:blur-2xl" />
              <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-glow-royal">
                <s.Icon className="h-5 w-5" />
              </div>
              <p className="relative mt-4 font-display text-sm font-bold leading-tight text-slate-900">
                {s.title}
              </p>
              <span className="relative mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-royal-700">
                Available now
                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Link href="/services" className="btn-primary">
            View all CSC services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
