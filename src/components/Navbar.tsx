import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/project", label: "Project" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b-[2px] border-ink bg-cream">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        {/* Dots */}
        <div className="flex items-center gap-1.5">
          <span className="block h-2.5 w-2.5 bg-ink" />
          <span className="block h-2.5 w-2.5 bg-ink" />
          <span className="block h-2.5 w-2.5 bg-ink" />
        </div>

        {/* Desktop nav */}
        <ul className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="font-mono-retro text-lg text-ink hover:opacity-70"
                activeProps={{ className: "underline underline-offset-[6px] decoration-[2px]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Portfolio pill */}
        <button
          type="button"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2 font-pixel text-[10px] uppercase tracking-wider text-white md:inline-flex"
        >
          Portfolio <ChevronDown className="h-3.5 w-3.5" strokeWidth={3} />
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center border-[2px] border-ink bg-cream md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t-[2px] border-ink md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to} className="border-b-[2px] border-ink last:border-b-0">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 font-mono-retro text-lg text-ink"
                  activeProps={{ className: "bg-ink text-white" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
