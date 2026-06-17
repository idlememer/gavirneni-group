import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/motion/Reveal';
import {
  Sprout,
  Wheat,
  Droplets,
  Flame,
  Apple,
  Sparkles,
  Bell,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { brand } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Gavirneni Foods — Coming Soon',
  description:
    'A traditional foods division by Gavirneni Group — cold-pressed oils, premium dry fruits, Andhra pickles & ground spices. Launching soon.',
};

const lineup = [
  {
    Icon: Apple,
    title: 'Dry Fruits & Nuts',
    desc: 'Premium-grade almonds, cashews, dates and healthy snack mixes.',
  },
  {
    Icon: Droplets,
    title: 'Cold-Pressed Oils',
    desc: 'Traditional wood-pressed groundnut, sesame, coconut and sunflower oils.',
  },
  {
    Icon: Flame,
    title: 'Pickles & Spice Powders',
    desc: 'Home-style Andhra pickles, ground masalas and stone-pounded podis.',
  },
  {
    Icon: Wheat,
    title: 'Millets & Healthy Grains',
    desc: 'Single-origin millets, broken grains and farm-fresh staples.',
  },
];

export default function FoodsPage() {
  return (
    <>
      <PageHero
        eyebrow="Gavirneni Foods · Coming Soon"
        title={
          <>
            Traditional taste,
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              modern standards.
            </span>
          </>
        }
        description="A foods division from the Gavirneni Group — focused on cold-pressed oils, premium dry fruits, traditional pickles and stone-ground spices. We're preparing something special. Stay tuned."
        breadcrumbs={[{ label: 'Foods' }]}
      />

      {/* Coming-soon hero card */}
      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 p-8 text-white shadow-card-premium-hover sm:p-12">
              <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-sm opacity-20" />
              <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />

              <div className="relative grid items-center gap-8 md:grid-cols-[1fr,auto]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                    <Sparkles className="h-3.5 w-3.5" /> Launching soon
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                    Cold-pressed oils, premium dry fruits, traditional pickles &amp; ground
                    spices.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200">
                    A purpose-built foods division by Gavirneni Group — clean ingredients,
                    transparent sourcing and a deep respect for traditional Andhra recipes.
                    Direct-to-home across India when we launch.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                        'Hello Gavirneni Group, notify me when Gavirneni Foods launches.'
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gold"
                    >
                      <Bell className="h-4 w-4" /> Notify me on launch
                    </a>
                    <Link href="/" className="btn-outline-light">
                      Back to Home <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Sprout illustration */}
                <div className="relative hidden h-56 w-56 shrink-0 md:block">
                  <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-3xl" />
                  <div className="relative grid h-full w-full place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
                    <Sprout className="h-24 w-24 text-gold-300" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* What's coming */}
          <Reveal delay={0.1} className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal-700">
              The product lineup we&apos;re preparing
            </p>
            <h3 className="heading-display mt-2 text-3xl sm:text-4xl">
              Four traditional categories — <span className="gradient-text">done properly.</span>
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lineup.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.07}>
                <div className="card-premium relative h-full overflow-hidden p-6">
                  <span className="badge-gold absolute right-4 top-4">Coming soon</span>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-royal-gradient text-gold-300 shadow-glow-royal">
                    <l.Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 font-display text-lg font-bold text-slate-900">{l.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{l.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA strip */}
          <Reveal delay={0.1} className="mt-14">
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-7 sm:p-9">
              <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
                <div>
                  <p className="font-display text-xl font-bold text-slate-900">
                    Want first access when we launch?
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Drop a quick WhatsApp message — we&apos;ll personally notify you on launch
                    day.
                  </p>
                </div>
                <a
                  href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                    'Hello Gavirneni Group, please notify me when Gavirneni Foods launches.'
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle className="h-4 w-4" /> Notify me on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
