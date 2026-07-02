<template>
  <div class="min-h-screen bg-cream text-ink">
    <AppNavbar />
    <main class="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
      <slot />
    </main>
    <footer class="border-t-[2px] border-ink">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 font-mono-retro text-base md:px-8"
      >
        <span>© {{ new Date().getFullYear() }} PORTFOLIO.SYS</span>
        <span>v1.0 — System 7</span>
      </div>
    </footer>
  </div>
</template>
