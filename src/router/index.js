import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Cartoon/:name",
    name: "CartoonInfo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartoonInfo.vue")
  },
  {
    path: "/Cartoon/:name/:chapter",
    name: "CartoonPlayer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartoonPlayer.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
