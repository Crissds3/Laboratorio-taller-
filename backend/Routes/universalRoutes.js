const express = require('express');
const router = express.Router();

const loginRoutes = require('./LoginRoutes.js');


router.use('/auth', loginRoutes);

module.exports = router;

// ESTE ARCHIVO SE ENCARGA DE LAS RUTAS GENERALES DE LA APLICASAO