import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Loader2, CheckCircle2, QrCode, ArrowRight } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { DashboardLayout } from "@/components/DashboardLayout";
import { GlowButton } from "@/components/GlowButton";
import { GlassCard } from "@/components/GlassCard";
import { PaymentQRCode } from "@/components/PaymentQRCode";
import { CopyInput } from "@/components/CopyInput";
import { StatusBadge } from "@/components/StatusBadge";
import { giftCards } from "@/lib/mock";

export const Route = createFileRoute("/checkout")({
  validateSearch: z.object({ card: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Pagamento Pix — Morall Store" },
      { name: "description", content: "Conclua sua compra via Pix e receba o código do card na hora." },
    ],
  }),
  component: Checkout,
});

const PIX_CODE =
  "00020126580014BR.GOV.BCB.PIX0136morall-store-demo-pix-codigo-ficticio5204000053039865802BR5911MORALL STORE6009SAO PAULO62070503***6304A1B2";

const timeline = ["Card selecionado", "Pix gerado", "Aguardando confirmação", "Código liberado"];

function Checkout() {
  const { card: cardId } = Route.useSearch();
  const card = giftCards.find((c) => c.id === cardId) ?? giftCards[0];
  const [value, setValue] = useState<number>(card.values[0]);
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
    <DashboardLayout title="Checkout">
      <div className="mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-2xl font-bold text-text-strong sm:text-3xl">Pagamento via Pix</h1>
          <p className="mt-2 text-text-dim">Seu código é liberado assim que o Pix for confirmado.</p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Summary */}
          <GlassCard className="h-fit min-w-0 p-6">
            <div
              className="relative mb-5 flex aspect-[1.7/1] flex-col justify-between overflow-hidden rounded-xl p-4 text-white"
              style={{ backgroundImage: card.gradient }}
            >
              <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/15 blur-2xl" />
              <div className="relative flex items-start justify-between">
                <p className="text-xs font-medium uppercase tracking-widest opacity-80">{card.category}</p>
                <p className="text-xl font-bold">R$ {value}</p>
              </div>
              <div className="relative">
                <p className="font-mono text-sm tracking-[0.2em] opacity-90">•••• •••• ••••</p>
                <p className="mt-1 text-sm font-semibold">{card.name}</p>
              </div>
            </div>


            <p className="mb-2 text-sm font-medium text-text-soft">Escolha o valor</p>
            <div className="flex flex-wrap gap-2">
              {card.values.map((v) => (
                <button
                  key={v}
                  disabled={paid}
                  onClick={() => setValue(v)}
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all disabled:opacity-50 ${
                    value === v
                      ? "border-glow/50 bg-glow/15 text-glow"
                      : "border-border text-text-dim hover:text-text-soft"
                  }`}
                >
                  R$ {v}
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
              <Row label="Card" value={card.name} />
              <Row label="Valor" value={`R$ ${value},00`} />
              <Row label="Taxas" value="R$ 0,00" />
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-4">
              <span className="font-medium text-text-strong">Total</span>
              <span className="text-xl font-bold text-glow">R$ {value},00</span>
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
                    <span className={`text-sm ${done || current ? "text-text-soft" : "text-text-dim"}`}>{t}</span>
                  </li>
                );
              })}
            </ol>
          </GlassCard>

          {/* Payment */}
          <GlassCard glow className="min-w-0 p-6 sm:p-8">>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-medium text-text-strong">
                <QrCode className="h-4.5 w-4.5 text-glow" /> Pague com Pix
              </div>
              <StatusBadge>{paid ? "Aprovado" : "Aguardando pagamento"}</StatusBadge>
            </div>

            {!paid ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="mt-6">
                  <PaymentQRCode seed={`${card.id}-${value}`} />
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
                  Seu {card.name} de R$ {value} já está disponível em Meus Cards.
                </p>
                <GlowButton asChild variant="primary" size="lg" className="mt-7">
                  <Link to="/meus-cards">
                    Ver meus cards <ArrowRight className="h-4 w-4" />
                  </Link>
                </GlowButton>
              </motion.div>
            )}
          </GlassCard>
        </div>
      </div>
    </DashboardLayout>
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
