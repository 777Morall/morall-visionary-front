import { motion } from "motion/react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon,
  title,
  desc,
  index = 0,
}: {
  icon: string;
  title: string;
  desc: string;
  index?: number;
}) {
  const Icon = (Icons[icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-md transition-colors hover:border-glow/40"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-glow/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative grid h-12 w-12 place-items-center rounded-xl border border-glow/25 bg-glow/10 text-glow">
        <Icon className="h-5.5 w-5.5" />
      </div>
      <h3 className="relative mt-5 text-lg font-semibold text-text-strong">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-text-dim">{desc}</p>
    </motion.div>
  );
}
