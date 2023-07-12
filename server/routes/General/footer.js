import express from 'express';
import footer from '../../models/General/footer.js';

const router = express.Router();

// Obtener las footer
router.get('/', async (req, res) => {
  try {
    const opciones = await footer.findOne();
    res.json(opciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las footer' });
  }
});

// Crear o actualizar las footer
router.post('/', async (req, res) => {
  const { telefono, email, direccion, usuarioUltimaModificacion } = req.body;

  try {
    let opciones = await footer.findOne();

    if (!opciones) {
      opciones = new footer({
        telefono,
        email,
        direccion,
        usuarioUltimaModificacion,
        fechaUltimaModificacion: Date.now(),
      });
    } else {
      opciones.telefono = telefono;
      opciones.email = email;
      opciones.direccion = direccion;
      opciones.usuarioUltimaModificacion = usuarioUltimaModificacion;
      opciones.fechaUltimaModificacion = Date.now();
    }

    await opciones.save();
    res.json(opciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear o actualizar las footer' });
  }
});

export default router;
