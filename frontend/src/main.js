import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el enrutador

const app = createApp(App);

app.use(router); // Registra el enrutador
app.mount('#app'); // Monta la aplicación en el elemento con id "app"