import * as React from "react";
import Link from "next/link";
import { Star, BarChart2, Bookmark, Clock, BookOpen, MessageSquare } from "lucide-react";
import { CourseItem } from "@/data/courses";

interface CourseCardProps {
  course: CourseItem;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Top Media / Thumbnail Box */}
      <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${course.thumbnailGradient} p-3 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform`}>
        {/* Ambient Overlay Pattern */}
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

        {/* Top Badges Row */}
        <div className="relative z-10 flex items-center justify-between gap-1.5 text-[11px] font-medium text-white">
          <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {course.lessons} Lessons
          </span>
          <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {course.duration}
          </span>
          <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            {course.comments}
          </span>
        </div>

        {/* Center Thumbnail Icon & Category */}
        <div className="relative z-10 flex items-center justify-center my-auto">
          <span className="text-white font-black text-2xl tracking-wide uppercase drop-shadow-md bg-white/15 px-4 py-1.5 rounded-xl border border-white/20 backdrop-blur-md">
            {course.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-4 pb-2 space-y-3">
        <div>
          <Link href={`/courses/${course.id}`} className="hover:text-[#003BE2] transition-colors">
            <h3 className="font-semibold text-lg sm:text-xl text-[#141518] line-clamp-1">
              {course.title}
            </h3>
          </Link>
          <p className="text-xs text-slate-500 font-normal pt-0.5">
            by <span className="font-medium text-slate-700">{course.creator}</span>
          </p>
        </div>

        {/* Level and Rating Row */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200/60">
            <BarChart2 className="w-3.5 h-3.5 text-[#003BE2]" />
            <span>{course.level}</span>
          </div>

          <div className="flex items-center gap-1 text-sm font-semibold text-slate-700">
            <span>{course.rating.toFixed(1)}</span>
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#141518]">${course.price}</span>
            <span className="text-xs text-slate-400 font-normal">/lifetime</span>
          </div>

          <Link
            href={`/courses/${course.id}`}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-[#003BE2] text-slate-700 hover:text-white transition-colors"
            aria-label="Save or explore course"
          >
            <Bookmark className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

