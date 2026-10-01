import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/avatar-sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "testimonial-2",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/avatar-james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "testimonial-3",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/avatar-alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function Testimonials() {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-24 border-b border-slate-200/60">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header (Figma node 34:1177) */}
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#242528] leading-[1.15]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-base sm:text-lg text-[#82868E] font-normal leading-relaxed">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonial Cards (Figma node 34:1182) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="group flex flex-col justify-between rounded-3xl bg-white p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 space-y-6"
            >
              {/* Rating Stars & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFA800] text-[#FFA800]" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-slate-300 group-hover:text-[#003BE2] transition-colors" />
              </div>

              {/* Quote Body */}
              <p className="text-sm sm:text-base text-[#242528] font-normal leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* User Identity */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-slate-100 ring-2 ring-[#D4FB20]/50 shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-[#242528] leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-xs text-[#82868E] font-normal mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
