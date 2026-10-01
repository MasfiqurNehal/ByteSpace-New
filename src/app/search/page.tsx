import { Suspense } from "react";
import type { Metadata } from "next";
import { SearchContent } from "@/features/search/search-content";

export const metadata: Metadata = {
  title: "Search Courses - ByteSpace",
  description: "Find the best courses on ByteSpace. Search across all topics and levels.",
};

export default function SearchPage() {
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
