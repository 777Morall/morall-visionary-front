import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, Minus, ArrowRight } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { SectionTitle } from "@/components/SectionTitle";
import { PricingCard } from "@/components/PricingCard";
import { GlowButton } from "@/components/GlowButton";
import { plans, comparison } from "@/lib/mock";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — Morall Buscas" },
      {
        name: "description",
        content:
          "Compare os planos Start, Pro e Elite. Assinatura mensal via Pix, sem fidelidade. Escolha o ideal para o seu uso.",
      },
      { property: "og:title", content: "Planos — Morall Buscas" },
      {
        property: "og:description",
        content: "Start a partir de R$30/mês. Compare recursos e escolha o plano premium ideal.",
      },
    ],
  }),
  component: Planos,
});

function Cell({ value }: { value: string }) {
  if (value === "—")
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-surface-elevated text-text-dim">
        <Minus className="h-3.5 w-3.5" />
      </span>
    );
  if (value === "✓")
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-glow/15 text-glow">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  return <span className="text-sm text-text-soft">{value}</span>;
}

function Planos() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <SectionTitle
          eyebrow="Planos"
          title="Escolha o plano ideal para seu uso"
          subtitle="Assinatura mensal simples via Pix. Faça upgrade ou cancele quando quiser, sem burocracia."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
          {plans.map((p, i) => (
            <PricingCard key={p.id} plan={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Comparativo" title="Compare os recursos" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-10 overflow-hidden rounded-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-4 text-sm font-medium text-text-dim">Recurso</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-text-strong">
                    Start
                  </th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-glow">Pro</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold text-text-strong">
                    Elite
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border/60 ${i % 2 ? "bg-bg-deep/20" : ""}`}
                  >
                    <td className="px-5 py-4 text-sm text-text-soft">{row.label}</td>
                    <td className="px-5 py-4 text-center">
                      <Cell value={row.start} />
                    </td>
                    <td className="bg-glow/[0.04] px-5 py-4 text-center">
                      <Cell value={row.pro} />
                    </td>
                    <td className="px-5 py-4 text-center">
                      <Cell value={row.elite} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <p className="mt-4 text-center text-xs text-text-dim">
          * Sujeito à política de uso responsável e limites antiabuso.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 pt-6 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-strong sm:text-3xl">
          Pronto para começar?
        </h2>
        <p className="mt-3 text-text-dim">Crie sua conta e libere o acesso após a confirmação do Pix.</p>
        <GlowButton asChild variant="primary" size="lg" className="mt-7">
          <Link to="/cadastro">
            Criar conta <ArrowRight className="h-4 w-4" />
          </Link>
        </GlowButton>
      </section>
    </PublicLayout>
  );
}
