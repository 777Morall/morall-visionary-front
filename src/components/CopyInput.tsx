import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function CopyInput({
  value,
  label,
  className,
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className={cn("w-full", className)}>
      {label && <p className="mb-2 text-sm text-text-dim">{label}</p>}
      <div className="flex items-center gap-2 rounded-xl border border-border bg-bg-deep/60 p-2 pl-4">
        <code className="flex-1 truncate font-mono text-sm text-text-soft">{value}</code>
        <button
          onClick={copy}
          className={cn(
            "flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all",
            copied
              ? "bg-success/15 text-success"
              : "brand-gradient text-primary-foreground hover:-translate-y-0.5",
          )}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
    </div>
  );
}
