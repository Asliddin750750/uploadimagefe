import { createRouter, createWebHistory } from 'vue-router'
import upload from './upload'
import file from "./file";
import file2 from "./file2";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/upload',
    component: () => import('../views/upload/Index.vue'),
    children: upload
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
