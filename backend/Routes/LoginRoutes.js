const express = require('express');
const router = express.Router();
const { login } = require('../Controllers/LoginController.js');

router.post('/login', login);

module.exports = router;

// ESTE ARCHIVO SE ENCARGA SOLO DE LAS RUTAS DE LOGIN