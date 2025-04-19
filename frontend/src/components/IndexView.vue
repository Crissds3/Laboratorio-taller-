<template>
  <div class="page-wrapper">
    <div class="index-container">
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
      <div class="right-section">
      </div>
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
.page-wrapper {
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
}

.index-container {
  display: flex;
  min-height: 600px;
  width: 100%;
  max-width: 1200px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}

.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 1;
  min-width: 50%;
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
  margin: 0 20px 80px;
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

.start-button {
  background-color: #1e88e5; 
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

.right-section {
  flex: 1;
  background-image: url("@/assets/laboratorio2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 50%;
}

/* Tablet and smaller devices */
@media (max-width: 990px) {
  .index-container {
    flex-direction: column;
    min-height: auto;
  }
  
  .left-section, .right-section {
    min-width: 100%;
  }
  
  .left-section {
    order: 2;
    padding-top: 20px;
    padding-bottom: 40px;
  }
  
  .right-section {
    order: 1;
    min-height: 300px;
  }
  
  .logo-container {
    padding: 20px 0 10px 20px;
  }
  
  .content-wrapper {
    margin: 0 auto;
    padding: 20px;
    width: 90%;
    max-width: 500px;
  }
  
  .content {
    max-width: 100%;
  }
  
  .welcome-title {
    font-size: 2.5rem;
  }
}

/* Mobile devices */
@media (max-width: 600px) {
  .page-wrapper {
    padding: 10px;
  }

  .index-container {
    border-radius: 6px;
  }
  
  .right-section {
    min-height: 200px;
  }
  
  .logo-container {
    padding: 15px 0 5px 15px;
  }
  
  .logo {
    width: 90px;
  }
  
  .content-wrapper {
    padding: 10px;
    margin-bottom: 20px;
  }
  
  .content {
    padding: 20px 15px;
  }
  
  .welcome-title {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .subtitle {
    font-size: 1rem;
    margin-bottom: 25px;
  }
  
  .start-button {
    padding: 12px 20px;
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .welcome-title {
    font-size: 1.8rem;
  }
  
  .content {
    padding: 15px 10px;
  }
  
  .right-section {
    min-height: 150px;
  }
}
</style>