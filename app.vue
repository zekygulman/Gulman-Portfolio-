<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// JSON-LD Structured Data — Person + WebSite schema (injected via useHead)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://gulman.dev/#person",
      name: "Gulman Azkiya",
      url: "https://gulman.dev",
      jobTitle: "SEO Specialist",
      description:
        "SEO and Content Optimization Specialist with expertise in SEO Strategy, Technical SEO, Content Marketing, and AI Automation.",
      sameAs: ["https://www.linkedin.com/in/gulman-azkiya/", "https://github.com/gulman"],
      worksFor: {
        "@type": "Organization",
        name: "Floothink Digital Agency",
      },
      knowsAbout: [
        "SEO",
        "Content Strategy",
        "Keyword Research",
        "Technical SEO",
        "Analytics",
        "Link Building",
        "n8n",
        "AI Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://gulman.dev/#website",
      name: "Gulman Azkiya — SEO & Content Specialist",
      url: "https://gulman.dev",
      description: "Personal portfolio of Gulman Azkiya, SEO and Content Optimization Specialist.",
      author: {
        "@id": "https://gulman.dev/#person",
      },
    },
  ],
};

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(jsonLd),
      key: "schema-org",
    },
  ],
});
</script>
