"use client";

import { useState } from "react";
import Image from "next/image";
import { UserCheck, UserPlus } from "lucide-react";
import { Header } from "@/components/shared/header";
import { cn } from "@/lib/utils";

interface CreatorHeroProps {
  name?: string;
  role?: string;
  avatar?: string;
  bio?: string;
  productsCount?: number;
  followersCount?: number;
}

export function CreatorHero({
  name = "PurePearl Studio",
  role = "Passionate UI/UX, Web designer",
  avatar = "/images/testimonials/avatar-sarah.png",
  bio = "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  productsCount = 6,
  followersCount = 1420,
}: CreatorHeroProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentFollowers, setCurrentFollowers] = useState(followersCount);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setCurrentFollowers((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setCurrentFollowers((prev) => prev + 1);
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

      {/* Creator Profile Hero Content (Figma node 60:2155) */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 pt-6 pb-16 sm:pb-20 space-y-8">
        
        {/* Creator Identity: Avatar + Name + Tag + Title (Figma node 60:2172) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-4 border-white/30 bg-white/10 shadow-2xl shrink-0">
            <Image
              src={avatar}
              alt={name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[40px] font-semibold text-white tracking-tight">
                {name}
              </h1>
              <span className="rounded-full bg-[#D4FB20] px-3.5 py-1 text-xs font-semibold text-[#040819] shadow-sm uppercase tracking-wide">
                Creator
              </span>
            </div>

            <p className="text-base sm:text-lg text-white/90 font-normal">
              {role}
            </p>
          </div>
        </div>

        {/* Bio Narrative (Figma node 60:2185) */}
        <p className="text-base sm:text-lg text-[#E5E6E8] font-normal leading-relaxed max-w-4xl">
          {bio}
        </p>

        {/* Statistics & Follow Button (Figma node 60:2186) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/15">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Products Count Pill (Figma node 60:2188) */}
            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-md">
              <span className="font-heading text-base font-semibold text-[#003BE2]">
                {productsCount}
              </span>
              <span className="text-sm font-medium text-[#242528]">
                Products
              </span>
            </div>

            {/* Followers Count Pill (Figma node 60:2191) */}
            <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-md">
              <span className="font-heading text-base font-semibold text-[#003BE2]">
                {currentFollowers}
              </span>
              <span className="text-sm font-medium text-[#242528]">
                Followers
              </span>
            </div>
          </div>

          {/* Follow CTA Button (Figma node 60:2194) */}
          <button
            type="button"
            onClick={handleFollowToggle}
            className={cn(
              "h-12 px-8 rounded-full font-medium text-base shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer",
              isFollowing
                ? "bg-white text-[#003BE2] hover:bg-slate-100"
                : "bg-[#D4FB20] text-[#040819] hover:bg-[#c4eb10]"
            )}
          >
            {isFollowing ? (
              <>
                <UserCheck className="h-4 w-4" />
                <span>Following</span>
              </>
            ) : (
              <>
                <UserPlus className="h-4 w-4" />
                <span>Follow</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
