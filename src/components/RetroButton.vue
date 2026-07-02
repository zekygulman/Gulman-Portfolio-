<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: "primary" | "outline";
    type?: "button" | "submit" | "reset";
    class?: string;
  }>(),
  { variant: "primary", type: "button", class: "" }
);

defineEmits<{ click: [e: MouseEvent] }>();
</script>

<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center justify-center gap-2 px-5 py-3 font-pixel text-[11px] uppercase tracking-wider border-[3px] border-ink transition-colors',
      variant === 'primary'
        ? 'bg-ink text-white hover:bg-cream hover:text-ink'
        : 'bg-cream text-ink hover:bg-ink hover:text-white',
      $props.class,
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
