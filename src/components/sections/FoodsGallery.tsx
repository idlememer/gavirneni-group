'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

type Poster = {
  src: string;
  alt: string;
  w: number;
  h: number;
};

const posters: Poster[] = [
  { src: '/images/foods/poster-premium-range.jpg', alt: 'Gavirneni Foods — Our Premium Range', w: 800, h: 1200 },
  { src: '/images/foods/poster-order-portrait.jpg', alt: 'Gavirneni Foods — Order Now', w: 800, h: 1200 },
  { src: '/images/foods/poster-nutrition-glance.jpg', alt: 'Dry Fruits Nutrition at a Glance', w: 1280, h: 800 },
  { src: '/images/foods/poster-order-variant.jpg', alt: 'Gavirneni Foods — Dry Fruits, Nuts & Healthy Snacks', w: 800, h: 1200 },
  { src: '/images/foods/poster-soaked-dry-fruits.jpg', alt: 'Soaked Dry Fruits — Small Step, Big Benefits', w: 1280, h: 800 },
  { src: '/images/foods/poster-telugu.jpg', alt: 'Gavirneni Foods — Telugu Premium Quality', w: 800, h: 1200 },
  { src: '/images/foods/poster-top-picks.jpg', alt: 'Best Dried Fruit — Top Picks', w: 1280, h: 800 },
  { src: '/images/foods/poster-8-benefits.jpg', alt: '8 Proven Benefits of Dry Fruits', w: 800, h: 1200 },
];

export default function FoodsGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i + posters.length - 1) % posters.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % posters.length));

  // Keyboard navigation
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIndex]);

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Gallery</span>
          <h2 className="heading-display mt-4 text-4xl sm:text-5xl">
            Our brand <span className="gradient-text">in pictures.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Tap any image to view it full size.
          </p>
        </Reveal>

        {/* Uniform grid — equal-size bordered thumbnails, full poster visible (no crop) */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {posters.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-card-premium transition-all duration-300 hover:-translate-y-1 hover:border-royal-200 hover:shadow-card-premium-hover focus:outline-none focus:ring-2 focus:ring-royal-400 focus:ring-offset-2"
              aria-label={`Open ${p.alt}`}
            >
              {/* Inner padded thumb area — same height for every card, image fits with no crop */}
              <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-lg bg-slate-50 sm:h-48 lg:h-52">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                  className="max-h-full max-w-full object-contain"
                />
                {/* Hover zoom hint */}
                <div className="pointer-events-none absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-royal-700 opacity-0 shadow-md ring-1 ring-slate-200 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-3.5 w-3.5" />
                </div>
              </div>
            </button>
          ))}
        </div>
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-royal-950/90 p-4 backdrop-blur-md sm:p-6"
          >
            {/* Close button — top-right of viewport */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white text-slate-900 shadow-2xl ring-1 ring-slate-200 hover:bg-slate-50"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev / Next — viewport-anchored */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/95 text-slate-900 shadow-2xl ring-1 ring-slate-200 hover:bg-white sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/95 text-slate-900 shadow-2xl ring-1 ring-slate-200 hover:bg-white sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image container — full image fits, no crop */}
            <motion.div
              key={posters[openIndex].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[90vw]"
            >
              <Image
                src={posters[openIndex].src}
                alt={posters[openIndex].alt}
                width={posters[openIndex].w}
                height={posters[openIndex].h}
                sizes="90vw"
                className="block max-h-[90vh] w-auto rounded-2xl object-contain shadow-2xl"
                priority
              />
              <p className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                {openIndex + 1} / {posters.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
