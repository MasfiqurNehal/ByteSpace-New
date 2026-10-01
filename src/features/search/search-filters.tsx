"use client";

import { useState } from "react";
import { SlidersHorizontal, BarChart2, Layers, ArrowUpDown, Check, X } from "lucide-react";
import { LEVEL_OPTIONS, SORT_OPTIONS, CATEGORIES_LIST } from "@/data/courses";
import { cn } from "@/lib/utils";

interface SearchFiltersProps {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedSort: string;
  onSortChange: (sort: string) => void;
  onResetFilters: () => void;
  totalResults: number;
}

export function SearchFilters({
  selectedLevel,
  onLevelChange,
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
  onResetFilters,
  totalResults,
}: SearchFiltersProps) {
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  const hasActiveFilters = selectedLevel !== "All Levels" || selectedCategory !== "All Categories";

  return (
    <div className="relative w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-slate-200">
      {/* Left Filter Group (Figma node 55:169) */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Reset / All Filters Toggle Button */}
        <button
          type="button"
          onClick={onResetFilters}
          className={cn(
            "h-11 px-4 rounded-xl border flex items-center gap-2 text-sm font-medium transition-all cursor-pointer",
            hasActiveFilters
              ? "bg-[#003BE2]/10 border-[#003BE2] text-[#003BE2]"
              : "bg-white border-slate-200 text-[#4B4C53] hover:border-slate-300"
          )}
        >
          <SlidersHorizontal className="h-4 w-4" />
          <span>Filter</span>
          {hasActiveFilters && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#003BE2] text-[11px] text-white">
              !
            </span>
          )}
        </button>

        {/* Level Filter Dropdown (Figma node 55:173) */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setLevelDropdownOpen(!levelDropdownOpen);
              setCategoryDropdownOpen(false);
              setSortDropdownOpen(false);
            }}
            className={cn(
              "h-11 px-4 rounded-xl border flex items-center gap-2 text-sm font-medium transition-all cursor-pointer",
              selectedLevel !== "All Levels"
                ? "bg-[#003BE2]/10 border-[#003BE2] text-[#003BE2]"
                : "bg-white border-slate-200 text-[#4B4C53] hover:border-slate-300"
            )}
          >
            <BarChart2 className="h-4 w-4" />
            <span>{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
          </button>

          {levelDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 z-50 w-48 rounded-2xl bg-white p-2 shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
              {LEVEL_OPTIONS.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    onLevelChange(lvl);
                    setLevelDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 text-sm rounded-xl transition-colors text-left",
                    selectedLevel === lvl
                      ? "bg-[#F5F5F6] text-[#003BE2] font-semibold"
                      : "text-[#242528] hover:bg-slate-50"
                  )}
                >
                  <span>{lvl}</span>
                  {selectedLevel === lvl && <Check className="h-4 w-4 text-[#003BE2]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Filter Dropdown (Figma node 55:176) */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setCategoryDropdownOpen(!categoryDropdownOpen);
              setLevelDropdownOpen(false);
              setSortDropdownOpen(false);
            }}
            className={cn(
              "h-11 px-4 rounded-xl border flex items-center gap-2 text-sm font-medium transition-all cursor-pointer",
              selectedCategory !== "All Categories"
                ? "bg-[#003BE2]/10 border-[#003BE2] text-[#003BE2]"
                : "bg-white border-slate-200 text-[#4B4C53] hover:border-slate-300"
            )}
          >
            <Layers className="h-4 w-4" />
            <span>{selectedCategory === "All Categories" ? "Category" : selectedCategory}</span>
          </button>

          {categoryDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 z-50 w-56 rounded-2xl bg-white p-2 shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150 max-h-60 overflow-y-auto">
              <button
                type="button"
                onClick={() => {
                  onCategoryChange("All Categories");
                  setCategoryDropdownOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-sm rounded-xl transition-colors text-left",
                  selectedCategory === "All Categories"
                    ? "bg-[#F5F5F6] text-[#003BE2] font-semibold"
                    : "text-[#242528] hover:bg-slate-50"
                )}
              >
                <span>All Categories</span>
                {selectedCategory === "All Categories" && <Check className="h-4 w-4 text-[#003BE2]" />}
              </button>
              {CATEGORIES_LIST.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    onCategoryChange(cat.name);
                    setCategoryDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 text-sm rounded-xl transition-colors text-left",
                    selectedCategory === cat.name
                      ? "bg-[#F5F5F6] text-[#003BE2] font-semibold"
                      : "text-[#242528] hover:bg-slate-50"
                  )}
                >
                  <span>{cat.name}</span>
                  {selectedCategory === cat.name && <Check className="h-4 w-4 text-[#003BE2]" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Clear filters pill */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="flex items-center gap-1 text-xs text-[#82868E] hover:text-[#242528] ml-1 transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            <span>Clear</span>
          </button>
        )}
      </div>

      {/* Right Sort Dropdown (Figma node 55:179) */}
      <div className="relative w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3">
        <span className="text-xs text-[#82868E] hidden lg:inline">
          {totalResults} course{totalResults === 1 ? "" : "s"} found
        </span>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setSortDropdownOpen(!sortDropdownOpen);
              setLevelDropdownOpen(false);
              setCategoryDropdownOpen(false);
            }}
            className="h-11 px-4 rounded-xl border border-slate-200 bg-white flex items-center gap-2 text-sm font-medium text-[#4B4C53] hover:border-slate-300 transition-all cursor-pointer shadow-sm"
          >
            <ArrowUpDown className="h-4 w-4 text-[#242528]" />
            <span>{selectedSort}</span>
          </button>

          {sortDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 z-50 w-52 rounded-2xl bg-white p-2 shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
              {SORT_OPTIONS.map((sort) => (
                <button
                  key={sort}
                  type="button"
                  onClick={() => {
                    onSortChange(sort);
                    setSortDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 text-sm rounded-xl transition-colors text-left",
                    selectedSort === sort
                      ? "bg-[#F5F5F6] text-[#003BE2] font-semibold"
                      : "text-[#242528] hover:bg-slate-50"
                  )}
                >
                  <span>{sort}</span>
                  {selectedSort === sort && <Check className="h-4 w-4 text-[#003BE2]" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
