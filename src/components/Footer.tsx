import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { brand } from '@/lib/brand';

const cols = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Certifications', href: '/about#certifications' },
      { label: 'Careers', href: '/overseas' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'CSC & Government', href: '/services' },
      { label: 'Overseas (FlyBridge)', href: '/overseas' },
      { label: 'Digital Solutions', href: '/digital' },
      { label: 'Business Registration', href: '/business' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Aadhaar Services', href: '/services#aadhaar' },
      { label: 'PAN Card', href: '/services#pan' },
      { label: 'GST Registration', href: '/business#gst' },
      { label: 'Apply Overseas', href: '/overseas#apply' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-royal-950 text-slate-300">
      <div className="absolute inset-0 -z-10 bg-hero-radial opacity-60" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-sm opacity-20" />
      <div className="absolute -top-40 left-1/2 -z-10 h-80 w-[80%] -translate-x-1/2 rounded-full bg-royal-500/20 blur-3xl" />

      <div className="container-page pt-20 pb-10">
        {/* Top CTA strip */}
        <div className="mb-14 grid items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md md:grid-cols-[1.4fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
              Start something new with Gavirneni
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              From government paperwork to global careers — we handle it all.
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
            <Link href="/contact" className="btn-gold">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={`https://wa.me/${brand.whatsapp}`} className="btn-outline-light">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr,1fr,1fr,1fr]">
          {/* Brand block */}
          <div>
            <Link
              href="/"
              aria-label="Gavirneni Private Limited — Home"
              className="flex items-center gap-3"
            >
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/images/logo-mark.png"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="font-display text-lg font-extrabold tracking-tight text-white">
                  GAVIRNENI
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-400">
                  Private Limited
                </p>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              {brand.tagline} A multi-service business group offering CSC, overseas, digital,
              business and travel solutions across India.
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              {brand.offices.map((o) => (
                <li key={o.label} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-400">
                      {o.label}
                    </p>
                    <p className="mt-1 text-slate-300">
                      {o.lines.map((l, i) => (
                        <span key={i}>
                          {l}
                          {i < o.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:${brand.phones[0].replace(/\s+/g, '')}`} className="link-quiet">
                  {brand.phones[0]} · {brand.phones[1]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${brand.email}`} className="link-quiet">
                  {brand.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-400">
                Follow Gavirneni Group
              </p>
              <div className="mt-3 flex flex-col gap-2.5">
                <a
                  href={brand.socials.facebook}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-3.5 text-slate-300 transition-colors duration-200 hover:border-gold-400 hover:bg-gold-400/10 hover:text-gold-300"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#1877F2] text-white">
                    <Facebook className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs font-semibold">{brand.socials.facebookHandle}</span>
                </a>
                <a
                  href={brand.socials.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-3.5 text-slate-300 transition-colors duration-200 hover:border-gold-400 hover:bg-gold-400/10 hover:text-gold-300"
                >
                  <span
                    className="grid h-7 w-7 place-items-center rounded-full text-white"
                    style={{
                      background:
                        'linear-gradient(45deg, #F58529 0%, #DD2A7B 45%, #8134AF 75%, #515BD4 100%)',
                    }}
                  >
                    <Instagram className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs font-semibold">{brand.socials.instagramHandle}</span>
                </a>
                <a
                  href={brand.socials.youtube}
                  aria-label="YouTube"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-3.5 text-slate-300 transition-colors duration-200 hover:border-gold-400 hover:bg-gold-400/10 hover:text-gold-300"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#FF0000] text-white">
                    <Youtube className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs font-semibold">{brand.socials.youtubeHandle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm link-quiet">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-start justify-between gap-3 text-xs text-slate-400 md:flex-row md:items-center">
            <p>
              © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
            </p>
            <p>
              CIN: <span className="text-slate-200">{brand.cin}</span> · Registered under the
              Companies Act, 2013.
            </p>
            <div className="flex gap-4">
              <Link href="/about" className="link-quiet">Privacy</Link>
              <Link href="/about" className="link-quiet">Terms</Link>
              <Link href="/contact" className="link-quiet">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
