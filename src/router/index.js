import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import First from "../views/RegLogin.vue";
import Login from "../views/Login.vue";
import Reg from "../views/Reg.vue";

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
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Reg",
    name: 'Registration',
    component: Reg
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
