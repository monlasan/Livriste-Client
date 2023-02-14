import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AboutView from "../views/AboutView.vue";
import { useUserStore } from "@/stores/user-store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next("/about") : next();
      },
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      beforeEnter: (to, from, next) => {
        useUserStore().id ? next("/about") : next();
      },
      name: "register",
      component: RegisterView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
