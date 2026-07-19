<script setup lang="ts">
// ── SEO ──────────────────────────────────────────────────────────────
useSeoMeta({
  title: "About — Gulman Azkiya | SEO & Content Specialist",
  description:
    "Learn about Gulman Azkiya — SEO Specialist at Floothink Digital Agency with experience driving organic growth for Suzuki Indonesia, BCA Life, Ruangguru, and more.",
  ogTitle: "About Gulman Azkiya — SEO & Content Specialist",
  ogDescription:
    "SEO and Content Specialist with a track record of 240% YoY traffic growth, content hubs, and technical SEO fixes.",
  ogUrl: "https://gulman.dev/about",
  ogImage: "https://gulman.dev/gulman-azkiya-profile.jpg",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: "https://gulman.dev/about" }],
});

// ── Data ──────────────────────────────────────────────────────────────
const skills = [
  "SEO",
  "Content Strategy",
  "Keyword Research",
  "Technical SEO",
  "Analytics",
  "Link Building",
  "n8n",
  "AI Automation",
];

const experience = [
  {
    role: "SEO Specialist",
    period: "Floothink Digital Agency · 2023 — Present",
    desc: "Led organic growth strategy, increased traffic 240% YoY through content hubs and technical fixes.",
  },
  {
    role: "Editor & Blog Coordinator",
    period: "BCA Life · 2025 — Present",
    desc: "Built editorial calendars and topic clusters for B2B SaaS clients. Owned end-to-end content production.",
  },
  {
    role: "Web & SEO Writer",
    period: "Ruangguru · 2019 — 2022",
    desc: "Audited 30+ sites, owned keyword research and on-page recommendations.",
  },
];
</script>

<template>
  <AppPageShell>
    <AppWindowTitleBar title="about.sys">
      <div class="grid grid-cols-1 gap-8 p-6 md:grid-cols-[260px_1fr] md:gap-10 md:p-10">
        <!-- Avatar -->
        <div class="border-[3px] border-ink bg-cream p-3">
          <NuxtImg
            src="/gulman-azkiya-profile.jpg"
            alt="Profile portrait of Gulman Azkiya, SEO Specialist"
            width="768"
            height="768"
            format="webp"
            quality="80"
            loading="lazy"
            class="block aspect-square w-full object-cover object-center"
          />
        </div>
        <!-- Bio -->
        <div>
          <h1 class="font-pixel text-2xl uppercase md:text-4xl">About Me</h1>
          <p class="mt-6 font-mono-retro text-lg text-ink/80">
            Dedicated SEO Professional specializing in Content Strategy and On-page Optimization to
            maximize audience relevance. Experienced in agency environments, adept at using
            Technical SEO Audits to maintain excellent website performance and ensure content is
            optimized for search and AI visibility.
          </p>
          <p class="mt-4 font-mono-retro text-lg text-ink/80">
            Leverages essential tools (GA, Ahrefs, Semrush) to execute keyword research and generate
            actionable insights. Possesses strong communication skills, a proactive mindset, and
            excellent teamwork abilities.
          </p>
        </div>
      </div>
    </AppWindowTitleBar>

    <hr class="my-12 border-t-[2px] border-ink" />

    <!-- Skills -->
    <section aria-label="Skills and expertise">
      <h2 class="font-pixel text-xl uppercase">Skills</h2>
      <ul class="mt-6 flex flex-wrap gap-3">
        <li
          v-for="skill in skills"
          :key="skill"
          class="border-[2px] border-ink bg-cream px-3 py-2 font-mono-retro text-base"
        >
          {{ skill }}
        </li>
      </ul>
    </section>

    <hr class="my-12 border-t-[2px] border-ink" />

    <!-- Experience -->
    <section aria-label="Work experience">
      <h2 class="font-pixel text-xl uppercase">Experience</h2>
      <div class="mt-6 grid gap-6">
        <article
          v-for="item in experience"
          :key="item.role"
          class="border-[3px] border-ink bg-cream p-6"
        >
          <h3 class="font-pixel text-sm uppercase">{{ item.role }}</h3>
          <p class="mt-2 font-mono-retro text-base text-ink/70">
            {{ item.period }}
          </p>
          <p class="mt-3 font-mono-retro text-lg text-ink/85">{{ item.desc }}</p>
        </article>
      </div>
    </section>
  </AppPageShell>
</template>
