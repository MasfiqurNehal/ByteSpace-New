"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, BarChart2, Users, Share2, Play, Check } from "lucide-react";
import { Header } from "@/components/shared/header";
import { CourseItem } from "@/data/courses";

interface CourseHeroProps {
  course: CourseItem;
}

export function CourseHero({ course }: CourseHeroProps) {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#003BE2] text-white">
      {/* Background Geometric Grid Overlay */}
      <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Radial Lighting Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full bg-[#D4FB20]/15 blur-[140px] pointer-events-none" />

      {/* Background 3D Floating Shapes */}
      <div className="absolute inset-0 -z-0 pointer-events-none select-none opacity-25">
        <Image
          src="/images/hero/3d-ornaments.png"
          alt="3D decorative elements"
          fill
          className="object-cover"
        />
      </div>

      {/* Integrated Navigation Header */}
      <Header />

      {/* Course Hero Content (Figma node 55:4183) */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 pt-6 pb-16 sm:pb-20 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Course Metadata */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight leading-[1.15]">
                {course.title}: A Comprehensive Guide
              </h1>
              <p className="text-base sm:text-lg font-heading font-medium text-[#E5E6E8] leading-relaxed">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="text-sm sm:text-base text-white/80 font-medium">
                by <span className="text-white underline">{course.creator}</span>
              </p>
            </div>

            {/* Course Metadata Badges (Figma node 55:4190) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-sm text-white/90">
              {/* Level */}
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                <BarChart2 className="h-4 w-4 text-[#D4FB20]" />
                <span className="font-medium">{course.level}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                <Star className="h-4 w-4 fill-[#FFA800] text-[#FFA800]" />
                <span className="font-medium">{course.rating} (172 reviews)</span>
              </div>

              {/* Students */}
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                <Users className="h-4 w-4 text-[#D4FB20]" />
                <span className="font-medium">199 Students</span>
              </div>

              {/* Share button */}
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all px-3.5 py-1.5 rounded-full cursor-pointer text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[#D4FB20]" />
                    <span className="font-medium text-[#D4FB20]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" />
                    <span className="font-medium">Share</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Hero Video / Thumbnail Preview (Figma node 55:4202) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 group cursor-pointer">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity group-hover:bg-black/20" />

              {/* Play Button Overlay */}
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/90 text-[#003BE2] shadow-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white"
                aria-label="Play course preview video"
              >
                <Play className="h-7 w-7 sm:h-9 sm:w-9 fill-[#003BE2] ml-1" />
              </button>

              {/* Top Live Badge */}
              <div className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#D4FB20] animate-pulse" />
                <span>Course Preview (3:45 mins)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
