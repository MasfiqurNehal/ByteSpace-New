import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003BE2] py-20 sm:py-24 text-white">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

      {/* Decorative 3D Ornaments Background Asset */}
      <div className="absolute inset-0 -z-0 pointer-events-none select-none opacity-35">
        <Image
          src="/images/home/cta-ornaments.png"
          alt="3D decorative ornaments"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Radial Lighting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#D4FB20]/15 blur-[130px] pointer-events-none" />

      {/* Content Container (Figma node 34:1170) */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 text-center">
        <div className="mx-auto max-w-4xl space-y-6">
          {/* Headline (Figma node 34:1171) */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#F5F5F6] leading-[1.15] max-w-3xl mx-auto">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          {/* Narrative Body (Figma node 34:1172) */}
          <p className="mx-auto max-w-3xl text-sm sm:text-base lg:text-lg text-[#F5F5F6]/90 font-normal leading-relaxed">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          {/* Action Button (Figma node 34:1173 & 34:1174) */}
          <div className="pt-4 flex justify-center">
            <Button
              asChild
              className="h-12 px-8 rounded-full bg-[#D4FB20] text-[#242528] font-medium text-base shadow-xl hover:bg-white transition-all active:scale-95"
            >
              <Link href="/register" className="flex items-center gap-2">
                <span>Join as Creator</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
