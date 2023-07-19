// routes/formularioEmpleado.js
import express from "express";
import multer from "multer";

// Importa el modelo FormularioEmpleado
import FormularioEmpleado from "../../models/FormsFront/formularioEmpleados.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Directorio donde se guardarán los archivos subidos

// Ruta para obtener todos los formularios de empleados
router.get("/", async (req, res) => {
  try {
    const formularios = await FormularioEmpleado.find();
    res.json(formularios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los formularios de empleados" });
  }
});

// Ruta para obtener un formulario de empleado por su ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const formulario = await FormularioEmpleado.findById(id);
    if (!formulario) {
      return res.status(404).json({ error: "Formulario de empleado no encontrado" });
    }
    res.json(formulario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el formulario de empleado" });
  }
});

// Ruta para crear un nuevo formulario de empleado
router.post("/", async (req, res) => {
  const nuevoFormulario = req.body;
  try {
    const formularioCreado = await FormularioEmpleado.create(nuevoFormulario);
    res.json(formularioCreado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el formulario de empleado" });
  }
});

// Ruta para actualizar un formulario de empleado por su ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const formularioActualizado = req.body;
  try {
    const formulario = await FormularioEmpleado.findByIdAndUpdate(id, formularioActualizado, {
      new: true, // Devuelve el formulario actualizado en la respuesta
    });
    if (!formulario) {
      return res.status(404).json({ error: "Formulario de empleado no encontrado" });
    }
    res.json(formulario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el formulario de empleado" });
  }
});

// Ruta para eliminar un formulario de empleado por su ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const formularioEliminado = await FormularioEmpleado.findByIdAndRemove(id);
    if (!formularioEliminado) {
      return res.status(404).json({ error: "Formulario de empleado no encontrado" });
    }
    res.json({ message: "Formulario de empleado eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el formulario de empleado" });
  }
});

// Ruta para cargar el documento del curriculum usando Multer y actualizar el campo "documento" del formulario
router.post("/:id/cargar-curriculum", upload.single("documento"), async (req, res) => {
  const { id } = req.params;
  const nombreDocumento = req.file.filename;

  try {
    const formulario = await FormularioEmpleado.findByIdAndUpdate(
      id,
      { "curriculum.nombreDoc": nombreDocumento },
      { new: true }
    );

    if (!formulario) {
      return res.status(404).json({ error: "Formulario de empleado no encontrado" });
    }

    res.json(formulario);
  } catch (error) {
    res.status(500).json({ error: "Error al cargar el documento del curriculum" });
  }
});

export default router;
