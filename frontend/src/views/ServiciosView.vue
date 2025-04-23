<template>
    <div class="servicios-view">
      <header class="header">
       
        <h1>Servicios</h1>

      </header>
  
      <h2 class="subtitulo">Ingresar Solicitud de la impresión...</h2>
  
      <section class="servicios">
        <div class="servicio-card">
     
          <h3>Impresión 3D</h3>
          <p>
            Solicitar impresión de tus diseños 3D con tus descripciones o archivos de impresión
          </p>
        </div>
  
        <div class="servicio-card">
          
          <h3>Asesorías</h3>
          <p>
            Reservar una hora en nuestro laboratorio para analizar tus desafíos y recibir asesoramiento profesional
          </p>
        </div>
      </section>
  
      <div class="quienes-somos">
        <button class="btn-somos">¿Quiénes somos?</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ServiciosView",
  };
  </script>
  
  <style scoped>
  .servicios-view {
    padding: 2rem;
    text-align: center;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    justify-content: center;
  }
  
  .logo {
    height: 60px;
  }
  
  .perfil-placeholder {
    font-size: 0.9rem;
    font-weight: bold;
  }
  
  .subtitulo {
    font-weight: normal;
    margin-bottom: 2rem;
  }
  
  .servicios {
    display: flex;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
  
  .servicio-card {
    background: #f5f5f5;
    padding: 1.5rem;
    border-radius: 10px;
    width: 250px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .icono {
    width: 100px;
    margin-bottom: 1rem;
  }
  
  .btn-somos {
    padding: 0.8rem 1.5rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .btn-somos:hover {
    background-color: #222;
  }
  </style>