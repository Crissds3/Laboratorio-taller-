const mongoose = require('mongoose');

const CredencialesSchema = new mongoose.Schema({
    usuario: {type: String, required: true, unique: true},
    contraseña: { type: String, required: true },
});

//ESTO DE AQUI SE USA PARA SABER A CUAL BD HAY QUE MANDAR LOS DATOS
const db = mongoose.connection.useDb('Login');
//EN ESTE CASO SE MANDA A LA BD LOGIN A LA COLECCION CREDENCIALES
const Login = db.model('Login', CredencialesSchema, 'Credenciales');
module.exports = Login;