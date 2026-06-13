import { motion } from "motion/react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardMetricCard({
  icon,
  label,
  value,
  delta,
  tone = "info",
  index = 0,
}: {
  icon: string;
  label: string;
  value: string;
  delta?: string;
  tone?: "info" | "success" | "warning" | "danger";
  index?: number;
}) {
  const Icon = (Icons[icon as keyof typeof Icons] as LucideIcon) ?? Icons.Activity;
  const toneText: Record<string, string> = {
    info: "text-glow",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
  };
  const negative = delta?.trim().startsWith("-");
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur-md transition-colors hover:border-glow/35"
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "grid h-10 w-10 place-items-center rounded-xl border border-glow/25 bg-glow/10",
            toneText[tone],
          )}
        >
          <Icon className="h-4.5 w-4.5" />
        </div>
        {delta && (
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs font-medium",
              negative ? "bg-danger/15 text-danger" : "bg-success/15 text-success",
            )}
          >
            {delta}
          </span>
        )}
      </div>
      <p className="mt-4 text-2xl font-bold text-text-strong">{value}</p>
      <p className="mt-1 text-sm text-text-dim">{label}</p>
    </motion.div>
  );
}
