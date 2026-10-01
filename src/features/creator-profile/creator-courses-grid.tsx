import { CourseItem } from "@/data/courses";
import { CourseCard } from "@/components/shared/course-card";

interface CreatorCoursesGridProps {
  courses: CourseItem[];
  creatorName?: string;
}

export function CreatorCoursesGrid({
  courses,
  creatorName = "PurePearl Studio",
}: CreatorCoursesGridProps) {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#242528] tracking-tight">
            Courses & Products by {creatorName}
          </h2>
          <p className="text-sm sm:text-base text-[#82868E] mt-1">
            Browse all masterclasses, tutorials, and digital assets published by this creator.
          </p>
        </div>
        <span className="text-sm font-medium text-[#82868E] hidden sm:inline">
          {courses.length} course{courses.length === 1 ? "" : "s"} available
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
