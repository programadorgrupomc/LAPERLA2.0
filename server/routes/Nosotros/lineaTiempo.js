import express from 'express';
import upload from '../../middlewares/multerConfig.js';
import LineaTiempo from '../../models/Nosotros/lineaTiempo.js';

const router = express.Router();


// Obtener todos los LineaTiempo
router.get('/', async (req, res) => {
  try {
    const lineas = await LineaTiempo.find();
    res.json(lineas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las líneas de tiempo' });
  }
});

// Obtener una LineaTiempo por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const linea = await LineaTiempo.findById(id);
    if (linea) {
      res.json(linea);
    } else {
      res.status(404).json({ error: 'Línea de tiempo no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la línea de tiempo' });
  }
});

// Crear una nueva LineaTiempo
router.post('/', upload.single('imagen'), async (req, res) => {
  const { titulo, contenido, año, usuarioUltimaModificacion } = req.body;
  let imagen;

  if (req.file) {
    imagen = req.file.filename;
  }

  try {
    const nuevaLinea = new LineaTiempo({
      titulo,
      contenido,
      año,
      imagen,
      usuarioUltimaModificacion,
      fechaUltimaaModificacion: Date.now(),
    });
    await nuevaLinea.save();
    res.json(nuevaLinea);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la línea de tiempo' });
  }
});

// Actualizar una LineaTiempo
router.put('/:id', upload.single('imagen'), async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, año, usuarioUltimaModificacion } = req.body;
  let imagen;

  if (req.file) {
    imagen = req.file.filename;
  }

  try {
    const linea = await LineaTiempo.findById(id);

    if (!linea) {
      return res.status(404).json({ error: 'Línea de tiempo no encontrada' });
    }

    linea.titulo = titulo;
    linea.contenido = contenido;
    linea.año = año;
    linea.usuarioUltimaModificacion = usuarioUltimaModificacion;
    linea.fechaUltimaaModificacion = Date.now();

    if (imagen) {
      linea.imagen = imagen;
    }

    await linea.save();
    res.json(linea);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la línea de tiempo' });
  }
});

// Eliminar una LineaTiempo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const linea = await LineaTiempo.findByIdAndDelete(id);
    if (linea) {
      res.json({ message: 'Línea de tiempo eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Línea de tiempo no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la línea de tiempo' });
  }
});

export default router;
