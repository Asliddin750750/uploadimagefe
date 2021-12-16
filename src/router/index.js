import { createRouter, createWebHistory } from 'vue-router'
import account from "./account";
import file from "./file";
import file2 from "./file2";
import file3 from "./file3";
import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/account',
    component: () => import('../views/account/Index.vue'),
    children: account
  },
  {
    path: '/file',
    component: () => import('../views/file/Index.vue'),
    children: file
  },
  {
    path: '/file2',
    component: () => import('../views/file2/Index.vue'),
    children: file2
  },
  {
    path: '/file3',
    component: () => import('../views/file3/Index.vue'),
    children: file3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function(to, from, next) {
  let toLogin = to.name === 'login';
  let fromLogin = from.name === 'login';
  if (!store.getters.isAuthenticated) {
    if (fromLogin) {
      return;
    }

    if (!toLogin) {
      next({ name: "login" });
      return;
    }

    next();
    return
  }

  if (toLogin) {
    next({name: "home"});
    return;
  }

  next();
})

export default router
