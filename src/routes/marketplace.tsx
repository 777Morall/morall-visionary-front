import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { GiftCard } from "@/components/GiftCard";
import { giftCards, categories } from "@/lib/mock";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — Morall Store" },
      { name: "description", content: "Compre gift cards e cartões pré-pagos com entrega instantânea via Pix." },
    ],
  }),
  component: Marketplace,
});

function Marketplace() {
  const [cat, setCat] = useState<string>("Todos");
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      giftCards.filter(
        (c) =>
          (cat === "Todos" || c.category === cat) &&
          (q === "" || c.name.toLowerCase().includes(q.toLowerCase())),
      ),
    [cat, q],
  );

  return (
    <DashboardLayout title="Marketplace">
      {/* Hero banner */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8 overflow-hidden rounded-3xl border border-glow/25 bg-surface-elevated/50 p-8 backdrop-blur-md sm:p-10"
      >
        <div
          className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(53,197,255,0.5), transparent 70%)" }}
        />
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium text-glow">
          <Sparkles className="h-3.5 w-3.5" /> Entrega instantânea via Pix
        </span>
        <h2 className="relative mt-4 max-w-xl text-2xl font-bold text-text-strong sm:text-3xl">
          Gift cards e cartões pré-pagos para tudo que você ama
        </h2>
        <p className="relative mt-2 max-w-lg text-sm text-text-dim">
          Escolha o modelo, selecione o valor e receba seu código na hora.
        </p>
      </motion.div>

      {/* Category chips */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {["Todos", ...categories.map((c) => c.name)].map((name) => {
          const meta = categories.find((c) => c.name === name);
          const Icon =
            (meta && (Icons[meta.icon as keyof typeof Icons] as LucideIcon)) ?? Icons.LayoutGrid;
          const active = cat === name;
          return (
            <button
              key={name}
              onClick={() => setCat(name)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active
                  ? "border-glow/40 bg-glow/15 text-glow"
                  : "border-border text-text-dim hover:text-text-soft"
              }`}
            >
              <Icon className="h-4 w-4" />
              {name}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="mb-8 flex items-center gap-3 rounded-xl border border-border bg-bg-deep/50 px-3.5 sm:max-w-sm">
        <Search className="h-4.5 w-4.5 text-text-dim" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar gift card..."
          className="h-11 w-full bg-transparent text-sm text-text-strong outline-none placeholder:text-text-dim"
        />
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((card, i) => (
          <GiftCard key={card.id} card={card} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-text-dim">
          Nenhum card encontrado para essa busca.
        </p>
      )}
    </DashboardLayout>
  );
}
