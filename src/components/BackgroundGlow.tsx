import { cn } from "@/lib/utils";

export function BackgroundGlow({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-bg-deep" />
      {/* Radial gradients */}
      <div
        className="absolute -top-40 left-1/2 h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-[120px] animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(0,125,237,0.35), transparent 65%)" }}
      />
      <div
        className="absolute top-1/3 -left-40 h-[460px] w-[460px] rounded-full opacity-40 blur-[120px] animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(53,197,255,0.28), transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full opacity-30 blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(125,227,255,0.22), transparent 65%)" }}
      />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-70" />
    </div>
  );
}
