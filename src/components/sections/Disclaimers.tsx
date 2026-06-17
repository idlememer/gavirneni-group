'use client';

import { Info, Shield, GraduationCap } from 'lucide-react';
import Reveal from '@/components/motion/Reveal';

const disclaimers = [
  {
    Icon: Shield,
    title: 'Visa Processing & Job Offers',
    body:
      'Visa processing, job offers and final recruitment are carried out only by government-licensed recruiting agents or employers. FlyBridge (a Gavirneni Group company) provides recruitment support, interview assistance, interview coordination and candidate counselling services only. We offer fast processing support and 100% guidance throughout the process.',
  },
  {
    Icon: Info,
    title: 'Visa Interview Preparation',
    body:
      'Visa interview preparation and assistance are provided for guidance purposes only. Final visa decisions are made solely by the respective embassy or consulate. Gavirneni Group does not influence or guarantee visa approval outcomes.',
  },
  {
    Icon: GraduationCap,
    title: 'Study Abroad Support',
    body:
      '100% guidance, scholarship assistance, education-loan support, partnerships with top universities, fast processing and visa interview preparation are provided as advisory services. Final admission and visa decisions remain with the respective institution and consulate.',
  },
];

export default function Disclaimers() {
  return (
    <section className="section-tight bg-slate-50">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Important Disclosures</span>
          <h2 className="heading-display mt-4 text-3xl sm:text-4xl">
            <span className="gradient-text">Transparency</span> first — please read carefully.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            We believe in informed customers. The following disclosures outline the boundaries
            of the support FlyBridge and Gavirneni Group provide.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {disclaimers.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.07}>
              <div className="card-premium h-full p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-royal-50 text-royal-700 ring-1 ring-royal-100">
                  <d.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
