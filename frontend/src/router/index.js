import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/components/IndexView.vue'
import LoginView from '@/components/LoginView.vue'    
import RegistroView from '@/components/RegistroView.vue'



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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
