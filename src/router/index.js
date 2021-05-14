import { createRouter, createWebHistory } from 'vue-router'
import Callback from '../views/Callback'
import Home from '../views/Home'
import Notfound from '../views/Notfound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback,
  },
  {
    path: "/:catchAll(.*)",
    name: 'Notfound',
    component: Notfound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
