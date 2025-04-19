import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/components/IndexView.vue'
import AsesoriaView from '@/components/AsesoriaView.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView
  },
  {
    path: '/asesoria',
    name: 'Asesoria',
    component: AsesoriaView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
