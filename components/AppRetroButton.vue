<script setup lang="ts">
interface Props {
  variant?: "primary" | "outline";
  type?: "button" | "submit" | "reset";
}

withDefaults(defineProps<Props>(), {
  variant: "primary",
  type: "button",
});
</script>

<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center gap-2 border-[3px] px-4 py-2 font-pixel text-[10px] uppercase tracking-wider transition-opacity hover:opacity-75 active:opacity-60',
      variant === 'primary' ? 'border-ink bg-ink text-white' : 'border-ink bg-cream text-ink',
    ]"
  >
    <slot />
  </button>
</template>
