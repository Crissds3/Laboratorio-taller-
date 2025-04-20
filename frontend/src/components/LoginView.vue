<template>
  <div class="page-wrapper">
    <div class="login-container">
      <div class="login-card">
        <div class="logo-header">
          <img src="@/assets/logo.png" alt="Logo Universidad de Talca" class="logo-image"/>
          <h1 class="system-title">SISTEMA DE RESERVAS DE LABORATORIO</h1>
        </div>
        
        <div class="login-form-container">
          <div class="utalcapass-badge">
            <span>Inicia sesión con UTalcaPass</span>
          </div>
          
          <form class="login-form" @submit.prevent="onLogin">
            <div class="form-group">
              <label for="usuario">USUARIO</label>
              <div class="input-with-icon">
                <i class="fas fa-user"></i>
                <input
                  id="usuario"
                  type="text"
                  v-model="usuario"
                  placeholder="21295542"
                  required
                />
              </div>
            </div>
            
            <div class="form-group">
              <label for="password">CONTRASEÑA</label>
              <div class="input-with-icon">
                <i class="fas fa-lock"></i>
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  placeholder="******"
                  required
                />
              </div>
              <small class="forgot-password">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </small>
            </div>
            
            <button type="submit" class="btn-login">INICIAR SESIÓN</button>
          </form>
          
          <div class="external-access">
            <p>Si eres externo y no tienes cuenta, pulsa <router-link to="/registro" class="here-link">aquí</router-link></p>
          </div>
        </div>
        
        <div class="admin-access">
          <a href="/admin" class="admin-button">Acceso ADMIN</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LoginView',
  data() {
    return {
      usuario: '',
      password: ''
    }
  },
  methods: {
    async onLogin() {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login', {
          usuario: this.usuario,
          contraseña: this.password
        });
        if (response.data.success) {
          // Redirigir a la página principal o dashboard
          this.$router.push('/dashboard');
        } else {
          alert('Credenciales incorrectas. Intenta nuevamente.');
        }
      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        alert('Error en el inicio de sesión. Por favor, intenta nuevamente.');
      }
      
    },
    irRegistro() {
      this.$router.push('/registro')
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
  font-family: 'Raleway', sans-serif;
}

.login-container {
  width: 100%;
  max-width: 450px;
}

.login-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
}

.logo-header {
  background: linear-gradient(90deg, #d30101 0%, #d30101 100%);
  padding: 25px;
  text-align: center;
  border-bottom: 3px solid #ffffff;
}

.logo-image {
  width: 70px;
  height: auto;
  margin-bottom: 15px;
  filter: brightness(0) invert(1);
}

.system-title {
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.login-form-container {
  font-family: 'Poppins', sans-serif;
  padding: 30px;
}

.utalcapass-badge {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 12px 15px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #495057;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  position: relative;
}

.help-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #e9ecef;
  margin-left: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  color: #495057;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  color: #495057;
  margin-bottom: 8px;
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
  font-size: 1rem;
}

.input-with-icon input {
  width: 90%;
  padding: 12px 15px 12px 45px;
  border: 1px solid #dde2e6;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background-color: #f8f9fa;
}

.input-with-icon input:focus {
  outline: none;
  border-color: #df4a4a;
  box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.15);
  background-color: #ffffff;
}

.forgot-password {
  display: block;
  text-align: right;
  margin-top: 8px;
  font-size: 0.8rem;
}

.forgot-password a {
  color: #000000;
  text-decoration: none;
  transition: color 0.2s;
}

.forgot-password a:hover {
  color: #000000;
  text-decoration: underline;
}

.btn-login {
  width: 100%;
  padding: 14px;
  background: linear-gradient(90deg, #d30101 0%, #d30101 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  letter-spacing: 0.5px;
  margin-top: 10px;
}

.btn-login:hover {
  background: linear-gradient(90deg, #df4a4a 0%, #f24d4d 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.25);
}

.btn-login:active {
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

.external-access {
  font-family: 'Poppins', sans-serif;
  margin-top: 25px;
  text-align: center;
  font-size: 0.85rem;
  color: #6c757d;
}

.here-link {
  font-family: 'Poppins', sans-serif;
  color: #df4a4a;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.here-link:hover {
  color: #e35858;
  text-decoration: underline;
}

.admin-access {
  font-family: 'Poppins', sans-serif;
  position: absolute;
  top: 15px;
  right: 15px;
}

.admin-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #fff; /* Cambiado a blanco sólido */
  color: #d30101; /* Cambiado a rojo para mantener el tema */
  border: 1px solid #d30101;
  border-radius: 15px;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.admin-button:hover {
  background-color: #d30101; /* Color de fondo al hover */
  color: #fff; /* Texto blanco al hover */
  transform: translateY(-2px);
}

@media (max-width: 576px) {
  .login-form-container {
    padding: 20px;
  }

  .system-title {
    font-size: 1.1rem;
  }
  
  .btn-login {
    padding: 12px;
  }
  
  .admin-button {
    padding: 6px 12px;
    font-size: 0.7rem;
  }
}
</style>