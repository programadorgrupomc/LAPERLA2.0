import express from 'express';
import upload from '../../middlewares/multerConfig.js';
import PptWork from '../../models/Work/pptwork.js';

const router = express.Router();

// Obtener todos los PptWork
router.get('/', async (req, res) => {
  try {
    const pptWorks = await PptWork.find();
    res.json(pptWorks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los PptWork' });
  }
});

// Obtener un PptWork por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const pptWork = await PptWork.findById(id);
    if (pptWork) {
      res.json(pptWork);
    } else {
      res.status(404).json({ error: 'PptWork no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el PptWork' });
  }
});

// Crear un nuevo PptWork
router.post('/', upload.single('imgPpt'), async (req, res) => {
  const { titulo, contenido, usuarioUltimaModificacion } = req.body;
  let imgPpt;

  if (req.file) {
    imgPpt = req.file.filename;
  }

  try {
    const nuevoPptWork = new PptWork({
      titulo,
      contenido,
      imgPpt,
      usuarioUltimaModificacion,
      fechaUltimaModificacion: Date.now(),
    });
    await nuevoPptWork.save();
    res.json(nuevoPptWork);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el PptWork' });
  }
});

// Actualizar un PptWork
router.put('/:id', upload.single('imgPpt'), async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, usuarioUltimaModificacion } = req.body;
  let imgPpt;

  if (req.file) {
    imgPpt = req.file.filename;
  }

  try {
    const pptWork = await PptWork.findById(id);

    if (!pptWork) {
      return res.status(404).json({ error: 'PptWork no encontrado' });
    }

    pptWork.titulo = titulo;
    pptWork.contenido = contenido;
    pptWork.usuarioUltimaModificacion = usuarioUltimaModificacion;
    pptWork.fechaUltimaModificacion = Date.now();

    if (imgPpt) {
      pptWork.imgPpt = imgPpt;
    }

    await pptWork.save();
    res.json(pptWork);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el PptWork' });
  }
});

// Eliminar un PptWork
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const pptWork = await PptWork.findByIdAndDelete(id);
    if (pptWork) {
      res.json({ message: 'PptWork eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'PptWork no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el PptWork' });
  }
});

export default router;
