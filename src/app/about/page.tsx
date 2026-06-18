import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import About from '@/components/sections/About';
import Leadership from '@/components/sections/Leadership';
import CoreValues from '@/components/sections/CoreValues';
import Certifications from '@/components/sections/Certifications';
import CertificateGallery from '@/components/sections/CertificateGallery';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Reveal from '@/components/motion/Reveal';
import { Compass, Target, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Gavirneni Private Limited',
  description:
    'Gavirneni Group is a multi-service business based in Andhra Pradesh — government services, overseas recruitment, digital solutions and business support.',
};

const values = [
  {
    Icon: Compass,
    title: 'Our Mission',
    desc: 'To make essential government, business and global services accessible, transparent and effortless for every Indian household.',
  },
  {
    Icon: Target,
    title: 'Our Vision',
    desc: 'To be South India’s most trusted multi-service brand — recognised for honesty, speed and a customer-first attitude.',
  },
  {
    Icon: HeartHandshake,
    title: 'Our Promise',
    desc: 'Every counter, call and click ends with a customer who feels respected, informed and well-served.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Built in Andhra Pradesh.
            <br />
            Designed for{' '}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              every Indian.
            </span>
          </>
        }
        description="Gavirneni Private Limited is a multi-service business group serving citizens, MSMEs and aspiring international workers — under one trustworthy umbrella."
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Mission / Vision / Promise */}
      <section className="section bg-white">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div className="card-premium h-full p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-royal-gradient text-gold-300 shadow-glow-royal">
                  <v.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <About />
      <Leadership />
      <CoreValues />
      <Certifications />
      <CertificateGallery
        eyebrow="Official Credentials"
        title={
          <>
            Every certificate,{' '}
            <span className="gradient-text">openly available.</span>
          </>
        }
        description="Incorporation, GST, MSME, e-governance and partner authorisations — issued by the respective Government of India authorities and downloadable as the original PDF."
        background="white"
      />
      <WhyChooseUs />
    </>
  );
}
