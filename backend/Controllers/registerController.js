const { registerUser } = require('../Services/RegisterService.js');

const register = async (req, res) => {
    try {
        const { nombre, usuario, correo, contraseña } = req.body;
        if (!nombre || !usuario || !correo || !contraseña) {
            return res.status(400).json({ message: 'Todos los campos son requeridos' });
        }
        const result = await registerUser(nombre, usuario, correo, contraseña);
        if (result.error) {
            return res.status(409).json({ message: result.error });
        }
        return res.status(201).json({ success: true, message: 'Usuario registrado exitosamente', data: result });
    } catch (error) {
        console.error('Error en registerController:', error);  // impresión del error completo
        return res.status(500).json({ message: 'Error del servidor', error: error.message });
    }
};

module.exports = { register };