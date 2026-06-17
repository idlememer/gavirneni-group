import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Loader from '@/components/Loader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gavirnenigroup.com'),
  title: {
    default: 'Gavirneni Private Limited — Connecting Opportunities. Enhancing Lives.',
    template: '%s | Gavirneni Private Limited',
  },
  description:
    'Gavirneni Group — your one-stop digital, government services, overseas recruitment, and business solutions platform. CSC services, FlyBridge overseas careers, digital marketing, business registration, and travel services across India.',
  keywords: [
    'Gavirneni',
    'Gavirneni Group',
    'Gavirneni Private Limited',
    'CSC Center Vijayawada',
    'CSC Services Andhra Pradesh',
    'Overseas Jobs from Andhra Pradesh',
    'FlyBridge',
    'FlyBridge Overseas Recruitment',
    'Travel Self Drive Cars',
    'Digital Services Vijayawada',
    'Company Registration Andhra Pradesh',
    'Cold Pressed Oils Vijayawada',
    'Dry Fruits Vijayawada',
    'Gavirneni Foods',
    'Aadhaar Services',
    'PAN Card',
    'Passport',
    'GST Registration',
    'Andhra Pradesh',
    'Chodavaram',
    'Tadigadapa',
    'Krishna District',
  ],
  authors: [{ name: 'Gavirneni Private Limited' }],
  openGraph: {
    title: 'Gavirneni Private Limited',
    description:
      'Government services, global opportunities, digital solutions & business support under one roof.',
    url: 'https://gavirnenigroup.com',
    siteName: 'Gavirneni Group',
    images: ['/images/about-founder.jpg'],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gavirneni Private Limited',
    description: 'Connecting Opportunities. Enhancing Lives.',
    images: ['/images/about-founder.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0B2E83',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Loader />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
