"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Search, Star, Sparkles, BookOpen, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  return (
    <section className="relative w-full bg-[#003BE2] overflow-hidden text-white pt-8 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Grid Pattern & Radial Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Search */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-medium text-[#D4FB20]">
              <Sparkles className="w-4 h-4" />
              <span>Over 500+ Verified Online Courses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight leading-[1.15] text-white">
              Get Access to <br className="hidden sm:inline" />
              <span className="text-[#D4FB20]">Hundreds Courses</span> <br className="hidden sm:inline" />
              Available
            </h1>

            <p className="text-base sm:text-lg text-white/85 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses taught by industry veterans.
            </p>

            {/* Search Bar matching Figma node 1:1772 */}
            <form
              onSubmit={handleSearch}
              className="max-w-xl mx-auto lg:mx-0 bg-white p-2 rounded-2xl sm:rounded-full shadow-2xl flex flex-col sm:flex-row items-center gap-2 text-slate-800"
            >
              <div className="flex items-center gap-3 px-4 w-full flex-1">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Course, topic, creator"
                  className="w-full bg-transparent border-none text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                />
              </div>
              <Button
                type="submit"
                className="w-full sm:w-auto bg-[#D4FB20] hover:bg-[#c2e817] text-[#141518] font-bold px-7 py-3 sm:py-6 rounded-xl sm:rounded-full text-sm sm:text-base shadow-md transition-transform active:scale-95"
              >
                Search
              </Button>
            </form>

            {/* Key Quick Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#D4FB20]" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#D4FB20]" />
                <span>Top Industry Creators</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#D4FB20]" />
                <span>Official Certificates</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Stats Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Backing Circle */}
            <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-purple-500/40 via-blue-400/30 to-[#D4FB20]/20 absolute -z-0 blur-2xl" />

            {/* Hero Main Card / Character Visual Frame */}
            <div className="relative z-10 w-full max-w-[420px] h-[440px] sm:h-[480px] rounded-3xl bg-gradient-to-b from-white/15 to-white/5 border border-white/20 backdrop-blur-xl p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-blue-700/60 to-indigo-950/80">
                {/* SVG Learner Illustration / Graphic */}
                <div className="text-center p-6 space-y-4">
                  <div className="w-28 h-28 mx-auto rounded-full bg-[#D4FB20]/20 border-2 border-[#D4FB20] flex items-center justify-center backdrop-blur-md shadow-inner">
                    <BookOpen className="w-14 h-14 text-[#D4FB20]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Interactive Learning Hub</h3>
                    <p className="text-xs text-white/80">Engage in live cohorts, real projects & expert feedback</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: Learning Progress (Figma node 1:1797) */}
              <div className="absolute top-6 -left-4 sm:-left-8 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-2 w-48 sm:w-52 animate-bounce-slow">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>Learning Progress</span>
                  <TrendingUp className="w-4 h-4 text-[#003BE2]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#141518]">
                  55%
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#003BE2] h-full rounded-full w-[55%]" />
                </div>
              </div>

              {/* Floating Card 2: Happy Students (Figma node 1:1821) */}
              <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-2 w-56 sm:w-64">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">Happy Students</span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-slate-700">4.5</span>
                    <span className="text-slate-400">(240)</span>
                  </div>
                </div>
                {/* Avatars Stack */}
                <div className="flex items-center gap-1.5 pt-1">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-indigo-500 text-[10px] text-white flex items-center justify-center font-bold">AL</div>
                    <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-purple-500 text-[10px] text-white flex items-center justify-center font-bold">MR</div>
                    <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-teal-500 text-[10px] text-white flex items-center justify-center font-bold">SK</div>
                    <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-pink-500 text-[10px] text-white flex items-center justify-center font-bold">JD</div>
                  </div>
                  <div className="ml-2 px-2 py-0.5 rounded-full bg-slate-100 text-[11px] font-bold text-slate-800">
                    2K+
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Category Badge (Figma node 46:126) */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-white text-slate-900 px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">UI/UX Design</div>
                  <div className="text-[11px] text-slate-500">200 Courses • 1000+ Students</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
