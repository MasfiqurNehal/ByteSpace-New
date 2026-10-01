import Link from "next/link";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import type { CourseItem } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: CourseItem;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5",
        className
      )}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-[341/195] rounded-xl overflow-hidden bg-slate-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-1.5 z-10">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <span className="rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
              {course.lessons} Lessons
            </span>
            <span className="rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
              {course.duration}
            </span>
          </div>
          <span className="rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-white shadow-sm shrink-0">
            {course.comments} Comments
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="flex flex-col flex-1 pt-4 pb-1 justify-between space-y-3">
        {/* Title & Creator */}
        <div>
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#242528] line-clamp-1 group-hover:text-[#003BE2] transition-colors">
            <Link href={`/courses/${course.slug}`}>
              {course.title}
            </Link>
          </h3>
          <p className="text-xs text-[#82868E] font-normal mt-0.5">
            by {course.creator}
          </p>
        </div>

        {/* Level & Rating */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#242528]">
            <BarChart2 className="h-4 w-4 text-[#82868E]" />
            <span>{course.level}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-[#242528]">{course.rating}</span>
            <Star className="h-4 w-4 fill-[#FFA800] text-[#FFA800]" />
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-xl font-semibold text-[#242528]">
              ${course.price}
            </span>
            <span className="text-xs text-[#82868E] font-normal">
              {course.billingType}
            </span>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-[#F5F5F6] px-4 py-1.5 text-xs font-medium text-[#242528] transition-all hover:bg-[#D4FB20] hover:text-[#242528]"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </article>
  );
}
