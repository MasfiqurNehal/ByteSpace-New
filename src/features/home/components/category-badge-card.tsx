import { Layout } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryBadgeCardProps {
  className?: string;
  category?: string;
  coursesCount?: number;
  studentsCount?: string;
}

export function CategoryBadgeCard({
  className,
  category = "UI/UX Design",
  coursesCount = 200,
  studentsCount = "1000+",
}: CategoryBadgeCardProps) {
  return (
    <div
      className={cn(
        "bg-white text-[#242528] rounded-2xl px-4 py-3 shadow-2xl border border-black/5 select-none transition-transform hover:-translate-y-1 duration-300 flex items-center gap-3",
        className
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4FB20]/20 text-[#003BE2]">
        <Layout className="h-5 w-5 stroke-[#003BE2]" />
      </div>
      <div>
        <h4 className="text-sm sm:text-base font-medium text-[#242528] leading-tight">
          {category}
        </h4>
        <p className="text-xs text-[#82868E] mt-0.5">
          {coursesCount} Courses • {studentsCount} Students
        </p>
      </div>
    </div>
  );
}
