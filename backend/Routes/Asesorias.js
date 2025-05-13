import express from 'express';
import AsesoriasController from '../Controllers/AsesoriasController.js';

const router = express.Router();

// Rutas para las asesorías
router.post('/', AsesoriasController.postAsesoria);
router.get('/', AsesoriasController.getAsesorias);
router.get('/:id', AsesoriasController.getAsesoriaById);
router.put('/:id/estado', AsesoriasController.updateEstadoAsesoria);
router.delete('/:id', AsesoriasController.deleteAsesoria);

export default router;