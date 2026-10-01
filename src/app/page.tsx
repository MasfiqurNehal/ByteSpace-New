import { HeroSection } from "@/features/home/hero-section";
import { PartnerBar } from "@/components/shared/partner-bar";
import { CategoriesGrid } from "@/features/home/categories-grid";
import { CourseDiscovery } from "@/features/home/course-discovery";
import { FeaturesShowcase } from "@/features/home/features-showcase";
import { CtaBanner } from "@/features/home/cta-banner";
import { Testimonials } from "@/features/home/testimonials";
import { Footer } from "@/components/shared/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#FAFAFA] flex flex-col">
      {/* 1. Header Navigation & Hero Section with Search & Live Badges (Figma node 1:1695) */}
      <HeroSection />

      {/* 2. Trusted Partner Logos Bar (Figma node 1:1794) */}
      <PartnerBar />

      {/* 3. Explore Courses by Category Matrix (Figma nodes 12:101 & 11:21) */}
      <CategoriesGrid />

      {/* 4. Featured Course Discovery Catalog & Tabs (Figma nodes 34:684, 21:33, 33:683) */}
      <CourseDiscovery />

      {/* 5. Value Propositions / Features Showcase for Learners & Creators (Figma node 34:1159) */}
      <FeaturesShowcase />

      {/* 6. Creator Call to Action Banner (Figma node 34:1161) */}
      <CtaBanner />

      {/* 7. Student & Creator Testimonials (Figma node 34:1175) */}
      <Testimonials />

      {/* 8. Global Platform Footer (Figma node 34:1256) */}
      <Footer />
    </main>
  );
}
