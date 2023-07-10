import express from "express";
import NuestrosProcesos from "../../models/Inicio/procesos.js";
import upload from "../../middlewares/multerConfig.js";

const router = express.Router();

// Obtener todos los NuestrosProcesos
router.get("/", async (req, res) => {
  try {
    const nuestrosProcesos = await NuestrosProcesos.find();
    res.json(nuestrosProcesos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los NuestrosProcesos" });
  }
});

// Obtener un NuestrosProcesos por su ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const nuestroProceso = await NuestrosProcesos.findById(id);
    if (nuestroProceso) {
      res.json(nuestroProceso);
    } else {
      res.status(404).json({ error: "NuestrosProcesos no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el NuestrosProcesos" });
  }
});

// Crear un nuevo NuestrosProcesos
router.post("/", upload.single("imagen"), async (req, res) => {
  const { titulo, contenido, usuarioUltimaModificacion } = req.body;
  let imagen;

  if (req.file) {
    imagen = req.file.filename;
  }

  try {
    const nuevoProceso = new NuestrosProcesos({
      titulo,
      contenido,
      imagen,
      usuarioUltimaModificacion,
      fechaUltimaaModificacion: Date.now(),
    });
    await nuevoProceso.save();
    res.json(nuevoProceso);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el NuestrosProcesos" });
  }
});

// Actualizar un NuestrosProcesos
router.put("/:id", upload.single("imagen"), async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const { titulo, contenido, usuarioUltimaModificacion } = req.body;
  let imagen;

  if (req.file) {
    imagen = req.file.filename;
  }

  try {
    const nuestroProceso = await NuestrosProcesos.findByIdAndUpdate(
      id,
      {
        titulo,
        contenido,
        imagen,
        usuarioUltimaModificacion,
        fechaUltimaaModificacion: Date.now(),
      },
      { new: true }
    );
    if (nuestroProceso) {
      res.json(nuestroProceso);
    } else {
      res.status(404).json({ error: "NuestrosProcesos no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el NuestrosProcesos" });
  }
});

// Eliminar un NuestrosProcesos
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const nuestroProceso = await NuestrosProcesos.findByIdAndDelete(id);
    if (nuestroProceso) {
      res.json({ message: "NuestrosProcesos eliminado correctamente" });
    } else {
      res.status(404).json({ error: "NuestrosProcesos no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el NuestrosProcesos" });
  }
});

export default router;
