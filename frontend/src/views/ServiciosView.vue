<template>
    <div class="servicios-view">
      <header class="header">
       
        <h1>Servicios</h1>

      </header>
  
      <h2 class="subtitulo">Ingresar Solicitud de la impresión...</h2>
  
      <section class="servicios">
  <button class="servicio-card impresion" @click="$router.push('/impresion')">
    <div class="info">
      <h2>Impresión 3D</h2>
      <p>
        Solicitar impresión de tus diseños 3D con tus descripciones o archivos de impresión
      </p>
    </div>
    <div class="imagen"></div>
  </button>

  <button class="servicio-card asesoria" @click="$router.push('/asesoria')">
    <div class="info">
      <h2>Asesorías</h2>
      <p>
        Reservar una hora en nuestro laboratorio para analizar tus desafíos y recibir asesoramiento profesional
      </p>
    </div>
    <div class="imagen"></div>
  </button>
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
  position: relative;
  background: #f5f5f5;
  border-radius: 10px;
  width: 250px;
  height: 350px; /* Define una altura fija para las tarjetas */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none; /* Elimina el borde del botón */
  cursor: pointer; /* Cambia el cursor a "pointer" */
  display: flex;
  flex-direction: column; /* Organiza el contenido en columnas */
  overflow: hidden;
}

.servicio-card .info {
  padding: 1rem;
  text-align: center;
  flex: 1; /* Ocupa el espacio disponible en la parte superior */
}

.servicio-card .info h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.servicio-card .info p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

.servicio-card .imagen {
  height: 150px; /* Define la altura de la imagen */
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  
}

/* Imagen específica para la tarjeta de impresión */
.servicio-card.impresion .imagen {
  background-image: url('@/assets/impresion3d.png'); /* Cambia esta URL por la imagen deseada */
}

/* Imagen específica para la tarjeta de asesorías */
.servicio-card.asesoria .imagen {
  background-image: url('@/assets/asesorias.png'); /* Cambia esta URL por la imagen deseada */
}

.servicio-card:hover {
  transform: translateY(-10px); /* Mueve la tarjeta hacia arriba */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Aumenta la sombra */
}

.servicio-card:hover .imagen {
  transform: scale(1.1); /* Amplía ligeramente la imagen al pasar el cursor */
  filter: blur(4px);
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