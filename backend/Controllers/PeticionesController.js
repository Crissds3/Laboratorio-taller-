const Peticion = require('../Models/Peticiones');


const PeticionesController = {
    postPeticion: async (req, res) => {
        const { solicitante, correo, matricula, actividad, maquinas } = req.body;

        if (!solicitante || !correo || !matricula || !actividad || !maquinas) {
            return res.status(400).json({
                error: 'Todos los campos (solicitante, correo, matricula, actividad, maquinas) son obligatorios',
            });
        }

        try {
            const nuevaPeticion = new Peticion({ solicitante, correo, matricula, actividad, maquinas });
            await nuevaPeticion.save();
            res.status(201).json(nuevaPeticion);
        } catch (err) {
            res.status(500).json({ error: 'Error al crear la petición' });
        }
    },

    getPeticiones: async (req, res) => {
        try {
            const peticiones = await Peticion.find();
            res.json(peticiones);
        } catch (err) {
            res.status(500).json({ error: 'Error al obtener las peticiones' });
        }
    },
};

module.exports = PeticionesController;