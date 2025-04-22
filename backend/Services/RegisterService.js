const Register = require('../Models/Register.js');

const registerUser = async (nombre, usuario, correo, contraseña) => {
    try {
        // VERIFICA EL RUT
        const usuarioExistente = await Register.findOne({ usuario });
        if (usuarioExistente) {
            return { error: 'Usuario ya registrado' };
        }
        const nuevoUsuario = new Register({ nombre, usuario, correo, contraseña });
        return await nuevoUsuario.save();
    } catch (error) {
        throw error;
    }
};

module.exports = { registerUser };