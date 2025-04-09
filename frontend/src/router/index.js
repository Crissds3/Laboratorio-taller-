import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AsesoriaForm from '@/components/AsesoriaForm.vue';
import SolicitudForm from '@/components/SolicitudForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/asesoria',
    name: 'Asesoria',
    component: AsesoriaForm
  },
  {
    path: '/solicitud',
    name: 'Solicitud',
    component: SolicitudForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;