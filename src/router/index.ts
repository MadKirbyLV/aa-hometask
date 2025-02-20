import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        icon: 'pi pi-home'
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        icon: 'pi pi-user'
      },
      component: AboutView
    }
  ]
})

export default router
