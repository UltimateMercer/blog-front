import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/posts/:id",
    name: "ShowPost",
    component: () =>
      import(/* webpackChunkName: "showPost" */ "../views/ShowPost.vue")
  },
  {
    path: "/CreatePost",
    name: "CreatePost",
    component: () =>
      import(/* webpackChunkName: "showPost" */ "../views/CreatePost.vue")
  },
  {
    path: "/NewTag",
    name: "NewTag",
    component: () =>
      import(/* webpackChunkName: "showPost" */ "../views/CreateTag.vue")
  },
  {
    path: "/posts/:id/tags",
    name: "ArticleTags",
    component: () =>
      import(/* webpackChunkName: "showPost" */ "../views/ArticleTags.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
