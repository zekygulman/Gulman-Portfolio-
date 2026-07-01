import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { WindowTitleBar } from "@/components/WindowTitleBar";
import aboutAvatar from "@/assets/gulman-azkiya-profile.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Retro Mac Portfolio" },
      { name: "description", content: "About the author — background, skills, and experience in SEO and content." },
      { property: "og:title", content: "About — Retro Mac Portfolio" },
      { property: "og:description", content: "Background, skills, and experience." },
    ],
  }),
  component: AboutPage,
});

const skills = [
  "SEO", "Content Strategy", "Keyword Research", "Technical SEO",
  "Analytics", "Link Building", "n8n", "AI Automation",
];

const experience = [
  { role: "SEO Specialist", period: "Floothink Digital Agency · 2023 — Present", desc: "Led organic growth strategy, increased traffic 240% YoY through content hubs and technical fixes." },
  { role: "Editor & Blog Coordinator", period: "BCA Life · 2025 — Present", desc: "Built editorial calendars and topic clusters for B2B SaaS clients. Owned end-to-end content production." },
  { role: "Web & SEO Writer", period: "Ruangguru · 2019 — 2022", desc: "Audited 30+ sites, owned keyword research and on-page recommendations." },
];

function AboutPage() {
  return (
    <PageShell>
      <WindowTitleBar title="about.sys">
        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-[260px_1fr] md:gap-10 md:p-10">
          <div className="border-[3px] border-ink bg-cream p-3">
            <img
              src={aboutAvatar}
              alt="Profile portrait of Gulman Azkiya"
              width={768}
              height={768}
              loading="lazy"
              className="block aspect-square w-full object-cover object-center"
              style={{ imageRendering: "auto" }}
            />
          </div>
          <div>
            <h1 className="font-pixel text-2xl uppercase md:text-4xl">About Me</h1>
            <p className="mt-6 font-mono-retro text-lg text-ink/80">
              I'm a content & SEO specialist who treats the web like a well-organized desktop — clean structure, sharp typography, and obsessive attention to the details that compound over time.
            </p>
            <p className="mt-4 font-mono-retro text-lg text-ink/80">
              Over the last several years I've helped startups and editorial teams build organic channels that don't depend on burning cash. I believe in slow, honest growth — the kind that survives algorithm updates.
            </p>
          </div>
        </div>
      </WindowTitleBar>

      <hr className="my-12 border-t-[2px] border-ink" />

      <section>
        <h2 className="font-pixel text-xl uppercase">Skills</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <li
              key={s}
              className="border-[2px] border-ink bg-cream px-3 py-2 font-mono-retro text-base"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-12 border-t-[2px] border-ink" />

      <section>
        <h2 className="font-pixel text-xl uppercase">Experience</h2>
        <div className="mt-6 grid gap-6">
          {experience.map((e) => (
            <article
              key={e.role}
              className="border-[3px] border-ink bg-cream p-6"
            >
              <h3 className="font-pixel text-sm uppercase">{e.role}</h3>
              <p className="mt-2 font-mono-retro text-base text-ink/70">{e.period}</p>
              <p className="mt-3 font-mono-retro text-lg text-ink/85">{e.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
