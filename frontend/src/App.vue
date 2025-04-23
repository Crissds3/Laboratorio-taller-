<template>
  <div>
    <!-- Oculta la navbar solo en rutas específicas -->
    <AppNavbar v-if="showNavbar" />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  setup() {
    const route = useRoute()

    // Aquí defines las rutas donde NO quieres que aparezca la navbar
    const noNavbarRoutes = ['/login', '/', '/registro']

    const showNavbar = computed(() => !noNavbarRoutes.includes(route.path))

    return {
      showNavbar
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>