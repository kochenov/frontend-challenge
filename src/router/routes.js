export default [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Кошачий пинтерест",
    },
    component: () => import("../views/DefaultPage.vue"),
  },
  {
    path: "/favorits",
    name: "favorins",
    meta: {
      title: "Список любимых котиков",
    },
    component: () => import("../views/FavorinPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {},
    component: () => import("../views/NotFound.vue"),
  },
];
