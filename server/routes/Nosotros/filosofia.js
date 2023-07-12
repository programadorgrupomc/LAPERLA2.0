import express from 'express';
import upload from '../../middlewares/multerConfig.js';
import NuestraFilosofia from '../../models/Nosotros/filsofia.js';

const router = express.Router();


// Obtener todos los NuestraFilosofia
router.get('/', async (req, res) => {
  try {
    const filosofias = await NuestraFilosofia.find();
    res.json(filosofias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las filosofías' });
  }
});

// Obtener una NuestraFilosofia por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const filosofia = await NuestraFilosofia.findById(id);
    if (filosofia) {
      res.json(filosofia);
    } else {
      res.status(404).json({ error: 'Filosofía no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la filosofía' });
  }
});

// Crear una nueva NuestraFilosofia
router.post('/', upload.single('imagen'), async (req, res) => {
  const { titulo, contenido, usuarioUltimaModificacion } = req.body;
  let imagen;

  if (req.file) {
    imagen = req.file.filename;
  }

  try {
    const nuevaFilosofia = new NuestraFilosofia({
      titulo,
      contenido,
      imagen,
      usuarioUltimaModificacion,
      fechaUltimaaModificacion: Date.now(),
    });
    await nuevaFilosofia.save();
    res.json(nuevaFilosofia);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la filosofía' });
  }
});

// Actualizar una NuestraFilosofia
router.put('/:id', upload.single('imagen'), async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, usuarioUltimaModificacion } = req.body;
  let imagen;

  if (req.file) {
    imagen = req.file.filename;
  }

  try {
    const filosofia = await NuestraFilosofia.findById(id);

    if (!filosofia) {
      return res.status(404).json({ error: 'Filosofía no encontrada' });
    }

    filosofia.titulo = titulo;
    filosofia.contenido = contenido;
    filosofia.usuarioUltimaModificacion = usuarioUltimaModificacion;
    filosofia.fechaUltimaaModificacion = Date.now();

    if (imagen) {
      filosofia.imagen = imagen;
    }

    await filosofia.save();
    res.json(filosofia);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la filosofía' });
  }
});

// Eliminar una NuestraFilosofia
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const filosofia = await NuestraFilosofia.findByIdAndDelete(id);
    if (filosofia) {
      res.json({ message: 'Filosofía eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Filosofía no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la filosofía' });
  }
});

export default router;
