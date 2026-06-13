import { useMemo } from "react";

// Deterministic pseudo-QR pattern (purely decorative / mocked)
export function PaymentQRCode({ seed = "morall" }: { seed?: string }) {
  const cells = useMemo(() => {
    const size = 21;
    const grid: boolean[] = [];
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    for (let i = 0; i < size * size; i++) {
      h = (h * 1103515245 + 12345) & 0x7fffffff;
      grid.push((h >> 16) % 2 === 0);
    }
    return { size, grid };
  }, [seed]);

  const finder = (r: number, c: number) =>
    (r < 7 && c < 7) || (r < 7 && c >= cells.size - 7) || (r >= cells.size - 7 && c < 7);

  return (
    <div className="relative mx-auto w-fit rounded-2xl bg-text-strong p-4 shadow-[0_0_50px_-10px_rgba(53,197,255,0.55)]">
      <div
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: `repeat(${cells.size}, 8px)` }}
      >
        {cells.grid.map((on, idx) => {
          const r = Math.floor(idx / cells.size);
          const c = idx % cells.size;
          const isFinder = finder(r, c);
          return (
            <div
              key={idx}
              className="h-2 w-2 rounded-[1px]"
              style={{ background: isFinder || on ? "#01040d" : "transparent" }}
            />
          );
        })}
      </div>
      {/* Finder corners overlay for realism */}
      <FinderCorner className="left-4 top-4" />
      <FinderCorner className="right-4 top-4" />
      <FinderCorner className="bottom-4 left-4" />
    </div>
  );
}

function FinderCorner({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute h-[52px] w-[52px] ${className}`}>
      <div className="absolute inset-0 rounded-md border-[6px] border-bg-deep bg-text-strong" />
      <div className="absolute inset-[14px] rounded-sm bg-bg-deep" />
    </div>
  );
}
