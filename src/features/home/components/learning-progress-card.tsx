import { cn } from "@/lib/utils";

interface LearningProgressCardProps {
  className?: string;
  progress?: number;
}

export function LearningProgressCard({
  className,
  progress = 55,
}: LearningProgressCardProps) {
  return (
    <div
      className={cn(
        "bg-white text-[#242528] rounded-2xl p-5 shadow-2xl border border-black/5 select-none transition-transform hover:-translate-y-1 duration-300",
        className
      )}
    >
      <p className="text-sm font-medium text-[#242528]/80 mb-1">
        Learning Progress
      </p>
      <div className="flex items-baseline gap-1 my-1">
        <span className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-[#242528]">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-[#F6F6F6] h-2.5 rounded-full overflow-hidden mt-3">
        <div
          className="bg-[#D4FB20] h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
