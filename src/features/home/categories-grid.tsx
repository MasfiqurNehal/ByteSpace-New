import Link from "next/link";
import {
  Palette,
  Code2,
  Cpu,
  Briefcase,
  Megaphone,
  Camera,
} from "lucide-react";
import { CATEGORIES_LIST } from "@/data/courses";

const CATEGORY_ICONS = {
  design: Palette,
  development: Code2,
  software: Cpu,
  business: Briefcase,
  marketing: Megaphone,
  photography: Camera,
};

export function CategoriesGrid() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 border-b border-slate-200/60">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header (Figma node 34:684) */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#242528] leading-[1.15]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-base sm:text-lg text-[#82868E] font-normal leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Matrix (Figma node 34:725) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES_LIST.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.iconName] || Palette;
            return (
              <Link
                key={cat.id}
                href={`/courses?category=${encodeURIComponent(cat.name)}`}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#F5F5F6] border border-transparent hover:border-[#003BE2]/20 hover:bg-white hover:shadow-xl transition-all duration-300 aspect-square text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:bg-[#D4FB20] group-hover:scale-110 transition-all duration-300 mb-4">
                  <Icon className="h-7 w-7 text-[#242528] group-hover:text-[#242528]" />
                </div>
                <span className="font-medium text-base sm:text-lg text-[#242528] group-hover:text-[#003BE2] transition-colors leading-tight">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
