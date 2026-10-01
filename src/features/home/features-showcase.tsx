import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Award, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturesShowcase() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-24 border-b border-slate-200/60 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 space-y-24">

        {/* ============================================================ */}
        {/* SECTION A: For Learners (Figma node 34:1157)                  */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#242528] leading-[1.15]">
                Your Path to Professional Growth Starts Here!
              </h2>
              <p className="text-base sm:text-lg text-[#82868E] font-normal leading-relaxed">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center">
                <Users className="h-6 w-6 text-[#003BE2] mx-auto mb-2" />
                <p className="font-heading text-lg font-semibold text-[#242528]">50K+</p>
                <p className="text-xs text-[#82868E]">Active Learners</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center">
                <Clock className="h-6 w-6 text-[#003BE2] mx-auto mb-2" />
                <p className="font-heading text-lg font-semibold text-[#242528]">200+</p>
                <p className="text-xs text-[#82868E]">Top Courses</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center">
                <Award className="h-6 w-6 text-[#003BE2] mx-auto mb-2" />
                <p className="font-heading text-lg font-semibold text-[#242528]">98%</p>
                <p className="text-xs text-[#82868E]">Satisfaction</p>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild className="rounded-full bg-[#003BE2] hover:bg-[#002FB6] text-white px-7 h-11 text-sm font-medium shadow-md">
                <Link href="/courses" className="flex items-center gap-2">
                  <span>Start Learning Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3.8] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">
              <Image
                src="/images/home/learner-showcase.png"
                alt="Student studying with ByteSpace interactive learning pathway"
                fill
                className="object-cover object-center"
              />

              {/* Floating Progress Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-black/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#242528]">Course Completion</span>
                  <span className="font-heading text-sm font-semibold text-[#003BE2]">78%</span>
                </div>
                <div className="w-full bg-[#F6F6F6] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#D4FB20] h-full rounded-full w-[78%]" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* SECTION B: For Creators (Figma node 34:1158)                  */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          
          {/* Left Visual Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] aspect-[4/3.8] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">
              <Image
                src="/images/home/creator-showcase.png"
                alt="Instructor managing courses and creator revenue on ByteSpace"
                fill
                className="object-cover object-center"
              />

              {/* Floating Earnings Widget Overlay */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-black/5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4FB20] text-[#242528] font-bold text-sm">
                  $
                </div>
                <div>
                  <p className="text-[11px] text-[#82868E] font-medium">Monthly Revenue</p>
                  <p className="font-heading text-lg font-semibold text-[#242528]">$1,200.38</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#242528] leading-[1.15]">
                Create &amp; Manage Courses Easily.
              </h2>
              <p className="text-base sm:text-lg text-[#82868E] font-normal leading-relaxed">
                ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>
            </div>

            {/* 4 Feature Checklist Items */}
            <div className="space-y-3 pt-2">
              {[
                "Intuitive drag-and-drop course builder & curriculum editor",
                "Built-in global payments and instant creator payouts",
                "Engage with students via community discussions and Q&A",
                "Real-time analytics on revenue, retention, and student progress",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#003BE2] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#242528] font-medium leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button asChild className="rounded-full bg-[#D4FB20] hover:bg-white text-[#242528] px-7 h-11 text-sm font-medium shadow-md">
                <Link href="/register?role=creator" className="flex items-center gap-2">
                  <span>Become a Creator</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
