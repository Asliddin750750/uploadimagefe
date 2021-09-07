import { createRouter, createWebHistory } from 'vue-router'
import account from "./account";
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
