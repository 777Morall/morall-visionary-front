import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardMetricCard } from "@/components/DashboardMetricCard";
import { GlassCard } from "@/components/GlassCard";
import { StatusBadge } from "@/components/StatusBadge";
import { adminMetrics, adminUsers, adminPayments, adminLogs } from "@/lib/mock";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Morall Store" }] }),
  component: Admin,
});

function Admin() {
  return (
    <DashboardLayout title="Painel administrativo">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {adminMetrics.map((m, i) => (
          <DashboardMetricCard key={m.label} {...m} index={i} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <GlassCard className="overflow-hidden">
          <h3 className="p-6 pb-4 font-semibold text-text-strong">Usuários recentes</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-y border-border text-text-dim">
                  <th className="px-6 py-3 font-medium">Usuário</th>
                  <th className="px-6 py-3 font-medium">Perfil</th>
                  <th className="px-6 py-3 font-medium">Desde</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {adminUsers.map((u, i) => (
                  <motion.tr key={u.email} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="border-b border-border/50 hover:bg-bg-deep/30">
                    <td className="px-6 py-3.5">
                      <p className="font-medium text-text-strong">{u.name}</p>
                      <p className="text-xs text-text-dim">{u.email}</p>
                    </td>
                    <td className="px-6 py-3.5 text-text-soft">{u.plan}</td>
                    <td className="px-6 py-3.5 text-text-dim">{u.since}</td>
                    <td className="px-6 py-3.5"><StatusBadge>{u.status}</StatusBadge></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-semibold text-text-strong">Logs de atividade</h3>
          <div className="mt-5 space-y-4">
            {adminLogs.map((l, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="font-mono text-xs text-glow">{l.time}</span>
                <span className="text-sm text-text-soft">{l.text}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard className="mt-6 overflow-hidden">
        <h3 className="p-6 pb-4 font-semibold text-text-strong">Pagamentos</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-y border-border text-text-dim">
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Usuário</th>
                <th className="px-6 py-3 font-medium">Valor</th>
                <th className="px-6 py-3 font-medium">Data</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {adminPayments.map((p, i) => (
                <motion.tr key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="border-b border-border/50 hover:bg-bg-deep/30">
                  <td className="px-6 py-3.5 font-mono text-xs text-text-dim">{p.id}</td>
                  <td className="px-6 py-3.5 text-text-soft">{p.user}</td>
                  <td className="px-6 py-3.5 font-medium text-text-strong">{p.amount}</td>
                  <td className="px-6 py-3.5 text-text-dim">{p.date}</td>
                  <td className="px-6 py-3.5"><StatusBadge>{p.status}</StatusBadge></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </DashboardLayout>
  );
}
