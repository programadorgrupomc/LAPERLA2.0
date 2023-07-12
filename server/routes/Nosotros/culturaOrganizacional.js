import express from 'express';
import upload from '../../middlewares/multerConfig.js';
import CulturaOrganizacional from '../../models/Nosotros/culturaOrganizacional.js';

const router = express.Router();


// Obtener todos los CulturaOrganizacional
router.get('/', async (req, res) => {
  try {
    const culturas = await CulturaOrganizacional.find();
    res.json(culturas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las culturas organizacionales' });
  }
});

// Obtener una CulturaOrganizacional por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const cultura = await CulturaOrganizacional.findById(id);
    if (cultura) {
      res.json(cultura);
    } else {
      res.status(404).json({ error: 'Cultura organizacional no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la cultura organizacional' });
  }
});

// Crear una nueva CulturaOrganizacional
router.post('/', upload.single('imagen'), async (req, res) => {
  const { contenido, usuarioUltimaModificacion } = req.body;
  let imagen;

  if (req.file) {
    imagen = req.file.filename;
  }

  try {
    const nuevaCultura = new CulturaOrganizacional({
      contenido,
      imagen,
      usuarioUltimaModificacion,
      fechaUltimaaModificacion: Date.now(),
    });
    await nuevaCultura.save();
    res.json(nuevaCultura);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la cultura organizacional' });
  }
});

// Actualizar una CulturaOrganizacional
router.put('/:id', upload.single('imagen'), async (req, res) => {
  const { id } = req.params;
  const { contenido, usuarioUltimaModificacion } = req.body;
  let imagen;

  if (req.file) {
    imagen = req.file.filename;
  }

  try {
    const cultura = await CulturaOrganizacional.findById(id);

    if (!cultura) {
      return res.status(404).json({ error: 'Cultura organizacional no encontrada' });
    }

    cultura.contenido = contenido;
    cultura.usuarioUltimaModificacion = usuarioUltimaModificacion;
    cultura.fechaUltimaaModificacion = Date.now();

    if (imagen) {
      cultura.imagen = imagen;
    }

    await cultura.save();
    res.json(cultura);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la cultura organizacional' });
  }
});

// Eliminar una CulturaOrganizacional
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const cultura = await CulturaOrganizacional.findByIdAndDelete(id);
    if (cultura) {
      res.json({ message: 'Cultura organizacional eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Cultura organizacional no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la cultura organizacional' });
  }
});

export default router;
