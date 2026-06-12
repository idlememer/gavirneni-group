'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Plane,
  Sparkles,
  Building2,
  Car,
  ArrowUpRight,
} from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const divisions = [
  {
    title: 'Gavirneni CSC & Online Services',
    code: 'CSC',
    Icon: ShieldCheck,
    image: '/images/csc-main.jpg',
    href: '/services',
    highlights: ['Aadhaar, PAN, Passport', 'Bill Payments & AEPS', 'Certificate & RTO Services'],
    accent: 'from-royal-600 to-royal-800',
  },
  {
    title: 'FlyBridge Overseas Services',
    code: 'FBR',
    Icon: Plane,
    image: '/images/flybridge.jpg',
    href: '/overseas',
    highlights: ['Gulf · Dubai · Bahrain · Kuwait', 'Germany & EU pathways', 'Visa & Interview support'],
    accent: 'from-gold-500 to-gold-700',
  },
  {
    title: 'Digital Services',
    code: 'DGT',
    Icon: Sparkles,
    image: '/images/digital-services.jpg',
    href: '/digital',
    highlights: ['Websites, Apps & E-commerce', 'Branding, SEO, Social Media', 'Hosting & Email/SMS'],
    accent: 'from-indigo-500 to-royal-700',
  },
  {
    title: 'Business Registration',
    code: 'BIZ',
    Icon: Building2,
    image: '/images/business-services.jpg',
    href: '/business',
    highlights: ['Pvt Ltd, LLP, MSME', 'GST, FCRA, Trademark', 'DSC & Compliance'],
    accent: 'from-slate-700 to-royal-700',
  },
  {
    title: 'Travel & Car Rentals',
    code: 'TRV',
    Icon: Car,
    image: '/images/travel.jpg',
    href: '/#travel',
    highlights: ['Self-drive cars', 'Tours & Travels', 'Pickup, Drop & Bookings'],
    accent: 'from-emerald-600 to-royal-700',
  },
];

export default function Divisions() {
  return (
    <section id="divisions" className="section bg-slate-50/50">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-royal-200 to-transparent"
      />
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Divisions</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            One group. <span className="gradient-text">Five powerful divisions.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Specialised teams, shared values — and a single point of contact for everything you
            need.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card-premium transition-shadow duration-300 hover:shadow-card-premium-hover ${
                  i === 0 ? 'lg:row-span-2' : ''
                }`}
              >
                <div
                  className={`relative ${i === 0 ? 'aspect-[4/5] lg:aspect-auto lg:h-[58%]' : 'aspect-[16/10]'} overflow-hidden`}
                >
                  <Image
                    src={d.image}
                    alt={d.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${d.accent} opacity-70 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    <d.Icon className="h-3.5 w-3.5" />
                    {d.code}
                  </div>
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                      {d.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {d.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-royal-50 text-royal-700">
                          <svg
                            viewBox="0 0 20 20"
                            className="h-3 w-3"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={d.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-700 transition-colors duration-200 hover:text-royal-900"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
