import * as React from "react";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: "sarah",
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatarInitials: "SM",
      avatarColor: "bg-indigo-600",
      quote:
        "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
      id: "james",
      name: "James L.",
      role: "Lifelong Learner",
      avatarInitials: "JL",
      avatarColor: "bg-purple-600",
      quote:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      id: "alex",
      name: "Alex B.",
      role: "Inspired Creator",
      avatarInitials: "AB",
      avatarColor: "bg-teal-600",
      quote:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-24 border-b border-slate-200/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header (Figma node 34:1177) */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#141518] leading-[1.2]">
            Discover What Our <br className="hidden sm:inline" />
            Community Is Saying
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonials Grid (Figma node 34:1182) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              {/* Rating Stars & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-300" />
              </div>

              {/* Quote Body */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* User Identity */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className={`w-12 h-12 rounded-full ${t.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                  {t.avatarInitials}
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#141518]">{t.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
