import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Gift, ShoppingBag } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { CopyInput } from "@/components/CopyInput";
import { StatusBadge } from "@/components/StatusBadge";
import { orders, giftCards } from "@/lib/mock";

export const Route = createFileRoute("/meus-cards")({
  head: () => ({ meta: [{ title: "Meus cards — Morall Store" }] }),
  component: MeusCards,
});

function MeusCards() {
  const owned = orders.filter((o) => o.status === "Entregue");

  return (
    <DashboardLayout title="Meus cards">
      {owned.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full border border-border bg-bg-deep/50 text-text-dim">
            <ShoppingBag className="h-7 w-7" />
          </span>
          <p className="text-sm text-text-dim">Você ainda não comprou nenhum card.</p>
          <GlowButton asChild variant="primary" size="md">
            <Link to="/marketplace">Ir ao marketplace</Link>
          </GlowButton>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {owned.map((o, i) => {
            const model = giftCards.find((c) => c.name === o.card);
            const Icon =
              (model && (Icons[model.icon as keyof typeof Icons] as LucideIcon)) ?? Icons.CreditCard;
            return (
              <motion.div
                key={o.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <GlassCard className="overflow-hidden p-5">
                  <div
                    className="relative mb-4 aspect-[1.9/1] overflow-hidden rounded-xl p-4 text-white"
                    style={{ backgroundImage: model?.gradient ?? "linear-gradient(135deg,#007ded,#35c5ff)" }}
                  >
                    <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
                    <div className="flex items-start justify-between">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/20 backdrop-blur-sm">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="text-lg font-bold">{o.value}</span>
                    </div>
                    <p className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-widest opacity-80">
                      {o.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-text-strong">{o.card}</h3>
                    <StatusBadge tone="success">Ativo</StatusBadge>
                  </div>
                  <p className="mt-1 text-xs text-text-dim">Comprado em {o.date}</p>

                  <div className="mt-4">
                    <CopyInput value={o.code} label="Código do card" />
                  </div>
                  <GlowButton variant="soft" size="sm" className="mt-3 w-full">
                    <Gift className="h-4 w-4" /> Presentear
                  </GlowButton>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      )}
    </DashboardLayout>
  );
}
