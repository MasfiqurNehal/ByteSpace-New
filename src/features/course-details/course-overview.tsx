import Image from "next/image";
import { CheckCircle2, PlayCircle } from "lucide-react";
import type { CourseItem } from "@/data/courses";

interface CourseOverviewProps {
  course: CourseItem;
}

const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const SNEAK_PEEK_ITEMS = [
  {
    title: "01. Introduction to Digital Assets",
    duration: "12 mins",
    image: "/images/courses/course-digital-asset.png",
  },
  {
    title: "02. Design Principles for Impacts",
    duration: "21 mins",
    image: "/images/courses/course-figma.png",
  },
  {
    title: "03. Advanced Techniques in Digital Creation",
    duration: "16 mins",
    image: "/images/courses/course-big-data.png",
  },
];

export function CourseOverview({ course }: CourseOverviewProps) {
  return (
    <div className="space-y-12">
      {/* Description Section (Figma node 55:4124) */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528] tracking-tight">
          Description
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-[#4B4C53] font-normal leading-relaxed">
          <p>
            Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &ldquo;{course.title}: A Comprehensive Guide.&rdquo; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
          </p>
          <p>
            In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
          </p>
          <p>
            As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
          </p>
        </div>
      </section>

      {/* Sneak Peek Section (Figma node 55:4127) */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528] tracking-tight">
          Sneak Peak
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SNEAK_PEEK_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                  <PlayCircle className="h-10 w-10 text-white drop-shadow-md group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-heading text-sm font-semibold text-[#242528] line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#003BE2] font-medium mt-1">
                  {item.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Points Section (Figma node 55:4134) */}
      <section className="space-y-4">
        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528] tracking-tight">
          Key Points
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {KEY_POINTS.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8F9FA] border border-slate-100"
            >
              <CheckCircle2 className="h-5 w-5 text-[#003BE2] shrink-0" />
              <span className="text-sm sm:text-base text-[#4B4C53] font-medium">
                {point}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
