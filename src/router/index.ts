import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Register from '@/public/Register.vue';
import Login from '@/public/Login.vue';
import Secure from '@/secure/Secure.vue';
import Dashboard from '@/secure/dashboard/Dashboard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Secure,
    children: [
      { path: '', component: Dashboard }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
