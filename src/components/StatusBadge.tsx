import { cn } from "@/lib/utils";

type Tone = "success" | "warning" | "danger" | "info" | "neutral";

const toneMap: Record<Tone, string> = {
  success: "bg-success/15 text-success border-success/30",
  warning: "bg-warning/15 text-warning border-warning/30",
  danger: "bg-danger/15 text-danger border-danger/30",
  info: "bg-glow/15 text-glow border-glow/30",
  neutral: "bg-surface-elevated text-text-dim border-border",
};

const statusTone: Record<string, Tone> = {
  Concluída: "success",
  Aprovado: "success",
  Ativo: "success",
  Pendente: "warning",
  "Aguardando pagamento": "warning",
  Falhou: "danger",
  Cancelado: "danger",
};

export function StatusBadge({
  children,
  tone,
  className,
}: {
  children: string;
  tone?: Tone;
  className?: string;
}) {
  const resolved = tone ?? statusTone[children] ?? "neutral";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        toneMap[resolved],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
