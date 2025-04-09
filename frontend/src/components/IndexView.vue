<!-- src/components/IndexView.vue -->
<template>
    <div class="index-container">
      <div class="bienvenida">
        <h1>¡Bienvenido!</h1>
        <p>Prueba nuestro nuevo sistema de reservas de laboratorios</p>
        <button @click="irAsesoria">EMPIEZA AQUÍ</button>
      </div>
      <!-- Aquí podrías agregar la imagen o maqueta en blanco y negro 
           como background, etc., según tu diseño -->
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
  .index-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .bienvenida {
    text-align: center;
  }
  
  button {
    margin-top: 20px;
    padding: 10px;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    font-size: 16px;
  }
  </style>
  