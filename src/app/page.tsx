import { HeroSection } from "@/features/home/hero-section";
import { PartnerBar } from "@/components/shared/partner-bar";
import { CourseDiscovery } from "@/features/home/course-discovery";
import { CategoriesGrid } from "@/features/home/categories-grid";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#FAFAFA] flex flex-col">
      {/* HOME PART 1: Top Navigation, Hero Section & Trust Badges */}
      <HeroSection />
      <PartnerBar />

      {/* HOME PART 2: Course Discovery, Filter Pills & Category Matrix */}
      <CourseDiscovery />
      <CategoriesGrid />
    </main>
  );
}
