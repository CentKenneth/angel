import { createRouter, createWebHistory } from 'vue-router'
import PageLayout from '../layout/PageLayout.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const routes = [
  {
    path: '/',
    name: 'PageLayout',
    component: PageLayout,
    children: [
        {
            path: '',
            name: 'Home',
            component: Home
        }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
