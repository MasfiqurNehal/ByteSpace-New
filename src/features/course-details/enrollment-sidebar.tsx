"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Video,
  Award,
  MessageSquare,
  ArrowRight,
  Check,
  Loader2,
} from "lucide-react";
import type { CourseItem } from "@/data/courses";
import { Button } from "@/components/ui/button";

interface EnrollmentSidebarProps {
  course: CourseItem;
}

const LESSONS_PREVIEW = [
  { num: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { num: "02", title: "Design Principles for Impacts", duration: "21 mins" },
  { num: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

const COURSE_INCLUDES = [
  { icon: FileText, label: "Learning Resources" },
  { icon: Video, label: "Quality Lesson Videos" },
  { icon: Award, label: "Certificate of Completion" },
  { icon: MessageSquare, label: "Private Consultation" },
];

export function EnrollmentSidebar({ course }: EnrollmentSidebarProps) {
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    setIsEnrolling(true);
    setTimeout(() => {
      setIsEnrolling(false);
      setEnrolled(true);
    }, 1200);
  };

  return (
    <aside className="sticky top-24 w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 space-y-8 text-[#242528]">
      {/* Lessons Curriculum Teaser (Figma node 55:4208) */}
      <div className="space-y-4">
        <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#242528]">
          112 Lessons (24 hours)
        </h3>

        <div className="space-y-3">
          {LESSONS_PREVIEW.map((item) => (
            <div
              key={item.num}
              className="flex items-center justify-between gap-3 text-sm py-1.5 border-b border-slate-100 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#82868E] bg-slate-100 px-2 py-1 rounded-md">
                  {item.num}
                </span>
                <span className="font-medium text-[#242528] line-clamp-1">
                  {item.title}
                </span>
              </div>
              <span className="text-xs font-medium text-[#003BE2] shrink-0">
                {item.duration}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#82868E] font-medium pt-1">
          + 99 more lessons in full curriculum
        </p>
      </div>

      <hr className="border-slate-100" />

      {/* Pricing & CTA Section (Figma node 55:4227) */}
      <div className="space-y-5">
        <p className="text-sm text-[#4B4C53] leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="flex items-baseline gap-1.5">
          <span className="font-heading text-3xl sm:text-4xl font-semibold text-[#003BE2]">
            ${course.price}
          </span>
          <span className="text-sm sm:text-base text-[#4B4C53] font-normal">
            {course.billingType}
          </span>
        </div>

        {enrolled ? (
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-emerald-700 font-semibold text-sm">
              <Check className="h-5 w-5 text-emerald-600" />
              <span>Successfully Enrolled!</span>
            </div>
            <Button asChild className="w-full rounded-full bg-[#003BE2] text-white text-sm mt-1">
              <Link href={`/courses/${course.slug}/lessons`}>Go to Classroom</Link>
            </Button>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleEnroll}
            disabled={isEnrolling}
            className="w-full h-13 rounded-full bg-[#D4FB20] text-[#242528] font-medium text-base shadow-md hover:bg-[#c4eb10] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isEnrolling ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Enrolling...</span>
              </>
            ) : (
              <>
                <span>Enroll Now</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>

      <hr className="border-slate-100" />

      {/* This Course Includes Checklist (Figma node 55:4234) */}
      <div className="space-y-3.5">
        <h4 className="font-heading text-base font-semibold text-[#242528]">
          This course includes
        </h4>

        <ul className="space-y-3">
          {COURSE_INCLUDES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={idx} className="flex items-center gap-3 text-sm text-[#4B4C53]">
                <Icon className="h-4 w-4 text-[#003BE2] shrink-0" />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <hr className="border-slate-100" />

      {/* Instructor Profile Card (Figma node 55:4249) */}
      <div className="space-y-4 pt-1">
        <div className="flex items-center gap-3.5">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-100">
            <Image
              src="/images/testimonials/avatar-sarah.png"
              alt={course.creator}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-heading text-base font-semibold text-[#242528]">
              {course.creator}
            </h4>
            <p className="text-xs text-[#82868E]">Professional Creator</p>
          </div>
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full rounded-full border-slate-200 text-sm font-medium hover:bg-slate-50 text-[#242528]"
        >
          <Link href="/creators">See Full Profile</Link>
        </Button>
      </div>
    </aside>
  );
}
