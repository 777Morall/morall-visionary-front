import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import type { Plan } from "@/lib/mock";
import { GlowButton } from "./GlowButton";

export function PricingCard({ plan, index = 0 }: { plan: Plan; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-3xl border p-7 backdrop-blur-md transition-all ${
        plan.highlight
          ? "border-glow/50 bg-surface-elevated/70 shadow-[0_24px_80px_-30px_rgba(53,197,255,0.7)] lg:scale-[1.04]"
          : "border-border bg-surface/40 hover:border-glow/35"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full brand-gradient px-4 py-1 text-xs font-semibold text-primary-foreground shadow-[0_8px_24px_-6px_rgba(53,197,255,0.8)]">
          {plan.badge}
        </span>
      )}
      <div>
        <h3 className="text-xl font-bold text-text-strong">{plan.name}</h3>
        <p className="mt-1 text-sm text-text-dim">{plan.tagline}</p>
      </div>
      <div className="mt-6 flex items-end gap-1">
        <span className="text-4xl font-bold text-text-strong">R$ {plan.price}</span>
        <span className="mb-1 text-sm text-text-dim">/mês</span>
      </div>
      <p className="mt-2 text-sm font-medium text-glow">{plan.queries}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-text-soft">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-glow/15 text-glow">
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <GlowButton
        asChild
        variant={plan.highlight ? "primary" : "outline"}
        size="lg"
        className="mt-7 w-full"
      >
        <Link to="/checkout" search={{ plan: plan.id }}>
          {plan.cta}
        </Link>
      </GlowButton>
    </motion.div>
  );
}
