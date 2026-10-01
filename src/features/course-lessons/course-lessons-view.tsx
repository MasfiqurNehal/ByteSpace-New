"use client";

import { useRouter } from "next/navigation";
import { CourseItem } from "@/data/courses";
import { CourseHero } from "@/features/course-details/course-hero";
import { CourseTabs } from "@/features/course-details/course-tabs";
import { ModulesAccordion } from "./modules-accordion";
import { LearningProgressWidget } from "./learning-progress-widget";
import { EnrollmentSidebar } from "@/features/course-details/enrollment-sidebar";
import { Footer } from "@/components/shared/footer";

interface CourseLessonsViewProps {
  course: CourseItem;
}

export function CourseLessonsView({ course }: CourseLessonsViewProps) {
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    if (tab === "About") {
      router.push(`/courses/${course.slug}`);
    } else if (tab === "Reviews") {
      router.push(`/courses/${course.slug}/reviews`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      {/* Course Hero Banner */}
      <CourseHero course={course} />

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1200px] w-full px-6 sm:px-8 lg:px-12 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Lessons & Curriculum */}
          <div className="lg:col-span-8 space-y-10">
            {/* Tabs Subnavigation with Lessons active */}
            <CourseTabs activeTab="Lessons" onTabChange={handleTabChange} />

            {/* Modules Accordion (Figma frame 60:102) */}
            <div className="space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528] tracking-tight">
                Course Curriculum & Modules
              </h2>
              <ModulesAccordion />
            </div>

            {/* Lesson Content & Progress Tracking Section */}
            <LearningProgressWidget />
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
