"use client";

import { cn } from "@/lib/utils";
import { SEARCH_PAGE_TABS } from "@/data/courses";

interface CategoryTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export function CategoryTabs({
  activeTab,
  onTabChange,
  className,
}: CategoryTabsProps) {
  return (
    <div
      className={cn(
        "w-full overflow-x-auto scrollbar-none py-2",
        className
      )}
    >
      <div className="flex items-center gap-2.5 min-w-max pb-1">
        {SEARCH_PAGE_TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={cn(
                "h-11 px-6 rounded-full text-base font-medium transition-all cursor-pointer whitespace-nowrap",
                isActive
                  ? "bg-[#D4FB20] text-[#242528] shadow-sm font-semibold scale-100"
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-slate-200/80 hover:text-[#242528]"
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
