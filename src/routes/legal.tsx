import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/PublicLayout";
import { GlassCard } from "@/components/GlassCard";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Termos e Privacidade — Morall Buscas" },
      { name: "description", content: "Termos de uso, privacidade e diretrizes de uso responsável da Morall Buscas." },
    ],
  }),
  component: Legal,
});

const sections = [
  { t: "1. Uso responsável", c: "A Morall Buscas deve ser utilizada de forma responsável e autorizada. É proibido qualquer uso que viole leis aplicáveis ou direitos de terceiros." },
  { t: "2. Assinatura e pagamento", c: "O acesso é concedido mediante assinatura mensal paga via Pix. O acesso ao painel é liberado após a confirmação do pagamento." },
  { t: "3. Privacidade", c: "Tratamos seus dados de acesso com confidencialidade. Logs de atividade são mantidos para segurança e transparência." },
  { t: "4. Limites e antiabuso", c: "Cada plano possui limites de consultas. Medidas automáticas de antiabuso podem suspender contas com uso irregular." },
  { t: "5. Cancelamento", c: "Você pode cancelar a qualquer momento pelo painel. O acesso permanece ativo até o fim do ciclo vigente." },
  { t: "6. Demonstração", c: "Esta é uma plataforma de demonstração de interface. Nenhum dado real é processado e os pagamentos são simulados." },
];

function Legal() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-strong sm:text-4xl">Termos & Privacidade</h1>
        <p className="mt-3 text-text-dim">Última atualização: 13 de junho de 2026.</p>

        <div className="mt-10 space-y-4">
          {sections.map((s) => (
            <GlassCard key={s.t} className="p-6">
              <h2 className="text-lg font-semibold text-text-strong">{s.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{s.c}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
