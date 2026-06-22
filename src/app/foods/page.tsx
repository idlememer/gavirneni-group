import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/motion/Reveal';
import FoodsGallery from '@/components/sections/FoodsGallery';
import {
  Wheat,
  Droplets,
  Flame,
  Apple,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Star,
  ScanLine,
} from 'lucide-react';
import { brand } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Gavirneni Foods — Order Online',
  description:
    'A traditional foods division by Gavirneni Group — cold-pressed oils, premium dry fruits, Andhra pickles & ground spices. Order online.',
};

const STORE_URL = 'https://api1.vyaparapp.in/store/gavirnenifoodsgpl';
const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=Gavirneni+Foods';

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
        eyebrow="Gavirneni Foods"
        title={
          <>
            Traditional taste,
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              modern standards.
            </span>
          </>
        }
        description="A foods division from the Gavirneni Group — cold-pressed oils, premium dry fruits, traditional pickles and stone-ground spices. Browse the full catalogue and order online."
        breadcrumbs={[{ label: 'Foods' }]}
      />

      {/* Storefront hero card */}
      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 p-8 text-white shadow-card-premium-hover sm:p-12">
              <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-sm opacity-20" />
              <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />

              <div className="relative grid items-center gap-8 md:grid-cols-[1.1fr,auto]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-300">
                    <Sparkles className="h-3.5 w-3.5" /> Now available
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                    Cold-pressed oils, premium dry fruits, traditional pickles &amp; ground
                    spices.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200">
                    A purpose-built foods division by Gavirneni Group — clean ingredients,
                    transparent sourcing and a deep respect for traditional Andhra recipes.
                    Direct-to-home across India.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={STORE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gold"
                    >
                      <ShoppingBag className="h-4 w-4" /> Purchase now
                    </a>
                    <Link href="/" className="btn-outline-light">
                      Back to Home <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Brand emblem — replaces the Sprout illustration */}
                <div className="relative hidden h-64 w-64 shrink-0 overflow-hidden rounded-3xl border border-white/15 bg-white shadow-glow-gold md:block">
                  <Image
                    src="/images/foods/brand-emblem.jpg"
                    alt="Gavirneni Foods — Dry Fruits, Nuts & Healthy Snacks"
                    fill
                    sizes="256px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Product lineup */}
          <Reveal delay={0.1} className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal-700">
              The product lineup, available now
            </p>
            <h3 className="heading-display mt-2 text-3xl sm:text-4xl">
              Four traditional categories — <span className="gradient-text">done properly.</span>
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lineup.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.07}>
                <div className="card-premium relative h-full overflow-hidden p-6">
                  <span className="badge-gold absolute right-4 top-4">In stock</span>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-royal-gradient text-gold-300 shadow-glow-royal">
                    <l.Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 font-display text-lg font-bold text-slate-900">{l.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{l.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand poster gallery */}
      <FoodsGallery />

      {/* QR + Reviews callout */}
      <section className="section-tight bg-white">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-7 shadow-card-premium sm:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-100/60 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-royal-100/60 blur-3xl" />

              <div className="relative grid items-center gap-8 md:grid-cols-[auto,1fr]">
                {/* QR card */}
                <div className="mx-auto w-fit rounded-2xl bg-white p-4 shadow-card-premium-hover ring-1 ring-slate-200">
                  <div className="relative h-44 w-44 sm:h-52 sm:w-52">
                    <Image
                      src="/images/foods/qr-google.jpg"
                      alt="Find Gavirneni Foods on Google — scan to view profile and leave a review"
                      fill
                      sizes="(min-width: 640px) 208px, 176px"
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Scan with any phone camera
                  </p>
                </div>

                <div>
                  <span className="eyebrow">
                    <ScanLine className="h-3.5 w-3.5" /> Find us on Google
                  </span>
                  <h3 className="heading-display mt-3 text-3xl sm:text-4xl">
                    Loved our food? <span className="gradient-text">Leave a Google review.</span>
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                    Scan the code with your camera to open our Google profile — share your
                    feedback, see store details, or share us with someone who&apos;d love clean,
                    traditional food.
                  </p>
                  <div className="mt-4 flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                    <span className="ml-1 text-xs font-semibold text-slate-600">
                      Help us reach 5.0
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={GOOGLE_REVIEW_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      Open on Google <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                        'Hello Gavirneni Foods, I would like to share feedback / place an order.'
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost"
                    >
                      Send feedback on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Final order CTA */}
          <Reveal delay={0.1} className="mt-10">
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-7 sm:p-9">
              <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
                <div>
                  <p className="font-display text-xl font-bold text-slate-900">
                    Ready to order?
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Browse the full Gavirneni Foods catalogue and place your order directly on
                    our storefront.
                  </p>
                </div>
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <ShoppingBag className="h-4 w-4" /> Purchase now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
