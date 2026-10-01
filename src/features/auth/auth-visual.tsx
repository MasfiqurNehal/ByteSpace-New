import Image from "next/image";
import { HappyStudentsCard } from "@/features/home/components/happy-students-card";

export function AuthVisual() {
  return (
    <div className="flex flex-col justify-between space-y-12 max-w-[500px]">
      {/* Pitch Header (Figma node 49:244) */}
      <div className="space-y-3">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          Sign in with ease
        </h2>
        <p className="text-base sm:text-lg text-[#E5E6E8] font-normal leading-relaxed">
          Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
        </p>
      </div>

      {/* Visual Showcase Stack (Figma node 15254:195) */}
      <div className="relative w-full aspect-[4/3.5] flex items-center justify-center">
        
        {/* Background 3D Ornaments */}
        <div className="absolute -inset-6 -z-0 pointer-events-none opacity-80">
          <Image
            src="/images/hero/3d-ornaments.png"
            alt="3D decorative shapes"
            fill
            className="object-contain"
          />
        </div>

        {/* Stacked Preview Cards */}
        <div className="relative z-10 w-[85%] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4FB20]">
              Featured Course
            </span>
            <span className="text-xs text-white/80 font-medium">17 Lessons</span>
          </div>

          <div className="relative w-full h-32 rounded-xl overflow-hidden bg-slate-800">
            <Image
              src="/images/courses/course-digital-asset.png"
              alt="Build Digital Asset"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white">
              Build Digital Asset
            </h4>
            <p className="text-xs text-white/70">by purepearl studio</p>
          </div>
        </div>

        {/* Floating Happy Students Widget Overlay */}
        <div className="absolute -bottom-6 -left-4 z-20 animate-float">
          <HappyStudentsCard
            className="w-[220px] shadow-2xl"
            rating={4.5}
            reviewsCount={240}
          />
        </div>

      </div>
    </div>
  );
}
