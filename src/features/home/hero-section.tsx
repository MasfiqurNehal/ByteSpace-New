"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Header } from "@/components/shared/header";
import { LearningProgressCard } from "./components/learning-progress-card";
import { HappyStudentsCard } from "./components/happy-students-card";
import { CategoryBadgeCard } from "./components/category-badge-card";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#003BE2] text-white">
      {/* Background Geometric Grid Overlay */}
      <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Radial Lighting Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-[#D4FB20]/15 blur-[140px] pointer-events-none" />

      {/* Integrated Header Navigation */}
      <Header />

      {/* Hero Main Content */}
      <section className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 pt-6 pb-20 sm:pt-10 sm:pb-28 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Search Form */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 text-left">
            <div className="space-y-4 max-w-[620px]">
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl xl:text-[72px] font-semibold tracking-tight text-white leading-[1.08]">
                Get Access to Hundreds Courses Available
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#E5E6E8] font-normal leading-relaxed max-w-[540px]">
                Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
              </p>
            </div>

            {/* High-Fidelity Figma Search Bar */}
            <form
              onSubmit={handleSearch}
              className="w-full max-w-[580px] bg-white rounded-full p-1.5 sm:p-2 shadow-2xl flex items-center gap-2 border border-white/20 transition-all focus-within:ring-2 focus-within:ring-[#D4FB20]"
            >
              <div className="flex items-center gap-3 pl-3 sm:pl-4 flex-1 text-[#82868E]">
                <Search className="h-4 sm:h-5 w-4 sm:w-5 text-[#82868E] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Course, topic, creator"
                  className="w-full bg-transparent text-[#242528] placeholder-[#82868E] text-sm sm:text-base focus:outline-none font-normal"
                />
              </div>
              <button
                type="submit"
                className="h-10 sm:h-12 px-5 sm:px-8 rounded-full bg-[#D4FB20] text-[#242528] font-medium text-sm sm:text-base shadow-md transition-all hover:bg-white hover:shadow-lg active:scale-95 shrink-0 flex items-center justify-center cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Quick Popular Keywords */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm text-white/80">
              <span className="font-medium text-white/60">Popular:</span>
              <button
                type="button"
                onClick={() => router.push("/courses?category=UI%2FUX+Design")}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition-colors"
              >
                UI/UX Design
              </button>
              <button
                type="button"
                onClick={() => router.push("/courses?category=AI+%26+Machine+Learning")}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition-colors"
              >
                AI & Machine Learning
              </button>
              <button
                type="button"
                onClick={() => router.push("/courses?category=Full-Stack+Web")}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition-colors"
              >
                Full-Stack Web
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Metric Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] aspect-[4/4.2]">
              
              {/* Decorative 3D Ornaments Background Asset */}
              <div className="absolute -inset-10 -z-0 pointer-events-none select-none opacity-85">
                <Image
                  src="/images/hero/3d-ornaments.png"
                  alt="3D decorative elements"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Main Hero Student Portrait */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden flex items-end justify-center">
                <Image
                  src="/images/hero/hero-student.png"
                  alt="ByteSpace student celebrating learning success"
                  width={578}
                  height={541}
                  className="w-full h-auto object-contain select-none transform hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Metric Card 1: Learning Progress */}
              <div className="absolute top-6 sm:top-8 -left-2 sm:-left-8 lg:-left-10 z-20 animate-float">
                <LearningProgressCard className="w-[160px] sm:w-[200px] lg:w-[210px]" progress={55} />
              </div>

              {/* Floating Metric Card 2: Happy Students */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 lg:-left-8 z-20 animate-float-delayed">
                <HappyStudentsCard className="w-[180px] sm:w-[220px] lg:w-[240px]" rating={4.5} reviewsCount={240} />
              </div>

              {/* Floating Metric Card 3: UI/UX Design Category */}
              <div className="absolute bottom-12 sm:bottom-16 -right-2 sm:-right-6 lg:-right-8 z-20 animate-float">
                <CategoryBadgeCard className="w-[170px] sm:w-[200px] lg:w-[220px]" />
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
