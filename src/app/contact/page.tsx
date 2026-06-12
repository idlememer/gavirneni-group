import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Gavirneni Private Limited',
  description:
    'Get in touch with Gavirneni Group — phone, WhatsApp, email and office address in Chodavaram, Krishna District, Andhra Pradesh.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to a
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Gavirneni advisor.
            </span>
          </>
        }
        description="Our team is ready to assist on government services, overseas careers, digital projects and business compliance."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <ContactSection />
    </>
  );
}
