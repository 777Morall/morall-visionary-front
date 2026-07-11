import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardMetricCard } from "@/components/DashboardMetricCard";
import { GlassCard } from "@/components/GlassCard";
import { StatusBadge } from "@/components/StatusBadge";
import { GlowButton } from "@/components/GlowButton";
import { salesData, sellerListings, recentSales } from "@/lib/mock";

export const Route = createFileRoute("/vendas")({
  head: () => ({ meta: [{ title: "Vendas — Morall Store" }] }),
  component: Vendas,
});

const metrics = [
  { icon: "DollarSign", label: "Receita (mês)", value: "R$ 4.120", delta: "+22,4%" },
  { icon: "CreditCard", label: "Cards vendidos", value: "1.210", delta: "+7,1%" },
  { icon: "Package", label: "Anúncios ativos", value: "4", delta: undefined },
  { icon: "Star", label: "Avaliação média", value: "4,9", delta: undefined },
];

const max = Math.max(...salesData.map((d) => d.value));

function Vendas() {
  return (
    <DashboardLayout title="Vendas">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-strong">Área de vendas</h2>
          <p className="mt-1 text-sm text-text-dim">Gerencie seus anúncios e acompanhe resultados.</p>
        </div>
        <GlowButton variant="primary" size="md">
          <Plus className="h-4 w-4" /> Novo anúncio
        </GlowButton>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <DashboardMetricCard key={m.label} {...m} index={i} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <GlassCard className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-semibold text-text-strong">Receita mensal</h3>
            <span className="text-xs text-success">R$ 4.120 este mês</span>
          </div>
          <div className="flex h-52 items-end gap-3">
            {salesData.map((d, i) => (
              <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(d.value / max) * 100}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full rounded-t-md"
                  style={{ background: "linear-gradient(180deg, #35c5ff, rgba(0,125,237,0.2))" }}
                />
                <span className="text-xs text-text-dim">{d.month}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-semibold text-text-strong">Vendas recentes</h3>
          <div className="mt-5 space-y-4">
            {recentSales.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between gap-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-text-strong">{s.card}</p>
                  <p className="text-xs text-text-dim">{s.buyer} · {s.time}</p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-success">{s.amount}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard className="mt-6 overflow-hidden">
        <h3 className="p-6 pb-4 font-semibold text-text-strong">Meus anúncios</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-y border-border text-text-dim">
                <th className="px-6 py-3 font-medium">Card</th>
                <th className="px-6 py-3 font-medium">Categoria</th>
                <th className="px-6 py-3 font-medium">Preço</th>
                <th className="px-6 py-3 font-medium">Estoque</th>
                <th className="px-6 py-3 font-medium">Vendidos</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {sellerListings.map((l, i) => (
                <motion.tr
                  key={l.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-border/50 hover:bg-bg-deep/30"
                >
                  <td className="px-6 py-3.5 font-medium text-text-strong">{l.card}</td>
                  <td className="px-6 py-3.5 text-text-dim">{l.category}</td>
                  <td className="px-6 py-3.5 text-text-soft">{l.price}</td>
                  <td className="px-6 py-3.5 text-text-dim">{l.stock}</td>
                  <td className="px-6 py-3.5 text-text-dim">{l.sold}</td>
                  <td className="px-6 py-3.5"><StatusBadge>{l.status}</StatusBadge></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </DashboardLayout>
  );
}
