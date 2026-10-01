"use client";

import { useRouter } from "next/navigation";
import { CourseItem } from "@/data/courses";
import { CourseHero } from "./course-hero";
import { CourseTabs } from "./course-tabs";
import { CourseOverview } from "./course-overview";
import { EnrollmentSidebar } from "./enrollment-sidebar";
import { Footer } from "@/components/shared/footer";

interface CourseDetailsViewProps {
  course: CourseItem;
}

export function CourseDetailsView({ course }: CourseDetailsViewProps) {
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    if (tab === "Lessons") {
      router.push(`/courses/${course.slug}/lessons`);
    } else if (tab === "Reviews") {
      router.push(`/courses/${course.slug}/reviews`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      {/* Course Hero Banner (Figma frame 55:4066) */}
      <CourseHero course={course} />

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1200px] w-full px-6 sm:px-8 lg:px-12 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tabs Subnavigation */}
            <CourseTabs activeTab="About" onTabChange={handleTabChange} />

            {/* Tab Content Display (About/Overview) */}
            <CourseOverview course={course} />
          </div>

          {/* Right Column: Sticky Enrollment Sidebar */}
          <div className="lg:col-span-4">
            <EnrollmentSidebar course={course} />
          </div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
