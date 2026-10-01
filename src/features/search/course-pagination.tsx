"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function CoursePagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: CoursePaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 py-10",
        className
      )}
    >
      {/* Previous Page Button (Figma node 55:835) */}
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="h-12 w-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#242528] hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Page Numbers (Figma node 55:837 - 55:841) */}
      <div className="flex items-center gap-1 sm:gap-2">
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={cn(
                "h-12 w-12 rounded-xl font-heading text-lg font-semibold transition-all flex items-center justify-center cursor-pointer",
                isActive
                  ? "bg-[#003BE2] text-white shadow-md"
                  : "bg-white text-[#242528] hover:bg-slate-100/80 border border-transparent"
              )}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Page Button (Figma node 55:842) */}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="h-12 w-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#242528] hover:bg-slate-50 hover:border-slate-300 transition-all disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
