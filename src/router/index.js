import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: () => import("../views/IntroView.vue"),
  },
  {
    path: "/dataTable",
    name: "dataTable",
    component: () => import("../views/TableView.vue"),
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import("../views/ResumeView.vue"),
  },
];
const router = new VueRouter({
  routes,
});

export default router;
