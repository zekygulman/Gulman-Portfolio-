import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/about", component: AboutView },
    { path: "/project", component: ProjectView },
    { path: "/contact", component: ContactView },
    { path: "/:pathMatch(.*)*", component: NotFoundView },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
