"use client";

import { useState } from "react";
import { ChevronDown, PlayCircle, CheckCircle2, Lock, FileText, Video } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonItem {
  id: string;
  title: string;
  duration: string;
  isFree?: boolean;
  isCompleted?: boolean;
}

interface ModuleItem {
  id: number;
  title: string;
  description: string;
  lessonsCount: number;
  totalDuration: string;
  lessons: LessonItem[];
}

const MODULES_DATA: ModuleItem[] = [
  {
    id: 1,
    title: "Module 1: Foundational Concepts in Digital Asset Creation",
    description:
      "Explore 'Introduction to Digital Assets' and 'Types of Digital Assets.' Build a solid base for your creative journey.",
    lessonsCount: 4,
    totalDuration: "48 mins",
    lessons: [
      { id: "1.1", title: "Introduction to Digital Assets & Formats", duration: "12 mins", isFree: true, isCompleted: true },
      { id: "1.2", title: "Types of Digital Assets in Modern Workflows", duration: "14 mins", isFree: true, isCompleted: true },
      { id: "1.3", title: "Setting Up Your Workspace & Tools", duration: "10 mins", isFree: false, isCompleted: true },
      { id: "1.4", title: "Module 1 Quiz & Practical Exercise", duration: "12 mins", isFree: false, isCompleted: false },
    ],
  },
  {
    id: 2,
    title: "Module 2: Design Principles for Impactful Creations",
    description:
      "Delve into 'Visual Communication Strategies' and 'Color Theory and Typography.' Elevate your designs with impactful principles.",
    lessonsCount: 4,
    totalDuration: "1 hour 15 mins",
    lessons: [
      { id: "2.1", title: "Visual Communication Strategies & Hierarchy", duration: "21 mins", isFree: true, isCompleted: false },
      { id: "2.2", title: "Color Theory, Contrast, and Accessibility", duration: "18 mins", isFree: false, isCompleted: false },
      { id: "2.3", title: "Typography That Converts", duration: "16 mins", isFree: false, isCompleted: false },
      { id: "2.4", title: "Hands-on Exercise: Layout Construction", duration: "20 mins", isFree: false, isCompleted: false },
    ],
  },
  {
    id: 3,
    title: "Module 3: Advanced Techniques in Digital Creation",
    description:
      "Master 'Mastering Digital Creation Tools' and 'Animation and Motion Graphics.' Unleash your creativity with advanced techniques.",
    lessonsCount: 4,
    totalDuration: "1 hour 30 mins",
    lessons: [
      { id: "3.1", title: "Mastering Vector Tools & Complex Shapes", duration: "24 mins", isFree: false, isCompleted: false },
      { id: "3.2", title: "Animation & Motion Graphics Fundamentals", duration: "28 mins", isFree: false, isCompleted: false },
      { id: "3.3", title: "Component Libraries & Design Systems", duration: "22 mins", isFree: false, isCompleted: false },
      { id: "3.4", title: "Live Demo: Building High-End Assets", duration: "16 mins", isFree: false, isCompleted: false },
    ],
  },
  {
    id: 4,
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    lessonsCount: 3,
    totalDuration: "55 mins",
    lessons: [
      { id: "4.1", title: "Design Thinking in Digital Creation", duration: "19 mins", isFree: false, isCompleted: false },
      { id: "4.2", title: "User Experience (UX) Essentials & Personas", duration: "21 mins", isFree: false, isCompleted: false },
      { id: "4.3", title: "Usability Testing & Feedback Loops", duration: "15 mins", isFree: false, isCompleted: false },
    ],
  },
  {
    id: 5,
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    lessonsCount: 3,
    totalDuration: "1 hour 05 mins",
    lessons: [
      { id: "5.1", title: "Creating Interactive Presentations", duration: "25 mins", isFree: false, isCompleted: false },
      { id: "5.2", title: "Integrating Multimedia & Sound Elements", duration: "22 mins", isFree: false, isCompleted: false },
      { id: "5.3", title: "Gamification & Micro-Interactions", duration: "18 mins", isFree: false, isCompleted: false },
    ],
  },
  {
    id: 6,
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    lessonsCount: 3,
    totalDuration: "50 mins",
    lessons: [
      { id: "6.1", title: "Effective Presentation Techniques for Clients", duration: "18 mins", isFree: false, isCompleted: false },
      { id: "6.2", title: "Peer Critique, Reviews & Iteration", duration: "17 mins", isFree: false, isCompleted: false },
      { id: "6.3", title: "Case Study: Portfolio Presentation", duration: "15 mins", isFree: false, isCompleted: false },
    ],
  },
  {
    id: 7,
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    lessonsCount: 3,
    totalDuration: "45 mins",
    lessons: [
      { id: "7.1", title: "Adapting Digital Creations for Mobile Platforms", duration: "16 mins", isFree: false, isCompleted: false },
      { id: "7.2", title: "Optimizing for Social Media Algorithms", duration: "15 mins", isFree: false, isCompleted: false },
      { id: "7.3", title: "Export Presets & High-Performance Delivery", duration: "14 mins", isFree: false, isCompleted: false },
    ],
  },
];

export function ModulesAccordion() {
  const [openModules, setOpenModules] = useState<number[]>([1, 2]);

  const toggleModule = (id: number) => {
    setOpenModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4 w-full">
      {MODULES_DATA.map((module) => {
        const isOpen = openModules.includes(module.id);
        return (
          <div
            key={module.id}
            className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden transition-all shadow-sm"
          >
            {/* Module Accordion Header (Figma node 60:641) */}
            <button
              type="button"
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-start sm:items-center justify-between p-5 text-left gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#003BE2]/10 text-[#003BE2] shrink-0 mt-0.5 sm:mt-0">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-[#242528]">
                    {module.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B4C53] mt-1 font-normal leading-relaxed max-w-2xl">
                    {module.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs text-[#82868E] font-medium hidden sm:inline">
                  {module.lessonsCount} lessons • {module.totalDuration}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-[#82868E] transition-transform duration-300",
                    isOpen && "rotate-180 text-[#003BE2]"
                  )}
                />
              </div>
            </button>

            {/* Expandable Lesson List */}
            {isOpen && (
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-[#FBFBFC]/50 space-y-2.5 animate-in fade-in duration-200">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-100 hover:border-[#003BE2]/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {lesson.isCompleted ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      ) : lesson.isFree ? (
                        <PlayCircle className="h-4 w-4 text-[#003BE2] shrink-0" />
                      ) : (
                        <Lock className="h-4 w-4 text-slate-400 shrink-0" />
                      )}
                      <span className="font-medium text-sm text-[#242528]">
                        {lesson.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {lesson.isFree && (
                        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-[#003BE2]">
                          Preview
                        </span>
                      )}
                      <span className="text-xs text-[#82868E] font-medium">
                        {lesson.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
