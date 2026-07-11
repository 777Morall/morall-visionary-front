import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardMetricCard } from "@/components/DashboardMetricCard";
import { GlassCard } from "@/components/GlassCard";
import { MockChart } from "@/components/MockChart";
import { StatusBadge } from "@/components/StatusBadge";
import { GlowButton } from "@/components/GlowButton";
import { orders, giftCards } from "@/lib/mock";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Morall Store" }] }),
  component: Dashboard,
});

const metrics = [
  { icon: "Wallet", label: "Saldo em carteira", value: "R$ 320,00", delta: undefined },
  { icon: "CreditCard", label: "Cards ativos", value: "12", delta: undefined },
  { icon: "ShoppingBag", label: "Compras no mês", value: "8", delta: "+18,9%" },
  { icon: "TrendingUp", label: "Total gasto", value: "R$ 1.240", delta: undefined },
  { icon: "Gift", label: "Cards presenteados", value: "3", delta: undefined },
  { icon: "Clock", label: "Pedidos pendentes", value: "1", delta: undefined },
];

function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-strong">Olá, Marina 👋</h2>
          <p className="mt-1 flex items-center gap-2 text-sm text-text-dim">
            Bem-vinda de volta. <StatusBadge tone="success">Carteira ativa</StatusBadge>
          </p>
        </div>
        <GlowButton asChild variant="primary" size="md">
          <Link to="/marketplace">Comprar cards <ArrowRight className="h-4 w-4" /></Link>
        </GlowButton>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m, i) => (
          <DashboardMetricCard key={m.label} {...m} index={i} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <GlassCard className="p-6">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="font-semibold text-text-strong">Compras por mês</h3>
            <span className="text-xs text-success">+18,9% vs. mês anterior</span>
          </div>
          <MockChart />
        </GlassCard>

        <GlassCard className="flex flex-col p-6">
          <h3 className="font-semibold text-text-strong">Recomendados para você</h3>
          <div className="mt-5 space-y-3">
            {giftCards.slice(0, 3).map((c) => (
              <Link
                key={c.id}
                to="/checkout"
                search={{ card: c.id }}
                className="flex items-center gap-3 rounded-xl border border-border bg-bg-deep/40 p-3 transition-colors hover:border-glow/40"
              >
                <span
                  className="h-10 w-14 shrink-0 rounded-md"
                  style={{ backgroundImage: c.gradient }}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-text-strong">{c.name}</p>
                  <p className="text-xs text-text-dim">A partir de R$ {Math.min(...c.values)}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-text-dim" />
              </Link>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard className="mt-6 overflow-hidden">
        <div className="flex items-center justify-between p-6 pb-4">
          <h3 className="font-semibold text-text-strong">Últimos pedidos</h3>
          <Link to="/historico" className="text-sm text-glow hover:underline">Ver tudo</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-y border-border text-text-dim">
                <th className="px-6 py-3 font-medium">Pedido</th>
                <th className="px-6 py-3 font-medium">Card</th>
                <th className="px-6 py-3 font-medium">Valor</th>
                <th className="px-6 py-3 font-medium">Data</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((o, i) => (
                <motion.tr
                  key={o.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/50 hover:bg-bg-deep/30"
                >
                  <td className="px-6 py-3.5 font-mono text-xs text-text-dim">{o.id}</td>
                  <td className="px-6 py-3.5 text-text-soft">{o.card}</td>
                  <td className="px-6 py-3.5 font-medium text-text-strong">{o.value}</td>
                  <td className="px-6 py-3.5 text-text-dim">{o.date}</td>
                  <td className="px-6 py-3.5"><StatusBadge>{o.status}</StatusBadge></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </DashboardLayout>
  );
}
