<!-- src/components/IndexView.vue -->
<template>
  <div class="page-wrapper">
    <div class="index-container">
      <!-- Sección Izquierda: Logo, Título, Subtítulo, Botón -->
      <div class="left-section">
        <div class="logo-container">
          <img src="@/assets/logo.png" alt="Logo Universidad de Talca" class="logo" />
        </div>

        <div class="content-wrapper">
          <div class="content">
            <h1 class="welcome-title">¡Bienvenido!</h1>
            <p class="subtitle">Prueba nuestro nuevo sistema de reservas de laboratorios</p>

            <button class="start-button" @click="irAsesoria">EMPIEZA AQUÍ</button>
          </div>
        </div>
      </div>

      <!-- Sección Derecha: Imagen del laboratorio -->
      <div class="right-section"></div>
    </div>
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
/* Contenedor para centrar y posicionar a la derecha */
.page-wrapper {
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

/* Contenedor principal con diseño de browser window */
.index-container {
  display: flex;
  min-height: 600px;
  width: 70%;
  max-width: 1200px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

/* Estilos para simular una ventana de navegador */
.index-container::before {
  content: "••••";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px 16px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
  color: #666;
  font-size: 14px;
  letter-spacing: 3px;
}

/* Sección izquierda con espaciado mejorado */
.left-section {
  flex: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
}

.logo-container {
  padding: 50px 0 20px 40px;
}

.logo {
  width: 110px;
  height: auto;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  margin: 0 20px 110px;
}

.content {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.welcome-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #000;
  font-family: 'Arial', sans-serif;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 35px;
  line-height: 1.6;
  color: #444;
  font-family: 'Arial', sans-serif;
}

/* Botón más elegante con colores */
.start-button {
  background-color: #1e88e5; /* Azul profesional */
  color: #fff;
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: center;
  width: 100%;
  max-width: 220px;
  text-transform: uppercase;
  box-shadow: 0 4px 6px rgba(30, 136, 229, 0.3);
}

.start-button:hover {
  background-color: #1565c0;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(30, 136, 229, 0.4);
}

.start-button:active {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(30, 136, 229, 0.3);
}

/* Sección derecha con imagen de laboratorio */
.right-section {
  flex: 1;
  height: 100%; /* Asegura que ocupe todo el alto del contenedor padre */
  background-image: url("@/assets/laboratorio2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute; /* Añade posición absoluta */
  right: 0; /* Lo posiciona a la derecha */
  top: 0; /* Lo alinea desde arriba */
  width: 50%; /* Asegura que tome la mitad del ancho */
}

/* Media query para dispositivos móviles */
@media (max-width: 990px) {
  .index-container {
    width: 90%;
    flex-direction: column;
    min-height: 700px;
  }
  
  .right-section {
    min-height: 40vh;
  }
  
  .content-wrapper {
    padding: 20px 15px 40px;
  }
  
  .content {
    padding: 25px 20px;
  }
  
  .welcome-title {
    font-size: 2.5rem;
  }
  
  .logo-container {
    padding: 50px 0 10px;
    display: flex;
    justify-content: center;
  }
}

/* Para pantallas muy pequeñas */
@media (max-width: 480px) {
  .welcome-title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .start-button {
    padding: 12px 20px;
    font-size: 1rem;
  }
}
</style>