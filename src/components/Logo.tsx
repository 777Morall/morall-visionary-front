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
    <Link to="/" className={cn("group flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl brand-gradient shadow-[0_8px_24px_-8px_rgba(53,197,255,0.8)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none">
          <path
            d="M12 2 3 7l9 5 9-5-9-5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="m3 12 9 5 9-5M3 17l9 5 9-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </svg>
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
      </span>
      <span className={cn("text-lg font-bold tracking-tight text-text-strong", textClassName)}>
        Morall<span className="text-glow"> Buscas</span>
      </span>
    </Link>
  );
}
