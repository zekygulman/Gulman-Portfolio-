import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Search, FileText, BarChart3, Crosshair } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { RetroButton } from "@/components/RetroButton";
import heroImage from "@/assets/seo-specialist-gulman.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — Retro Mac Portfolio" },
      { name: "description", content: "Personal portfolio in a retro Macintosh / Pixel OS aesthetic. SEO and content optimization specialist." },
      { property: "og:title", content: "Home — Retro Mac Portfolio" },
      { property: "og:description", content: "Personal portfolio in a retro Macintosh / Pixel OS aesthetic." },
    ],
  }),
  component: Index,
});

const features = [
  { Icon: Search, title: "SEO Strategy", desc: "Keyword research, on-page SEO, and technical optimization." },
  { Icon: FileText, title: "Content Optimization", desc: "Crafting and optimizing content that ranks and engages." },
  { Icon: BarChart3, title: "Performance Analysis", desc: "Data-driven insights to improve rankings and measure growth." },
  { Icon: Crosshair, title: "Ongoing Support", desc: "Continuous optimization and support to stay ahead of the competition." },
];

function Index() {
  return (
    <PageShell>
      {/* ── Hero Section ── full-bleed, matches reference */}
      <section
        id="hero"
        className="hero-bleed relative overflow-hidden"
        style={{ minHeight: "420px" }}
      >
        {/* Full-bleed background — grainy left area gives text contrast naturally */}
        <img
          id="hero-image"
          src={heroImage}
          alt="Gulman — SEO and Content Optimization Specialist, retro Mac desktop with analytics tools"
          className="absolute inset-0 h-full w-full object-cover object-right"
          style={{ imageRendering: "auto" }}
        />

        {/* Text — sits directly on the image, no panel */}
        <div
          className="relative z-10 flex h-full flex-col justify-center px-8 py-10 md:px-12 lg:px-16"
          style={{ minHeight: "420px", maxWidth: "580px" }}
        >
          {/* "Hello, I'm" badge */}
          <span className="inline-flex w-fit items-center bg-ink px-3 py-[5px] font-mono-retro text-sm leading-none text-white">
            Hello, I'm
          </span>

          {/* Large heading */}
          <h1
            className="mt-3 font-pixel uppercase leading-[1.15] tracking-tight text-ink"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)" }}
          >
            SEO AND<br />CONTENT<br />OPTIMIZATION
          </h1>

          {/* Description */}
          <p
            className="mt-4 font-mono-retro leading-relaxed text-ink"
            style={{ fontSize: "0.95rem", maxWidth: "34ch" }}
          >
            Helping brands improve visibility,<br />
            drive organic traffic, and grow through<br />
            strategic SEO and high-value content.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/project">
              <RetroButton variant="primary">
                View Projects <ChevronRight className="h-3.5 w-3.5" strokeWidth={3} />
              </RetroButton>
            </Link>
            <Link to="/about">
              <RetroButton variant="outline">About Me</RetroButton>
            </Link>
          </div>
        </div>
      </section>

      <hr className="my-12 border-t-[2px] border-ink" />

      {/* ── Features Grid ── */}
      <section className="grid grid-cols-1 divide-y-[2px] divide-ink border-y-0 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x-[2px]">
        {features.map(({ Icon, title, desc }, i) => (
          <div
            key={title}
            className={`flex gap-4 p-6 ${i < 2 ? "sm:border-b-[2px] sm:border-ink lg:border-b-0" : ""} ${i % 2 === 0 ? "sm:border-r-[2px] sm:border-ink lg:border-r-0" : ""}`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border-[2px] border-ink">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-pixel text-xs uppercase">{title}</h3>
              <p className="mt-2 font-mono-retro text-base text-ink/80">{desc}</p>
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
