"use client";

import { useState } from "react";
import type { CourseItem } from "@/data/courses";
import { CourseHero } from "./course-hero";
import { CourseTabs } from "./course-tabs";
import { CourseOverview } from "./course-overview";
import { EnrollmentSidebar } from "./enrollment-sidebar";
import { Footer } from "@/components/shared/footer";
import { Star, CheckCircle2 } from "lucide-react";

interface CourseDetailsViewProps {
  course: CourseItem;
}

export function CourseDetailsView({ course }: CourseDetailsViewProps) {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      {/* Course Hero Banner */}
      <CourseHero course={course} />

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1200px] w-full px-6 sm:px-8 lg:px-12 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tabs Subnavigation */}
            <CourseTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Tab Content Display */}
            {activeTab === "About" && <CourseOverview course={course} />}

            {activeTab === "Lessons" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528]">
                  Course Curriculum (112 Lessons)
                </h2>
                <div className="space-y-3">
                  {[
                    { id: 1, title: "Introduction & Environment Setup", duration: "14 mins", free: true },
                    { id: 2, title: "Core Principles & Architecture", duration: "22 mins", free: true },
                    { id: 3, title: "Mastering Design Tooling & Assets", duration: "35 mins", free: false },
                    { id: 4, title: "Deep Dive into Vector Techniques", duration: "28 mins", free: false },
                    { id: 5, title: "Prototyping & Interactive Flows", duration: "41 mins", free: false },
                    { id: 6, title: "Exporting & Platform Optimization", duration: "19 mins", free: false },
                    { id: 7, title: "Capstone Project & Mentorship", duration: "50 mins", free: false },
                  ].map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#003BE2]/40 transition-all shadow-sm"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 font-mono text-xs font-semibold text-[#242528]">
                          {lesson.id}
                        </span>
                        <div>
                          <p className="font-heading font-medium text-[#242528] text-sm sm:text-base">
                            {lesson.title}
                          </p>
                          <span className="text-xs text-[#82868E]">{lesson.duration}</span>
                        </div>
                      </div>
                      {lesson.free ? (
                        <span className="text-xs font-semibold text-[#003BE2] bg-blue-50 px-2.5 py-1 rounded-full">
                          Free Preview
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-slate-400">Locked</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Reviews" && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528]">
                    Student Reviews
                  </h2>
                  <div className="flex items-center gap-1.5 text-lg font-semibold text-[#242528]">
                    <span>4.8</span>
                    <Star className="h-5 w-5 fill-[#FFA800] text-[#FFA800]" />
                    <span className="text-sm font-normal text-[#82868E]">(172 reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      name: "Sarah Jenkins",
                      role: "Senior UX Designer",
                      text: "This course completely transformed how I think about digital design. The instructor is clear, knowledgeable, and the real-world examples were spot on.",
                    },
                    {
                      name: "Alex Rivera",
                      role: "Full-Stack Developer",
                      text: "Incredible value! The exercises gave me the exact skills I needed to launch my first digital asset store successfully.",
                    },
                  ].map((review, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl border border-slate-100 bg-[#F8F9FA] space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading font-semibold text-[#242528]">
                          {review.name}
                        </h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, s) => (
                            <Star
                              key={s}
                              className="h-3.5 w-3.5 fill-[#FFA800] text-[#FFA800]"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#82868E]">{review.role}</p>
                      <p className="text-sm text-[#4B4C53] leading-relaxed pt-1">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Enrollment Sidebar */}
          <div className="lg:col-span-4">
            <EnrollmentSidebar course={course} />
          </div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
