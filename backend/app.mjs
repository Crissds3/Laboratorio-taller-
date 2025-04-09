import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;


app.use(express.json());

                                            //falta agregar la wea
mongoose.connect('mongodb://localhost:27017/usuariosdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));


const usuarioSchema = new mongoose.Schema({
  Solicitante: String,
  Matricula: String,
  Email: String,
  Actividad: String,
  Maquina: String,

});

const Usuario = mongoose.model('Usuario', usuarioSchema);


app.post('/usuarios', async (req, res) => {
  const { Nombre, Correo, Matricula,Actividad } = req.body;

  if (!Nombre || !Correo || !Matricula || !Actividad || !Maquina) {
    return res.status(400).json({ error: 'Nombre, correo, Matricula y Actividad son obligatorios. Asegurese de seleccionar la maquina' });
  }

  try {
    const nuevoUsuario = new Usuario({ Nombre, Correo, Matricula, Actividad, Maquina });
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario guardado', usuario: nuevoUsuario });
  } catch (err) {
    res.status(500).json({ error: 'Error al guardar el usuario' });
  }
});

// Ruta para listar usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
