import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Logo } from "@/components/Logo";
import { GlowButton } from "@/components/GlowButton";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar — Morall Store" },
      { name: "description", content: "Acesse sua conta na Morall Store, o marketplace de gift cards." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("ok");
      setTimeout(() => navigate({ to: "/dashboard" }), 900);
    }, 1300);
  };

  return (
    <div className="relative grid min-h-screen lg:grid-cols-2">
      <BackgroundGlow />

      {/* Brand side */}
      <div className="relative hidden flex-col justify-between p-12 lg:flex">
        <Logo />
        <div>
          <h2 className="max-w-sm text-4xl font-bold leading-tight text-text-strong">
            Bem-vindo de volta ao seu <span className="text-gradient">painel premium</span>.
          </h2>
          <p className="mt-4 max-w-sm text-text-dim">
            Uma experiência rápida, privada e organizada para gerenciar suas consultas.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {["Acesso privado", "Pix automático", "Histórico protegido"].map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/40 px-3 py-1.5 text-xs text-text-soft"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-glow" /> {b}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs text-text-dim">© {new Date().getFullYear()} Morall Buscas</p>
      </div>

      {/* Form side */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass glow-ring w-full max-w-md rounded-3xl p-8"
        >
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold text-text-strong">Entrar</h1>
          <p className="mt-1 text-sm text-text-dim">Acesse sua conta para continuar.</p>

          <form onSubmit={submit} className="mt-7 space-y-4">
            <Field icon={Mail} label="E-mail" type="email" placeholder="voce@email.com" />
            <Field icon={Lock} label="Senha" type="password" placeholder="••••••••" />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-text-dim">
                <input type="checkbox" className="h-4 w-4 accent-[#35c5ff]" defaultChecked />
                Lembrar acesso
              </label>
              <button type="button" className="text-glow hover:underline">
                Esqueci minha senha
              </button>
            </div>

            <GlowButton type="submit" variant="primary" size="lg" className="w-full" disabled={status !== "idle"}>
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "ok" && <CheckCircle2 className="h-4 w-4" />}
              {status === "idle" && <>Entrar <ArrowRight className="h-4 w-4" /></>}
              {status === "loading" && "Entrando..."}
              {status === "ok" && "Acesso liberado!"}
            </GlowButton>
          </form>

          <p className="mt-6 text-center text-sm text-text-dim">
            Não tem conta?{" "}
            <Link to="/cadastro" className="font-medium text-glow hover:underline">
              Criar conta
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function Field({
  icon: Icon,
  label,
  ...props
}: { icon: React.ElementType; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-text-soft">{label}</label>
      <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-deep/50 px-3.5 transition-colors focus-within:border-glow/50">
        <Icon className="h-4.5 w-4.5 text-text-dim" />
        <input
          {...props}
          className="h-12 w-full bg-transparent text-sm text-text-strong outline-none placeholder:text-text-dim"
        />
      </div>
    </div>
  );
}
