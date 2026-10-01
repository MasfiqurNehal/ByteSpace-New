"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

const FOOTER_NAV = [
  {
    title: "Browse",
    links: [
      { name: "Courses", href: "/courses" },
      { name: "Categories", href: "/courses" },
      { name: "Learning Paths", href: "/courses" },
      { name: "Certifications", href: "/courses" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Creators", href: "/creators" },
      { name: "Discussion Forums", href: "#" },
      { name: "Events", href: "#" },
      { name: "Student Stories", href: "#" },
    ],
  },
  {
    title: "Platform",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200 text-[#242528]">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 pt-16 pb-12 space-y-16">
        
        {/* Top Section: Newsletter + Navigation Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Newsletter Column (Figma node 34:1259) */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="dark" />
            
            <p className="text-sm sm:text-base text-[#82868E] font-normal leading-relaxed max-w-[400px]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 max-w-[440px]">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="h-11 flex-1 rounded-xl bg-[#F5F5F6] px-4 text-sm text-[#242528] placeholder-[#82868E] border border-transparent focus:border-[#003BE2] focus:bg-white focus:outline-none transition-all"
                />
                <Button
                  type="submit"
                  className="h-11 rounded-xl bg-[#003BE2] hover:bg-[#002FB6] text-white px-5 text-sm font-medium shadow-sm shrink-0"
                >
                  {subscribed ? (
                    <span className="flex items-center gap-1.5 text-xs text-[#D4FB20]">
                      <Check className="h-4 w-4" /> Subscribed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      Subscribe <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>

              <p className="text-xs text-[#82868E] font-normal leading-normal">
                By subscribing, you agree to our{" "}
                <Link href="#" className="underline hover:text-[#003BE2]">
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Navigation Links Columns (Figma node 34:1272) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_NAV.map((col) => (
              <div key={col.title} className="space-y-4">
                <h4 className="font-heading text-base font-semibold text-[#242528] tracking-tight">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-sm text-[#82868E]">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-[#003BE2] hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal (Figma node 34:1296) */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82868E]">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-[#003BE2] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#003BE2] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#003BE2] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
