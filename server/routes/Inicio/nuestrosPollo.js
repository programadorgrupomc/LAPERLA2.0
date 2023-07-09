import express from 'express';
import NuestroPolloModel from '../../models/Inicio/nuestroPollo.js';
import upload from '../../middlewares/multerConfig.js';

const router = express.Router();

// Obtener todos los NuestroPollos
router.get('/', async (req, res) => {
  try {
    const nuestroPollos = await NuestroPolloModel.find();
    res.json(nuestroPollos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los NuestroPollos' });
  }
});

// Obtener un NuestroPollo por su ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const nuestroPollo = await NuestroPolloModel.findById(id);
    if (nuestroPollo) {
      res.json(nuestroPollo);
    } else {
      res.status(404).json({ error: 'NuestroPollo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el NuestroPollo' });
  }
});

// Crear un nuevo NuestroPollo
router.post('/', upload.fields([{ name: 'imgGeneral', maxCount: 1 }, { name: 'imgDetalle', maxCount: 1 }]), async (req, res) => {
  const { titulo, contenido, usuarioUltimaEdicion } = req.body;
  let imgGeneral, imgDetalle;

  if (req.files['imgGeneral']) {
    imgGeneral = req.files['imgGeneral'][0].filename;
  }

  if (req.files['imgDetalle']) {
    imgDetalle = req.files['imgDetalle'][0].filename;
  }

  try {
    const nuevoNuestroPollo = new NuestroPolloModel({
      titulo,
      contenido,
      imgGeneral,
      imgDetalle,
      usuarioUltimaEdicion,
      fechaUltimaEdicion: Date.now(),
    });
    await nuevoNuestroPollo.save();
    res.json(nuevoNuestroPollo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el NuestroPollo' });
  }
});

// Actualizar un NuestroPollo
router.put('/:id', upload.fields([{ name: 'imgGeneral', maxCount: 1 }, { name: 'imgDetalle', maxCount: 1 }]), async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, usuarioUltimaEdicion } = req.body;
  let imgGeneral, imgDetalle;
  console.log(req.body, id, imgGeneral, imgDetalle);
  
  //estos parecen ser el problema 
    if (req.files['imgGeneral']) {
      imgGeneral = req.files['imgGeneral'][0].filename;
    }
  
    if (req.files['imgDetalle']) {
      imgDetalle = req.files['imgDetalle'][0].filename;
    }

  try {
    const nuestroPollo = await NuestroPolloModel.findByIdAndUpdate(
      id,
      { titulo, contenido, imgGeneral, imgDetalle, usuarioUltimaEdicion, fechaUltimaEdicion: Date.now() },
      { new: true }
    );
    if (nuestroPollo) {
      res.json(nuestroPollo);
    } else {
      res.status(404).json({ error: 'NuestroPollo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el NuestroPollo' });
  }
});

// Eliminar un NuestroPollo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const nuestroPollo = await NuestroPolloModel.findByIdAndDelete(id);
    if (nuestroPollo) {
      res.json({ message: 'NuestroPollo eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'NuestroPollo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el NuestroPollo' });
  }
});

export default router;
