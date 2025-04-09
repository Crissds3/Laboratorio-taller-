<template>
    <div class="home-view">
      <header class="header">
        <img
          src="@/assets/utalca-logo.png"
          alt="Logo Universidad de Talca"
          class="logo"
        />
        <h1>Asesoría en laboratorio</h1>
        <p>Aquí puedes solicitar la realización de tu laboratorio</p>
        <!-- Ejemplo de nombre del estudiante a la derecha -->
        <div class="nombre-estudiante">
          Nombre Estudiante...
        </div>
      </header>
      
      <main class="main-content">
        <!-- Formulario de datos del solicitante -->
        <SolicitudForm />
        <!-- Formulario de asesoría requerida -->
        <AsesoriaForm />
      </main>
  
      <footer class="footer">
        <!-- Pie de página, si es necesario -->
        <p>© 2025 - Universidad de Talca</p>
      </footer>
    </div>
  </template>
  
  <script>
  import SolicitudForm from '@/components/SolicitudForm.vue'
  import AsesoriaForm from '@/components/AsesoriaForm.vue'
  
  export default {
    name: 'HomeView',
    components: {
      SolicitudForm,
      AsesoriaForm
    }
  }
  </script>
  
  <style scoped>
  .home-view {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .header {
    text-align: center;
    padding: 1rem;
    background: #f5f5f5;
    position: relative;
  }
  
  .logo {
    position: absolute; /* Posiciona el logo de forma absoluta */
  top: 1rem; /* Espaciado desde la parte superior */
  left: 1rem; /* Espaciado desde la izquierda */
  height: 60px; /* Mantén el tamaño del logo */
  }
  
  /* Pequeño ejemplo de cómo ubicar "Nombre Estudiante..." a la derecha */
  .nombre-estudiante {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-weight: bold;
  }
  
  .main-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 2rem auto;
    max-width: 1200px;
    width: 100%;
  }
  
  .footer {
    text-align: center;
    margin-top: auto;
    padding: 1rem;
    background: #f5f5f5;
  }
  </style>