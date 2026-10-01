import { Navbar } from "@/components/shared/navbar";
import { HeroSection } from "@/features/home/hero-section";
import { PartnersBar } from "@/features/home/partners-bar";
import { CourseDiscovery } from "@/features/home/course-discovery";
import { CategoriesGrid } from "@/features/home/categories-grid";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Home Part 1: Top Navigation, Hero Section, and Partners Trust Bar */}
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PartnersBar />

        {/* Home Part 2: Course Discovery & Diverse Category Learning Paths */}
        <CourseDiscovery />
        <CategoriesGrid />
      </main>
    </div>
  );
}
