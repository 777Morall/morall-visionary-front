import type { ReactNode } from "react";
import { BackgroundGlow } from "./BackgroundGlow";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <BackgroundGlow />
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
