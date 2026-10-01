import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface HappyStudentsCardProps {
  className?: string;
  rating?: number;
  reviewsCount?: number;
}

export function HappyStudentsCard({
  className,
  rating = 4.5,
  reviewsCount = 240,
}: HappyStudentsCardProps) {
  const avatarGradients = [
    "from-purple-500 to-indigo-500",
    "from-blue-500 to-cyan-500",
    "from-emerald-500 to-teal-500",
    "from-amber-500 to-orange-500",
    "from-pink-500 to-rose-500",
  ];

  return (
    <div
      className={cn(
        "bg-white text-[#242528] rounded-2xl p-4 sm:p-5 shadow-2xl border border-black/5 select-none transition-transform hover:-translate-y-1 duration-300",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className="text-base font-medium text-[#242528]">
          Happy Students
        </span>
        <div className="flex items-center gap-1.5 text-xs text-[#82868E]">
          <Star className="h-3.5 w-3.5 fill-[#FFA800] text-[#FFA800]" />
          <span className="font-medium text-[#242528]">{rating}</span>
          <span>({reviewsCount})</span>
        </div>
      </div>

      <div className="flex items-center -space-x-2 overflow-hidden py-1">
        {avatarGradients.map((gradient, i) => (
          <div
            key={i}
            className={cn(
              "inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr shadow-sm",
              gradient
            )}
          />
        ))}
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#242528] text-[11px] font-bold text-[#D4FB20] ring-2 ring-white shadow-sm">
          2K+
        </div>
      </div>
    </div>
  );
}
