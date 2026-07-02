// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  // Enable Nuxt 4 compatibility
  future: {
    compatibilityVersion: 4,
  },

  // Dev tools
  devtools: { enabled: true },

  // ── Modules ──────────────────────────────────────────────────────
  modules: ["@nuxt/image", "@nuxtjs/sitemap", "@nuxtjs/robots"],

  // ── Static Site Generation (SSG) ─────────────────────────────────
  nitro: {
    prerender: {
      routes: ["/", "/about", "/project", "/contact"],
      crawlLinks: true,
    },
  },

  // ── Global CSS ───────────────────────────────────────────────────
  css: ["~/assets/css/main.css"],

  // ── Vite Plugins (TailwindCSS v4) ────────────────────────────────
  vite: {
    plugins: [tailwindcss()],
  },

  // ── Global Head (applied to all pages) ───────────────────────────
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "author", content: "Gulman Azkiya" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Gulman Azkiya Portfolio" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Space+Mono:wght@400;700&display=swap",
        },
      ],
    },
  },

  // ── @nuxt/image ──────────────────────────────────────────────────
  image: {
    quality: 80,
    formats: ["webp", "jpg"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },

  // ── @nuxtjs/sitemap v8 ───────────────────────────────────────────
  sitemap: {
    siteUrl: "https://gulman.dev",
    sources: ["/", "/about", "/project", "/contact"],
  },

  // ── @nuxtjs/robots v6 ────────────────────────────────────────────
  robots: {
    groups: [
      {
        userAgent: ["*"],
        allow: ["/"],
        comment: "Allow all crawlers",
      },
    ],
    sitemap: ["https://gulman.dev/sitemap.xml"],
  },

  // ── Runtime Config ───────────────────────────────────────────────
  runtimeConfig: {
    public: {
      siteUrl: "https://gulman.dev",
    },
  },
});
