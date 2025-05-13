const express = require('express');
const ImpresionController = require('../Controllers/ImpresionController');
const impressionService = require('../Services/ImpresionService'); // Asegúrate de que este servicio exista

const router = express.Router();
const impresionController = new ImpresionController(impressionService);

router.post('/impresion', (req, res) => impresionController.createImpresion(req, res));
router.get('/impresion', (req, res) => impresionController.getImpresiones(req, res));

module.exports = router;