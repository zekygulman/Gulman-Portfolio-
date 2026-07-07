<script setup lang="ts">
import { ChevronRight, Search, FileText, BarChart3, Crosshair } from "lucide-vue-next";

const img = useImage();

// Generate optimized responsive attributes for preload matching the NuxtImg component
const heroImageSizes = img.getSizes("/seo-specialist-gulman.jpg", {
  sizes: "100vw xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1920px",
  modifiers: {
    quality: 80,
  },
});

// ── SEO ──────────────────────────────────────────────────────────────
useSeoMeta({
  title: "Gulman Azkiya — SEO & Content Optimization Specialist",
  description:
    "Portfolio of Gulman Azkiya, SEO Specialist helping brands improve visibility, drive organic traffic, and grow through strategic SEO and high-value content.",
  ogTitle: "Gulman Azkiya — SEO & Content Optimization Specialist",
  ogDescription:
    "Helping brands improve visibility, drive organic traffic, and grow through strategic SEO and high-value content.",
  ogUrl: "https://gulman.dev/",
  ogImage: "https://gulman.dev/seo-specialist-gulman.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Gulman Azkiya — SEO & Content Specialist",
  twitterDescription: "Portfolio of Gulman Azkiya, SEO and Content Optimization Specialist.",
  twitterImage: "https://gulman.dev/seo-specialist-gulman.jpg",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://gulman.dev/",
    },
    {
      // Preload responsive hero image for faster LCP matching the NuxtImg configuration
      rel: "preload",
      as: "image",
      href: heroImageSizes.src,
      imagesrcset: heroImageSizes.srcset,
      imagesizes: heroImageSizes.sizes,
      fetchpriority: "high",
    },
  ],
});

// ── Data ──────────────────────────────────────────────────────────────
const features = [
  {
    Icon: Search,
    title: "SEO Strategy",
    desc: "Keyword research, on-page SEO, and technical optimization.",
  },
  {
    Icon: FileText,
    title: "Content Optimization",
    desc: "Crafting and optimizing content that ranks and engages.",
  },
  {
    Icon: BarChart3,
    title: "Performance Analysis",
    desc: "Data-driven insights to improve rankings and measure growth.",
  },
  {
    Icon: Crosshair,
    title: "Ongoing Support",
    desc: "Continuous optimization and support to stay ahead of the competition.",
  },
];
</script>

<template>
  <AppPageShell>
    <!-- ── Hero Section ── -->
    <section
      id="hero"
      class="hero-bleed relative overflow-hidden"
      style="min-height: 420px"
      aria-label="Hero section — Gulman Azkiya SEO Specialist"
    >
      <!-- Full-bleed hero image (NuxtImg for optimized delivery) -->
      <NuxtImg
        src="/seo-specialist-gulman.jpg"
        alt="Gulman Azkiya — SEO and Content Optimization Specialist, retro Mac desktop with analytics tools"
        class="absolute inset-0 h-full w-full object-cover object-right"
        width="1920"
        height="675"
        quality="80"
        sizes="100vw xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1920px"
        loading="eager"
        fetchpriority="high"
      />

      <!-- Text overlay -->
      <div
        class="relative z-10 flex h-full flex-col justify-center px-8 py-10 md:px-12 lg:px-16"
        style="min-height: 420px; max-width: 580px"
      >
        <!-- Badge -->
        <span
          class="inline-flex w-fit items-center bg-ink px-3 py-[5px] font-mono-retro text-sm leading-none text-white"
        >
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
        <p
          class="mt-4 font-mono-retro leading-relaxed text-ink"
          style="font-size: 0.95rem; max-width: 34ch"
        >
          Helping brands improve visibility,<br />
          drive organic traffic, and grow through<br />
          strategic SEO and high-value content.
        </p>

        <!-- Buttons -->
        <div class="mt-6 flex flex-wrap gap-3">
          <NuxtLink to="/project">
            <AppRetroButton variant="primary">
              View Projects
              <ChevronRight class="h-3.5 w-3.5" :stroke-width="3" />
            </AppRetroButton>
          </NuxtLink>
          <NuxtLink to="/about">
            <AppRetroButton variant="outline">About Me</AppRetroButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <hr class="my-12 border-t-[2px] border-ink" />

    <!-- ── Features Grid ── -->
    <section
      class="grid grid-cols-1 divide-y-[2px] divide-ink border-y-0 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x-[2px]"
      aria-label="Services offered"
    >
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
          <p class="mt-2 font-mono-retro text-base text-ink/80">
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </section>
  </AppPageShell>
</template>
