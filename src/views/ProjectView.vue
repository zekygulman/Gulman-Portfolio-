<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
import PageShell from "@/components/PageShell.vue";
import WindowTitleBar from "@/components/WindowTitleBar.vue";
import RetroButton from "@/components/RetroButton.vue";

const projects = [
  {
    name: "Suzuki Indonesia Website",
    desc: "SEO Specialist - Successfully delivered 22,408,909 organic sessions.",
    stack: ["SEO", "Next.js", "Notion"],
  },
  {
    name: "Suzuki Indonesia Website Dealer",
    desc: "SEO Specialist - Successfully increased organic traffic on 49 of 50 dealer websites compared to the previous year.",
    stack: ["Strategy", "Copy", "Webflow"],
  },
  {
    name: "Mamasuka Website",
    desc: "SEO Specialist - Successfully increased the number of keywords in the Top 10 by 45.48% (from 1,284 to 1,868 keywords).",
    stack: ["Writing", "Ghost"],
  },
  {
    name: "iCar Indonesia Website",
    desc: "SEO Specialist - Successfully increased the number of keywords in the Top 10 by 45.48% (from 1,284 to 1,868 keywords).",
    stack: ["Tech SEO", "Sheets"],
  },
  {
    name: "BCA Life",
    desc: "Blog Editor & Coordinator - Successfully helped improve the blog's organic performance through articles produced by +76.70%.",
    stack: ["Outreach", "Pitchbox"],
  },
  {
    name: "Ruangguru",
    desc: "Web & SEO Writer - Drove content strategy and topic ownership for the Skill Academy Blog, achieving 4 million clicks from 90 million impressions.",
    stack: ["Analytics", "Looker"],
  },
];
</script>

<template>
  <PageShell>
    <WindowTitleBar title="projects.sys">
      <div class="p-6 md:p-10">
        <h1 class="font-pixel text-2xl uppercase md:text-4xl">Selected Work</h1>
        <p class="mt-4 max-w-2xl font-mono-retro text-lg text-ink/80">
          A small archive of projects — each one a window into a different problem.
        </p>
      </div>
    </WindowTitleBar>

    <hr class="my-12 border-t-[2px] border-ink" />

    <!-- Projects grid -->
    <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WindowTitleBar v-for="project in projects" :key="project.name" :title="project.name">
        <div class="flex flex-col gap-4 p-4">
          <!-- Placeholder pattern -->
          <div
            class="aspect-[4/3] w-full border-[2px] border-ink"
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
          <RetroButton variant="primary" class="self-start">
            View Project <ChevronRight class="h-3.5 w-3.5" :stroke-width="3" />
          </RetroButton>
        </div>
      </WindowTitleBar>
    </section>
  </PageShell>
</template>
