import express from 'express';
import RedesSociales from '../../models/General/redessociales.js';

const router = express.Router();

// Obtener todas las redes sociales
router.get('/', async (req, res) => {
  try {
    const redesSociales = await RedesSociales.find();
    res.json(redesSociales);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las redes sociales' });
  }
});

// Obtener una red social por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const redSocial = await RedesSociales.findById(id);
    if (redSocial) {
      res.json(redSocial);
    } else {
      res.status(404).json({ error: 'Red social no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la red social' });
  }
});

// Crear una nueva red social
router.post('/', async (req, res) => {
  const { nombre, link, usuarioUltimaModificacion } = req.body;

  try {
    const nuevaRedSocial = new RedesSociales({
      nombre,
      link,
      usuarioUltimaModificacion,
      fechaUltimaModificacion: Date.now(),
    });
    await nuevaRedSocial.save();
    res.json(nuevaRedSocial);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la red social' });
  }
});

// Actualizar una red social
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, link, usuarioUltimaModificacion } = req.body;

  try {
    const redSocial = await RedesSociales.findByIdAndUpdate(
      id,
      {
        nombre,
        link,
        usuarioUltimaModificacion,
        fechaUltimaModificacion: Date.now(),
      },
      { new: true }
    );
    if (redSocial) {
      res.json(redSocial);
    } else {
      res.status(404).json({ error: 'Red social no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la red social' });
  }
});

// Eliminar una red social
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const redSocial = await RedesSociales.findByIdAndDelete(id);
    if (redSocial) {
      res.json({ message: 'Red social eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Red social no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la red social' });
  }
});

export default router;
