"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Client-side simulated auth feedback
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[579px] bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-black/5 text-[#242528]">
      {/* Header (Figma node 49:223) */}
      <div className="space-y-1 mb-8">
        <span className="text-base sm:text-lg font-medium text-[#003BE2]">
          Sign In
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#242528] leading-tight">
          Welcome Back
        </h1>
      </div>

      {formSubmitted ? (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
          <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            ✓
          </div>
          <h3 className="font-heading text-lg font-semibold text-emerald-900">
            Signed in successfully!
          </h3>
          <p className="text-sm text-emerald-700">
            Welcome back to ByteSpace. Redirecting to your dashboard...
          </p>
          <Button asChild className="rounded-full bg-[#003BE2] text-white mt-2">
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input Field (Figma node 49:231) */}
          <div className="space-y-2">
            <label
              htmlFor="login-email"
              className="block text-sm font-medium text-[#242528]"
            >
              Email
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full h-13 px-5 rounded-xl bg-white border border-[#E5E7EB] text-sm sm:text-base text-[#242528] placeholder-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/15 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Password Input Field (Figma node 49:235) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-[#242528]"
              >
                Password
              </label>
              <Link
                href="#"
                className="text-xs font-medium text-[#003BE2] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full h-13 px-5 pr-12 rounded-xl bg-white border border-[#E5E7EB] text-sm sm:text-base text-[#242528] placeholder-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/15 focus:outline-none transition-all shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#82868E] hover:text-[#242528] p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2.5">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-[#003BE2] focus:ring-[#003BE2] cursor-pointer"
            />
            <label
              htmlFor="remember-me"
              className="text-xs sm:text-sm font-normal text-[#82868E] cursor-pointer select-none"
            >
              Remember me on this device
            </label>
          </div>

          {/* Submit Button (Figma node 49:239) */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 rounded-full bg-[#D4FB20] text-[#242528] font-medium text-base shadow-md hover:bg-[#c4eb10] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      )}

      {/* Social Auth Divider (Figma node 50:349) */}
      <div className="relative my-8 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <span className="relative bg-white px-4 text-sm text-[#82868E] font-medium">
          or
        </span>
      </div>

      {/* Social Buttons (Figma node 50:353) */}
      <div className="flex items-center justify-center gap-4">
        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={() => alert("Google Sign-In integration ready")}
          className="flex h-14 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all active:scale-95 cursor-pointer"
          aria-label="Sign in with Google"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        </button>

        {/* GitHub / Apple Button */}
        <button
          type="button"
          onClick={() => alert("GitHub Sign-In integration ready")}
          className="flex h-14 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all active:scale-95 cursor-pointer"
          aria-label="Sign in with GitHub"
        >
          <svg className="h-6 w-6 text-[#242528] fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        </button>
      </div>

      {/* Bottom Switch Link (Figma node 49:241) */}
      <div className="mt-8 text-center text-sm sm:text-base text-[#82868E]">
        <span>New user? </span>
        <Link
          href="/register"
          className="font-medium text-[#003BE2] hover:underline transition-colors"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}
