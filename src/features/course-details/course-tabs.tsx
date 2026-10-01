"use client";

import { cn } from "@/lib/utils";

interface CourseTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const TABS = ["About", "Lessons", "Reviews"];

export function CourseTabs({
  activeTab,
  onTabChange,
  className,
}: CourseTabsProps) {
  return (
    <div className={cn("border-b border-slate-200 w-full", className)}>
      <div className="flex items-center gap-8">
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={cn(
                "pb-4 text-base sm:text-lg font-medium transition-all relative cursor-pointer",
                isActive
                  ? "text-[#003BE2] font-semibold"
                  : "text-[#82868E] hover:text-[#242528]"
              )}
            >
              {tab}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#003BE2] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
