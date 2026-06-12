# Gavirneni Private Limited — Corporate Website

Premium multi-division corporate website built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Framer Motion**.

> *Connecting Opportunities. Enhancing Lives.*

## Divisions covered
- Gavirneni CSC & Online Services
- FlyBridge Overseas Services
- Digital Services
- Business & Legal Services
- Travel & Self-Drive Car Rentals

## Pages
- `/` Home — 12 sections including hero, divisions, CSC services, FlyBridge, digital, business, travel, why us, certifications, testimonials, contact
- `/about` About — mission/vision/promise, timeline, certifications
- `/services` CSC / Government services catalog by category
- `/overseas` FlyBridge — countries, sectors, study abroad, apply CTA
- `/digital` Digital Solutions — services, four-step process
- `/business` Business & Legal — registrations & compliance
- `/contact` Contact — form, info card, map

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

## Tech stack
| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS + custom brand tokens |
| Motion | Framer Motion |
| Icons | lucide-react (SVG, never emoji) |
| Fonts | Inter + Poppins (Google Fonts via `next/font`) |

## Brand tokens

| Token | Value |
|-------|-------|
| Royal blue (primary) | `#0B2E83` (tailwind `royal-600`) |
| Gold (accent) | `#F5B335` (tailwind `gold-400`) |
| Surface | `#FFFFFF` / `#F6F7FB` (slate-50) |
| Ink | `#0F172A` (slate-900) |
| Muted ink | `#475569` (slate-600) |

## Project structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata, viewport
│   ├── page.tsx             # Home
│   ├── globals.css          # Tailwind + brand utilities
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── overseas/page.tsx
│   ├── digital/page.tsx
│   ├── business/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx           # Glass sticky navbar w/ mega menu
│   ├── Footer.tsx           # Premium dark footer
│   ├── WhatsAppButton.tsx   # Floating CTA
│   ├── Loader.tsx           # Cinematic loading screen
│   ├── PageHero.tsx         # Reusable inner-page hero
│   ├── motion/
│   │   ├── Reveal.tsx       # Scroll reveal wrapper
│   │   └── Counter.tsx      # Animated stat counter
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Divisions.tsx
│       ├── CSCServices.tsx
│       ├── FlyBridge.tsx
│       ├── DigitalServices.tsx
│       ├── BusinessServices.tsx
│       ├── Travel.tsx
│       ├── WhyChooseUs.tsx
│       ├── Certifications.tsx
│       ├── Testimonials.tsx
│       └── ContactSection.tsx
└── lib/
    └── brand.ts             # Brand data, nav links, mega menu
public/
└── images/                  # 30 curated brand images
```

## Replacing images

Drop any image into `public/images/` using the same filename to swap a section visual. Current filenames:

`cover-1.jpg`, `csc-main.jpg`, `flybridge.jpg`, `digital-services.jpg`, `business-services.jpg`, `travel.jpg`, `car-1.jpg`, `dubai.jpg`, `bahrain.jpg`, `kuwait.jpg`, `germany.jpg`, `serbia.jpg`, `study.jpg`, `aircraft.jpg`, plus 16 more service add-ons.

## Company info (auto-rendered from `src/lib/brand.ts`)

- **CIN:** U46909AP2026PTC124714
- **PAN:** AAMCG8922G
- **Incorporated:** 15 March 2026
- **Address:** #7-134, OBC Colony, Near NTR Statue, Chodavaram, Krishna District, Andhra Pradesh – 521139
- **Phones:** +91 86398 11075 · +91 86398 31075 · +91 83282 06468
- **Email:** gavirneni7@gmail.com
- **Website:** gavirnenigroup.com

## Accessibility & UX checklist (already applied)

- 44×44 minimum touch targets
- 4.5:1+ contrast across text
- Visible focus rings on inputs / buttons
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`)
- `prefers-reduced-motion` respected via CSS media query
- Lazy-loaded images via `next/image` with explicit sizes
- All icons are SVG (`lucide-react`) — no emojis used as UI
- `cursor-pointer` on every interactive element
- Hover effects use color/opacity/translate — never width/height
