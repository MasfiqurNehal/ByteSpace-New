"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORY_TABS, POPULAR_COURSES } from "@/data/courses";
import { CourseCard } from "@/components/shared/course-card";
import { Button } from "@/components/ui/button";

export function CourseDiscovery() {
  const [selectedCategory, setSelectedCategory] = React.useState("Featured");

  const filteredCourses = React.useMemo(() => {
    if (selectedCategory === "Featured") {
      return POPULAR_COURSES;
    }
    const matching = POPULAR_COURSES.filter(
      (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
    );
    return matching.length > 0 ? matching : POPULAR_COURSES;
  }, [selectedCategory]);

  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-24 border-b border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Figma node 12:101) */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#141518] leading-[1.2]">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Pills (Figma nodes 21:33, 21:56, 21:63) */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2.5">
            {CATEGORY_TABS.map((tab) => {
              const isSelected = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#003BE2] text-white shadow-md shadow-blue-500/20 scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Course Cards Grid (Figma node 33:683) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom Catalog Link */}
        <div className="flex justify-center pt-4">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-8 py-6 text-sm font-semibold border-slate-300 hover:bg-[#003BE2] hover:text-white hover:border-[#003BE2] transition-colors"
          >
            <Link href="/courses" className="flex items-center gap-2">
              <span>View All Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
