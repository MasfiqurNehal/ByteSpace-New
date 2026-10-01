"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Client-side simulated registration feedback
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full max-w-[579px] bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-black/5 text-[#242528]">
      {/* Form Header (Figma node 47:365) */}
      <div className="space-y-2 mb-8 text-left">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-[#242528] leading-tight">
          Register
        </h1>
        <p className="text-sm sm:text-base text-[#82868E] font-normal">
          Enter your personal data to create your account
        </p>
      </div>

      {formSubmitted ? (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-3">
          <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h3 className="font-heading text-lg font-semibold text-emerald-900">
            Account created successfully!
          </h3>
          <p className="text-sm text-emerald-700">
            Welcome to ByteSpace, {fullName || "learner"}! You can now sign in to your account.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="rounded-full bg-[#003BE2] text-white hover:bg-[#002FB6]">
              <Link href="/login">Sign In Now</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name Input Field (Figma node 47:370) */}
          <div className="space-y-2">
            <label
              htmlFor="register-fullname"
              className="block text-sm font-medium text-[#242528]"
            >
              Full Name
            </label>
            <input
              id="register-fullname"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full h-12 px-4 rounded-xl bg-white border border-[#E5E7EB] text-sm sm:text-base text-[#242528] placeholder-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/15 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Email Input Field (Figma node 47:374) */}
          <div className="space-y-2">
            <label
              htmlFor="register-email"
              className="block text-sm font-medium text-[#242528]"
            >
              Email
            </label>
            <input
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full h-12 px-4 rounded-xl bg-white border border-[#E5E7EB] text-sm sm:text-base text-[#242528] placeholder-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/15 focus:outline-none transition-all shadow-sm"
            />
          </div>

          {/* Password Input Field (Figma node 47:378) */}
          <div className="space-y-2">
            <label
              htmlFor="register-password"
              className="block text-sm font-medium text-[#242528]"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full h-12 px-4 pr-12 rounded-xl bg-white border border-[#E5E7EB] text-sm sm:text-base text-[#242528] placeholder-[#82868E] focus:border-[#003BE2] focus:ring-2 focus:ring-[#003BE2]/15 focus:outline-none transition-all shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#82868E] hover:text-[#242528] p-1 cursor-pointer"
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

          {/* Terms & Conditions Agreement */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              id="agree-terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              required
              className="h-4 w-4 mt-0.5 rounded border-gray-300 text-[#003BE2] focus:ring-[#003BE2] cursor-pointer"
            />
            <label
              htmlFor="agree-terms"
              className="text-xs sm:text-sm font-normal text-[#82868E] cursor-pointer select-none leading-snug"
            >
              I agree to the{" "}
              <Link href="#" className="text-[#003BE2] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#003BE2] hover:underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          {/* Register / Submit Button (Figma node 47:381) */}
          <button
            type="submit"
            disabled={isLoading || !agreeTerms}
            className="w-full h-12 rounded-full bg-[#D4FB20] text-[#242528] font-medium text-base shadow-md hover:bg-[#c4eb10] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Creating account...</span>
              </>
            ) : (
              <span>Register</span>
            )}
          </button>
        </form>
      )}

      {/* Social Auth Divider */}
      <div className="relative my-8 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <span className="relative bg-white px-4 text-sm text-[#82868E] font-medium">
          or
        </span>
      </div>

      {/* Social Buttons (Figma node 47:386) */}
      <div className="flex items-center justify-center gap-4">
        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={() => alert("Google Sign-Up integration ready")}
          className="flex h-12 flex-1 max-w-[200px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow transition-all active:scale-95 cursor-pointer text-sm font-medium text-[#242528]"
          aria-label="Sign up with Google"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
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
          <span>Google</span>
        </button>

        {/* Apple OAuth Button */}
        <button
          type="button"
          onClick={() => alert("Apple Sign-Up integration ready")}
          className="flex h-12 flex-1 max-w-[200px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:shadow transition-all active:scale-95 cursor-pointer text-sm font-medium text-[#242528]"
          aria-label="Sign up with Apple"
        >
          <svg className="h-5 w-5 text-[#242528] fill-current" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.57.65-1.07 1.71-.94 2.73 1.01.08 2.04-.48 2.66-1.23z" />
          </svg>
          <span>Apple</span>
        </button>
      </div>

      {/* Bottom Switch Link (Figma node 47:383) */}
      <div className="mt-8 text-center text-sm sm:text-base text-[#82868E]">
        <span>Already have an account? </span>
        <Link
          href="/login"
          className="font-medium text-[#003BE2] hover:underline transition-colors"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
