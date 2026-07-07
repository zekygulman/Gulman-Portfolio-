<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { ChevronDown, Menu, X } from "lucide-vue-next";

const open = ref(false);

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/project", label: "Project" },
  { to: "/contact", label: "Contact" },
] as const;
</script>

<template>
  <header class="border-b-[2px] border-ink bg-cream">
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
      <!-- Pixel dots -->
      <div class="flex items-center gap-1.5">
        <span class="block h-2.5 w-2.5 bg-ink" />
        <span class="block h-2.5 w-2.5 bg-ink" />
        <span class="block h-2.5 w-2.5 bg-ink" />
      </div>

      <!-- Desktop nav -->
      <ul class="hidden flex-1 items-center justify-center gap-8 md:flex">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="font-mono-retro text-lg text-ink hover:opacity-70"
            active-class="underline underline-offset-[6px] decoration-[2px]"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>

      <!-- Portfolio pill -->
      <button
        type="button"
        class="hidden items-center gap-2 rounded-full bg-ink px-5 py-2 font-pixel text-[10px] uppercase tracking-wider text-white md:inline-flex"
      >
        Portfolio <ChevronDown class="h-3.5 w-3.5" :stroke-width="3" />
      </button>

      <!-- Mobile menu button -->
      <button
        type="button"
        aria-label="Toggle menu"
        class="inline-flex h-10 w-10 items-center justify-center border-[2px] border-ink bg-cream md:hidden"
        @click="open = !open"
      >
        <X v-if="open" class="h-5 w-5" />
        <Menu v-else class="h-5 w-5" />
      </button>
    </nav>

    <!-- Mobile dropdown -->
    <div v-if="open" class="border-t-[2px] border-ink md:hidden">
      <ul class="flex flex-col">
        <li v-for="link in links" :key="link.to" class="border-b-[2px] border-ink last:border-b-0">
          <RouterLink
            :to="link.to"
            class="block px-4 py-3 font-mono-retro text-lg text-ink"
            active-class="bg-ink text-white"
            :exact="link.to === '/'"
            @click="open = false"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>
