import { CourseItem } from "@/data/courses";
import { CreatorHero } from "./creator-hero";
import { CreatorCoursesGrid } from "./creator-courses-grid";
import { Footer } from "@/components/shared/footer";

interface CreatorProfileViewProps {
  creatorName?: string;
  courses: CourseItem[];
}

export function CreatorProfileView({
  creatorName = "PurePearl Studio",
  courses,
}: CreatorProfileViewProps) {
  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      {/* Creator Profile Hero Banner (Figma node 60:2155) */}
      <CreatorHero
        name={creatorName}
        productsCount={courses.length}
      />

      {/* Course & Product Showcase Grid (Figma node 60:1928) */}
      <main className="mx-auto max-w-[1200px] w-full px-6 sm:px-8 lg:px-12 py-16 flex-1">
        <CreatorCoursesGrid courses={courses} creatorName={creatorName} />
      </main>

      {/* Global Footer (Figma node 78:1506) */}
      <Footer />
    </div>
  );
}
