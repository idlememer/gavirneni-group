import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import BusinessServices from '@/components/sections/BusinessServices';
import CertificateGallery from '@/components/sections/CertificateGallery';
import ContactSection from '@/components/sections/ContactSection';
import Reveal from '@/components/motion/Reveal';
import { ShieldCheck, FileSignature, Stamp, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business & Legal Services',
  description:
    'Company registration, GST, MSME, FCRA, Trademark, DSC and compliance — handled by chartered professionals.',
};

const cards = [
  {
    Icon: Building2,
    title: 'Company Incorporation',
    desc: 'Private Limited, LLP, OPC and Section 8 entities with DIN, MOA and AOA.',
    items: ['Pvt Ltd', 'LLP', 'OPC', 'Section 8'],
  },
  {
    Icon: FileSignature,
    title: 'Tax & GST',
    desc: 'GST registration, monthly/quarterly returns and reconciliations.',
    items: ['New GSTIN', 'GSTR-1', 'GSTR-3B', 'Reconciliation'],
  },
  {
    Icon: Stamp,
    title: 'IP & Trademark',
    desc: 'Trademark search, filing, objection responses and renewal support.',
    items: ['Search', 'Filing', 'Objections', 'Renewal'],
  },
  {
    Icon: ShieldCheck,
    title: 'Compliance & Licenses',
    desc: 'MSME, FCRA, FSSAI, IEC, DSC and ROC annual filings.',
    items: ['MSME/Udyam', 'FCRA', 'IEC', 'DSC', 'ROC'],
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Business & Legal"
        title={
          <>
            Set up, scale and
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              stay compliant.
            </span>
          </>
        }
        description="Registrations, compliances and IP protection — done with professional precision so founders can focus on growth."
        breadcrumbs={[{ label: 'Business Services' }]}
      />

      <section className="section bg-white">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="group card-premium h-full p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-royal-gradient text-gold-300 shadow-glow-royal">
                    <c.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BusinessServices />

      <CertificateGallery
        eyebrow="Our Registrations"
        title={
          <>
            Compliance-ready,{' '}
            <span className="gradient-text">on paper.</span>
          </>
        }
        description="The same statutory certificates we help our clients obtain — Companies Act, GST, MSME and authorised partner credentials. All issued by Government of India authorities and downloadable here."
        show={['incorporation', 'gst', 'udyamFull', 'udyam', 'eGovernance', 'cscPartner']}
        background="slate"
      />

      <ContactSection />
    </>
  );
}
