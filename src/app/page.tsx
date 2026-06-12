import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Divisions from '@/components/sections/Divisions';
import CSCServices from '@/components/sections/CSCServices';
import FlyBridge from '@/components/sections/FlyBridge';
import DigitalServices from '@/components/sections/DigitalServices';
import BusinessServices from '@/components/sections/BusinessServices';
import Travel from '@/components/sections/Travel';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Certifications from '@/components/sections/Certifications';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Divisions />
      <CSCServices />
      <FlyBridge />
      <DigitalServices />
      <BusinessServices />
      <Travel />
      <WhyChooseUs />
      <Certifications />
      <Testimonials />
      <ContactSection />
    </>
  );
}
