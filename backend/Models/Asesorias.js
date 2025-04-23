import mongoose from 'mongoose';

const asesoriaSchema = new mongoose.Schema({
  solicitante: {
    type: String,
    required: true
  },
  matricula: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  actividad: {
    type: String,
    required: true
  },
  tipoAsesoria: {
    type: String,
    required: true,
    enum: ['ONLINE', 'PRESENCIAL']
  },
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    default: 'PENDIENTE',
    enum: ['PENDIENTE', 'APROBADA', 'RECHAZADA']
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
}, { collection: 'asesorias' });

const Asesoria = mongoose.model('Asesoria', asesoriaSchema, 'asesorias');

export default Asesoria;