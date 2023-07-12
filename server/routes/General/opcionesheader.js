import express from 'express';
import OpcionesHeader from '../../models/General/opcionesheader.js';

const router = express.Router();

// Obtener las opciones del header
router.get('/', async (req, res) => {
  try {
    const opciones = await OpcionesHeader.findOne();
    res.json(opciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las opciones del header' });
  }
});

// Crear o actualizar las opciones del header
router.post('/', async (req, res) => {
  const { titulo, usuarioUltimaModificacion } = req.body;

  try {
    let opciones = await OpcionesHeader.findOne();

    if (!opciones) {
      opciones = new OpcionesHeader({
        titulo,
        usuarioUltimaModificacion,
        fechaUltimaModificacion: Date.now(),
      });
    } else {
      opciones.titulo = titulo;
      opciones.usuarioUltimaModificacion = usuarioUltimaModificacion;
      opciones.fechaUltimaModificacion = Date.now();
    }

    await opciones.save();
    res.json(opciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear o actualizar las opciones del header' });
  }
});

export default router;
