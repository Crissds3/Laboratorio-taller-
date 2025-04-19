const mongoose = require('mongoose');

const peticionSchema = new mongoose.Schema({
  solicitante: String,
  matricula: String,
  correo: String,
  actividad: String,
  maquinas: String,
  
},{collection: 'peticiones'});

module.exports = mongoose.model('Peticion', peticionSchema, 'peticiones');


