const mongoose = require('mongoose');

const ImpresionSchema = new mongoose.Schema({
    NombreSolicitante: { type: String, required: true },
    MatriculaSolicitante: { type: String, required: true },
    CorreoSolicitante: { type: String, required: true },
    Solicitud: { type: String, required: true },
    Actividad: { type: String, required: true },
    TipodeProyecto: { type: String, required: true },
    SeleccionMaterial: { type: String, required: true },
    Archivo: {
        type: String, 
        required: true,
        validate: {
          validator: function(v) {
            return /\.(stl|obj)$/i.test(v); 
          },
          message: props => `${props.value} no es un archivo .stl o .obj válido`
        }
    }
});

const db = mongoose.connection.useDb('Impresion');
//EN ESTE CASO SE MANDA A LA BD LOGIN A LA COLECCION CREDENCIALES
const Impresion = db.model('Impresion', ImpresionSchema, 'Impresion');
module.exports = Impresion;