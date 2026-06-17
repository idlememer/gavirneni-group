'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { brand, navLinks, megaMenu } from '@/lib/brand';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 1.0 }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4"
    >
      <div
        className={`flex w-full max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3 ${
          scrolled
            ? 'border-slate-200 bg-white/85 shadow-card-premium backdrop-blur-xl'
            : 'border-white/40 bg-white/65 shadow-lg backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Gavirneni Private Limited — Home"
          className="flex shrink-0 items-center gap-3 pl-1 pr-3"
        >
          <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
            <Image
              src="/images/logo-mark.png"
              alt=""
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-[17px] font-extrabold tracking-tight text-royal-900">
              GAVIRNENI
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-700">
              Private Limited
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.label === 'CSC Services' ? (
              <div
                key={link.label}
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                className="relative"
              >
                <button className="flex h-10 cursor-pointer items-center gap-1 rounded-full px-3.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-royal-50 hover:text-royal-700">
                  Services
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full mt-3 w-[820px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-card-premium-hover backdrop-blur-xl"
                    >
                      <div className="grid grid-cols-3 gap-5">
                        {megaMenu.map((col) => (
                          <Link
                            key={col.heading}
                            href={col.href}
                            className="group rounded-xl p-3 transition-colors duration-200 hover:bg-royal-50"
                          >
                            <p className="mb-2 font-display text-sm font-bold text-royal-700 group-hover:text-royal-800">
                              {col.heading}
                            </p>
                            <ul className="space-y-1.5">
                              {col.items.map((it) => (
                                <li
                                  key={it.title}
                                  className="rounded-md px-2 py-1.5 transition-colors duration-200 hover:bg-white"
                                >
                                  <p className="text-[13px] font-semibold text-slate-900">
                                    {it.title}
                                  </p>
                                  <p className="text-[11px] text-slate-500">
                                    {it.desc}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between rounded-xl border border-gold-200 bg-gold-50 px-4 py-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-gold-700">
                            Need help choosing a service?
                          </p>
                          <p className="text-sm font-medium text-slate-800">
                            Talk to a Gavirneni advisor today.
                          </p>
                        </div>
                        <a
                          href={`tel:${brand.phones[0].replace(/\s+/g, '')}`}
                          className="btn-gold !h-10 !px-4 text-sm"
                        >
                          <Phone className="h-4 w-4" /> Call
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="flex h-10 cursor-pointer items-center rounded-full px-3.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-royal-50 hover:text-royal-700"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden sm:inline-flex btn-primary !h-10 !px-5 text-sm">
            Get Started
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="absolute left-3 right-3 top-full mt-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-card-premium-hover backdrop-blur-xl lg:hidden"
          >
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-800 transition-colors duration-200 hover:bg-royal-50 hover:text-royal-700"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 -rotate-90 text-slate-400" />
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 !h-11 text-sm"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
