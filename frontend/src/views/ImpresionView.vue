<template>
    <div class="impresion-container">
      <h2>Solicitud De Impresión</h2>
  
      <div class="form-box">
        <form @submit.prevent="enviarSolicitud" id="impresionForm">
          <div class="form-grid">
            <!-- Columna izquierda -->
            <div class="form-left">
              <!-- Datos del solicitante en la parte superior izquierda -->
              <div class="user-data">
                <div class="input-group">
                  <label>Nombre del Solicitante...</label>
                  <input
                    v-model="formData.solicitante"
                    type="text"
                    placeholder="Nombre..."
                    class="input-width"
                  />
                </div>
  
                <div class="input-group">
                  <label>Matrícula del Solicitante...</label>
                  <input
                    v-model="formData.matricula"
                    type="text"
                    placeholder="Matrícula..."
                    class="input-width"
                  />
                </div>
  
                <div class="input-group">
                  <label>Correo del Solicitante...</label>
                  <input
                    v-model="formData.correo"
                    type="email"
                    placeholder="Correo..."
                    class="input-width"
                  />
                </div>
              </div>
  
              <!-- Solicitud en la parte inferior izquierda -->
              <div class="input-group">
                <label>Solicitud:</label>
                <input
                  v-model="formData.solicitud"
                  type="text"
                  placeholder="Ingresar Solicitud de la Impresión..."
                  class="input-width"
                />
              </div>
  
              <div class="input-group">
                <label>Actividad:</label>
                <textarea
                  v-model="formData.actividad"
                  placeholder="Ingrese la Actividad referente..."
                  class="input-width text-area"
                ></textarea>
              </div>
            </div>
  
            <!-- Columna derecha -->
            <div class="form-right">
              <!-- Selectores con opciones -->
              <div class="dropdown-group">
                <label>Tipo de Proyecto</label>
                <select v-model="formData.tipoProyecto" class="dropdown dropdown-width">
                  <option value="" disabled selected>Seleccione un tipo de proyecto</option>
                  <option value="ingComp">Ingeniería Civil en Computación</option>
                  <option value="ingMinas">Ingeniería Civil en Minas</option>
                  <option value="ingMec">Ingeniería Civil Mecánica</option>
                  <option value="ingElec">Ingeniería Civil Eléctrica</option>
                  <option value="ingInd">Ingeniería Civil Industrial</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
              
              <div class="dropdown-group">
                <label>Selección de material</label>
                <select v-model="formData.material" class="dropdown dropdown-width">
                  <option value="" disabled selected>Seleccione un material</option>
                  <option value="PLA">PLA</option>
                  <option value="PETG">PETG</option>
                  <option value="ABS">ABS</option>
                  <option value="OTRO">OTRO</option>
                </select>
              </div>
  
              <div class="file-upload-container">
                <div class="file-upload-box" @click="triggerFileInput">
                  <img src="@/assets/documento.png" alt="Documento" class="document-icon" />
                  <p>Arrastre Archivo</p>
                  <p class="subir-text">Subir Archivo</p>
                  <p class="small-text">arrastre aquí</p>
                </div>
                <input 
                  type="file" 
                  id="archivo" 
                  ref="fileInput"
                  @change="handleFileUpload" 
                  style="display: none;"
                />
              </div>
  
              <!-- Botón en la parte inferior derecha -->
              <div class="button-container">
                <button type="submit" class="submit-button">ENVIAR SOLICITUD</button>
              </div>
            </div>
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
    name: 'ImpresionView',
    data() {
      return {
        formData: {
          solicitud: '',
          actividad: '',
          solicitante: '',
          matricula: '',
          correo: '',
          tipoProyecto: '',
          material: '',
          archivo: null
        },
        mensajeExito: '',
        mensajeError: ''
      }
    },
    methods: {
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      handleFileUpload(event) {
        this.formData.archivo = event.target.files[0];
      },
      async enviarSolicitud() {
        try {
          // Validación: se asegura que todos los campos estén completos
          if (
            !this.formData.solicitud ||
            !this.formData.actividad ||
            !this.formData.solicitante ||
            !this.formData.matricula ||
            !this.formData.correo ||
            !this.formData.tipoProyecto ||
            !this.formData.material
          ) {
            this.mensajeError = 'Todos los campos son obligatorios.'
            this.mensajeExito = ''
            return
          }
  
          // Crear FormData para enviar archivo
          const formDataToSend = new FormData();
          for (const key in this.formData) {
            formDataToSend.append(key, this.formData[key]);
          }
  
          // Envío de datos al back-end
          const response = await axios.post(
            'http://localhost:3000/impresiones',
            formDataToSend,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
  
          this.mensajeExito = response.data.mensaje
          this.mensajeError = ''
  
          // Limpiar formulario
          this.formData = {
            solicitud: '',
            actividad: '',
            solicitante: '',
            matricula: '',
            correo: '',
            tipoProyecto: '',
            material: '',
            archivo: null
          }
          // Limpiar input file
          if (this.$refs.fileInput) {
            this.$refs.fileInput.value = '';
          }
        } catch (error) {
          this.mensajeError =
            error.response?.data?.error ||
            'Ocurrió un error al guardar la información'
          this.mensajeExito = ''
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .impresion-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    font-family: 'Raleway', sans-serif;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Título centrado */
  h2 {
    margin: 1rem 0 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
  }
  
  /* Contenedor del formulario - 90% del ancho del contenedor principal y centrado */
  .form-box {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 25px;
    background-color: #fff;
    margin-bottom: 20px;
    width: 90%;
    box-sizing: border-box;
  }
  
  /* Grid del formulario */
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
  
  /* Columna izquierda */
  .form-left {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  /* Datos del usuario */
  .user-data {
    margin-bottom: 10px;
  }
  
  .input-group {
    margin-bottom: 12px;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 0.9rem;
  }
  
  .input-group input, .input-group textarea {
    padding: 10px 12px;
    font-size: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  
  /* Ajuste de ancho para inputs */
  .input-width {
    width: 100%;
  }
  
  .text-area {
    height: 120px;
    resize: vertical;
  }
  
  /* Columna derecha */
  .form-right {
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    height: 100%;
  }
  
  .dropdown-group {
    margin-bottom: 12px;
  }
  
  .dropdown-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 0.9rem;
  }
  
  .dropdown {
    padding: 10px 12px;
    font-size: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }
  
  /* Zona de subida de archivos */
  .file-upload-container {
    margin-bottom: 15px;
    width: 100%;
  }
  
  .file-upload-box {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .file-upload-box:hover {
    background-color: #f9f9f9;
  }
  
  .document-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
  }
  
  .file-upload-box p {
    margin: 3px 0;
    font-size: 0.9rem;
  }
  
  .subir-text {
    font-weight: 600;
    margin-top: 5px;
  }
  
  .small-text {
    font-size: 0.8rem;
    color: #666;
  }
  
  /* Botón enviar */
  .button-container {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
  }
  
  .submit-button {
    padding: 12px 24px;
    background-color: #D30101;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: background-color 0.2s ease;
  }
  
  .submit-button:hover {
    background-color: #333;
  }
  
  /* Mensajes de éxito o error */
  .mensajes {
    margin-top: 15px;
    text-align: center;
    width: 90%;
  }
  
  .exito {
    color: green;
    font-weight: 600;
  }
  
  .error {
    color: red;
    font-weight: 600;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .impresion-container {
      width: 95%;
      padding: 15px 0;
    }
    
    .form-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .button-container {
      justify-content: center;
      margin-top: 15px;
    }
    
    .form-box {
      padding: 15px;
      width: 95%;
    }
    
    .mensajes {
      width: 95%;
    }
  }
  </style>