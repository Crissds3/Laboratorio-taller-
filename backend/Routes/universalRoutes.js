const express = require('express');
const router = express.Router();

const loginRoutes = require('./LoginRoutes.js');
const registerRoutes = require('./RegisterRoutes.js');

router.use('/auth', loginRoutes);
router.use('/auth', registerRoutes);

module.exports = router;

// ESTE ARCHIVO SE ENCARGA DE LAS RUTAS GENERALES DE LA APLICASAO