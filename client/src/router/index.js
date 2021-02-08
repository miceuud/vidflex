import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DashBoard from "../views/DashBoard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/SignUp.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashBoard,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
