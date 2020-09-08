import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import News from "../views/News.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aboutus",
    name: "Sobre Nós",
    component: AboutUs,
  },
  {
    path: "/news",
    name: "Notícias",
    component: News,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
