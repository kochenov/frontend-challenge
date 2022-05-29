import { createRouter, createWebHistory } from "vue-router";
import routesImport from "./routes";

const routes = routesImport;

const router = createRouter({
  history: createWebHistory("/frontend-challenge/"),
  routes,
});

router.beforeEach((to, from, next) => {
  // Мета Заголовок страницы
  if (typeof to.meta.title !== "undefined") {
    document.title = `${to.meta.title}`;
  }
  next();
});
export default router;
