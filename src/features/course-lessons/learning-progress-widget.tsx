import { Award, CheckCircle } from "lucide-react";

interface LearningProgressWidgetProps {
  progressPercentage?: number;
  completedLessons?: number;
  totalLessons?: number;
}

export function LearningProgressWidget({
  progressPercentage = 55,
  completedLessons = 14,
  totalLessons = 24,
}: LearningProgressWidgetProps) {
  return (
    <div className="space-y-6">
      {/* Lesson Content Description (Figma node 60:664) */}
      <div className="space-y-3">
        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528] tracking-tight">
          Lesson Content
        </h2>
        <p className="text-base sm:text-lg text-[#4B4C53] font-normal leading-relaxed">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* Lesson Progress Tracking (Figma node 60:666 & 60:668) */}
      <div className="space-y-4">
        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528] tracking-tight">
          Lesson Progress Tracking
        </h2>
        <p className="text-base sm:text-lg text-[#4B4C53] font-normal leading-relaxed">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>

        {/* Progress Card (Figma node 60:668) */}
        <div className="rounded-2xl border border-slate-200 bg-[#F8F9FA] p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#4B4C53]">
              Learning Progress
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-[#003BE2] bg-blue-50 px-2.5 py-1 rounded-full">
              <Award className="h-3.5 w-3.5" />
              In Progress
            </span>
          </div>

          <div className="flex items-baseline justify-between">
            <span className="font-heading text-4xl sm:text-5xl font-semibold text-[#242528]">
              {progressPercentage}%
            </span>
            <span className="text-sm font-medium text-[#82868E]">
              {completedLessons} of {totalLessons} modules completed
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-3 w-full rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#003BE2] transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
