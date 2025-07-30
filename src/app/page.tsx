import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HeaderSection from '@/components/HeaderSection';
import FixedBackground from '@/components/FixedBackground';

export default function HomePage() {
  return (
    <main className="relative">
      <FixedBackground />
      <HeaderSection />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
