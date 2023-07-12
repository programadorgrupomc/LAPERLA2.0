import express from 'express';
import PuestosVacantes from '../../models/Work/puestosVacantes.js';
import upload from '../../middlewares/multerConfig.js';

const router = express.Router();

// Obtener todos los puestos vacantes
router.get('/', async (req, res) => {
  try {
    const puestos = await PuestosVacantes.find();
    res.json(puestos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los puestos vacantes' });
  }
});

// Obtener un puesto vacante por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const puesto = await PuestosVacantes.findById(id);
    if (puesto) {
      res.json(puesto);
    } else {
      res.status(404).json({ error: 'Puesto vacante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el puesto vacante' });
  }
});

// Crear un nuevo puesto vacante
router.post('/', upload.single('imgPuesto'), async (req, res) => {
  const {
    titulo,
    experiencia,
    departamento,
    tipoempleo,
    objetivoPuesto,
    funciones,
    requisitos,
    sueldo,
    _idformulario,
    usuarioUltimaModificacion,
  } = req.body;
  let imgPuesto;

  if (req.file) {
    imgPuesto = req.file.filename;
  }

  try {
    const nuevoPuesto = new PuestosVacantes({
      titulo,
      experiencia,
      departamento,
      tipoempleo,
      objetivoPuesto,
      funciones,
      requisitos,
      sueldo,
      _idformulario,
      imgPuesto,
      usuarioUltimaModificacion,
      fechaUltimaModificacion: Date.now(),
    });
    await nuevoPuesto.save();
    res.json(nuevoPuesto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el puesto vacante' });
  }
});

// Actualizar un puesto vacante
router.put('/:id', upload.single('imgPuesto'), async (req, res) => {
  const { id } = req.params;
  const {
    titulo,
    experiencia,
    departamento,
    tipoempleo,
    objetivoPuesto,
    funciones,
    requisitos,
    sueldo,
    _idformulario,
    usuarioUltimaModificacion,
  } = req.body;
  let imgPuesto;

  if (req.file) {
    imgPuesto = req.file.filename;
  }

  try {
    const puesto = await PuestosVacantes.findById(id);

    if (!puesto) {
      return res.status(404).json({ error: 'Puesto vacante no encontrado' });
    }

    puesto.titulo = titulo;
    puesto.experiencia = experiencia;
    puesto.departamento = departamento;
    puesto.tipoempleo = tipoempleo;
    puesto.objetivoPuesto = objetivoPuesto;
    puesto.funciones = funciones;
    puesto.requisitos = requisitos;
    puesto.sueldo = sueldo;
    puesto._idformulario = _idformulario;
    puesto.usuarioUltimaModificacion = usuarioUltimaModificacion;
    puesto.fechaUltimaModificacion = Date.now();

    if (imgPuesto) {
      puesto.imgPuesto = imgPuesto;
    }

    await puesto.save();
    res.json(puesto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el puesto vacante' });
  }
});

// Eliminar un puesto vacante
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const puesto = await PuestosVacantes.findByIdAndDelete(id);
    if (puesto) {
      res.json({ message: 'Puesto vacante eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Puesto vacante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el puesto vacante' });
  }
});

export default router;
