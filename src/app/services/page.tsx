import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CSCServices from '@/components/sections/CSCServices';
import Certifications from '@/components/sections/Certifications';
import ContactSection from '@/components/sections/ContactSection';
import Reveal from '@/components/motion/Reveal';
import {
  Fingerprint,
  CreditCard,
  BookUser,
  IdCard,
  FileBadge,
  Receipt,
  Banknote,
  ShieldPlus,
  Send,
  Signature,
  GraduationCap,
  Hammer,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CSC & Government Services',
  description:
    'Aadhaar, PAN, Passport, RTO, GST, AEPS, certificates, utility bills and more — all handled at Gavirneni CSC counters.',
};

const categories = [
  {
    name: 'Identity & Documents',
    items: [
      { Icon: Fingerprint, name: 'Aadhaar — Update, Print, Biometric' },
      { Icon: CreditCard, name: 'PAN Card — New, Correction, Reprint' },
      { Icon: BookUser, name: 'Passport — Apply, Renewal, Tatkal' },
      { Icon: IdCard, name: 'Voter ID & Driving License' },
      { Icon: FileBadge, name: 'Income / Caste / Residence Certificates' },
    ],
  },
  {
    name: 'Banking & Payments',
    items: [
      { Icon: Banknote, name: 'AEPS — Cash Withdrawal & Balance' },
      { Icon: Send, name: 'Money Transfer (Domestic)' },
      { Icon: Receipt, name: 'Utility Bill Payments' },
      { Icon: ShieldPlus, name: 'Insurance — Life, Vehicle, Health' },
    ],
  },
  {
    name: 'Business & Compliance',
    items: [
      { Icon: Signature, name: 'Digital Signature (DSC)' },
      { Icon: Hammer, name: 'Udyam / MSME Registration' },
      { Icon: GraduationCap, name: 'Online Exam Applications' },
      { Icon: FileBadge, name: 'E-Shram & Pradhan Mantri Schemes' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="CSC & Government Services"
        title={
          <>
            Every government counter,
            <br />
            in <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">one trusted place.</span>
          </>
        }
        description="From Aadhaar updates to GST filings — our CSC-certified desk handles your paperwork end-to-end, with secure processing and fast turnarounds."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <CSCServices />

      {/* Category breakdown */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">By Category</span>
            <h2 className="heading-display mt-4 text-3xl sm:text-4xl">
              Browse our <span className="gradient-text">complete service catalog.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((c, ci) => (
              <Reveal key={c.name} delay={ci * 0.07}>
                <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card-premium">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal-700">
                    {c.name}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {c.items.map((it) => (
                      <li
                        key={it.name}
                        className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-royal-50"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-royal-50 text-royal-700 ring-1 ring-royal-100">
                          <it.Icon className="h-4 w-4" />
                        </span>
                        <span className="pt-1 text-sm font-medium text-slate-800">{it.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Certifications />
      <ContactSection />
    </>
  );
}
