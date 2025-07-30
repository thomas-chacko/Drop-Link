import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HeaderSection from '@/components/HeaderSection';
import FixedBackground from '@/components/FixedBackground';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';

export default function HomePage() {
  return (
    <main className="relative">
      <FixedBackground />
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
    </main>
  );
}
