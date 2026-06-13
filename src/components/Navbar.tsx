import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { GlowButton } from "./GlowButton";

const navLinks = [
  { label: "Início", to: "/" as const, hash: undefined },
  { label: "Recursos", to: "/" as const, hash: "recursos" },
  { label: "Planos", to: "/planos" as const, hash: undefined },
  { label: "Segurança", to: "/" as const, hash: "seguranca" },
  { label: "FAQ", to: "/" as const, hash: "faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg-deep/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="rounded-full px-4 py-2 text-sm font-medium text-text-dim transition-colors hover:text-text-strong"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <GlowButton asChild variant="ghost" size="sm">
            <Link to="/login">Entrar</Link>
          </GlowButton>
          <GlowButton asChild variant="primary" size="sm">
            <Link to="/planos">Assinar agora</Link>
          </GlowButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface/50 text-text-strong backdrop-blur-md lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-bg-deep/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-5 sm:px-6">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={l.to}
                    hash={l.hash}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-text-soft hover:bg-surface-elevated"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 flex flex-col gap-3">
                <GlowButton asChild variant="outline" size="md" onClick={() => setOpen(false)}>
                  <Link to="/login">Entrar</Link>
                </GlowButton>
                <GlowButton asChild variant="primary" size="md" onClick={() => setOpen(false)}>
                  <Link to="/planos">Assinar agora</Link>
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
