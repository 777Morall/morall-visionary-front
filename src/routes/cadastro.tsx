import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Lock, User, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { Logo } from "@/components/Logo";
import { GlowButton } from "@/components/GlowButton";
import { Field } from "./login";

export const Route = createFileRoute("/cadastro")({
  head: () => ({
    meta: [
      { title: "Criar conta — Morall Store" },
      { name: "description", content: "Crie sua conta na Morall Store e comece a comprar e vender gift cards." },
    ],
  }),
  component: CadastroPage,
});

function CadastroPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("ok");
      setTimeout(() => navigate({ to: "/planos" }), 900);
    }, 1300);
  };

  return (
    <div className="relative grid min-h-screen lg:grid-cols-2">
      <BackgroundGlow />
      <div className="relative hidden flex-col justify-between p-12 lg:flex">
        <Logo />
        <div>
          <h2 className="max-w-sm text-4xl font-bold leading-tight text-text-strong">
            Seu acesso premium começa <span className="text-gradient">aqui</span>.
          </h2>
          <p className="mt-4 max-w-sm text-text-dim">
            Crie sua conta, escolha um plano e libere o painel após a confirmação do Pix.
          </p>
        </div>
        <p className="text-xs text-text-dim">© {new Date().getFullYear()} Morall Buscas</p>
      </div>

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
          <h1 className="text-2xl font-bold text-text-strong">Criar conta</h1>
          <p className="mt-1 text-sm text-text-dim">Leva menos de um minuto.</p>

          <form onSubmit={submit} className="mt-7 space-y-4">
            <Field icon={User} label="Nome" type="text" placeholder="Seu nome" />
            <Field icon={Mail} label="E-mail" type="email" placeholder="voce@email.com" />
            <Field icon={Lock} label="Senha" type="password" placeholder="••••••••" />
            <Field icon={Lock} label="Confirmar senha" type="password" placeholder="••••••••" />

            <label className="flex items-start gap-2 text-sm text-text-dim">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#35c5ff]" />
              <span>
                Li e concordo com os{" "}
                <Link to="/legal" className="text-glow hover:underline">
                  termos e a privacidade
                </Link>
                .
              </span>
            </label>

            <GlowButton type="submit" variant="primary" size="lg" className="w-full" disabled={status !== "idle"}>
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "ok" && <CheckCircle2 className="h-4 w-4" />}
              {status === "idle" && <>Criar conta <ArrowRight className="h-4 w-4" /></>}
              {status === "loading" && "Criando..."}
              {status === "ok" && "Conta criada!"}
            </GlowButton>
          </form>

          <p className="mt-6 text-center text-sm text-text-dim">
            Já tem conta?{" "}
            <Link to="/login" className="font-medium text-glow hover:underline">
              Entrar
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
