import Asesoria from '../Models/Asesorias.js';

const AsesoriasController = {
  // Crear una nueva asesoría
  postAsesoria: async (req, res) => {
    const { solicitante, correo, matricula, actividad, tipoAsesoria, fecha, hora } = req.body;

    // Validación de campos requeridos
    if (!solicitante || !correo || !matricula || !actividad || !tipoAsesoria || !fecha || !hora) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios',
      });
    }

    try {
      const nuevaAsesoria = new Asesoria({ 
        solicitante, 
        correo, 
        matricula, 
        actividad, 
        tipoAsesoria, 
        fecha, 
        hora 
      });
      
      await nuevaAsesoria.save();
      
      res.status(201).json({
        mensaje: 'Asesoría agendada correctamente',
        asesoria: nuevaAsesoria
      });
    } catch (err) {
      console.error('Error al crear la asesoría:', err);
      res.status(500).json({ error: 'Error al crear la asesoría' });
    }
  },

  // Obtener todas las asesorías
  getAsesorias: async (req, res) => {
    try {
      const asesorias = await Asesoria.find().sort({ fechaCreacion: -1 });
      res.json(asesorias);
    } catch (err) {
      console.error('Error al obtener las asesorías:', err);
      res.status(500).json({ error: 'Error al obtener las asesorías' });
    }
  },

  // Obtener una asesoría por ID
  getAsesoriaById: async (req, res) => {
    try {
      const asesoria = await Asesoria.findById(req.params.id);
      
      if (!asesoria) {
        return res.status(404).json({ error: 'Asesoría no encontrada' });
      }
      
      res.json(asesoria);
    } catch (err) {
      console.error('Error al obtener la asesoría:', err);
      res.status(500).json({ error: 'Error al obtener la asesoría' });
    }
  },

  // Actualizar el estado de una asesoría
  updateEstadoAsesoria: async (req, res) => {
    const { estado } = req.body;
    
    if (!estado || !['PENDIENTE', 'APROBADA', 'RECHAZADA'].includes(estado)) {
      return res.status(400).json({ error: 'Estado no válido' });
    }
    
    try {
      const asesoria = await Asesoria.findByIdAndUpdate(
        req.params.id,
        { estado },
        { new: true }
      );
      
      if (!asesoria) {
        return res.status(404).json({ error: 'Asesoría no encontrada' });
      }
      
      res.json({
        mensaje: 'Estado de asesoría actualizado correctamente',
        asesoria
      });
    } catch (err) {
      console.error('Error al actualizar el estado de la asesoría:', err);
      res.status(500).json({ error: 'Error al actualizar la asesoría' });
    }
  },

  // Eliminar una asesoría
  deleteAsesoria: async (req, res) => {
    try {
      const asesoria = await Asesoria.findByIdAndDelete(req.params.id);
      
      if (!asesoria) {
        return res.status(404).json({ error: 'Asesoría no encontrada' });
      }
      
      res.json({ 
        mensaje: 'Asesoría eliminada correctamente',
        asesoria 
      });
    } catch (err) {
      console.error('Error al eliminar la asesoría:', err);
      res.status(500).json({ error: 'Error al eliminar la asesoría' });
    }
  }
};

export default AsesoriasController;