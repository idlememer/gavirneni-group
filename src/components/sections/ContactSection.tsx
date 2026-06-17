'use client';

import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  Globe2,
  Home,
} from 'lucide-react';
import { useState } from 'react';
import Reveal from '@/components/motion/Reveal';
import { brand } from '@/lib/brand';

export default function ContactSection() {
  return (
    <section id="contact" className="section relative isolate overflow-hidden bg-slate-50">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            Let&apos;s start something <span className="gradient-text">together.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {brand.taglinePromise}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
              <Globe2 className="h-3 w-3" />
              {brand.serviceReach}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-royal-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-royal-700 ring-1 ring-royal-100">
              <Home className="h-3 w-3" />
              Online services available · no need to visit office
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr,1.1fr]">
          {/* Info card */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-royal-gradient p-7 text-white shadow-card-premium-hover">
              <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-sm opacity-20" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                Reach us directly
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold">Gavirneni Group HQ</h3>
              <p className="mt-1 text-sm text-slate-200">
                Mon – Sat · 9:00 AM to 8:00 PM IST
              </p>

              <div className="mt-7 space-y-5">
                {brand.offices.map((o) => (
                  <div key={o.label} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                      <MapPin className="h-4 w-4 text-gold-300" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                        {o.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-100">
                        {o.lines.join(', ')}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <Phone className="h-4 w-4 text-gold-300" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                      Phone
                    </p>
                    {brand.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s+/g, '')}`}
                        className="mt-0.5 block text-sm text-slate-100 hover:text-white"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <Mail className="h-4 w-4 text-gold-300" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                      Email
                    </p>
                    <a
                      href={`mailto:${brand.email}`}
                      className="mt-0.5 block text-sm text-slate-100 hover:text-white"
                    >
                      {brand.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold !h-11"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Now
                </a>
                <a
                  href={`tel:${brand.phones[0].replace(/\s+/g, '')}`}
                  className="btn-outline-light !h-11"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
              </div>

              <div className="mt-7 border-t border-white/15 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-300">
                  Follow Gavirneni Group
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <a
                    href={brand.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 py-1.5 pl-2 pr-3.5 transition-colors hover:bg-white/20"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#1877F2]">
                      <Facebook className="h-3 w-3" />
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {brand.socials.facebookHandle}
                    </span>
                  </a>
                  <a
                    href={brand.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 py-1.5 pl-2 pr-3.5 transition-colors hover:bg-white/20"
                  >
                    <span
                      className="grid h-6 w-6 place-items-center rounded-full"
                      style={{
                        background:
                          'linear-gradient(45deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)',
                      }}
                    >
                      <Instagram className="h-3 w-3" />
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {brand.socials.instagramHandle}
                    </span>
                  </a>
                  <a
                    href={brand.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 py-1.5 pl-2 pr-3.5 transition-colors hover:bg-white/20"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#FF0000]">
                      <Youtube className="h-3 w-3" />
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {brand.socials.youtubeHandle}
                    </span>
                  </a>
                  <a
                    href={brand.socials.x}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 py-1.5 pl-2 pr-3.5 transition-colors hover:bg-white/20"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-black">
                      <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
                        <path d="M18.244 2H21l-6.51 7.43L22 22h-6.828l-4.78-6.146L4.96 22H2.2l6.99-7.96L2 2h7.005l4.33 5.69L18.244 2zm-2.39 18.343h1.886L7.252 3.55H5.243L15.854 20.343z" />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {brand.socials.xHandle}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* WhatsApp-first CTA panel (replaces email form) */}
          <Reveal delay={0.1}>
            <div className="grid gap-5">
              <WhatsAppPanel />
              <OfficeMap />
            </div>
          </Reveal>
        </div>

        {/* Two-office strip */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {brand.offices.map((o, i) => (
            <Reveal key={o.label} delay={i * 0.08}>
              <div className="card-premium h-full p-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-royal-50 text-royal-700 ring-1 ring-royal-100">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-royal-700">
                      {o.label}
                    </p>
                    <p className="mt-1 font-display text-lg font-bold text-slate-900">
                      {o.city}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {o.lines.join(', ')}
                    </p>
                    <a
                      href={`https://www.google.com/maps?q=${encodeURIComponent(o.mapQuery)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-royal-700 hover:text-royal-900"
                    >
                      Open in Maps →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppPanel() {
  const topics = [
    'CSC / Government Services',
    'Overseas Careers (FlyBridge)',
    'Digital Services',
    'Business Registration',
    'Travel / Self-Drive Cars',
    'Foods (coming soon)',
  ];

  const buildLink = (topic?: string) => {
    const msg = topic
      ? `Hello Gavirneni Group, I would like to know more about: ${topic}`
      : 'Hello Gavirneni Group, I would like to know more about your services.';
    return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-card-premium">
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="relative flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-emerald-500/30">
          <MessageCircle className="h-5 w-5" />
        </span>
        <div>
          <p className="font-display text-xl font-bold text-slate-900">{brand.whatsappLabel}</p>
          <p className="text-sm text-slate-500">
            Direct chat with our advisors — usually replies within minutes.
          </p>
        </div>
      </div>

      <p className="relative mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
        Pick a topic to start the conversation
      </p>
      <div className="relative mt-3 grid gap-2 sm:grid-cols-2">
        {topics.map((t) => (
          <a
            key={t}
            href={buildLink(t)}
            target="_blank"
            rel="noreferrer"
            className="group flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
          >
            {t}
            <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-600" />
          </a>
        ))}
      </div>

      <div className="relative mt-6 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
        <a href={buildLink()} target="_blank" rel="noreferrer" className="btn-primary !h-11">
          <MessageCircle className="h-4 w-4" /> Start a fresh chat
        </a>
        <a
          href={`tel:${brand.phones[0].replace(/\s+/g, '')}`}
          className="btn-ghost !h-11"
        >
          <Phone className="h-4 w-4" /> Call {brand.phones[0]}
        </a>
      </div>
    </div>
  );
}

function OfficeMap() {
  const [active, setActive] = useState(0);
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card-premium">
      <div className="flex items-center gap-1 border-b border-slate-100 p-1.5">
        {brand.offices.map((o, i) => (
          <button
            key={o.label}
            type="button"
            onClick={() => setActive(i)}
            className={`flex-1 cursor-pointer rounded-xl px-3 py-2 text-xs font-semibold transition-colors duration-200 ${
              active === i
                ? 'bg-royal-50 text-royal-700'
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {o.city}
          </button>
        ))}
      </div>
      <iframe
        title={`Gavirneni Group — ${brand.offices[active].city}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          brand.offices[active].mapQuery
        )}&output=embed`}
        className="h-72 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
