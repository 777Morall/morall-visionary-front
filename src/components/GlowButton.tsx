import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const glowButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "brand-gradient text-primary-foreground font-semibold shadow-[0_10px_40px_-10px_rgba(53,197,255,0.7)] hover:shadow-[0_16px_50px_-8px_rgba(53,197,255,0.85)] hover:-translate-y-0.5",
        outline:
          "border border-border bg-surface/40 text-text-soft backdrop-blur-md hover:border-glow/50 hover:text-text-strong hover:-translate-y-0.5",
        ghost: "text-text-soft hover:bg-surface-elevated/60 hover:text-text-strong",
        soft: "bg-surface-elevated text-text-strong border border-border hover:border-glow/40 hover:-translate-y-0.5",
        danger:
          "bg-danger/15 text-danger border border-danger/30 hover:bg-danger/25",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base py-3.5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glowButtonVariants> {
  asChild?: boolean;
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp ref={ref} className={cn(glowButtonVariants({ variant, size, className }))} {...props} />
    );
  },
);
GlowButton.displayName = "GlowButton";
