const express = require('express');
const router = express.Router();

const loginRoutes = require('./LoginRoutes.js');
const registerRoutes = require('./RegisterRoutes.js');
const impresionRoutes = require('./impresionRoutes');

router.use('/auth', loginRoutes);
router.use('/auth', registerRoutes);
router.use('/api', impresionRoutes);
module.exports = router;

// ESTE ARCHIVO SE ENCARGA DE LAS RUTAS GENERALES DE LA APLICASAO