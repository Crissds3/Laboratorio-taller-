import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/components/IndexView.vue'
import LoginView from '@/components/LoginView.vue'    
import RegistroView from '@/components/RegistroView.vue'
import AsesoriaView from '@/components/AsesoriaView.vue'
import ServiciosView from '@/views/ServiciosView.vue'
import ImpresionView from '@/views/ImpresionView.vue'


const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView
  },
  {
    path: '/asesoria',              
    name: 'asesoria',
    component: AsesoriaView
  }, 
  {path: '/servicios',
    name: 'Servicios',
    component: ServiciosView
  },
  {path: '/impresion',
    name: 'impresion',
    component: ImpresionView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
