import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FlyBridge from '@/components/sections/FlyBridge';
import Disclaimers from '@/components/sections/Disclaimers';
import ContactSection from '@/components/sections/ContactSection';
import Reveal from '@/components/motion/Reveal';
import { ArrowRight, GraduationCap, Building, ShieldCheck } from 'lucide-react';
import { brand } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Overseas Careers — FlyBridge',
  description:
    'FlyBridge by Gavirneni — overseas recruitment for Gulf, EU and global markets. Dubai, Bahrain, Kuwait, Germany, Serbia.',
};

const sectors = [
  { title: 'Hospitality', desc: 'Hotels, F&B, Housekeeping' },
  { title: 'Healthcare', desc: 'Nursing, Lab, Care assistants' },
  { title: 'Construction', desc: 'Civil, MEP, Site supervisors' },
  { title: 'Industrial', desc: 'Technicians, Operators, Welders' },
  { title: 'Driving', desc: 'Light & heavy vehicle drivers' },
  { title: 'IT & Tech', desc: 'Software, Support, Networking' },
];

export default function OverseasPage() {
  return (
    <>
      <PageHero
        eyebrow="FlyBridge · Overseas Careers"
        title={
          <>
            A global career,
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              one verified step at a time.
            </span>
          </>
        }
        description="Verified employers · transparent contracts · complete visa, interview and pre-departure support across Gulf and EU markets."
        breadcrumbs={[{ label: 'Overseas Careers' }]}
      />

      <FlyBridge />

      {/* Sectors */}
      <section className="section bg-white">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Hiring sectors</span>
            <h2 className="heading-display mt-4 text-3xl sm:text-4xl">
              Where Indian talent <span className="gradient-text">finds opportunity.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <Reveal key={s.title}>
                <div className="card-premium p-5">
                  <Building className="h-5 w-5 text-royal-700" />
                  <p className="mt-3 font-display text-base font-bold text-slate-900">{s.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Study abroad strip */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card-premium">
              <div className="grid items-center gap-6 md:grid-cols-[1.1fr,1fr]">
                <div className="p-7 md:p-10">
                  <span className="eyebrow"><GraduationCap className="h-3.5 w-3.5" /> Study Abroad</span>
                  <h3 className="heading-display mt-4 text-3xl sm:text-4xl">
                    Globally accredited universities. <br />
                    <span className="gradient-text">Personalised counselling.</span>
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                    UK · Germany · Canada · Australia · Europe — admissions, SOPs, scholarships
                    and student visa coordination.
                  </p>
                  <div className="mt-5 flex gap-3">
                    <Link href="/contact" className="btn-primary !h-11">
                      Talk to a Counsellor <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[260px]">
                  <Image
                    src="/images/study.jpg"
                    alt="Study Abroad"
                    fill
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/30" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Apply CTA strip */}
      <section id="apply" className="section relative overflow-hidden bg-royal-gradient text-white">
        <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-sm opacity-20" />
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <ShieldCheck className="mx-auto h-7 w-7 text-gold-300" />
            <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl">
              Ready for your international career?
            </h2>
            <p className="mt-3 text-base text-slate-200">
              Share your CV with us — our FlyBridge team will match you to the right employer.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${brand.email}?subject=${encodeURIComponent('Overseas Application')}`}
                className="btn-gold"
              >
                Submit your CV <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-light"
              >
                WhatsApp Counsellor
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Disclaimers />
      <ContactSection />
    </>
  );
}
