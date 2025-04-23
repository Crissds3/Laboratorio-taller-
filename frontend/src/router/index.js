import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/components/IndexView.vue'
import AsesoriaView from '@/components/AsesoriaView.vue'
import ServiciosView from '@/views/ServiciosView.vue'

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
  }, 
  {path: '/servicios',
    name: 'Servicios',
    component: ServiciosView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
