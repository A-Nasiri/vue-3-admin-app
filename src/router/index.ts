import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Register from '@/public/Register.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
