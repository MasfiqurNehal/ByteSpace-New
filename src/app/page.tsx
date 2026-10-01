import { HeroSection } from "@/features/home/hero-section";
import { PartnerBar } from "@/components/shared/partner-bar";
import { CourseDiscovery } from "@/features/home/course-discovery";
import { CategoriesGrid } from "@/features/home/categories-grid";
import { FeaturesShowcase } from "@/features/home/features-showcase";
import { CtaBanner } from "@/features/home/cta-banner";
import { Testimonials } from "@/features/home/testimonials";
import { Footer } from "@/components/shared/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#FAFAFA] flex flex-col">
      {/* HOME PART 1: Top Navigation, Hero Section & Trust Badges */}
      <HeroSection />
      <PartnerBar />

      {/* HOME PART 2: Course Discovery, Filter Pills & Category Matrix */}
      <CourseDiscovery />
      <CategoriesGrid />

      {/* HOME PART 3: Value Propositions, CTA, Testimonials & Footer */}
      <FeaturesShowcase />
      <CtaBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
