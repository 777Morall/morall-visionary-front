import { motion } from "motion/react";
import { usageData } from "@/lib/mock";

export function MockChart() {
  const max = Math.max(...usageData.map((d) => d.value));
  return (
    <div className="flex h-44 items-end justify-between gap-3">
      {usageData.map((d, i) => (
        <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
          <div className="relative flex h-full w-full items-end">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(d.value / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-t-lg"
              style={{
                background: "linear-gradient(180deg, #35c5ff, rgba(0,125,237,0.25))",
                boxShadow: "0 0 24px -6px rgba(53,197,255,0.6)",
              }}
            />
          </div>
          <span className="text-xs text-text-dim">{d.month}</span>
        </div>
      ))}
    </div>
  );
}
