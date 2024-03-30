// Composables
import { createRouter, createWebHistory } from "vue-router";

import { session } from "./modules/session";
import { menu } from "./modules/menu";

const routes = [
  {
    path: "/",
    redirect: "/session/login",
  },

  { ...session },
  { ...menu },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

import { getCurrentUser } from "@/utils/firebase";
router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser();
  const { authenticated } = to.meta;

  document.title = `SDMS - ${to.name}`;

  if (!authenticated && !user) next();
  if (authenticated && !user) next({ name: "SessionLogin" });
  if (!authenticated && user) next();
  if (authenticated && user) next();
});

export default router;
