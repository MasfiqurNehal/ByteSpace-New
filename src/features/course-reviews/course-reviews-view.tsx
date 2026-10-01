"use client";

import { useRouter } from "next/navigation";
import { CourseItem } from "@/data/courses";
import { CourseHero } from "@/features/course-details/course-hero";
import { CourseTabs } from "@/features/course-details/course-tabs";
import { RatingSummaryCard } from "./rating-summary-card";
import { ReviewsList } from "./reviews-list";
import { EnrollmentSidebar } from "@/features/course-details/enrollment-sidebar";
import { Footer } from "@/components/shared/footer";

interface CourseReviewsViewProps {
  course: CourseItem;
}

export function CourseReviewsView({ course }: CourseReviewsViewProps) {
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    if (tab === "About") {
      router.push(`/courses/${course.slug}`);
    } else if (tab === "Lessons") {
      router.push(`/courses/${course.slug}/lessons`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      {/* Course Hero Banner */}
      <CourseHero course={course} />

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1200px] w-full px-6 sm:px-8 lg:px-12 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Reviews & Ratings */}
          <div className="lg:col-span-8 space-y-10">
            {/* Tabs Subnavigation with Reviews active */}
            <CourseTabs activeTab="Reviews" onTabChange={handleTabChange} />

            {/* Overall Rating & Bar Distribution Summary */}
            <RatingSummaryCard
              averageRating={course.rating}
              totalReviews={172}
            />

            {/* Individual Reviews Feed */}
            <ReviewsList />
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
