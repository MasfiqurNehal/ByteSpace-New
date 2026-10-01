"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CourseCard } from "@/components/shared/course-card";
import { FEATURED_COURSES, FILTER_TABS } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CourseDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filteredCourses =
    selectedCategory === "All Categories" || selectedCategory === "+ More"
      ? FEATURED_COURSES
      : FEATURED_COURSES.filter(
          (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-24 border-b border-slate-200/60">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header (Figma node 12:101) */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#242528] leading-[1.15]">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="text-base sm:text-lg text-[#82868E] font-normal leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Filter Tabs (Figma nodes 21:33, 21:56, 21:63) */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {FILTER_TABS.map((tab) => {
            const isSelected = selectedCategory === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedCategory(tab)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all cursor-pointer shadow-sm",
                  isSelected
                    ? "bg-[#242528] text-white shadow-md scale-105"
                    : "bg-[#F5F5F6] text-[#242528] hover:bg-slate-200"
                )}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Featured 6-Course Grid (Figma node 33:683) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(filteredCourses.length > 0 ? filteredCourses : FEATURED_COURSES).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom Discovery Link */}
        <div className="flex justify-center pt-6">
          <Button asChild className="rounded-full bg-[#003BE2] hover:bg-[#002FB6] text-white px-8 h-12 text-base font-medium shadow-lg">
            <Link href="/courses" className="flex items-center gap-2">
              <span>View All Courses</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
