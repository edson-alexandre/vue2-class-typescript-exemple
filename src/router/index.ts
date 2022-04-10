import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Counter from "../views/Counter.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Counter",
    component: Counter,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
