import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">{children}</main>
      <footer className="border-t-[2px] border-ink">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 font-mono-retro text-base md:px-8">
          <span>© {new Date().getFullYear()} PORTFOLIO.SYS</span>
          <span>v1.0 — System 7</span>
        </div>
      </footer>
    </div>
  );
}
