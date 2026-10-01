import { HeroSection } from "@/features/home/hero-section";
import { PartnerBar } from "@/components/shared/partner-bar";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#FAFAFA] flex flex-col">
      {/* HOME PART 1: Top Navigation, Hero Section & Trust Badges */}
      <HeroSection />
      <PartnerBar />
    </main>
  );
}
