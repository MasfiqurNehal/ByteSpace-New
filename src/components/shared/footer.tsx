"use strict";
"use client";

import * as React from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const browseLinks = [
    { label: "All Courses", href: "/courses" },
    { label: "Design", href: "/courses?category=Design" },
    { label: "Development", href: "/courses?category=Development" },
    { label: "IT & Software", href: "/courses?category=IT%20%26%20Software" },
    { label: "Business", href: "/courses?category=Business" },
    { label: "Marketing", href: "/courses?category=Marketing" },
  ];

  const platformLinks = [
    { label: "About Us", href: "#" },
    { label: "Creators Hub", href: "/creators" },
    { label: "Careers", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-700 pt-16 pb-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Nav Grid (Figma node 34:1258) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Newsletter Column (Figma node 34:1259) */}
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#003BE2] flex items-center justify-center text-white shadow-md">
                <svg
                  className="w-5 h-5 text-[#D4FB20]"
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
              <span className="text-2xl font-bold tracking-tight text-[#141518]">
                Byte<span className="text-[#003BE2]">Space</span>
              </span>
            </Link>

            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Subscription Form (Figma node 34:1265) */}
            <form onSubmit={handleSubscribe} className="space-y-2 max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:bg-white transition-all"
                />
                <Button
                  type="submit"
                  className="bg-[#003BE2] hover:bg-blue-700 text-white font-semibold px-5 rounded-xl text-sm shadow-sm"
                >
                  <Send className="w-4 h-4 mr-1.5" />
                  Subscribe
                </Button>
              </div>

              {subscribed && (
                <p className="text-xs text-emerald-600 font-medium">
                  ✓ Thank you for subscribing! Check your inbox for updates.
                </p>
              )}

              <p className="text-[11px] text-slate-400 leading-normal">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Navigation Links Columns (Figma node 34:1272) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-8 lg:pl-12">
            
            {/* Column 1: Browse */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-[#141518] uppercase tracking-wider">
                Browse
              </h3>
              <ul className="space-y-2.5">
                {browseLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-[#003BE2] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Platform */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-[#141518] uppercase tracking-wider">
                Platform
              </h3>
              <ul className="space-y-2.5">
                {platformLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 hover:text-[#003BE2] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar (Figma node 34:1296) */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>@ 2023 ByteSpace. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
