<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";

// ── SEO ──────────────────────────────────────────────────────────────
useSeoMeta({
  title: "Projects — Gulman Azkiya | SEO Case Studies",
  description:
    "Selected SEO and content projects by Gulman Azkiya — including Suzuki Indonesia (22M organic sessions), BCA Life, Mamasuka, Ruangguru Skill Academy, and more.",
  ogTitle: "SEO Projects & Case Studies — Gulman Azkiya",
  ogDescription:
    "A portfolio of SEO and content work: 22M organic sessions for Suzuki, 45% keyword growth for Mamasuka, 4M clicks for Ruangguru Skill Academy.",
  ogUrl: "https://gulman.dev/project",
  ogImage: "https://gulman.dev/seo-specialist-gulman.jpg",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: "https://gulman.dev/project" }],
});

// ── Data ──────────────────────────────────────────────────────────────
const projects = [
  {
    name: "Suzuki Indonesia Website",
    desc: "SEO Specialist - Successfully delivered 22,408,909 organic sessions.",
    stack: ["SEO", "Next.js", "Notion"],
    image: "/Web Suzuki Indonesia.jpg",
    bgColor: "#ffffff",
    fit: "contain",
  },
  {
    name: "Suzuki Indonesia Website Dealer",
    desc: "SEO Specialist - Successfully increased organic traffic on 49 of 50 dealer websites compared to the previous year.",
    stack: ["Strategy", "Copy", "Webflow"],
    image: "/Suzuki Web Dealer.jpg",
    bgColor: "#000000",
    fit: "contain",
  },
  {
    name: "Mamasuka Website",
    desc: "SEO Specialist - Successfully increased the number of keywords in the Top 10 by 45.48% (from 1,284 to 1,868 keywords).",
    stack: ["Writing", "Ghost"],
    image: "/Website Mamasuka.jpg",
    bgColor: "#000000",
    fit: "contain",
  },
  {
    name: "iCar Indonesia Website",
    desc: "SEO Specialist - Successfully increased the number of keywords in the Top 10 by 45.48% (from 1,284 to 1,868 keywords).",
    stack: ["Tech SEO", "Sheets"],
    image: "/Web iCar Indonesia.jpg",
    bgColor: "#000000",
    fit: "contain",
  },
  {
    name: "BCA Life",
    desc: "Blog Editor & Coordinator - Successfully helped improve the blog's organic performance through articles produced by +76.70%.",
    stack: ["Outreach", "Pitchbox"],
    image: "/Blog BCA Life.jpg",
    bgColor: "#ffffff",
    fit: "contain",
  },
  {
    name: "Blog Skill Academy by Ruangguru",
    desc: "Web & SEO Writer - Drove content strategy and topic ownership for the Skill Academy Blog, achieving 4 million clicks from 90 million impressions.",
    stack: ["Analytics", "Looker"],
    image: "/Blog Skill Academy.jpg",
    bgColor: "#ffffff",
    fit: "contain",
  },
];
</script>

<template>
  <AppPageShell>
    <AppWindowTitleBar title="projects.sys">
      <div class="p-6 md:p-10">
        <h1 class="font-pixel text-2xl uppercase md:text-4xl">Selected Work</h1>
        <p class="mt-4 max-w-2xl font-mono-retro text-lg text-ink/80">
          A curated showcase of challenges solved, systems optimized, and measurable growth
          delivered.
        </p>
      </div>
    </AppWindowTitleBar>

    <hr class="my-12 border-t-[2px] border-ink" />

    <!-- Projects grid -->
    <section
      class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      aria-label="Project portfolio"
    >
      <AppWindowTitleBar v-for="project in projects" :key="project.name" :title="project.name">
        <div class="flex flex-col gap-4 p-4">
          <!-- Project Image with Retro Border -->
          <div
            class="aspect-[4/3] w-full border-[2px] border-ink overflow-hidden flex items-center justify-center bg-zinc-100"
          >
            <NuxtImg
              v-if="project.image"
              :src="project.image"
              :alt="project.name"
              class="w-full h-full transform-none transition-none"
              :style="{ objectFit: project.fit, backgroundColor: project.bgColor }"
            />
            <div
              v-else
              class="w-full h-full"
              style="
                background-image: repeating-linear-gradient(
                  45deg,
                  #1a1a1a 0 2px,
                  transparent 2px 8px
                );
                background-color: #eceff3;
              "
              aria-hidden="true"
            />
          </div>
          <p class="font-mono-retro text-base text-ink/85">{{ project.desc }}</p>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="tag in project.stack"
              :key="tag"
              class="border-[2px] border-ink px-2 py-1 font-mono-retro text-sm"
            >
              {{ tag }}
            </li>
          </ul>
          <AppRetroButton variant="primary" class="self-start">
            View Project
            <ChevronRight class="h-3.5 w-3.5" :stroke-width="3" />
          </AppRetroButton>
        </div>
      </AppWindowTitleBar>
    </section>
  </AppPageShell>
</template>
