import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import sgMail from '@sendgrid/mail'; 
const app = express();
const port = 3000;


sgMail.setApiKey(process.env.SENDGRID_API_KEY);


app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/taller', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB local en base de datos "taller"'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

const peticionSchema = new mongoose.Schema({
  solicitante: String,
  matricula: String,
  correo: String,
  actividad: String,
  maquinas: String,
});


const Peticion = mongoose.model('Peticion', peticionSchema, 'peticiones');

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

    const msg = {
      to: correo, 
      from: 'utalcapruebastaller@gmail.com',
      subject: 'Tu petición ha sido recibida',
      text: 'Tu petición ha sido recibida',
      html: '<strong>Tu petición ha sido recibida</strong>',
    };

  
    await sgMail.send(msg);
    console.log(`Email enviado a ${correo}`);

    res.status(201).json({ mensaje: 'Petición guardada y email enviado', peticion: nuevaPeticion });
  } catch (err) {
    console.error('Error en el proceso:', err);
    res.status(500).json({ error: 'Error al guardar la petición o enviar el email' });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const peticiones = await Peticion.find();
    res.json(peticiones);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las peticiones' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
