import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Search, Filter, Eye, Inbox } from "lucide-react";
import { useMemo, useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { GlassCard } from "@/components/GlassCard";
import { StatusBadge } from "@/components/StatusBadge";
import { orders } from "@/lib/mock";

export const Route = createFileRoute("/historico")({
  head: () => ({ meta: [{ title: "Pedidos — Morall Store" }] }),
  component: Historico,
});

const statuses = ["Todos", "Entregue", "Processando", "Falhou"];

function Historico() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("Todos");

  const rows = useMemo(
    () =>
      orders.filter(
        (r) =>
          (status === "Todos" || r.status === status) &&
          (q === "" ||
            r.id.toLowerCase().includes(q.toLowerCase()) ||
            r.card.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, status],
  );

  return (
    <DashboardLayout title="Pedidos">
      <GlassCard className="overflow-hidden">
        <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-bg-deep/50 px-3.5 sm:max-w-xs">
            <Search className="h-4.5 w-4.5 text-text-dim" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar pedido..." className="h-11 w-full bg-transparent text-sm text-text-strong outline-none placeholder:text-text-dim" />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <Filter className="h-4 w-4 shrink-0 text-text-dim" />
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  status === s ? "border-glow/40 bg-glow/15 text-glow" : "border-border text-text-dim hover:text-text-soft"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-y border-border text-text-dim">
                <th className="px-6 py-3 font-medium">Pedido</th>
                <th className="px-6 py-3 font-medium">Card</th>
                <th className="px-6 py-3 font-medium">Valor</th>
                <th className="px-6 py-3 font-medium">Data</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr key={r.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }} className="border-b border-border/50 hover:bg-bg-deep/30">
                  <td className="px-6 py-3.5 font-mono text-xs text-text-dim">{r.id}</td>
                  <td className="px-6 py-3.5 text-text-soft">{r.card}</td>
                  <td className="px-6 py-3.5 font-medium text-text-strong">{r.value}</td>
                  <td className="px-6 py-3.5 text-text-dim">{r.date}</td>
                  <td className="px-6 py-3.5"><StatusBadge>{r.status}</StatusBadge></td>
                  <td className="px-6 py-3.5 text-right">
                    <button className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-text-soft hover:border-glow/40 hover:text-glow">
                      <Eye className="h-3.5 w-3.5" /> Detalhes
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {rows.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-border bg-bg-deep/50 text-text-dim">
              <Inbox className="h-6 w-6" />
            </span>
            <p className="text-sm text-text-dim">Nenhum pedido encontrado com esses filtros.</p>
          </div>
        )}
      </GlassCard>
    </DashboardLayout>
  );
}
