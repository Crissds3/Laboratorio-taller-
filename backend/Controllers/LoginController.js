const { authenticate } = require('../Services/loginService.js');


const login = async (req, res) => {
    try {
        const { usuario, contraseña } = req.body;
        console.log("Credenciales recibidas:", usuario, contraseña);
        if (!usuario || !contraseña) {
            return res.status(400).json({ message: 'usuario y contraseña son requeridos' });
        }
        const user = await authenticate(usuario, contraseña);
        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        return res.status(200).json({ success: true, message: 'Login exitoso' });
    } catch (error) {
        return res.status(500).json({ message: 'Error del servidor' });
    }
};

module.exports = { login };