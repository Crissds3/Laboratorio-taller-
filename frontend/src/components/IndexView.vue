<!-- src/components/IndexView.vue -->
<template>
    <div class="index-container">
      <!-- Sección Izquierda: Logo, Título, Subtítulo, Botón -->
      <div class="left-section">
        <img src="@/assets/logo.png" alt="Logo Universidad de Talca" class="logo" />
  
        <h1 class="welcome-title">¡Bienvenido!</h1>
        <p class="subtitle">Prueba nuestro nuevo sistema de reservas de laboratorios</p>
  
        <button class="start-button" @click="irAsesoria">EMPIEZA AQUÍ</button>
      </div>
  
      <!-- Sección Derecha: Imagen como background -->
      <div class="right-section"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IndexView',
    methods: {
      irAsesoria() {
        this.$router.push('/asesoria')
      }
    }
  }
  </script>
  
  <style scoped>
  /* Contenedor principal: dos columnas (izquierda: texto/logo, derecha: imagen) */
  .index-container {
    display: flex;
    min-height: 100vh; /* Ocupa la ventana completa de alto */
    width: 100%;
    background-color: #fff;
  }
  
  /* Sección izquierda: se alinea todo al inicio (superior izq.) */
  .left-section {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .logo {
    width: 120px;
    /* Quita o reduce margenes si quieres acercarlo más aún */
    margin-bottom: 20px;
  }
  .welcome-title {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  .subtitle {
    font-size: 1rem;
    margin-bottom: 20px;
    max-width: 300px;
    line-height: 1.4;
  }
  
  /* Botón más pequeño */
  .start-button {
    background-color: #000;
    color: #fff;
    /* Se reducen padding y fuente para hacerlo más chico */
    padding: 8px 16px;
    font-size: 0.9rem; /* ~14.4px aprox. */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    text-align: center;
  }
  .start-button:hover {
    background-color: #444;
  }
  
  /* Sección derecha: imagen como background */
  .right-section {
    flex: 1; 
    background-image: url("@/assets/laboratorio.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* Efecto blanco y negro (opcional) */
    filter: grayscale(100%);
  }
  </style>
  