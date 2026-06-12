'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Car, MapPin, Plane, Route, ArrowRight } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const cars = [
  { name: 'Self-drive Hatchback', tag: 'Daily / Weekly', image: '/images/car-1.jpg' },
  { name: 'Premium Sedan', tag: 'Outstation', image: '/images/car-1.jpg' },
  { name: 'SUV · 7 seater', tag: 'Family trips', image: '/images/car-1.jpg' },
];

const offerings = [
  { Icon: Car, title: 'Self-drive Cars' },
  { Icon: Route, title: 'Tours & Travels' },
  { Icon: MapPin, title: 'Pickup & Drop' },
  { Icon: Plane, title: 'Travel Bookings (IRCTC partner)' },
];

export default function Travel() {
  return (
    <section id="travel" className="section relative isolate overflow-hidden bg-slate-50">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,1fr]">
          <Reveal>
            <span className="eyebrow">Travel & Car Rentals</span>
            <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
              Comfortable rides, <br />
              <span className="gradient-text">memorable journeys.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              From Vijayawada and across Andhra Pradesh — self-drive cars, full tour packages,
              IRCTC ticketing and dependable pickup &amp; drop service.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {offerings.map((o) => (
                <div
                  key={o.title}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-card-premium"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-royal-50 text-royal-700">
                    <o.Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold text-slate-800">{o.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary">
                Book a ride <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                <MapPin className="h-3.5 w-3.5 text-gold-600" /> Based in Vijayawada
              </span>
            </div>
          </Reveal>

          {/* Carousel-style stack */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-royal-100/60 to-gold-100/60 blur-2xl" />
              <div className="grid gap-4">
                {cars.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ x: -4 }}
                    className="group relative flex overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card-premium hover:shadow-card-premium-hover"
                  >
                    <div className="relative aspect-[4/3] w-40 shrink-0 sm:w-56">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        sizes="(min-width: 640px) 224px, 160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-4 sm:p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-royal-700">
                        {c.tag}
                      </p>
                      <p className="font-display text-base font-bold text-slate-900 sm:text-lg">
                        {c.name}
                      </p>
                      <Link
                        href="/contact"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-royal-700 hover:text-royal-900"
                      >
                        Book now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
