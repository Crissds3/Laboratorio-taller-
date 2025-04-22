const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    usuario: { type: String, required: true, unique: true },
    correo: { type: String, required: true },
    contraseña: { type: String, required: true }
});

const db = mongoose.connection.useDb('Login');

const Login = db.model('Login', RegisterSchema, 'Credenciales');
module.exports = Login;