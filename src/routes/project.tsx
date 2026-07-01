import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { WindowTitleBar } from "@/components/WindowTitleBar";
import { RetroButton } from "@/components/RetroButton";

export const Route = createFileRoute("/project")({
  head: () => ({
    meta: [
      { title: "Projects — Retro Mac Portfolio" },
      { name: "description", content: "Selected projects: SEO, content, and growth work shipped for real clients." },
      { property: "og:title", content: "Projects — Retro Mac Portfolio" },
      { property: "og:description", content: "Selected projects." },
    ],
  }),
  component: ProjectPage,
});

const projects = [
  {
    name: "Suzuki Indonesia Website", desc: "SEO Specialist - Successfully delivered 22,408,909 organic sessions.", stack: ["SEO", "Next.js", "Notion"]
  },
  { name: "Suzuki Indonesia Website Dealer", desc: "SEO Specialist - Successfully increased organic traffic on 49 of 50 dealer websites compared to the previous year.", stack: ["Strategy", "Copy", "Webflow"] },
  { name: "Mamasuka Website", desc: "SEO Specialist - Successfully increased the number of keywords in the Top 10 by 45.48% (from 1,284 to 1,868 keywords).", stack: ["Writing", "Ghost"] },
  { name: "BCA Life ", desc: "Blog Editor & Coordinator - Personal Project - Successfully helped improve the blog's organic performance through articles produced by +76.70%.", stack: ["Tech SEO", "Sheets"] },
  { name: "Kount", desc: "Web & SEO Writer - Personal Project - Outreach engine that placed 180+ contextual backlinks at DR 60+.", stack: ["Outreach", "Pitchbox"] },
  { name: "Ruangguru", desc: "Web & SEO Writer - Drove content strategy and topic ownership for the Skill Academy Blog, achieving 4 million clicks from 90 million impressions.", stack: ["Analytics", "Looker"] },
];

function ProjectPage() {
  return (
    <PageShell>
      <WindowTitleBar title="projects.sys">
        <div className="p-6 md:p-10">
          <h1 className="font-pixel text-2xl uppercase md:text-4xl">Selected Work</h1>
          <p className="mt-4 max-w-2xl font-mono-retro text-lg text-ink/80">
            A small archive of projects — each one a window into a different problem.
          </p>
        </div>
      </WindowTitleBar>

      <hr className="my-12 border-t-[2px] border-ink" />

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <WindowTitleBar key={p.name} title={p.name}>
            <div className="flex flex-col gap-4 p-4">
              <div
                className="aspect-[4/3] w-full border-[2px] border-ink"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #1A1A1A 0 2px, transparent 2px 8px)",
                  backgroundColor: "#ECEFF3",
                }}
                aria-hidden
              />
              <p className="font-mono-retro text-base text-ink/85">{p.desc}</p>
              <ul className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="border-[2px] border-ink px-2 py-1 font-mono-retro text-sm">
                    {s}
                  </li>
                ))}
              </ul>
              <RetroButton variant="primary" className="self-start">
                View Project <ChevronRight className="h-3.5 w-3.5" strokeWidth={3} />
              </RetroButton>
            </div>
          </WindowTitleBar>
        ))}
      </section>
    </PageShell>
  );
}
