import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "light" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 font-heading text-2xl font-bold tracking-tight select-none transition-opacity hover:opacity-90",
        variant === "light" ? "text-white" : "text-gray-900 dark:text-white",
        className
      )}
      aria-label="ByteSpace Home"
    >
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#D4FB20] text-[#242528] shadow-sm">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-[#242528]"
        >
          <path
            d="M4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7Z"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M9 12L15 12"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M12 9L12 15"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="font-bold tracking-tight">ByteSpace</span>
    </Link>
  );
}
