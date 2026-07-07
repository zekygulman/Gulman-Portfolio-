<script setup lang="ts">
defineProps<{
  title: string;
  class?: string;
  innerClass?: string;
}>();
</script>

<template>
  <div :class="['border-[3px] border-ink bg-cream', $props.class]">
    <!-- Mac OS title bar -->
    <div
      class="flex items-center gap-2 border-b-[3px] border-ink bg-[color:var(--titlebar)] px-2 py-1.5"
    >
      <!-- Close widget -->
      <div
        class="flex h-4 w-5 shrink-0 items-center justify-center border-[2px] border-ink bg-cream"
      >
        <div class="h-1 w-2 border-t-[2px] border-ink" />
      </div>
      <!-- Left stripes -->
      <div class="titlebar-stripes h-3 flex-1" />
      <!-- Title -->
      <div class="px-2 font-mono-retro text-base leading-none text-ink whitespace-nowrap">
        {{ title }}
      </div>
      <!-- Right stripes -->
      <div class="titlebar-stripes h-3 flex-1" />
      <!-- Resize widget -->
      <div class="h-4 w-5 shrink-0 border-[2px] border-ink bg-cream" />
    </div>
    <!-- Content -->
    <div v-if="$slots.default" :class="$props.innerClass">
      <slot />
    </div>
  </div>
</template>
