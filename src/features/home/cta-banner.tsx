import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003BE2] py-20 sm:py-28 text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 hero-grid-pattern opacity-30 pointer-events-none" />

      {/* Decorative 3D Ornaments Background Asset */}
      <div className="absolute inset-0 -z-0 pointer-events-none select-none opacity-40">
        <Image
          src="/images/home/cta-ornaments.png"
          alt="3D decorative ornaments"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Glowing Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#D4FB20]/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-[#D4FB20] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Join 50,000+ Lifelong Learners</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12]">
            Start Your Learning Journey Today
          </h2>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#E5E6E8] font-normal leading-relaxed">
            Join thousands of students and instructors on ByteSpace. Unlock access to hundreds of courses and launch your career to the next level.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              className="h-12 w-full sm:w-auto rounded-full bg-[#D4FB20] px-8 text-base font-medium text-[#242528] shadow-xl hover:bg-white hover:text-[#242528] transition-all"
            >
              <Link href="/register" className="flex items-center justify-center gap-2">
                <span>Get Started for Free</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-12 w-full sm:w-auto rounded-full border-white/30 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href="/courses">Browse Catalog</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
