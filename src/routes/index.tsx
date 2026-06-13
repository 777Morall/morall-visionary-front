import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Lock,
  QrCode,
  Wallet,
  CheckCircle2,
} from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PublicLayout } from "@/components/PublicLayout";
import { GlowButton } from "@/components/GlowButton";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { features, steps, plans, securityItems } from "@/lib/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Morall Buscas — Consultas rápidas em uma plataforma premium" },
      {
        name: "description",
        content:
          "Assine um plano mensal e acesse um painel moderno, privado e organizado. Pagamento via Pix, acesso liberado na hora.",
      },
    ],
  }),
  component: Landing,
});

const heroBadges = ["Pix automático", "Assinatura mensal", "Acesso privado", "Interface premium"];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function Landing() {
  return (
    <PublicLayout>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Security />
      <Faq />
      <CtaBand />
    </PublicLayout>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium text-glow backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Plataforma premium de consultas
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-text-strong sm:text-5xl lg:text-6xl">
            Consultas rápidas em uma{" "}
            <span className="text-gradient glow-text">plataforma premium</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-dim">
            Assine um plano mensal e acesse um painel moderno, privado e organizado para gerenciar
            suas consultas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GlowButton asChild variant="primary" size="lg">
              <Link to="/cadastro">
                Começar agora <ArrowRight className="h-4 w-4" />
              </Link>
            </GlowButton>
            <GlowButton asChild variant="outline" size="lg">
              <Link to="/planos">Ver planos</Link>
            </GlowButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {heroBadges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/40 px-3 py-1.5 text-xs text-text-soft backdrop-blur-md"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-glow" />
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2.5rem] opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle at 60% 40%, rgba(53,197,255,0.4), transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass glow-ring relative rounded-3xl p-5"
      >
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg brand-gradient text-xs font-bold text-primary-foreground">
              M
            </span>
            <span className="text-sm font-semibold text-text-strong">Dashboard</span>
          </div>
          <span className="rounded-full bg-success/15 px-2.5 py-1 text-xs font-medium text-success">
            Plano Pro ativo
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { l: "Consultas restantes", v: "212" },
            { l: "Realizadas no mês", v: "138" },
          ].map((c) => (
            <div key={c.l} className="rounded-xl border border-border bg-bg-deep/50 p-4">
              <p className="text-xs text-text-dim">{c.l}</p>
              <p className="mt-1 text-2xl font-bold text-text-strong">{c.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-border bg-bg-deep/50 p-4">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="text-text-dim">Uso mensal</span>
            <span className="text-glow">+18,9%</span>
          </div>
          <div className="flex h-20 items-end gap-2">
            {[40, 70, 55, 90, 75, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md"
                style={{
                  height: `${h}%`,
                  background: "linear-gradient(180deg, #35c5ff, rgba(0,125,237,0.2))",
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <FloatChip
        icon={QrCode}
        title="Pagamento via Pix"
        sub="Confirmação automática"
        className="-left-4 top-8 sm:-left-8"
        delay={0.4}
      />
      <FloatChip
        icon={Lock}
        title="Histórico protegido"
        sub="Ambiente privado"
        className="-right-4 bottom-10 sm:-right-6"
        delay={0.6}
      />
    </motion.div>
  );
}

function FloatChip({
  icon: Icon,
  title,
  sub,
  className,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  sub: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute hidden items-center gap-3 rounded-2xl border border-glow/30 bg-bg-soft/90 p-3 pr-4 backdrop-blur-xl sm:flex ${className}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-glow/15 text-glow">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-text-strong">{title}</p>
        <p className="text-xs text-text-dim">{sub}</p>
      </div>
    </motion.div>
  );
}

function Features() {
  return (
    <section id="recursos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Recursos"
        title="Tudo que você precisa em um só painel"
        subtitle="Uma experiência rápida, privada e organizada para gerenciar suas consultas com tranquilidade."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Como funciona"
        title="Do cadastro à primeira consulta"
        subtitle="Um fluxo simples e direto para você começar em minutos."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative rounded-2xl border border-border bg-surface/40 p-6 backdrop-blur-md"
          >
            <span className="text-3xl font-bold text-gradient">{s.n}</span>
            <h3 className="mt-3 text-base font-semibold text-text-strong">{s.title}</h3>
            <p className="mt-1.5 text-sm text-text-dim">{s.desc}</p>
            {i < steps.length - 1 && (
              <span className="absolute right-[-14px] top-1/2 hidden h-px w-7 bg-glow/40 md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="planos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Planos"
        title="Escolha o plano ideal para seu uso"
        subtitle="Sem fidelidade. Faça upgrade, downgrade ou cancele quando quiser."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
        {plans.map((p, i) => (
          <PricingCard key={p.id} plan={p} index={i} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/planos" className="text-sm font-medium text-glow hover:underline">
          Ver comparativo completo →
        </Link>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section id="seguranca" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-glow">
              <ShieldCheck className="h-3.5 w-3.5" /> Segurança
            </span>
            <h2 className="mt-5 text-3xl font-bold text-text-strong sm:text-4xl">
              Um ambiente privado e responsável
            </h2>
            <p className="mt-4 text-text-dim">
              Use a plataforma de forma responsável e autorizada. Controle de acesso, logs de
              atividade e limites antiabuso fazem parte do produto.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-glow/20 bg-glow/5 p-4">
              <Zap className="h-5 w-5 shrink-0 text-glow" />
              <p className="text-sm text-text-soft">
                Seu acesso premium começa após a confirmação do Pix.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {securityItems.map((s, i) => {
              const Icon = (Icons[s.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Shield;
              return (
                <motion.div
                  key={s.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-bg-deep/40 p-5"
                >
                  <Icon className="h-5 w-5 text-glow" />
                  <h3 className="mt-3 text-sm font-semibold text-text-strong">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-text-dim">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
      <FAQAccordion />
    </section>
  );
}

function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-glow/30 bg-surface-elevated/60 p-10 text-center backdrop-blur-md sm:p-16"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 w-2/3 opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(53,197,255,0.4), transparent 70%)" }}
        />
        <Wallet className="relative mx-auto h-10 w-10 text-glow" />
        <h2 className="relative mt-5 text-3xl font-bold text-text-strong sm:text-4xl">
          Comece sua experiência premium hoje
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-text-dim">
          Gerencie sua assinatura em poucos cliques e tenha acesso a um painel feito para velocidade.
        </p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <GlowButton asChild variant="primary" size="lg">
            <Link to="/cadastro">
              Criar minha conta <ArrowRight className="h-4 w-4" />
            </Link>
          </GlowButton>
          <GlowButton asChild variant="outline" size="lg">
            <Link to="/planos">Ver planos</Link>
          </GlowButton>
        </div>
      </motion.div>
    </section>
  );
}
