import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());

// ✅ Conexión directa a MongoDB local
mongoose.connect('mongodb://localhost:27017/taller', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB local en base de datos "taller"'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// ✅ Esquema corregido según lo solicitado
const peticionSchema = new mongoose.Schema({
  solicitante: String,
  matricula: String,
  correo: String,
  actividad: String,
  maquinas: String,
});

// ✅ Se asigna la colección "peticiones"
const Peticion = mongoose.model('Peticion', peticionSchema, 'peticiones');

// ✅ Ruta POST para guardar peticiones
app.post('/usuarios', async (req, res) => {
  const { solicitante, correo, matricula, actividad, maquinas } = req.body;

  if (!solicitante || !correo || !matricula || !actividad || !maquinas) {
    return res.status(400).json({
      error: 'Todos los campos (solicitante, correo, matricula, actividad, maquinas) son obligatorios',
    });
  }

  try {
    const nuevaPeticion = new Peticion({ solicitante, correo, matricula, actividad, maquinas });
    await nuevaPeticion.save();
    res.status(201).json({ mensaje: 'Petición guardada', peticion: nuevaPeticion });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar la petición' });
  }
});

// ✅ Ruta GET para listar peticiones
app.get('/usuarios', async (req, res) => {
  try {
    const peticiones = await Peticion.find();
    res.json(peticiones);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las peticiones' });
  }
});

// ✅ Servidor escuchando
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
