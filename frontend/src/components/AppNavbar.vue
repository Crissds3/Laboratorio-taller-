<template>
  <nav class="navbar">
    <div class="navbar-content">
      <img
        src="@/assets/logo.png"
        alt="Logo UTalca"
        class="logo"
       
      />
      <ul class="nav-links">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/asesoria">Asesoría</router-link></li>
        
        
      </ul>
    </div>
    <div class="nombre-estudiante">Mateo Palacios</div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
 
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1.5rem 2rem; /* Aumenta el padding para hacer el navbar más alto */
  display: flex;
  align-items: center;
  position: relative;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: center; /* Centra los enlaces horizontalmente */
  width: 100%;
}

.logo {
  position: absolute; /* Posiciona el logo de forma absoluta */
  left: 1rem; /* Alinea el logo a la izquierda */
  height: 100px; /* Aumenta el tamaño del logo */
  max-height: 80%;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.5rem; /* Aumenta el espacio entre los enlaces */
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem; /* Aumenta el tamaño de la fuente */
  font-weight: bold;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #00bcd4; /* Cambia el color al pasar el cursor */
}
.nombre-estudiante {
    font-weight: bold;
  }
</style>