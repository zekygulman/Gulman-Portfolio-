<script setup lang="ts">
import { ref } from "vue";
import {
  ChevronRight,
  Mail,
  Linkedin,
  Github,
  Instagram,
} from "lucide-vue-next";

// ── SEO ──────────────────────────────────────────────────────────────
useSeoMeta({
  title: "Contact — Gulman Azkiya | Get in Touch",
  description:
    "Get in touch with Gulman Azkiya for SEO consulting, content strategy, or collaboration. Reach out via email, LinkedIn, GitHub, or Instagram.",
  ogTitle: "Contact Gulman Azkiya — SEO & Content Specialist",
  ogDescription:
    "Have a project or question? Drop a line to Gulman Azkiya, SEO and Content Optimization Specialist.",
  ogUrl: "https://gulman.dev/contact",
  ogImage: "https://gulman.dev/contact-mac.jpg",
  twitterCard: "summary_large_image",
});

useHead({
  link: [{ rel: "canonical", href: "https://gulman.dev/contact" }],
});

// ── State & Data ──────────────────────────────────────────────────────
const sent = ref(false);

const socials = [
  { Icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Github, label: "GitHub", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
];

function handleSubmit(e: Event) {
  e.preventDefault();
  sent.value = true;
}
</script>

<template>
  <AppPageShell>
    <AppWindowTitleBar title="contact.sys">
      <div class="p-6 md:p-10">
        <h1 class="font-pixel text-2xl uppercase md:text-4xl">Get in Touch</h1>
        <p class="mt-4 max-w-2xl font-mono-retro text-lg text-ink/80">
          Have a project, a question, or just want to chat about retro
          computers? Drop a line.
        </p>
      </div>
    </AppWindowTitleBar>

    <hr class="my-12 border-t-[2px] border-ink" />

    <section
      class="grid grid-cols-1 gap-10 lg:grid-cols-2"
      aria-label="Contact form and social links"
    >
      <!-- Contact form -->
      <form
        class="border-[3px] border-ink bg-cream p-6 md:p-8"
        @submit="handleSubmit"
        aria-label="Send a message"
      >
        <label class="mb-5 block">
          <span class="mb-2 block font-pixel text-[10px] uppercase">Name</span>
          <input
            id="contact-name"
            type="text"
            required
            autocomplete="name"
            class="block w-full border-[3px] border-ink bg-cream px-3 py-2.5 font-mono-retro text-lg outline-none focus:bg-white"
          />
        </label>
        <label class="mb-5 block">
          <span class="mb-2 block font-pixel text-[10px] uppercase">Email</span>
          <input
            id="contact-email"
            type="email"
            required
            autocomplete="email"
            class="block w-full border-[3px] border-ink bg-cream px-3 py-2.5 font-mono-retro text-lg outline-none focus:bg-white"
          />
        </label>
        <label class="mb-6 block">
          <span class="mb-2 block font-pixel text-[10px] uppercase">Message</span>
          <textarea
            id="contact-message"
            required
            rows="5"
            class="block w-full resize-none border-[3px] border-ink bg-cream px-3 py-2.5 font-mono-retro text-lg outline-none focus:bg-white"
          />
        </label>
        <AppRetroButton id="contact-submit" type="submit" variant="primary">
          {{ sent ? "Message Sent ✓" : "Send Message" }}
          <ChevronRight class="h-3.5 w-3.5" :stroke-width="3" />
        </AppRetroButton>
      </form>

      <!-- Right column -->
      <div class="flex flex-col gap-6">
        <AppWindowTitleBar title="hello.app">
          <div class="bg-cream p-3">
            <NuxtImg
              src="/contact-mac.jpg"
              alt="Pixel art retro Macintosh displaying 'Let's talk!'"
              width="896"
              height="896"
              format="webp"
              quality="80"
              loading="lazy"
              class="block h-auto w-full"
              style="image-rendering: pixelated"
            />
          </div>
        </AppWindowTitleBar>

        <!-- Social links -->
        <ul class="grid grid-cols-2 gap-3" aria-label="Social media links">
          <li v-for="social in socials" :key="social.label">
            <a
              :href="social.href"
              class="flex items-center gap-3 border-[3px] border-ink bg-cream px-4 py-3 hover:bg-ink hover:text-white transition-colors"
              :aria-label="social.label"
            >
              <span
                class="flex h-7 w-7 items-center justify-center border-[2px] border-current"
              >
                <component :is="social.Icon" class="h-4 w-4" :stroke-width="2" />
              </span>
              <span class="font-pixel text-[10px] uppercase">{{
                social.label
              }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </AppPageShell>
</template>
