<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-cream px-4">
    <div class="max-w-md text-center">
      <h1 class="font-pixel text-6xl uppercase text-ink">404</h1>
      <h2 class="mt-4 font-pixel text-lg uppercase text-ink">Page not found</h2>
      <p class="mt-4 font-mono-retro text-base text-ink/70">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="mt-8">
        <RouterLink
          to="/"
          class="inline-flex items-center justify-center border-[3px] border-ink bg-ink px-5 py-3 font-pixel text-[11px] uppercase tracking-wider text-white transition-colors hover:bg-cream hover:text-ink"
        >
          Go Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>
