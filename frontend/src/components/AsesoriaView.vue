<!-- src/components/AsesoriaView.vue -->
<template>
    <div class="asesoria-container">
      <h2>Asesoría en Laboratorio</h2>
      <p>Aquí puedes solicitar la realización de tu laboratorio</p>
  
      <form @submit.prevent="enviarAsesoria" class="form-container">
        <div class="form-left">
          <label>
            Solicitante (Nombre):
            <input v-model="formData.Nombre" type="text" placeholder="Nombre del solicitante" />
          </label>
  
          <label>
            Matrícula:
            <input v-model="formData.Matricula" type="text" placeholder="Tu matrícula" />
          </label>
  
          <label>
            Correo:
            <input v-model="formData.Correo" type="email" placeholder="Correo del solicitante" />
          </label>
  
          <label>
            Actividad a realizar:
            <input v-model="formData.Actividad" type="text" placeholder="Nombre de la actividad a realizar" />
          </label>
        </div>
  
        <div class="form-right">
          <p>Tipos de asesoría requerida</p>
          <label>
            <input
              type="radio"
              value="Impresora 3D"
              v-model="formData.Maquina"
            />
            Impresora 3D
          </label>
  
          <label>
            <input
              type="radio"
              value="Máquina 1"
              v-model="formData.Maquina"
            />
            Máquina 1
          </label>
        </div>
  
        <button type="submit">Enviar</button>
      </form>
  
      <div class="mensajes">
        <p v-if="mensajeExito" style="color: green;">{{ mensajeExito }}</p>
        <p v-if="mensajeError" style="color: red;">{{ mensajeError }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'AsesoriaView',
    data() {
      return {
        formData: {
          Nombre: '',
          Correo: '',
          Matricula: '',
          Actividad: '',
          Maquina: ''
        },
        mensajeExito: '',
        mensajeError: ''
      }
    },
    methods: {
      async enviarAsesoria() {
        try {
          // Validar que no haya campos vacíos
          if (
            !this.formData.Nombre ||
            !this.formData.Correo ||
            !this.formData.Matricula ||
            !this.formData.Actividad ||
            !this.formData.Maquina
          ) {
            this.mensajeError = 'Todos los campos y la selección de máquina son obligatorios.'
            this.mensajeExito = ''
            return
          }
  
          // Enviar al backend
          const response = await axios.post('http://localhost:3000/usuarios', this.formData)
          
          this.mensajeExito = response.data.mensaje
          this.mensajeError = ''
          
          // Limpiar formulario
          this.formData = {
            Nombre: '',
            Correo: '',
            Matricula: '',
            Actividad: '',
            Maquina: ''
          }
        } catch (error) {
          this.mensajeError = error.response?.data?.error || 'Ocurrió un error al guardar la información'
          this.mensajeExito = ''
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .asesoria-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .form-left, .form-right {
    width: 45%;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  button[type="submit"] {
    margin-top: 20px;
    padding: 10px;
    cursor: pointer;
    background-color: #0a0;
    color: #fff;
    border: none;
    font-size: 16px;
  }
  
  .mensajes {
    margin-top: 20px;
  }
  </style>
  