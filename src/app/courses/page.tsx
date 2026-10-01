import { Suspense } from "react";
import type { Metadata } from "next";
import { SearchContent } from "@/features/search/search-content";

export const metadata: Metadata = {
  title: "Explore Courses - ByteSpace",
  description: "Browse and search hundreds of high-quality courses across design, development, marketing, business, and more.",
};

export default function CoursesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#003BE2] border-t-transparent" />
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
