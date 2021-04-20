import { createRouter, createWebHistory } from 'vue-router'
import Callback from '../views/Callback'
import Home from '../views/Home'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
