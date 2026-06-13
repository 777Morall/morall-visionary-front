import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  max = 100,
  label,
  className,
}: {
  value: number;
  max?: number;
  label?: string;
  className?: string;
}) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-text-dim">{label}</span>
          <span className="font-medium text-text-soft">
            {value}/{max}
          </span>
        </div>
      )}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-elevated">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full brand-gradient shadow-[0_0_16px_rgba(53,197,255,0.6)]"
        />
      </div>
    </div>
  );
}
