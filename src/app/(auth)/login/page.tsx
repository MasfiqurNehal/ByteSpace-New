import type { Metadata } from "next";
import { Logo } from "@/components/shared/logo";
import { LoginForm } from "@/features/auth/login-form";
import { AuthVisual } from "@/features/auth/auth-visual";

export const metadata: Metadata = {
  title: "Sign In - ByteSpace",
  description: "Sign in to your ByteSpace account to continue learning and creating.",
};

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#003BE2] text-white flex flex-col justify-between">
      {/* Background Geometric Grid Overlay */}
      <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

      {/* Radial Glow Lighting */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full bg-[#D4FB20]/15 blur-[140px] pointer-events-none" />

      {/* Top Header Logo (Figma node 49:247) */}
      <div className="relative z-20 mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12 py-8">
        <Logo />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12 py-8 sm:py-12 flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Visual Column */}
          <div className="hidden lg:flex lg:col-span-6 justify-center">
            <AuthVisual />
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <LoginForm />
          </div>

        </div>
      </div>

      {/* Minimal Footer */}
      <div className="relative z-20 mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12 py-6 text-center text-xs text-white/60">
        © 2023 ByteSpace. All rights reserved.
      </div>
    </main>
  );
}
