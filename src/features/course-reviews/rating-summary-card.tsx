import { Star } from "lucide-react";

interface RatingDistribution {
  stars: number;
  count: number;
  percentage: number;
}

const DISTRIBUTION_DATA: RatingDistribution[] = [
  { stars: 5, count: 720, percentage: 81 },
  { stars: 4, count: 120, percentage: 14 },
  { stars: 3, count: 21, percentage: 2.5 },
  { stars: 2, count: 12, percentage: 1.3 },
  { stars: 1, count: 16, percentage: 1.8 },
];

interface RatingSummaryCardProps {
  averageRating?: number;
  totalReviews?: number;
}

export function RatingSummaryCard({
  averageRating = 4.7,
  totalReviews = 889,
}: RatingSummaryCardProps) {
  return (
    <div className="space-y-6">
      {/* Header (Figma node 60:1292) */}
      <div className="space-y-3">
        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528] tracking-tight">
          What Learners Are Saying
        </h2>
        <p className="text-base sm:text-lg text-[#4B4C53] font-normal leading-relaxed">
          Discover what our learners have to say about their experience with &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* Ratings Breakdown Card (Figma node 60:1294) */}
      <div className="rounded-3xl border border-slate-200 bg-[#F8F9FA] p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
          
          {/* Left Score Box */}
          <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center space-y-2">
            <span className="text-sm font-medium text-[#82868E]">Overall Rating</span>
            <span className="font-heading text-5xl font-semibold text-[#242528]">
              {averageRating}
            </span>
            <div className="flex items-center gap-1 text-[#FFA800]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[#FFA800] text-[#FFA800]"
                />
              ))}
            </div>
            <span className="text-xs text-[#82868E] font-medium pt-1">
              Based on {totalReviews} global reviews
            </span>
          </div>

          {/* Right Distribution Bars */}
          <div className="md:col-span-8 space-y-2.5">
            {DISTRIBUTION_DATA.map((item) => (
              <div key={item.stars} className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1 w-12 shrink-0 font-medium text-[#242528]">
                  <span>{item.stars}</span>
                  <Star className="h-3.5 w-3.5 fill-[#FFA800] text-[#FFA800]" />
                </div>

                {/* Progress bar fill */}
                <div className="relative h-2.5 flex-1 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#003BE2] transition-all duration-500"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>

                <span className="w-10 text-right text-xs font-semibold text-[#82868E] shrink-0">
                  {item.count}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
