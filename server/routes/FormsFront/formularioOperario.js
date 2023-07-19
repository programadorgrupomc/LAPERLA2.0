import express from "express";
import FormularioOperario from "../../models/FormsFront/formularioOperario.js";
import upload from "../../middlewares/multerConfig.js"; // Asegúrate de importar el módulo donde configuraste Multer

const router = express.Router();

// Ruta para obtener todos los formularios de operarios
router.get("/", async (req, res) => {
  try {
    const formularios = await FormularioOperario.find();
    res.json(formularios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los formularios de operarios" });
  }
});

// Ruta para obtener un formulario de operario por su ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const formulario = await FormularioOperario.findById(id);
    if (!formulario) {
      return res.status(404).json({ error: "Formulario de operario no encontrado" });
    }
    res.json(formulario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el formulario de operario" });
  }
});

// Ruta para crear un nuevo formulario de operario
router.post("/", async (req, res) => {
  const nuevoFormulario = req.body;
  try {
    const formularioCreado = await FormularioOperario.create(nuevoFormulario);
    res.json(formularioCreado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el formulario de operario" });
  }
});

// Ruta para actualizar un formulario de operario por su ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const formularioActualizado = req.body;
  try {
    const formulario = await FormularioOperario.findByIdAndUpdate(id, formularioActualizado, {
      new: true, // Devuelve el formulario actualizado en la respuesta
    });
    if (!formulario) {
      return res.status(404).json({ error: "Formulario de operario no encontrado" });
    }
    res.json(formulario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el formulario de operario" });
  }
});

// Ruta para eliminar un formulario de operario por su ID
router.delete("/formularios/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const formularioEliminado = await FormularioOperario.findByIdAndRemove(id);
    if (!formularioEliminado) {
      return res.status(404).json({ error: "Formulario de operario no encontrado" });
    }
    res.json({ message: "Formulario de operario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el formulario de operario" });
  }
});

// Ruta para cargar el documento del curriculum usando Multer y actualizar el campo "documento" del formulario
router.post("/:id/cargar-curriculum", upload.single("documento"), async (req, res) => {
  const { id } = req.params;
  const nombreDocumento = req.file.filename;

  try {
    const formulario = await FormularioOperario.findByIdAndUpdate(
      id,
      { "curriculum.documento": nombreDocumento },
      { new: true }
    );

    if (!formulario) {
      return res.status(404).json({ error: "Formulario de operario no encontrado" });
    }

    res.json(formulario);
  } catch (error) {
    res.status(500).json({ error: "Error al cargar el documento del curriculum" });
  }
});

export default router;