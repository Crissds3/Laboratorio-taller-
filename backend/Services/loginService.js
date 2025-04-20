const Login = require('../Models/Login.js');

const authenticate = async (usuario, contraseña) => {
    try {
        const user = await Login.findOne({ usuario });
        if (!user) 
            return null;
        //NO LO HE HASHEADO PQ NO SE SI VAMOS A USAR ESTO AL FINAL 
        if (user.contraseña !== contraseña) 
            return null;
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = { authenticate };