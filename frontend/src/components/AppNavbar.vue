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
        <li><router-link to="/servicios">Servicios</router-link></li>
        <li><router-link to="/asesoria">Asesoría</router-link></li>
      </ul>
    </div>
    <div class="user-actions">
      <div class="nombre-estudiante">Mateo Palacios</div>
      <a href="http://localhost:3001/Services/UTALCAPASS/logout.php" class="logout-button">
        <i class="fas fa-sign-out-alt"></i> Cerrar sesión
      </a>
    </div>
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
  justify-content: space-between; /* Distribuye el espacio entre el contenido y las acciones de usuario */
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: center; /* Centra los enlaces horizontalmente */
  flex-grow: 1; /* Permite que el contenido central ocupe el espacio disponible */
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

.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nombre-estudiante {
  font-weight: bold;
  color: white;
  margin-right: 0.5rem;
}

.logout-button {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: white;
  border: 1px solid #d30101;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logout-button:hover {
  background-color: #d30101;
  color: #ffffff;
}

.logout-button i {
  margin-right: 6px;
}
</style>