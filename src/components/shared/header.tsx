"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserPlus, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Creators", href: "/creators" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 flex h-24 items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base transition-colors hover:text-white",
                  isActive
                    ? "font-medium text-white"
                    : "font-normal text-white/80"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Auth CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="text-base font-normal text-white/90 transition-colors hover:text-white"
          >
            Sign In
          </Link>
          <Button
            asChild
            className="h-11 rounded-full bg-white px-5 text-sm font-medium text-[#242528] shadow-md transition-all hover:bg-[#D4FB20] hover:text-[#242528]"
          >
            <Link href="/register" className="flex items-center gap-2">
              <span>Join Us</span>
              <UserPlus className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#002FB6]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "py-2 text-lg font-medium transition-colors hover:text-white",
                  pathname === link.href ? "text-[#D4FB20]" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Button
              asChild
              variant="outline"
              className="w-full justify-center border-white/20 bg-transparent text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              asChild
              className="w-full justify-center rounded-full bg-[#D4FB20] text-[#242528] font-medium hover:bg-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/register" className="flex items-center justify-center gap-2">
                <span>Join Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
