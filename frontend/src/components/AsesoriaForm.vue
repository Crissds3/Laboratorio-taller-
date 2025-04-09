<template>
    <div class="asesoria-form">
      <h2>Tipos de asesoría requerida</h2>
      <form @submit.prevent="handleAsesoria">
        <div class="checkbox-group">
          <label>
            <input
              type="checkbox"
              value="Impresora 3D"
              v-model="asesoriasSeleccionadas"
            />
            Impresora 3D
          </label>
          <label>
            <input
              type="checkbox"
              value="Máquina 1"
              v-model="asesoriasSeleccionadas"
            />
            Máquina 1
          </label>
        </div>
  
        <!-- Botón de envío global o local -->
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AsesoriaForm',
    data() {
      return {
        asesoriasSeleccionadas: []
      }
    },
    methods: {
      handleAsesoria() {
        // Lógica de envío de las asesorías seleccionadas
        alert('Formulario de asesoría enviado')
        console.log(this.asesoriasSeleccionadas)
      }
    }
  }
  </script>
  
  <style scoped>
  .asesoria-form {
    border: 1px solid #ddd;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 400px;
  }
  
  .checkbox-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  
  label {
    margin-bottom: 0.5rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>