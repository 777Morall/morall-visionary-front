import { cn } from "@/lib/utils";
import * as React from "react";

export function GlassCard({
  className,
  glow = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { glow?: boolean }) {
  return (
    <div
      className={cn(
        "glass rounded-2xl",
        glow && "glow-ring",
        className,
      )}
      {...props}
    />
  );
}
