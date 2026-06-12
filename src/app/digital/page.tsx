import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import DigitalServices from '@/components/sections/DigitalServices';
import ContactSection from '@/components/sections/ContactSection';
import Reveal from '@/components/motion/Reveal';
import { ArrowRight, Lightbulb, PencilRuler, Code, Rocket } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Solutions',
  description:
    'Websites, mobile apps, branding, SEO, social media and digital marketing — by the Gavirneni digital studio.',
};

const process = [
  { Icon: Lightbulb, step: 'Discover', desc: 'Workshops & research to define the brief.' },
  { Icon: PencilRuler, step: 'Design', desc: 'Wireframes, visual design, prototypes.' },
  { Icon: Code, step: 'Build', desc: 'Modern stacks, performance-first engineering.' },
  { Icon: Rocket, step: 'Launch', desc: 'QA, deploy, analytics, iterate.' },
];

export default function DigitalPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Solutions"
        title={
          <>
            Web, mobile &amp; marketing —
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              crafted to convert.
            </span>
          </>
        }
        description="Full-stack digital studio — websites, apps, branding, SEO and ads — delivered with the polish of a premium agency."
        breadcrumbs={[{ label: 'Digital Solutions' }]}
      />

      <DigitalServices />

      <section className="section bg-white">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our process</span>
            <h2 className="heading-display mt-4 text-3xl sm:text-4xl">
              A focused four-step <span className="gradient-text">delivery process.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.07}>
                <div className="card-premium relative p-6">
                  <p className="font-display text-3xl font-extrabold text-royal-100">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p.Icon className="mt-3 h-5 w-5 text-royal-700" />
                  <p className="mt-3 font-display text-lg font-bold text-slate-900">{p.step}</p>
                  <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              Start a digital project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
