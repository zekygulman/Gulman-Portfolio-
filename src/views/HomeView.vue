<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ChevronRight, Search, FileText, BarChart3, Crosshair } from "lucide-vue-next";
import PageShell from "@/components/PageShell.vue";
import RetroButton from "@/components/RetroButton.vue";
import heroImage from "@/assets/seo-specialist-gulman.jpg";

useHead({
  title: "Home — Retro Mac Portfolio",
  meta: [
    { name: "description", content: "Personal portfolio in a retro Macintosh / Pixel OS aesthetic. SEO and content optimization specialist." },
    { property: "og:title", content: "Home — Retro Mac Portfolio" },
    { property: "og:description", content: "Personal portfolio in a retro Macintosh / Pixel OS aesthetic." },
  ],
});

const features = [
  { Icon: Search, title: "SEO Strategy", desc: "Keyword research, on-page SEO, and technical optimization." },
  { Icon: FileText, title: "Content Optimization", desc: "Crafting and optimizing content that ranks and engages." },
  { Icon: BarChart3, title: "Performance Analysis", desc: "Data-driven insights to improve rankings and measure growth." },
  { Icon: Crosshair, title: "Ongoing Support", desc: "Continuous optimization and support to stay ahead of the competition." },
];

function useHead(_opts: object) { /* client-side head management placeholder */ }
</script>

<template>
  <PageShell>
    <!-- ── Hero Section ── -->
    <section id="hero" class="hero-bleed relative overflow-hidden" style="min-height: 420px">
      <!-- Full-bleed hero image -->
      <img
        id="hero-image"
        :src="heroImage"
        alt="Gulman — SEO and Content Optimization Specialist, retro Mac desktop with analytics tools"
        class="absolute inset-0 h-full w-full object-cover object-right"
        style="image-rendering: auto"
      />

      <!-- Text overlay -->
      <div
        class="relative z-10 flex h-full flex-col justify-center px-8 py-10 md:px-12 lg:px-16"
        style="min-height: 420px; max-width: 580px"
      >
        <!-- Badge -->
        <span class="inline-flex w-fit items-center bg-ink px-3 py-[5px] font-mono-retro text-sm leading-none text-white">
          Hello, I'm
        </span>

        <!-- Heading -->
        <h1
          class="mt-3 font-pixel uppercase leading-[1.15] tracking-tight text-ink"
          style="font-size: clamp(1.8rem, 4.5vw, 3.5rem)"
        >
          SEO AND<br />CONTENT<br />OPTIMIZATION
        </h1>

        <!-- Description -->
        <p class="mt-4 font-mono-retro leading-relaxed text-ink" style="font-size: 0.95rem; max-width: 34ch">
          Helping brands improve visibility,<br />
          drive organic traffic, and grow through<br />
          strategic SEO and high-value content.
        </p>

        <!-- Buttons -->
        <div class="mt-6 flex flex-wrap gap-3">
          <RouterLink to="/project">
            <RetroButton variant="primary">
              View Projects <ChevronRight class="h-3.5 w-3.5" :stroke-width="3" />
            </RetroButton>
          </RouterLink>
          <RouterLink to="/about">
            <RetroButton variant="outline">About Me</RetroButton>
          </RouterLink>
        </div>
      </div>
    </section>

    <hr class="my-12 border-t-[2px] border-ink" />

    <!-- ── Features Grid ── -->
    <section class="grid grid-cols-1 divide-y-[2px] divide-ink border-y-0 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x-[2px]">
      <div
        v-for="(feature, i) in features"
        :key="feature.title"
        class="flex gap-4 p-6"
        :class="[
          i < 2 ? 'sm:border-b-[2px] sm:border-ink lg:border-b-0' : '',
          i % 2 === 0 ? 'sm:border-r-[2px] sm:border-ink lg:border-r-0' : '',
        ]"
      >
        <div class="flex h-10 w-10 shrink-0 items-center justify-center border-[2px] border-ink">
          <component :is="feature.Icon" class="h-5 w-5" :stroke-width="2" />
        </div>
        <div>
          <h3 class="font-pixel text-xs uppercase">{{ feature.title }}</h3>
          <p class="mt-2 font-mono-retro text-base text-ink/80">{{ feature.desc }}</p>
        </div>
      </div>
    </section>
  </PageShell>
</template>
