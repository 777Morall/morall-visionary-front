import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Search, Loader2, AlertTriangle, CheckCircle2, Save } from "lucide-react";
import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { GlassCard } from "@/components/GlassCard";
import { GlowButton } from "@/components/GlowButton";
import { StatusBadge } from "@/components/StatusBadge";

export const Route = createFileRoute("/consulta")({
  head: () => ({ meta: [{ title: "Nova consulta — Morall Buscas" }] }),
  component: Consulta,
});

const types = ["Consulta padrão", "Consulta avançada", "Verificação rápida"];

function Consulta() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const run = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => setState("done"), 1800);
  };

  return (
    <DashboardLayout title="Nova consulta">
      <div className="mx-auto max-w-2xl">
        <GlassCard className="p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-text-strong">Nova consulta</h2>
          <p className="mt-1 text-sm text-text-dim">Preencha os dados e execute uma consulta.</p>

          <form onSubmit={run} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-text-soft">Tipo de consulta</label>
              <select className="h-12 w-full rounded-xl border border-border bg-bg-deep/50 px-3.5 text-sm text-text-strong outline-none focus:border-glow/50">
                {types.map((t) => <option key={t} className="bg-bg-soft">{t}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-text-soft">Termo de busca</label>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-deep/50 px-3.5 focus-within:border-glow/50">
                <Search className="h-4.5 w-4.5 text-text-dim" />
                <input placeholder="Digite o termo da consulta" className="h-12 w-full bg-transparent text-sm text-text-strong outline-none placeholder:text-text-dim" />
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-warning/25 bg-warning/5 p-4">
              <AlertTriangle className="h-5 w-5 shrink-0 text-warning" />
              <p className="text-xs text-text-soft">Use a plataforma de forma responsável e autorizada.</p>
            </div>

            <GlowButton type="submit" variant="primary" size="lg" className="w-full" disabled={state === "loading"}>
              {state === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Consultando...</> : <>Consultar <Search className="h-4 w-4" /></>}
            </GlowButton>
          </form>
        </GlassCard>

        <AnimatePresence>
          {state === "done" && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6">
              <GlassCard glow className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-2 font-semibold text-text-strong">
                    <CheckCircle2 className="h-5 w-5 text-success" /> Resultado
                  </h3>
                  <StatusBadge>Concluída</StatusBadge>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { l: "Referência", v: "REF-" + Math.floor(Math.random() * 90000 + 10000) },
                    { l: "Tipo", v: "Consulta padrão" },
                    { l: "Status do registro", v: "Disponível" },
                    { l: "Confiabilidade", v: "Alta" },
                    { l: "Data", v: "13/06/2026" },
                    { l: "Tempo", v: "1,8s" },
                  ].map((r) => (
                    <div key={r.l} className="rounded-xl border border-border bg-bg-deep/40 p-4">
                      <p className="text-xs text-text-dim">{r.l}</p>
                      <p className="mt-1 font-medium text-text-strong">{r.v}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-text-dim">Resultado fictício gerado para demonstração.</p>
                <GlowButton variant="soft" size="md" className="mt-5"><Save className="h-4 w-4" /> Salvar no histórico</GlowButton>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
