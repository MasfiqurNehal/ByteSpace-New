"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import { Header } from "@/components/shared/header";

interface SearchHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  selectedScope?: string;
}

export function SearchHero({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  selectedScope = "Courses",
}: SearchHeroProps) {
  const [scopeMenuOpen, setScopeMenuOpen] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-[#003BE2] text-white">
      {/* Background Geometric Grid Overlay */}
      <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative Radial Lighting Glows */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full bg-[#D4FB20]/15 blur-[140px] pointer-events-none" />

      {/* Background 3D Floating Shapes (Figma node 55:845) */}
      <div className="absolute inset-0 -z-0 pointer-events-none select-none opacity-30">
        <Image
          src="/images/hero/3d-ornaments.png"
          alt="3D decorative elements"
          fill
          className="object-cover"
        />
      </div>

      {/* Integrated Navigation Header */}
      <Header />

      {/* Search Hero Content (Figma node 55:857) */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 pt-4 pb-16 sm:pb-20 text-center flex flex-col items-center">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight mb-8">
          Find Your Next Course
        </h1>

        {/* Search Bar Container (Figma node 55:859) */}
        <form
          onSubmit={onSearchSubmit}
          className="relative w-full max-w-[624px] bg-white rounded-full p-1.5 shadow-2xl flex items-center justify-between border border-white/20 transition-all focus-within:ring-2 focus-within:ring-[#D4FB20]"
        >
          {/* Input field */}
          <div className="flex items-center gap-3 pl-4 flex-1 text-[#82868E]">
            <Search className="h-5 w-5 text-[#82868E] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search courses, skills, topics..."
              className="w-full bg-transparent text-[#242528] placeholder-[#82868E] text-base focus:outline-none font-normal"
            />
          </div>

          {/* Scope Selector Button (Figma node 55:863) */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setScopeMenuOpen(!scopeMenuOpen)}
              className="h-11 px-6 rounded-full bg-[#D4FB20] text-[#242528] font-medium text-base shadow-sm hover:bg-[#c4eb10] active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{selectedScope}</span>
              <ChevronDown className="h-4 w-4 text-[#242528]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
