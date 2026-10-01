"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "/images/testimonials/avatar-sarah.png",
    rating: 5,
    date: "a year ago",
    comment:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    id: "rev-2",
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "/images/testimonials/avatar-alex.png",
    rating: 5,
    date: "a year ago",
    comment:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: "rev-3",
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "/images/testimonials/avatar-elena.png",
    rating: 5,
    date: "a year ago",
    comment:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: "rev-4",
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "/images/testimonials/avatar-sarah.png",
    rating: 5,
    date: "a year ago",
    comment:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const RATING_FILTER_OPTIONS = [
  { label: "All rating", value: "all" },
  { label: "5", value: "5" },
  { label: "4", value: "4" },
  { label: "3", value: "3" },
  { label: "2", value: "2" },
  { label: "1", value: "1" },
];

export function ReviewsList() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredReviews =
    selectedFilter === "all"
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.rating === Number(selectedFilter));

  return (
    <div className="space-y-6">
      {/* Section Title (Figma node 60:1354) */}
      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528] tracking-tight">
        Individual Reviews:
      </h3>

      {/* Filter Tabs (Figma node 60:1355) */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {RATING_FILTER_OPTIONS.map((opt) => {
          const isActive = selectedFilter === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedFilter(opt.value)}
              className={cn(
                "h-10 px-4 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer shadow-sm",
                isActive
                  ? "bg-[#242528] text-white font-semibold"
                  : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-slate-200"
              )}
            >
              {opt.value !== "all" && (
                <Star
                  className={cn(
                    "h-3.5 w-3.5 fill-[#FFA800] text-[#FFA800]",
                    isActive && "text-[#FFA800]"
                  )}
                />
              )}
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      {/* Review Cards Stack (Figma node 60:1373 - 60:1436) */}
      <div className="space-y-4">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl border border-slate-200/80 bg-white shadow-sm space-y-4 hover:border-[#003BE2]/30 transition-all"
            >
              {/* Header: User Profile + Star Rating + Date */}
              <div className="flex items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-11 w-11 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-semibold text-[#242528]">
                      {review.name}
                    </h4>
                    <p className="text-xs text-[#82868E]">{review.role}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#FFA800] text-[#FFA800]"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#82868E] font-medium whitespace-nowrap">
                    {review.date}
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-[#4B4C53] leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))
        ) : (
          <div className="p-8 text-center rounded-2xl bg-slate-50 border border-slate-200 text-sm text-[#82868E]">
            No reviews match the selected star filter.
          </div>
        )}
      </div>
    </div>
  );
}
