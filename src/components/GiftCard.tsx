import { motion } from "motion/react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { GiftCard as GiftCardType } from "@/lib/mock";
import { GlowButton } from "./GlowButton";

export function GiftCard({ card, index = 0 }: { card: GiftCardType; index?: number }) {
  const Icon = (Icons[card.icon as keyof typeof Icons] as LucideIcon) ?? Icons.CreditCard;
  const from = Math.min(...card.values);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 backdrop-blur-md transition-all hover:border-glow/40 hover:-translate-y-1"
    >
      {/* Card face */}
      <div className="relative p-4">
        <div
          className="relative aspect-[1.6/1] overflow-hidden rounded-xl p-4 text-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)]"
          style={{ backgroundImage: card.gradient }}
        >
          <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/15 blur-2xl" />
          <div className="flex items-start justify-between">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/20 backdrop-blur-sm">
              <Icon className="h-5 w-5" />
            </span>
            {card.badge && (
              <span className="rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide backdrop-blur-sm">
                {card.badge}
              </span>
            )}
          </div>
          <div className="absolute inset-x-4 bottom-4">
            <p className="font-mono text-sm tracking-[0.22em] opacity-90">•••• •••• ••••</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest opacity-80">
              {card.category}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-text-strong">{card.name}</h3>
          <span className="flex items-center gap-1 text-xs text-text-soft">
            <Star className="h-3.5 w-3.5 fill-warning text-warning" /> {card.rating}
          </span>
        </div>
        <p className="mt-1.5 line-clamp-2 text-sm text-text-dim">{card.desc}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {card.values.map((v) => (
            <span
              key={v}
              className="rounded-md border border-border bg-bg-deep/40 px-2 py-0.5 text-xs text-text-soft"
            >
              R$ {v}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between pt-5">
          <div>
            <p className="text-xs text-text-dim">A partir de</p>
            <p className="text-lg font-bold text-text-strong">R$ {from}</p>
          </div>
          <GlowButton asChild variant="primary" size="sm">
            <Link to="/checkout" search={{ card: card.id }}>
              Comprar
            </Link>
          </GlowButton>
        </div>
      </div>
    </motion.div>
  );
}
