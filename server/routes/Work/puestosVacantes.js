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
    estado, // Added the 'estado' field to the request body for creation.
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
      estado, // Set the 'estado' field to the provided value.
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
    estado, // Added the 'estado' field to the request body for update.
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

    if(titulo) puesto.titulo = titulo;
    if(experiencia) puesto.experiencia = experiencia;
    if(departamento) puesto.departamento = departamento;
    if(puesto) puesto.tipoempleo = tipoempleo;
    if(objetivoPuesto) puesto.objetivoPuesto = objetivoPuesto;
    if(funciones) puesto.funciones = funciones;
    if(requisitos) puesto.requisitos = requisitos;
    if(sueldo) puesto.sueldo = sueldo;
    if(_idformulario) puesto._idformulario = _idformulario;
    if(usuarioUltimaModificacion) puesto.usuarioUltimaModificacion = usuarioUltimaModificacion;
    puesto.fechaUltimaModificacion = Date.now();
    if(estado) puesto.estado = estado; // Update the 'estado' field with the provided value.

    if (imgPuesto) {
      puesto.imgPuesto = imgPuesto;
    }

    await puesto.save();
    res.json(puesto);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el puesto vacante' });
  }
});

// Toggle Activation/Deactivation of a puesto vacante
// router.patch('/:id/activar', async (req, res) => {
//   const { id } = req.params;
//   const { estado } = req.body;

//   try {
//     const puesto = await PuestosVacantes.findById(id);

//     if (!puesto) {
//       return res.status(404).json({ error: 'Puesto vacante no encontrado' });
//     }

//     puesto.estado = estado;
//     await puesto.save();
//     res.json(puesto);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al actualizar el estado del puesto vacante' });
//   }
// });

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
