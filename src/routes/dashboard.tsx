import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardMetricCard } from "@/components/DashboardMetricCard";
import { GlassCard } from "@/components/GlassCard";
import { MockChart } from "@/components/MockChart";
import { ProgressBar } from "@/components/ProgressBar";
import { StatusBadge } from "@/components/StatusBadge";
import { GlowButton } from "@/components/GlowButton";
import { recentQueries } from "@/lib/mock";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Morall Buscas" }] }),
  component: Dashboard,
});

const metrics = [
  { icon: "CreditCard", label: "Plano atual", value: "Pro", delta: undefined },
  { icon: "Gauge", label: "Consultas restantes", value: "212", delta: undefined },
  { icon: "CheckCircle2", label: "Consultas realizadas", value: "138", delta: "+18,9%" },
  { icon: "BadgeCheck", label: "Status da assinatura", value: "Ativa", delta: undefined },
  { icon: "CalendarClock", label: "Próxima renovação", value: "13/07", delta: undefined },
  { icon: "Wallet", label: "Último pagamento", value: "R$ 50", delta: undefined },
];

function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-strong">Olá, Marina 👋</h2>
          <p className="mt-1 flex items-center gap-2 text-sm text-text-dim">
            Bem-vinda de volta. <StatusBadge tone="success">Plano Pro ativo</StatusBadge>
          </p>
        </div>
        <GlowButton asChild variant="primary" size="md">
          <Link to="/consulta">Nova consulta <ArrowRight className="h-4 w-4" /></Link>
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
            <h3 className="font-semibold text-text-strong">Uso mensal</h3>
            <span className="text-xs text-success">+18,9% vs. mês anterior</span>
          </div>
          <MockChart />
        </GlassCard>

        <GlassCard className="flex flex-col p-6">
          <h3 className="font-semibold text-text-strong">Limite do plano</h3>
          <div className="mt-6 space-y-6">
            <ProgressBar value={138} max={350} label="Consultas usadas" />
            <ProgressBar value={212} max={350} label="Disponíveis" />
          </div>
          <div className="mt-auto flex items-start gap-3 rounded-xl border border-warning/25 bg-warning/5 p-4">
            <AlertTriangle className="h-5 w-5 shrink-0 text-warning" />
            <p className="text-xs text-text-soft">
              Use a plataforma de forma responsável e autorizada.
            </p>
          </div>
        </GlassCard>
      </div>

      <GlassCard className="mt-6 overflow-hidden">
        <div className="flex items-center justify-between p-6 pb-4">
          <h3 className="font-semibold text-text-strong">Últimas consultas</h3>
          <Link to="/historico" className="text-sm text-glow hover:underline">Ver tudo</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-y border-border text-text-dim">
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Tipo</th>
                <th className="px-6 py-3 font-medium">Entrada</th>
                <th className="px-6 py-3 font-medium">Data</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentQueries.slice(0, 5).map((q, i) => (
                <motion.tr
                  key={q.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/50 hover:bg-bg-deep/30"
                >
                  <td className="px-6 py-3.5 font-mono text-xs text-text-dim">{q.id}</td>
                  <td className="px-6 py-3.5 text-text-soft">{q.type}</td>
                  <td className="px-6 py-3.5 font-mono text-text-dim">{q.input}</td>
                  <td className="px-6 py-3.5 text-text-dim">{q.date}</td>
                  <td className="px-6 py-3.5"><StatusBadge>{q.status}</StatusBadge></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </DashboardLayout>
  );
}
