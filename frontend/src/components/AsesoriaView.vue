<template>
  <div class="asesoria-container">
    <h1 class="title">Asesorías</h1>
    <p class="subtitle">Aquí puedes solicitar tus asesorías</p>

    <div class="form-box">
      <form @submit.prevent="enviarAsesoria" id="asesoriaForm">
        <div class="form-container">
          <!-- Columna izquierda con datos personales -->
          <div class="form-left">
            <div class="form-group">
              <label for="solicitante">Solicitante:</label>
              <input
                v-model="formData.solicitante"
                type="text"
                id="solicitante"
                placeholder="Nombre del solicitante"
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="matricula">Matrícula:</label>
              <input
                v-model="formData.matricula"
                type="text"
                id="matricula"
                placeholder="Matrícula..."
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="email">Email:</label>
              <input
                v-model="formData.correo"
                type="email"
                id="email"
                placeholder="Correo del solicitante..."
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="actividad">Actividad:</label>
              <textarea
                v-model="formData.actividad"
                id="actividad"
                placeholder="Actividad a realizar"
                class="form-input form-textarea"
              ></textarea>
            </div>
          </div>

          <!-- Columna central con tipo de asesoría mejorada -->
          <div class="form-center">
            <h3 class="section-title">Tipos de asesoría requerida</h3>
            
            <div class="asesorias-options">
              <div class="asesoria-option">
                <input 
                  type="radio" 
                  id="online" 
                  name="tipoAsesoria"
                  value="ONLINE" 
                  v-model="formData.tipoAsesoria"
                />
                <label for="online">ONLINE</label>
              </div>
              
              <div class="asesoria-option">
                <input 
                  type="radio" 
                  id="presencial" 
                  name="tipoAsesoria"
                  value="PRESENCIAL" 
                  v-model="formData.tipoAsesoria"
                />
                <label for="presencial">PRESENCIAL</label>
              </div>
            </div>
          </div>

          <!-- Columna derecha con selección de fecha -->
          <div class="form-right">
            <h3 class="section-title">Seleccione una fecha...</h3>
            
            <div class="calendar-container">
              <div class="calendar-header">
                <button type="button" @click="prevMonth" class="calendar-nav">&lt;</button>
                <span>{{ currentMonthName }} {{ currentYear }}</span>
                <button type="button" @click="nextMonth" class="calendar-nav">&gt;</button>
              </div>
              
              <div class="weekdays">
                <div>lun</div>
                <div>mar</div>
                <div>mié</div>
                <div>jue</div>
                <div>vie</div>
                <div>sáb</div>
                <div>dom</div>
              </div>
              
              <div class="calendar-days">
                <div 
                  v-for="day in calendarDays" 
                  :key="day.date"
                  :class="['calendar-day', { 
                    'empty': !day.inMonth, 
                    'selected': isSelectedDate(day),
                    'today': isToday(day)
                  }]"
                  @click="selectDate(day)"
                >
                  {{ day.dayNumber }}
                </div>
              </div>
            </div>
            
            <div class="time-selector">
              <select v-model="formData.hora" class="time-select">
                <option value="" disabled selected>12:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
            </div>
            
            <p class="availability-note">
              Un administrador evaluará si hay disponibilidad de horario
            </p>
          </div>
        </div>

        <div class="button-container">
          <button type="submit" class="submit-button">Agendar</button>
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
        solicitante: '',
        correo: '',
        matricula: '',
        actividad: '',
        tipoAsesoria: '',
        fecha: '',
        hora: '12:00'
      },
      mensajeExito: '',
      mensajeError: '',
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      selectedDate: null
    }
  },
  computed: {
    currentMonthName() {
      const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
      ]
      return months[this.currentMonth]
    },
    calendarDays() {
      const days = []
      
      // Primer día del mes actual
      const firstDay = new Date(this.currentYear, this.currentMonth, 1)
      // Día de la semana del primer día (0 = domingo, 6 = sábado)
      let firstDayOfWeek = firstDay.getDay()
      // Ajustar para que la semana comience en lunes
      firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1
      
      // Último día del mes anterior
      const lastDayPrevMonth = new Date(this.currentYear, this.currentMonth, 0).getDate()
      
      // Días del mes anterior
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        days.push({
          date: new Date(this.currentYear, this.currentMonth - 1, lastDayPrevMonth - i),
          dayNumber: lastDayPrevMonth - i,
          inMonth: false
        })
      }
      
      // Días del mes actual
      const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
      for (let i = 1; i <= daysInMonth; i++) {
        days.push({
          date: new Date(this.currentYear, this.currentMonth, i),
          dayNumber: i,
          inMonth: true
        })
      }
      
      // Completar la última semana con días del mes siguiente
      const remainingDays = 42 - days.length // 6 semanas * 7 días = 42
      for (let i = 1; i <= remainingDays; i++) {
        days.push({
          date: new Date(this.currentYear, this.currentMonth + 1, i),
          dayNumber: i,
          inMonth: false
        })
      }
      
      return days
    }
  },
  methods: {
    prevMonth() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11
        this.currentYear--
      } else {
        this.currentMonth--
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++
      }
    },
    selectDate(day) {
      if (day.inMonth) {
        this.selectedDate = day.date
        this.formData.fecha = this.formatDate(day.date)
      }
    },
    isSelectedDate(day) {
      return this.selectedDate && 
        day.date.getDate() === this.selectedDate.getDate() &&
        day.date.getMonth() === this.selectedDate.getMonth() &&
        day.date.getFullYear() === this.selectedDate.getFullYear()
    },
    isToday(day) {
      const today = new Date()
      return day.date.getDate() === today.getDate() &&
        day.date.getMonth() === today.getMonth() &&
        day.date.getFullYear() === today.getFullYear()
    },
    formatDate(date) {
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      return `${year}-${month}-${day}`
    },
    async enviarAsesoria() {
      try {
        // Validación: asegurarse que todos los campos estén completos
        if (
          !this.formData.solicitante ||
          !this.formData.correo ||
          !this.formData.matricula ||
          !this.formData.actividad ||
          !this.formData.tipoAsesoria ||
          !this.formData.fecha
        ) {
          this.mensajeError = 'Todos los campos son obligatorios'
          this.mensajeExito = ''
          return
        }

        // Envío de datos al back-end
        const response = await axios.post(
          'http://localhost:3000/api/asesorias',
          this.formData
        )

        this.mensajeExito = response.data.mensaje || 'Asesoría agendada correctamente'
        this.mensajeError = ''

        // Limpiar formulario
        this.formData = {
          solicitante: '',
          correo: '',
          matricula: '',
          actividad: '',
          tipoAsesoria: '',
          fecha: '',
          hora: '12:00'
        }
        this.selectedDate = null
      } catch (error) {
        this.mensajeError =
          error.response?.data?.error ||
          'Ocurrió un error al guardar la información'
        this.mensajeExito = ''
        console.error('Error al enviar la asesoría:', error)
      }
    }
  }
}
</script>

<style scoped>
.asesoria-container {
  max-width: 90%;
  margin: 0 auto;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  background-color: #f5f5f5;
  border-radius: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  width: auto;
}

.user-icon {
  display: flex;
  align-items: center;
}

.user-circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
}

/* Título y subtítulo */
.title {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #333;
}

.subtitle {
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
  font-size: 1rem;
}

/* Caja del formulario */
.form-box {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  background-color: #fff;
  margin: 0 20px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

/* Contenedor de formulario de 3 columnas */
.form-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 2rem;
}

.form-left {
  flex: 1;
  min-width: 200px;
  margin-left: 20px; /* Separación actual */
  margin-top: 20px; /* Ajusta este valor para bajar la sección */
}
.form-center {
  flex: 1;
  min-width: 200px;
  margin-left: 20px; /* Separación agregada */
}
.form-right {
  flex: 1;
  min-width: 280px;
}

/* Estilos para campos de formulario */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  font-size: 0.95rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #d60000;
  outline: none;
  box-shadow: 0 0 0 2px rgba(214, 0, 0, 0.1);
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
}

/* Estilos para la sección de tipos de asesoría */
.section-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: left;
  color: #333;
}

.asesorias-options {
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 7px;
}

.asesoria-option {
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.asesoria-option:hover {
  background-color: #f0f0f0;
}

.asesoria-option input[type="radio"] {
  margin-right: 15px;
  accent-color: #d60000;
  width: 18px;
  height: 18px;
}

.asesoria-option label {
  font-weight: 500;
  cursor: pointer;
  display: block;
  width: 100%;
}

/* Para mejorar el contraste visual cuando está seleccionado */
.asesoria-option input[type="radio"]:checked + label {
  font-weight: 600;
  color: #d60000;
}

/* Añadir efecto visual cuando está seleccionado */
.asesoria-option:has(input[type="radio"]:checked) {
  border-color: #d60000;
  background-color: rgba(214, 0, 0, 0.05);
}

/* Estilos para el calendario */
.calendar-container {
  margin-bottom: 15px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  overflow: hidden;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eaeaea;
  font-weight: 600;
}

.calendar-nav {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0 10px;
  color: #555;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 10px 0;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eaeaea;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  padding: 2px;
}

.calendar-day {
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 4px;
}

.calendar-day:hover:not(.empty) {
  background-color: #f0f0f0;
}

.calendar-day.empty {
  color: #ccc;
  cursor: default;
}

.calendar-day.selected {
  background-color: #d60000;
  color: white;
  font-weight: 600;
}

.calendar-day.today {
  border: 2px solid #d60000;
  font-weight: 600;
}

/* Selector de hora */
.time-selector {
  margin: 15px 0;
  text-align: center;
}

.time-select {
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100px;
  font-size: 0.95rem;
  background-color: white;
  cursor: pointer;
}

.availability-note {
  font-size: 0.85rem;
  color: #666;
  text-align: center;
  margin-top: 15px;
}

/* Botón de envío */
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.submit-button {
  padding: 12px 40px;
  background-color: #d60000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-transform: uppercase;
}

.submit-button:hover {
  background-color: #b50000;
}

/* Mensajes de éxito/error */
.mensajes {
  margin: 20px;
  text-align: center;
}

.exito {
  color: #28a745;
  font-weight: 600;
  padding: 10px;
  background-color: rgba(40, 167, 69, 0.1);
  border-radius: 4px;
}

.error {
  color: #dc3545;
  font-weight: 600;
  padding: 10px;
  background-color: rgba(220, 53, 69, 0.1);
  border-radius: 4px;
}

/* Responsive */
@media (max-width: 992px) {
  .form-left,
  .form-center,
  .form-right {
    min-width: 100%;
  }
}
</style>