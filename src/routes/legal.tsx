import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Logo } from "@/components/Logo";
import { GlassCard } from "@/components/GlassCard";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Termos e Privacidade — Morall Store" },
      { name: "description", content: "Termos de uso, privacidade e política de compra de gift cards da Morall Store." },
    ],
  }),
  component: Legal,
});

const sections = [
  { t: "1. Sobre a plataforma", c: "A Morall Store é um marketplace de gift cards e cartões pré-pagos digitais. Toda compra é feita de forma segura e o código é entregue após a confirmação do pagamento." },
  { t: "2. Pagamento", c: "Os pagamentos são processados via Pix, com confirmação automática. O código do card é liberado na área Meus Cards imediatamente após a aprovação." },
  { t: "3. Vendedores", c: "Vendedores cadastrados podem criar anúncios, definir preços e estoques. É proibido comercializar cards de origem irregular ou fraudulenta." },
  { t: "4. Reembolsos", c: "Cards não utilizados podem ser reembolsados conforme a política de cada modelo. Cards já resgatados não são reembolsáveis." },
  { t: "5. Privacidade", c: "Tratamos seus dados com confidencialidade. Registros de compra e atividade são mantidos para segurança e antifraude." },
  { t: "6. Demonstração", c: "Esta é uma plataforma de demonstração de interface. Nenhum dado real é processado e todos os pagamentos são simulados." },
];

function Legal() {
  return (
    <div className="relative min-h-screen">
      <BackgroundGlow />
      <header className="sticky top-0 z-30 border-b border-border bg-bg-deep/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <Link to="/login" className="inline-flex items-center gap-1.5 text-sm text-text-dim hover:text-text-strong">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold text-text-strong sm:text-4xl">Termos & Privacidade</h1>
        <p className="mt-3 text-text-dim">Última atualização: 11 de julho de 2026.</p>

        <div className="mt-10 space-y-4">
          {sections.map((s) => (
            <GlassCard key={s.t} className="p-6">
              <h2 className="text-lg font-semibold text-text-strong">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{s.c}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
