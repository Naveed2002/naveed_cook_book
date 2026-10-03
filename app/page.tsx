import { AboutSection } from '@/components/AboutSection';
import { AwardsSection } from '@/components/AwardsSection';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { ServicesPricing } from '@/components/ServicesPricing';
import { Testimonials } from '@/components/Testimonials';
import { WorkSection } from '@/components/WorkSection';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-[#f6f3ee] text-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <Testimonials />
      <WorkSection />
      <AwardsSection />
      <ServicesPricing />
      <FAQSection />
      <CTASection />
    </main>
  );
}
