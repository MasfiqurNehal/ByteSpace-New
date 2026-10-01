import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          ByteSpace
        </h1>
        <p className="text-lg text-muted-foreground">
          Platform foundation initialized with Next.js 16, React 19, and Tailwind CSS 4.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Button variant="gradient">Explore Platform</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </main>
  );
}
