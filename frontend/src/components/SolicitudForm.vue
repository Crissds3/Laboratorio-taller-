<template>
    <div class="solicitud-form">
      <h2>Solicitante</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-field">
          <label for="nombre">Nombre del solicitante:</label>
          <input
            type="text"
            id="nombre"
            v-model="form.nombre"
            required
          />
        </div>
  
        <div class="form-field">
          <label for="matricula">Matrícula:</label>
          <input
            type="text"
            id="matricula"
            v-model="form.matricula"
            required
          />
        </div>
  
        <div class="form-field">
          <label for="email">Correo del solicitante:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
          />
        </div>
  
        <div class="form-field">
          <label for="actividad">Actividad a realizar:</label>
          <textarea
            id="actividad"
            v-model="form.actividad"
            rows="3"
          ></textarea>
        </div>
        <!-- 
          * Podrías poner el botón de "Enviar" aquí 
          * o manejarlo al final en la vista principal 
          * según tu flujo.
        -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SolicitudForm',
    data() {
      return {
        form: {
          nombre: '',
          matricula: '',
          email: '',
          actividad: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        // Lógica de envío: 
        // Por ejemplo, un emit a la vista padre o una llamada a la API
        alert('Formulario enviado (solicitante)')
        console.log(this.form)
      }
    }
  }
  </script>
  
  <style scoped>
  .solicitud-form {
    border: 1px solid #ddd;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 400px;
  }
  
  .form-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  
  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
  }
  </style>