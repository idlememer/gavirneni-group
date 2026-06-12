'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import Reveal from '@/components/motion/Reveal';
import { brand } from '@/lib/brand';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const message = data.get('message');
    const subject = encodeURIComponent(`Enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="section relative isolate overflow-hidden bg-slate-50">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            Let&apos;s start something <span className="gradient-text">together.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Reach our team by phone, email or WhatsApp — or drop us a quick note below.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr,1.1fr]">
          {/* Info card */}
          <Reveal>
            <div className="h-full overflow-hidden rounded-3xl bg-royal-gradient p-7 text-white shadow-card-premium-hover">
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
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form + map */}
          <Reveal delay={0.1}>
            <div className="grid gap-5">
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card-premium"
              >
                <p className="font-display text-lg font-bold text-slate-900">Send a message</p>
                <p className="mt-1 text-sm text-slate-500">
                  We&apos;ll route your enquiry to the right division within 24 hours.
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your full name" required />
                  <Field label="Phone" name="phone" placeholder="+91…" />
                  <div className="sm:col-span-2">
                    <Field label="Email" name="email" placeholder="you@example.com" type="email" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Interested in
                    </label>
                    <select
                      name="topic"
                      className="h-11 w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-colors focus:border-royal-600 focus:ring-2 focus:ring-royal-100"
                    >
                      <option>CSC / Government Services</option>
                      <option>Overseas Careers (FlyBridge)</option>
                      <option>Digital Services</option>
                      <option>Business Registration</option>
                      <option>Travel / Car Rentals</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us what you need…"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-royal-600 focus:ring-2 focus:ring-royal-100"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary mt-5 w-full sm:w-auto">
                  Send message <ArrowRight className="h-4 w-4" />
                </button>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 text-sm text-emerald-700"
                  >
                    Opening your email client…
                  </motion.p>
                )}
              </form>

              {/* Map switcher */}
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

function Field({
  label,
  name,
  placeholder,
  required,
  type = 'text',
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-600">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-royal-600 focus:ring-2 focus:ring-royal-100"
      />
    </div>
  );
}
