import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      {/* 404 Hero Section (Figma node 63:409) */}
      <section className="relative w-full overflow-hidden bg-[#003BE2] text-white flex flex-col justify-between">
        {/* Background Geometric Grid Overlay */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

        {/* Decorative Radial Glows */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-[#D4FB20]/15 blur-[140px] pointer-events-none" />

        {/* Navigation Header */}
        <Header />

        {/* Floating 3D Ornaments / Figma Assets */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Top Left 3D Shape (Figma node 63:453) */}
          <div className="absolute -left-12 sm:-left-8 lg:left-4 top-16 sm:top-24 w-40 sm:w-60 lg:w-[320px] aspect-square">
            <Image
              src="/images/404/shape-top-left.png"
              alt="Floating 3D ornament"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Bottom Left 3D Shape (Figma node 63:447) */}
          <div className="absolute left-2 sm:left-12 lg:left-24 bottom-12 sm:bottom-20 w-24 sm:w-36 lg:w-[180px] aspect-square">
            <Image
              src="/images/404/shape-bottom-left.png"
              alt="Floating 3D ornament"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* Top Right 3D Shape (Figma node 63:449) */}
          <div className="absolute right-2 sm:right-12 lg:right-24 top-20 sm:top-28 w-28 sm:w-44 lg:w-[220px] aspect-square">
            <Image
              src="/images/404/shape-top-right.png"
              alt="Floating 3D ornament"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          {/* Bottom Right 3D Shape (Figma node 63:451) */}
          <div className="absolute -right-12 sm:-right-8 lg:right-6 bottom-8 sm:bottom-16 w-44 sm:w-64 lg:w-[340px] aspect-square">
            <Image
              src="/images/404/shape-bottom-right.png"
              alt="Floating 3D ornament"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Central 404 Hero Content (Figma node 63:638 & 63:643) */}
        <div className="relative z-10 mx-auto max-w-[935px] w-full px-6 sm:px-8 pt-4 pb-20 sm:pb-32 flex flex-col items-center text-center">
          {/* Giant 404 Text with Figma Lime-to-Transparent Linear Gradient (Figma node 63:643) */}
          <div className="font-heading font-black tracking-tighter leading-none select-none text-[120px] sm:text-[200px] md:text-[280px] lg:text-[360px] xl:text-[400px] text-transparent bg-clip-text bg-gradient-to-b from-[#D4FB20] via-[#D4FB20]/80 via-60% to-transparent -mb-16 sm:-mb-28 md:-mb-36 lg:-mb-48 opacity-95">
            404
          </div>

          {/* Headline Message (Figma node 63:639) */}
          <h1 className="font-heading font-semibold text-3xl sm:text-5xl lg:text-[64px] xl:text-[72px] text-white leading-[1.15] tracking-tight max-w-3xl">
            The page you are looking for doesn’t exist
          </h1>

          {/* Subtitle Message (Figma node 63:640) */}
          <p className="text-sm sm:text-base md:text-lg text-[#E5E6E8] font-normal leading-relaxed max-w-md sm:max-w-lg mt-4 sm:mt-6">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home CTA Button (Figma node 63:641 & 63:642) */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="/"
              className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-[#D4FB20] px-8 text-base sm:text-lg font-medium text-[#242528] shadow-lg transition-all hover:bg-[#c4eb10] active:scale-95 cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer (Figma node 78:1457) */}
      <Footer />
    </div>
  );
}
