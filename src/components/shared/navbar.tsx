"use strict";
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
  ];

  return (
    <header className="w-full bg-[#003BE2] border-b border-white/10 text-white relative z-50">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md group-hover:scale-105 transition-transform">
            <svg
              className="w-6 h-6 text-[#D4FB20]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white font-sans">
            Byte<span className="text-[#D4FB20]">Space</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 bg-white/10 px-6 py-2.5 rounded-full border border-white/15 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive
                    ? "text-[#D4FB20] font-semibold"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-white/90 hover:text-white px-3 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Button
            asChild
            className="bg-[#D4FB20] hover:bg-[#c2e817] text-[#141518] font-semibold px-5 rounded-full text-sm shadow-md transition-transform active:scale-95"
          >
            <Link href="/register" className="flex items-center gap-2">
              <span>Join Us</span>
              <ShoppingBag className="w-4 h-4 text-[#141518]" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#003BE2] border-b border-white/10 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base py-2 transition-colors ${
                    isActive
                      ? "text-[#D4FB20] font-bold"
                      : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-sm font-medium py-2 text-white/90"
            >
              Sign In
            </Link>
            <Button
              asChild
              className="w-full bg-[#D4FB20] text-[#141518] font-semibold rounded-full"
            >
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                Join Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
