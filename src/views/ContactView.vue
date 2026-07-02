<script setup lang="ts">
import { ref } from "vue";
import { ChevronRight, Mail, Linkedin, Github, Instagram } from "lucide-vue-next";
import PageShell from "@/components/PageShell.vue";
import WindowTitleBar from "@/components/WindowTitleBar.vue";
import RetroButton from "@/components/RetroButton.vue";
import contactMac from "@/assets/contact-mac.jpg";

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
  <PageShell>
    <WindowTitleBar title="contact.sys">
      <div class="p-6 md:p-10">
        <h1 class="font-pixel text-2xl uppercase md:text-4xl">Get in Touch</h1>
        <p class="mt-4 max-w-2xl font-mono-retro text-lg text-ink/80">
          Have a project, a question, or just want to chat about retro computers? Drop a line.
        </p>
      </div>
    </WindowTitleBar>

    <hr class="my-12 border-t-[2px] border-ink" />

    <section class="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <!-- Contact form -->
      <form class="border-[3px] border-ink bg-cream p-6 md:p-8" @submit="handleSubmit">
        <label class="mb-5 block">
          <span class="mb-2 block font-pixel text-[10px] uppercase">Name</span>
          <input
            type="text"
            required
            class="block w-full border-[3px] border-ink bg-cream px-3 py-2.5 font-mono-retro text-lg outline-none focus:bg-white"
          />
        </label>
        <label class="mb-5 block">
          <span class="mb-2 block font-pixel text-[10px] uppercase">Email</span>
          <input
            type="email"
            required
            class="block w-full border-[3px] border-ink bg-cream px-3 py-2.5 font-mono-retro text-lg outline-none focus:bg-white"
          />
        </label>
        <label class="mb-6 block">
          <span class="mb-2 block font-pixel text-[10px] uppercase">Message</span>
          <textarea
            required
            rows="5"
            class="block w-full resize-none border-[3px] border-ink bg-cream px-3 py-2.5 font-mono-retro text-lg outline-none focus:bg-white"
          />
        </label>
        <RetroButton type="submit" variant="primary">
          {{ sent ? "Message Sent" : "Send Message" }}
          <ChevronRight class="h-3.5 w-3.5" :stroke-width="3" />
        </RetroButton>
      </form>

      <!-- Right column -->
      <div class="flex flex-col gap-6">
        <WindowTitleBar title="hello.app">
          <div class="bg-cream p-3">
            <img
              :src="contactMac"
              alt="Pixel art retro Macintosh displaying 'Let's talk!'"
              width="896"
              height="896"
              loading="lazy"
              class="block h-auto w-full"
              style="image-rendering: pixelated"
            />
          </div>
        </WindowTitleBar>

        <!-- Social links -->
        <ul class="grid grid-cols-2 gap-3">
          <li v-for="social in socials" :key="social.label">
            <a
              :href="social.href"
              class="flex items-center gap-3 border-[3px] border-ink bg-cream px-4 py-3 hover:bg-ink hover:text-white transition-colors"
            >
              <span class="flex h-7 w-7 items-center justify-center border-[2px] border-current">
                <component :is="social.Icon" class="h-4 w-4" :stroke-width="2" />
              </span>
              <span class="font-pixel text-[10px] uppercase">{{ social.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </PageShell>
</template>
