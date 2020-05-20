import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import First from "../views/RegLogin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "First",
    component: First
  },
  {
    path: "/Main",
    name: "Main",
    component: Main
  } 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
