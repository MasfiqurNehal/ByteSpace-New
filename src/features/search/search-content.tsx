"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ALL_COURSES, type CourseItem } from "@/data/courses";
import { SearchHero } from "./search-hero";
import { CategoryTabs } from "./category-tabs";
import { SearchFilters } from "./search-filters";
import { CoursePagination } from "./course-pagination";
import { CourseCard } from "@/components/shared/course-card";
import { Footer } from "@/components/shared/footer";
import { BookOpen, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 6;

export function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL state synchronization
  const initialQuery = searchParams.get("q") || "";
  const initialCategory = searchParams.get("category") || "All Categories";
  const initialTab = searchParams.get("tab") || "Featured";
  const initialLevel = searchParams.get("level") || "All Levels";
  const initialSort = searchParams.get("sort") || "Most relevant";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState(initialLevel);
  const [selectedSort, setSelectedSort] = useState(initialSort);
  const [currentPage, setCurrentPage] = useState(1);

  // Sync state when URL params change
  useEffect(() => {
    if (searchParams.get("q") !== null) {
      setSearchQuery(searchParams.get("q") || "");
    }
    if (searchParams.get("category")) {
      setSelectedCategory(searchParams.get("category") || "All Categories");
    }
  }, [searchParams]);

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery.trim()) {
      params.set("q", searchQuery.trim());
    } else {
      params.delete("q");
    }
    router.push(`/courses?${params.toString()}`);
  };

  // Handle Tab Switch
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Handle Reset Filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveTab("Featured");
    setSelectedCategory("All Categories");
    setSelectedLevel("All Levels");
    setSelectedSort("Most relevant");
    setCurrentPage(1);
    router.push("/courses");
  };

  // Filter and Sort Courses
  const filteredCourses = useMemo(() => {
    let result = [...ALL_COURSES];

    // Search Query Filtering
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.creator.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }

    // Category Tab Filtering
    if (activeTab !== "Featured") {
      result = result.filter((c) =>
        c.category.toLowerCase().includes(activeTab.toLowerCase())
      );
    }

    // Secondary Category Dropdown Filtering
    if (selectedCategory !== "All Categories") {
      result = result.filter((c) =>
        c.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Level Filtering
    if (selectedLevel !== "All Levels") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    // Sorting
    if (selectedSort === "Highest rated") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (selectedSort === "Newest") {
      result.sort((a, b) => b.lessons - a.lessons);
    }

    return result;
  }, [searchQuery, activeTab, selectedCategory, selectedLevel, selectedSort]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      {/* Search Header Banner (Figma node 55:844) */}
      <SearchHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Main Catalog Body */}
      <main className="mx-auto max-w-[1200px] w-full px-6 sm:px-8 lg:px-12 py-10 space-y-8 flex-1">
        {/* Category Pills (Figma node 55:1819) */}
        <CategoryTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Filter and Sort Toolbar (Figma node 55:168) */}
        <SearchFilters
          selectedLevel={selectedLevel}
          onLevelChange={(lvl) => {
            setSelectedLevel(lvl);
            setCurrentPage(1);
          }}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1);
          }}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          onResetFilters={handleResetFilters}
          totalResults={filteredCourses.length}
        />

        {/* Course Grid (Figma node 55:1843) */}
        {paginatedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {paginatedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          /* Empty / No Results State */
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/50 p-12 sm:p-16 text-center space-y-4 my-8">
            <div className="h-16 w-16 rounded-2xl bg-[#003BE2]/10 text-[#003BE2] flex items-center justify-center mx-auto">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#242528]">
              No courses found
            </h3>
            <p className="text-sm text-[#82868E] max-w-md mx-auto">
              We couldn&apos;t find any courses matching your criteria. Try adjusting your search or filters.
            </p>
            <Button
              onClick={handleResetFilters}
              variant="outline"
              className="rounded-full gap-2 border-slate-300 mt-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset all filters</span>
            </Button>
          </div>
        )}

        {/* Pagination Bar (Figma node 55:834) */}
        <CoursePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>

      {/* Global Footer (Figma node 78:1408) */}
      <Footer />
    </div>
  );
}
