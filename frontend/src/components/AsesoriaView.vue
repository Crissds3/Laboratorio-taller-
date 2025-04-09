<template>
    <div class="asesoria-container">
      <div class="gray-banner">
        <header class="header">
          <img
            src="@/assets/logo.png"
            alt="Logo UTalca"
            class="logo-placeholder"
            @click="irIndex"
          />
          <div class="nombre-estudiante">Mateo Palacios</div>
        </header>
      </div>
  
      <h2>Asesoría en Laboratorio</h2>
      <p>Aquí puedes solicitar la realización de tu laboratorio</p>
  
      <div class="form-box">
        <form @submit.prevent="enviarAsesoria" id="asesoriaForm">
          <div class="form-container">
            <div class="form-left">
              <label>
                Solicitante (Nombre):
                <input
                  v-model="formData.solicitante"
                  type="text"
                  placeholder="Nombre del solicitante"
                />
              </label>
  
              <label>
                Matrícula:
                <input
                  v-model="formData.matricula"
                  type="text"
                  placeholder="Tu matrícula"
                />
              </label>
  
              <label>
                Correo:
                <input
                  v-model="formData.correo"
                  type="email"
                  placeholder="Correo del solicitante"
                />
              </label>
  
              <label>
                Actividad a realizar:
                <input
                  v-model="formData.actividad"
                  type="text"
                  placeholder="Nombre de la actividad a realizar"
                />
              </label>
            </div>
  
            <div class="form-right">
              <p class="ase-title">Tipos de asesoría requerida</p>
              
              <label class="ase-option">
                <input
                  type="radio"
                  value="Impresora 3D"
                  v-model="formData.maquinas"
                />
                Impresora 3D
              </label>
  
              <label class="ase-option">
                <input
                  type="radio"
                  value="Máquina 1"
                  v-model="formData.maquinas"
                />
                Máquina 1
              </label>
            </div>
          </div>
  
          <div class="button-container">
            <button type="submit" class="submit-button">Enviar</button>
          </div>
        </form>
      </div>
  
      <!-- Mensajes de éxito o error -->
      <div class="mensajes">
        <p v-if="mensajeExito" class="exito">{{ mensajeExito }}</p>
        <p v-if="mensajeError" class="error">{{ mensajeError }}</p>
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
          // Nombres modificados para que coincidan con lo que espera el back-end
          solicitante: '',
          correo: '',
          matricula: '',
          actividad: '',
          maquinas: ''
        },
        mensajeExito: '',
        mensajeError: ''
      }
    },
    methods: {
      async enviarAsesoria() {
        try {
          // Validación: se asegura que todos los campos estén completos
          if (
            !this.formData.solicitante ||
            !this.formData.correo ||
            !this.formData.matricula ||
            !this.formData.actividad ||
            !this.formData.maquinas
          ) {
            this.mensajeError =
              'Todos los campos y la selección de máquina son obligatorios.'
            this.mensajeExito = ''
            return
          }
  
          // Envío de datos al back-end
          const response = await axios.post(
            'http://localhost:3000/usuarios',
            this.formData
          )
  
          this.mensajeExito = response.data.mensaje
          this.mensajeError = ''
  
          // Limpiar formulario
          this.formData = {
            solicitante: '',
            correo: '',
            matricula: '',
            actividad: '',
            maquinas: ''
          }
        } catch (error) {
          this.mensajeError =
            error.response?.data?.error ||
            'Ocurrió un error al guardar la información'
          this.mensajeExito = ''
        }
      },
      // Redirige a la primera vista (ruta raíz)
      irIndex() {
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style scoped>
  .asesoria-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: sans-serif;
    background-color: #fff;
  }
  
  /* Banner gris */
  .gray-banner {
    width: 100%;
    background-color: #ffffff;
    padding: 10px 20px;
    margin-bottom: 1rem;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo-placeholder {
    width: 120px;
    height: auto;
    cursor: pointer; /* Indica que es clickeable */
  }
  .nombre-estudiante {
    font-weight: bold;
  }
  
  /* Título y subtítulo centrados */
  h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    text-align: center;
  }
  p {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #555;
  }
  
  /* Contenedor con borde (maqueta) */
  .form-box {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    background-color: #fff; /* Puedes cambiarlo a #f9f9f9 para otro tono */
    margin-bottom: 20px;
  }
  
  /* Formulario interno */
  .form-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .form-left {
    width: 45%;
  }
  .form-left label {
    display: block;
    margin-bottom: 15px;
    font-weight: 600;
  }
  .form-left input {
    margin-top: 5px;
    width: 100%;
    padding: 8px;
    font-size: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  /* Sección derecha */
  .form-right {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 20px;
  }
  .ase-title {
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: 700;
  }
  .ase-option {
    margin-bottom: 10px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
  }
  .ase-option input {
    margin-right: 5px;
  }
  
  /* Botón */
  .button-container {
    display: flex;
    justify-content: flex-end;
  }
  .submit-button {
    padding: 8px 16px;
    background-color: rgb(36, 82, 109);
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  .submit-button:hover {
    background-color: #3d479e;
  }
  
  .mensajes {
    margin-top: 20px;
    text-align: center;
  }
  .exito {
    color: green;
    font-weight: 600;
  }
  .error {
    color: red;
    font-weight: 600;
  }
  </style>
  