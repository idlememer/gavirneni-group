'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

type Poster = {
  src: string;
  alt: string;
  tag: 'Promo' | 'Educational';
  caption: string;
  orientation: 'portrait' | 'landscape';
};

const posters: Poster[] = [
  {
    src: '/images/foods/poster-premium-range.jpg',
    alt: 'Gavirneni Foods — Our Premium Range',
    tag: 'Promo',
    caption: 'Our Premium Range — Nuts, Dry Fruits, Snacks',
    orientation: 'portrait',
  },
  {
    src: '/images/foods/poster-order-portrait.jpg',
    alt: 'Order Now — Gavirneni Foods Dry Fruits & Healthy Snacks',
    tag: 'Promo',
    caption: 'Order Now — Online & Door Delivery',
    orientation: 'portrait',
  },
  {
    src: '/images/foods/poster-order-variant.jpg',
    alt: 'Gavirneni Foods — Dry Fruits, Nuts & Healthy Snacks',
    tag: 'Promo',
    caption: 'Dry Fruits, Nuts & Healthy Snacks',
    orientation: 'portrait',
  },
  {
    src: '/images/foods/poster-telugu.jpg',
    alt: 'Gavirneni Foods Telugu poster — premium quality',
    tag: 'Promo',
    caption: 'గవిర్నేని ఫుడ్స్ · Premium Quality',
    orientation: 'portrait',
  },
  {
    src: '/images/foods/poster-nutrition-glance.jpg',
    alt: 'Dry Fruits Nutrition at a Glance',
    tag: 'Educational',
    caption: 'Dry Fruits Nutrition at a Glance',
    orientation: 'landscape',
  },
  {
    src: '/images/foods/poster-soaked-dry-fruits.jpg',
    alt: 'Soaked Dry Fruits — small step, big benefits',
    tag: 'Educational',
    caption: 'Soaked Dry Fruits — Small Step, Big Benefits',
    orientation: 'landscape',
  },
  {
    src: '/images/foods/poster-top-picks.jpg',
    alt: 'Best Dried Fruit Top Picks',
    tag: 'Educational',
    caption: 'Best Dried Fruit — Top Picks',
    orientation: 'landscape',
  },
  {
    src: '/images/foods/poster-8-benefits.jpg',
    alt: '8 Proven Benefits of Dry Fruits',
    tag: 'Educational',
    caption: '8 Proven Benefits of Dry Fruits',
    orientation: 'portrait',
  },
];

export default function FoodsGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i + posters.length - 1) % posters.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % posters.length));

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Gallery</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            Our brand <span className="gradient-text">in pictures.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From product range posters to dry-fruit nutrition guides — explore the world of
            Gavirneni Foods. Tap any image to enlarge.
          </p>
        </Reveal>

        {/* Masonry-style grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {posters.map((p, i) => (
            <Reveal key={p.src} delay={(i % 4) * 0.05}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className={`group relative block w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-card-premium-hover ${
                  p.orientation === 'landscape' ? 'sm:col-span-2' : ''
                }`}
              >
                <div
                  className={`relative w-full ${
                    p.orientation === 'landscape' ? 'aspect-[16/10]' : 'aspect-[4/5]'
                  }`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/70 via-royal-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-3 top-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                        p.tag === 'Promo'
                          ? 'bg-gold-400/90 text-royal-900'
                          : 'bg-white/85 text-royal-700 ring-1 ring-royal-100'
                      }`}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-left text-xs font-semibold leading-tight text-white drop-shadow-lg">
                      {p.caption}
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Counter pill */}
        <Reveal delay={0.1} className="mt-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-card-premium ring-1 ring-slate-100">
            <Images className="h-3.5 w-3.5 text-royal-700" />
            {posters.length} brand posters · Tap any image to view full size
          </span>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-royal-950/90 backdrop-blur-md"
          >
            <motion.div
              key={posters[openIndex].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-[92vw] max-w-3xl"
            >
              <div
                className={`relative w-full overflow-hidden rounded-2xl bg-white shadow-2xl ${
                  posters[openIndex].orientation === 'landscape'
                    ? 'aspect-[16/10]'
                    : 'aspect-[4/5]'
                }`}
              >
                <Image
                  src={posters[openIndex].src}
                  alt={posters[openIndex].alt}
                  fill
                  sizes="92vw"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-white">
                {posters[openIndex].caption}
              </p>

              {/* Controls */}
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute -top-4 right-0 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-white text-slate-900 shadow-2xl ring-1 ring-slate-200 hover:bg-slate-50"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous"
                className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/90 text-slate-900 shadow-2xl ring-1 ring-slate-200 hover:bg-white sm:-left-16"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/90 text-slate-900 shadow-2xl ring-1 ring-slate-200 hover:bg-white sm:-right-16"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
