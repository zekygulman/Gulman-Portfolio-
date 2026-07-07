<script setup lang="ts">
useSeoMeta({
  title: "404 — Page Not Found | Gulman Azkiya Portfolio",
  description: "The page you are looking for does not exist.",
  robots: "noindex, nofollow",
});

const _error = useError();
</script>

<template>
  <AppPageShell>
    <div class="flex flex-col items-center justify-center py-24 text-center">
      <p class="font-pixel text-xs uppercase text-ink/50">Error 404</p>
      <h1 class="mt-4 font-pixel text-2xl uppercase md:text-4xl">File Not Found</h1>
      <p class="mt-6 max-w-md font-mono-retro text-lg text-ink/70">
        The document you're looking for has been moved, deleted, or never existed in this directory.
      </p>
      <NuxtLink to="/" class="mt-8">
        <AppRetroButton variant="primary">← Return to Desktop</AppRetroButton>
      </NuxtLink>
    </div>
  </AppPageShell>
</template>
