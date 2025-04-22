<template>
  <div class="page-wrapper">
    <div class="registro-container">
      <div class="registro-card">
        <div class="logo-header">
          <img src="@/assets/logo.png" alt="Logo Universidad de Talca" class="logo-image"/>
          <h1 class="system-title">SISTEMA DE RESERVAS DE LABORATORIO (EXTERNOS)</h1>
        </div>
        
        <div class="registro-form-container">
          <h2 class="registro-title">Registro</h2>
          
          <form class="registro-form" @submit.prevent="onRegistro">
            <div class="form-row">
              <div class="form-group">
                <label for="nombre">NOMBRE</label>
                <div class="input-with-icon">
                  <i class="fas fa-user"></i>
                  <input
                    id="nombre"
                    type="text"
                    v-model="nombre"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="rut">RUT</label>
                <div class="input-with-icon">
                  <i class="fas fa-user"></i>
                  <input
                    id="rut"
                    type="text"
                    v-model="rut"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="correo">CORREO ELECTRÓNICO</label>
                <div class="input-with-icon">
                  <i class="fas fa-envelope"></i>
                  <input
                    id="correo"
                    type="email"
                    v-model="correo"
                    placeholder="ejemplo@correo.com"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="confirmarCorreo">CONFIRMA TU CORREO</label>
                <div class="input-with-icon">
                  <i class="fas fa-envelope"></i>
                  <input
                    id="confirmarCorreo"
                    type="email"
                    v-model="confirmarCorreo"
                    placeholder="ejemplo@correo.com"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="password">CONTRASEÑA</label>
                <div class="input-with-icon">
                  <i class="fas fa-lock"></i>
                  <input
                    id="password"
                    type="password"
                    v-model="password"
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label for="confirmarPassword">CONFIRMA TU CONTRASEÑA</label>
                <div class="input-with-icon">
                  <i class="fas fa-lock"></i>
                  <input
                    id="confirmarPassword"
                    type="password"
                    v-model="confirmarPassword"
                    placeholder="******"
                    required
                  />
                </div>
              </div>
            </div>
            
            <button type="submit" class="btn-crear">CREAR CUENTA</button>
          </form>
          
          <div class="login-access">
            <p>¿Ya tienes una cuenta? <a href="/login" class="here-link">Iniciar sesión</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RegistroView',
  data() {
    return {
      nombre: '',
      rut: '',
      correo: '',
      confirmarCorreo: '',
      password: '',
      confirmarPassword: ''
    }
  },
  methods: {
    async onRegistro() {
      if (this.correo !== this.confirmarCorreo) {
        alert('Los correos electrónicos no coinciden');
        return;
      }
      
      if (this.password !== this.confirmarPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
      
      // Enviar datos al servidor
      try {
        const response = await axios.post('http://localhost:3000/api/auth/register', {
          nombre: this.nombre,
          usuario: this.rut,
          correo: this.correo,
          contraseña: this.password
        });
        console.log('Registro exitoso:', response.data);
        
        this.$router.push('/login');
      } catch (error) {
        console.error('Error en el registro:', error.response || error);
        alert('Error al registrar usuario. Por favor, intente nuevamente.');
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');

.page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

.registro-container {
  width: 100%;
  max-width: 650px;
}

.registro-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
}

.logo-header {
  background: #ce0e2d;
  padding: 20px;
  text-align: center;
  border-bottom: 3px solid #b00020;
}

.logo-image {
  width: 60px;
  height: auto;
  margin-bottom: 10px;
  filter: brightness(0) invert(1);
}

.system-title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.registro-form-container {
  padding: 20px 30px;
}

.registro-title {
  text-align: center;
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
  font-size: 1.3rem;
}

.form-row {
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
}

.required {
  color: #dc3545;
  margin-right: 4px;
}

.form-group {
  flex: 1;
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 0.75rem;
  color: #495057;
  margin-bottom: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.input-with-icon {
  position: relative;
}

.input-with-icon i {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #6c757d;
  font-size: 0.9rem;
}

.input-with-icon input {
  width: 100%;
  padding: 10px 15px 10px 40px;
  border: 1px solid #dde2e6;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
  box-sizing: border-box;
}

.input-with-icon input:focus {
  outline: none;
  border-color: #ce0e2d;
  box-shadow: 0 0 0 3px rgba(206, 14, 45, 0.15);
  background-color: #ffffff;
}

.btn-crear {
  width: 100%;
  padding: 12px;
  background: #ce0e2d;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  margin-top: 10px;
  text-transform: uppercase;
}

.btn-crear:hover {
  background: #b00020;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(206, 14, 45, 0.25);
}

.btn-crear:active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(206, 14, 45, 0.15);
}

.login-access {
  font-family: 'Raleway', sans-serif;
  margin-top: 20px;
  text-align: center;
  font-size: 0.85rem;
  color: #6c757d;
}

.here-link {
  color: #ce0e2d;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.here-link:hover {
  color: #b00020;
  text-decoration: underline;
}

@media (max-width: 650px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .registro-container {
    max-width: 450px;
  }
  
  .registro-form-container {
    padding: 15px 20px;
  }
}
</style>