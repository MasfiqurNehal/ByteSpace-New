import * as React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative w-full bg-[#003BE2] py-20 sm:py-28 text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Radial Glows & 3D Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold text-[#D4FB20]">
          <Sparkles className="w-4 h-4" />
          <span>Join Over 10,000+ Creators Worldwide</span>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.2] text-white">
            Unlock Your Potential as a <br className="hidden sm:inline" />
            Creator with ByteSpace
          </h2>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-[#D4FB20] hover:bg-[#c2e817] text-[#141518] font-bold px-8 py-6 rounded-full text-base shadow-xl transition-transform active:scale-95"
          >
            <Link href="/register?role=creator" className="flex items-center gap-2">
              <span>Join as Creator</span>
              <ArrowRight className="w-4 h-4 text-[#141518]" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 rounded-full text-base font-semibold backdrop-blur-md"
          >
            <Link href="/courses">Browse Course Library</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
