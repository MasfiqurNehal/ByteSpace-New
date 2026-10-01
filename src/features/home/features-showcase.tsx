import * as React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  TrendingUp,
  Award,
  DollarSign,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturesShowcase() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-24 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Block 1: Learner Path (Figma node 34:1157) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#003BE2] text-xs font-semibold uppercase tracking-wider border border-blue-200/60">
              <span>Learner Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#141518] leading-[1.2]">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics Badges */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#003BE2]">500+</div>
                <div className="text-xs text-slate-500 font-medium pt-1">Courses</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#141518]">100+</div>
                <div className="text-xs text-slate-500 font-medium pt-1">Instructors</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">98%</div>
                <div className="text-xs text-slate-500 font-medium pt-1">Satisfaction</div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                asChild
                className="bg-[#003BE2] hover:bg-blue-700 text-white font-semibold rounded-full px-7 py-6 text-sm shadow-md"
              >
                <Link href="/courses" className="flex items-center gap-2">
                  <span>Start Learning Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Visual (Figma node 34:1155) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="w-full max-w-[480px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-6 sm:p-8 text-white relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                      <BookOpen className="w-5 h-5 text-[#D4FB20]" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Full-Stack Web Mastery</div>
                      <div className="text-xs text-white/70">Module 4: Next.js & React 19</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#D4FB20] text-[#141518]">
                    In Progress
                  </span>
                </div>

                {/* Progress Card */}
                <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span>Course Progress</span>
                    <span className="text-[#D4FB20]">78% Completed</span>
                  </div>
                  <div className="w-full bg-black/30 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#D4FB20] h-full rounded-full w-[78%]" />
                  </div>
                  <div className="text-[11px] text-white/80 pt-1">
                    14 of 18 lessons finished • Next: Server Actions & Auth
                  </div>
                </div>

                {/* Certificate Badge */}
                <div className="bg-white/10 rounded-2xl p-4 border border-white/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-white">Verified Industry Certificate</div>
                    <div className="text-white/70">Shareable directly on LinkedIn and portfolio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Block 2: Creator Tools (Figma node 34:1158) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">
          
          {/* Left Visual: Creator Analytics Card (Figma node 34:1156) */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative flex justify-center">
            <div className="w-full max-w-[480px] bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Monthly Earnings</div>
                    <div className="text-2xl font-black text-[#141518]">$1,200.38</div>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +24.5%
                </span>
              </div>

              {/* Creator Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#003BE2]" />
                    Total Students
                  </div>
                  <div className="text-xl font-bold text-[#141518]">2,840</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                    Published Courses
                  </div>
                  <div className="text-xl font-bold text-[#141518]">4 Live</div>
                </div>
              </div>

              {/* Quick Course Builder Preview */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800">Advanced AI Prompting</div>
                  <div className="text-[11px] text-slate-500">Draft saved 2 hours ago</div>
                </div>
                <span className="text-xs font-semibold text-[#003BE2] hover:underline cursor-pointer">
                  Open Editor →
                </span>
              </div>

            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider border border-purple-200/60">
              <span>Creator Platform</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#141518] leading-[1.2]">
              Create & Manage Courses Easily.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses. Turn your expertise into recurring revenue with zero setup hassle.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Drag-and-drop Course Editor & Lesson Builder</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Instant Global Payouts & Automated Tax Invoicing</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Built-in Student Discussion Forums & Feedback Tools</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Comprehensive Sales Analytics & Cohort Retention</span>
              </li>
            </ul>

            <div className="pt-2">
              <Button
                asChild
                className="bg-[#141518] hover:bg-slate-800 text-white font-semibold rounded-full px-7 py-6 text-sm shadow-md"
              >
                <Link href="/creators" className="flex items-center gap-2">
                  <span>Explore Creator Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
