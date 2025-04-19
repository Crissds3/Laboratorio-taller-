const express = require('express');
const router = express.Router();
const PeticionesController = require('../Controllers/PeticionesController');

router.post('/peticiones', PeticionesController.postPeticion);
router.get('/peticiones', PeticionesController.getPeticiones);

module.exports = router;