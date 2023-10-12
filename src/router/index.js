import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About"),
  },
];

const router = createRouter({
  history: createWebHistory(),//2.x대를 설치하시면 작동을 안합니다.
  routes,
});
export default router;