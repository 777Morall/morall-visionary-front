import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("max-w-2xl", center && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-glow backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-glow shadow-[0_0_10px_rgba(53,197,255,0.9)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-3xl font-bold leading-tight text-text-strong sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-dim">{subtitle}</p>
      )}
    </motion.div>
  );
}
