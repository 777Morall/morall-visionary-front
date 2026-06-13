import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Produto",
    links: [
      { label: "Recursos", to: "/" as const, hash: "recursos" },
      { label: "Planos", to: "/planos" as const, hash: undefined },
      { label: "Segurança", to: "/" as const, hash: "seguranca" },
      { label: "FAQ", to: "/" as const, hash: "faq" },
    ],
  },
  {
    title: "Conta",
    links: [
      { label: "Entrar", to: "/login" as const, hash: undefined },
      { label: "Criar conta", to: "/cadastro" as const, hash: undefined },
      { label: "Dashboard", to: "/dashboard" as const, hash: undefined },
      { label: "Checkout", to: "/checkout" as const, hash: undefined },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de uso", to: "/legal" as const, hash: undefined },
      { label: "Privacidade", to: "/legal" as const, hash: undefined },
      { label: "Uso responsável", to: "/legal" as const, hash: undefined },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-soft/60">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(53,197,255,0.5), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-dim">
              Uma plataforma premium de consultas, com painel privado, organizado e pensado para
              um uso rápido, seguro e responsável.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-text-strong">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      hash={l.hash}
                      className="text-sm text-text-dim transition-colors hover:text-glow"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-text-dim sm:flex-row">
          <p>© {new Date().getFullYear()} Morall Buscas. Todos os direitos reservados.</p>
          <p className="text-xs">Plataforma de demonstração — dados fictícios.</p>
        </div>
      </div>
    </footer>
  );
}
