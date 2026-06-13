import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Loader2, CheckCircle2, QrCode, ArrowRight } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { PublicLayout } from "@/components/PublicLayout";
import { GlowButton } from "@/components/GlowButton";
import { GlassCard } from "@/components/GlassCard";
import { PaymentQRCode } from "@/components/PaymentQRCode";
import { CopyInput } from "@/components/CopyInput";
import { StatusBadge } from "@/components/StatusBadge";
import { plans, type PlanId } from "@/lib/mock";

export const Route = createFileRoute("/checkout")({
  validateSearch: z.object({ plan: z.enum(["start", "pro", "elite"]).optional() }),
  head: () => ({
    meta: [
      { title: "Pagamento Pix — Morall Buscas" },
      { name: "description", content: "Conclua sua assinatura via Pix e libere o acesso premium." },
    ],
  }),
  component: Checkout,
});

const PIX_CODE =
  "00020126580014BR.GOV.BCB.PIX0136morall-buscas-demo-pix-codigo-ficticio5204000053039865802BR5913MORALL BUSCAS6009SAO PAULO62070503***6304A1B2";

const timeline = ["Plano selecionado", "Pix gerado", "Aguardando confirmação", "Acesso liberado"];

function Checkout() {
  const { plan: planId } = Route.useSearch();
  const plan = plans.find((p) => p.id === (planId as PlanId)) ?? plans[1];
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);

  const activeStep = paid ? 3 : 2;

  const simulate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaid(true);
    }, 1600);
  };

  return (
    <PublicLayout>
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold text-text-strong">Pagamento via Pix</h1>
          <p className="mt-2 text-text-dim">
            Seu acesso premium começa após a confirmação do Pix.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Summary */}
          <GlassCard className="h-fit p-6">
            <h2 className="text-sm font-medium uppercase tracking-widest text-text-dim">Resumo</h2>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-text-strong">Plano {plan.name}</p>
                <p className="text-sm text-text-dim">{plan.queries}</p>
              </div>
              <p className="text-2xl font-bold text-text-strong">R$ {plan.price}</p>
            </div>
            <div className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
              <Row label="Assinatura mensal" value={`R$ ${plan.price},00`} />
              <Row label="Taxas" value="R$ 0,00" />
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-4">
              <span className="font-medium text-text-strong">Total mensal</span>
              <span className="text-xl font-bold text-glow">R$ {plan.price},00</span>
            </div>

            <ol className="mt-7 space-y-3">
              {timeline.map((t, i) => {
                const done = i < activeStep || (paid && i <= activeStep);
                const current = !paid && i === activeStep;
                return (
                  <li key={t} className="flex items-center gap-3">
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-semibold ${
                        done
                          ? "border-success/40 bg-success/15 text-success"
                          : current
                            ? "border-glow/50 bg-glow/15 text-glow"
                            : "border-border text-text-dim"
                      }`}
                    >
                      {done ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                    </span>
                    <span className={`text-sm ${done || current ? "text-text-soft" : "text-text-dim"}`}>
                      {t}
                    </span>
                  </li>
                );
              })}
            </ol>
          </GlassCard>

          {/* Payment */}
          <GlassCard glow className="p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-text-strong">
                <QrCode className="h-4.5 w-4.5 text-glow" /> Pague com Pix
              </div>
              <StatusBadge>{paid ? "Pagamento aprovado" : "Aguardando pagamento"}</StatusBadge>
            </div>

            {!paid ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="mt-6">
                  <PaymentQRCode seed={plan.id} />
                </div>
                <p className="mt-5 text-center text-sm text-text-dim">
                  Escaneie o QR Code ou use o código copia e cola.
                </p>
                <div className="mt-4">
                  <CopyInput value={PIX_CODE} label="Pix copia e cola" />
                </div>
                <GlowButton variant="primary" size="lg" className="mt-6 w-full" onClick={simulate} disabled={loading}>
                  {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Confirmando...</> : "Simular pagamento aprovado"}
                </GlowButton>
                <p className="mt-3 text-center text-xs text-text-dim">
                  Demonstração — nenhum pagamento real é processado.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-success/15 text-success shadow-[0_0_40px_-6px_rgba(92,236,174,0.7)]">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-text-strong">Pagamento aprovado!</h3>
                <p className="mt-2 max-w-xs text-text-dim">
                  Seu plano {plan.name} está ativo. Bem-vindo à experiência premium.
                </p>
                <GlowButton asChild variant="primary" size="lg" className="mt-7">
                  <Link to="/dashboard">
                    Ir para o dashboard <ArrowRight className="h-4 w-4" />
                  </Link>
                </GlowButton>
              </motion.div>
            )}
          </GlassCard>
        </div>
      </section>
    </PublicLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-text-dim">
      <span>{label}</span>
      <span className="text-text-soft">{value}</span>
    </div>
  );
}
