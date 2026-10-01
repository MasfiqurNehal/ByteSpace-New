import { Navbar } from "@/components/shared/navbar";
import { HeroSection } from "@/features/home/hero-section";
import { PartnersBar } from "@/features/home/partners-bar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Home Part 1: Navbar, Hero, and Partners Trust Bar */}
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PartnersBar />
      </main>
    </div>
  );
}
