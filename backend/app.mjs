import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import universalRoutes from './Routes/universalRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://grupo8:3xj6x1kGjyCvDw4G@tallersofware.fwrekcn.mongodb.net/?retryWrites=true&w=majority&appName=TallerSofware', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB local en base de datos "taller"'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

app.use('/api',universalRoutes);
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
