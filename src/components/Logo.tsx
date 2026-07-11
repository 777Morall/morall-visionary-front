import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  textClassName,
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <Link to="/marketplace" className={cn("group flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl brand-gradient shadow-[0_8px_24px_-8px_rgba(53,197,255,0.8)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none">
          <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6 14.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        </svg>
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
      </span>
      <span className={cn("text-lg font-bold tracking-tight text-text-strong", textClassName)}>
        Morall<span className="text-glow"> Store</span>
      </span>
    </Link>
  );
}
