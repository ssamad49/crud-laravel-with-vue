import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import StudentView from '../views/Students/student.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
     {
      path: '/student',
      name: 'student',
      component: StudentView,
    }
  ]
})

export default router
