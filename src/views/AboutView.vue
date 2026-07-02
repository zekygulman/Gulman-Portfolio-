<script setup lang="ts">
import PageShell from "@/components/PageShell.vue";
import WindowTitleBar from "@/components/WindowTitleBar.vue";
import aboutAvatar from "@/assets/gulman-azkiya-profile.jpg";

const skills = [
  "SEO", "Content Strategy", "Keyword Research", "Technical SEO",
  "Analytics", "Link Building", "n8n", "AI Automation",
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
  <PageShell>
    <WindowTitleBar title="about.sys">
      <div class="grid grid-cols-1 gap-8 p-6 md:grid-cols-[260px_1fr] md:gap-10 md:p-10">
        <!-- Avatar -->
        <div class="border-[3px] border-ink bg-cream p-3">
          <img
            :src="aboutAvatar"
            alt="Profile portrait of Gulman Azkiya"
            width="768"
            height="768"
            loading="lazy"
            class="block aspect-square w-full object-cover object-center"
            style="image-rendering: auto"
          />
        </div>
        <!-- Bio -->
        <div>
          <h1 class="font-pixel text-2xl uppercase md:text-4xl">About Me</h1>
          <p class="mt-6 font-mono-retro text-lg text-ink/80">
            I'm a content & SEO specialist who treats the web like a well-organized desktop — clean structure, sharp typography, and obsessive attention to the details that compound over time.
          </p>
          <p class="mt-4 font-mono-retro text-lg text-ink/80">
            Over the last several years I've helped startups and editorial teams build organic channels that don't depend on burning cash. I believe in slow, honest growth — the kind that survives algorithm updates.
          </p>
        </div>
      </div>
    </WindowTitleBar>

    <hr class="my-12 border-t-[2px] border-ink" />

    <!-- Skills -->
    <section>
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
    <section>
      <h2 class="font-pixel text-xl uppercase">Experience</h2>
      <div class="mt-6 grid gap-6">
        <article
          v-for="item in experience"
          :key="item.role"
          class="border-[3px] border-ink bg-cream p-6"
        >
          <h3 class="font-pixel text-sm uppercase">{{ item.role }}</h3>
          <p class="mt-2 font-mono-retro text-base text-ink/70">{{ item.period }}</p>
          <p class="mt-3 font-mono-retro text-lg text-ink/85">{{ item.desc }}</p>
        </article>
      </div>
    </section>
  </PageShell>
</template>
