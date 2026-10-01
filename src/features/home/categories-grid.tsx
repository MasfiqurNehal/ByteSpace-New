import * as React from "react";
import Link from "next/link";
import {
  Palette,
  Code,
  Cpu,
  Briefcase,
  Megaphone,
  Camera,
  ArrowUpRight,
} from "lucide-react";
import { PATHWAY_CATEGORIES } from "@/data/courses";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-8 h-8 text-[#003BE2]" />,
  Code: <Code className="w-8 h-8 text-[#003BE2]" />,
  Cpu: <Cpu className="w-8 h-8 text-[#003BE2]" />,
  Briefcase: <Briefcase className="w-8 h-8 text-[#003BE2]" />,
  Megaphone: <Megaphone className="w-8 h-8 text-[#003BE2]" />,
  Camera: <Camera className="w-8 h-8 text-[#003BE2]" />,
};

export function CategoriesGrid() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Figma node 34:684) */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#141518] leading-[1.2]">
            Explore Diverse Learning Paths <br className="hidden sm:inline" />
            at Bytespace
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Square Cards (Figma node 34:725) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {PATHWAY_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/courses?category=${encodeURIComponent(category.name)}`}
              className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center gap-4 hover:border-[#003BE2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[167px]"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center group-hover:bg-[#003BE2] group-hover:text-white transition-colors">
                <span className="group-hover:[&_svg]:text-white transition-colors">
                  {iconMap[category.icon]}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-base sm:text-lg text-[#141518] group-hover:text-[#003BE2] transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

