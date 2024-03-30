import SessionLayout from "@/layouts/session/SessionLayout.vue";

export const menu = {
  path: "/menu",
  component: SessionLayout,
  children: [
    {
      path: "dashboard",
      name: "MenuDashboard",
      component: () => import("@/views/menu/dashboard/Dashboard.vue"),
      meta: { authenticated: false },
    },
  ],
};
