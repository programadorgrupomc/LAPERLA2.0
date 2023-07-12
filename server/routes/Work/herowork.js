import express from 'express';
import upload from '../../middlewares/multerConfig.js';
import HeroWork from '../../models/Work/heroWork.js';

const router = express.Router();


// Obtener todos los HeroWork
router.get('/', async (req, res) => {
  try {
    const heroWorks = await HeroWork.find();
    res.json(heroWorks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los HeroWork' });
  }
});

// Obtener un HeroWork por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const heroWork = await HeroWork.findById(id);
    if (heroWork) {
      res.json(heroWork);
    } else {
      res.status(404).json({ error: 'HeroWork no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el HeroWork' });
  }
});

// Crear un nuevo HeroWork
router.post('/', upload.single('imgHero'), async (req, res) => {
  const { titulo, usuarioUltimaModificacion } = req.body;
  let imgHero;

  if (req.file) {
    imgHero = req.file.filename;
  }

  try {
    const nuevoHeroWork = new HeroWork({
      titulo,
      imgHero,
      usuarioUltimaModificacion,
      fechaUltimaModificacion: Date.now(),
    });
    await nuevoHeroWork.save();
    res.json(nuevoHeroWork);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el HeroWork' });
  }
});

// Actualizar un HeroWork
router.put('/:id', upload.single('imgHero'), async (req, res) => {
  const { id } = req.params;
  const { titulo, usuarioUltimaModificacion } = req.body;
  let imgHero;

  if (req.file) {
    imgHero = req.file.filename;
  }

  try {
    const heroWork = await HeroWork.findById(id);

    if (!heroWork) {
      return res.status(404).json({ error: 'HeroWork no encontrado' });
    }

    heroWork.titulo = titulo;
    heroWork.usuarioUltimaModificacion = usuarioUltimaModificacion;
    heroWork.fechaUltimaModificacion = Date.now();

    if (imgHero) {
      heroWork.imgHero = imgHero;
    }

    await heroWork.save();
    res.json(heroWork);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el HeroWork' });
  }
});

// Eliminar un HeroWork
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const heroWork = await HeroWork.findByIdAndDelete(id);
    if (heroWork) {
      res.json({ message: 'HeroWork eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'HeroWork no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el HeroWork' });
  }
});

export default router;
