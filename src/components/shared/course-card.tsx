import Link from "next/link";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { CourseItem } from "@/data/courses";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: CourseItem;
  className?: string;
}

const STUDENT_AVATARS = [
  "/images/testimonials/avatar-sarah.png",
  "/images/testimonials/avatar-alex.png",
  "/images/testimonials/avatar-elena.png",
];

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5",
        className
      )}
    >
      {/* Thumbnail Container (Figma node 78:2461) */}
      <div className="relative w-full aspect-[341/195] rounded-xl overflow-hidden bg-slate-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Top Badges Overlay (Figma node 78:2462) */}
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
        {/* Title & Creator (Figma node 78:2470) */}
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

        {/* Level & Enrolled Students Stack (Figma node 78:2473) */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-medium text-[#4B4C53]">
            <BarChart2 className="h-4 w-4 text-[#82868E]" />
            <span>{course.level}</span>
          </div>

          {/* Student Avatars Stack */}
          <div className="flex items-center -space-x-2">
            {STUDENT_AVATARS.map((avatar, idx) => (
              <div
                key={idx}
                className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden bg-slate-200"
              >
                <Image
                  src={avatar}
                  alt="Enrolled student"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] text-[10px] font-semibold text-[#242528]">
              26+
            </div>
          </div>
        </div>

        {/* Price & Rating (Figma node 78:2485 & 78:2488) */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-xl font-semibold text-[#003BE2]">
              ${course.price}
            </span>
            <span className="text-xs text-[#82868E] font-normal">
              {course.billingType}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-[#242528]">{course.rating}</span>
            <Star className="h-4 w-4 fill-[#FFA800] text-[#FFA800]" />
          </div>
        </div>
      </div>
    </article>
  );
}
