import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  LayoutDashboard,
  Search,
  History,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
} from "lucide-react";
import { type ReactNode, useState } from "react";
import { Logo } from "./Logo";
import { GlowButton } from "./GlowButton";
import { BackgroundGlow } from "./BackgroundGlow";

const nav = [
  { label: "Dashboard", to: "/dashboard" as const, icon: LayoutDashboard },
  { label: "Nova consulta", to: "/consulta" as const, icon: Search },
  { label: "Histórico", to: "/historico" as const, icon: History },
  { label: "Assinatura", to: "/checkout" as const, icon: CreditCard },
  { label: "Admin", to: "/admin" as const, icon: Settings },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="px-2 py-3">
        <Logo />
      </div>
      <nav className="mt-2 flex flex-1 flex-col gap-1">
        {nav.map((item) => {
          const active = pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={`group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "bg-glow/12 text-text-strong border border-glow/30 shadow-[0_0_24px_-8px_rgba(53,197,255,0.6)]"
                  : "text-text-dim border border-transparent hover:bg-surface-elevated hover:text-text-strong"
              }`}
            >
              <item.icon className={`h-4.5 w-4.5 ${active ? "text-glow" : ""}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <Link
        to="/login"
        onClick={onNavigate}
        className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-text-dim transition-colors hover:bg-danger/10 hover:text-danger"
      >
        <LogOut className="h-4.5 w-4.5" />
        Sair
      </Link>
    </div>
  );
}

export function DashboardLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen">
      <BackgroundGlow />
      <div className="mx-auto flex max-w-[1500px]">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-bg-soft/50 backdrop-blur-xl lg:block">
          <SidebarContent />
        </aside>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 bg-bg-deep/70 backdrop-blur-sm lg:hidden"
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-bg-soft backdrop-blur-xl lg:hidden"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-3 top-4 grid h-9 w-9 place-items-center rounded-lg text-text-dim hover:text-text-strong"
                >
                  <X className="h-5 w-5" />
                </button>
                <SidebarContent onNavigate={() => setOpen(false)} />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-bg-deep/70 px-4 backdrop-blur-xl sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <button
                onClick={() => setOpen(true)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface/50 text-text-strong lg:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <h1 className="truncate text-lg font-semibold text-text-strong">{title}</h1>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface/50 text-text-dim transition-colors hover:text-text-strong">
                <Bell className="h-4.5 w-4.5" />
                <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-glow shadow-[0_0_8px_rgba(53,197,255,0.9)]" />
              </button>
              <GlowButton asChild variant="primary" size="sm" className="hidden sm:inline-flex">
                <Link to="/consulta">Nova consulta</Link>
              </GlowButton>
              <div className="flex items-center gap-2 rounded-full border border-border bg-surface/50 py-1 pl-1 pr-3">
                <span className="grid h-8 w-8 place-items-center rounded-full brand-gradient text-sm font-bold text-primary-foreground">
                  M
                </span>
                <span className="hidden text-sm font-medium text-text-soft sm:block">Marina</span>
              </div>
            </div>
          </header>
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
