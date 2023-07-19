// routes/formularioEmpleado.js
import express from "express";
import multer from "multer";

// Importa el modelo FormularioEmpleado
import FormularioEmpleado from "../../models/FormsFront/formularioEmpleados.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Directorio donde se guardarán los archivos subidos

// Ruta para crear un nuevo formulario de empleado con el archivo del currículum
router.post("/", async (req, res) => {
  try {
    // Crea un nuevo formulario de empleado con los datos del cuerpo de la solicitud
    const nuevoFormulario = new FormularioEmpleado(req.body);

    // Guarda el formulario en la base de datos
    await nuevoFormulario.save();

    res.status(201).json(nuevoFormulario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para obtener todos los formularios de empleados
router.get("/", async (req, res) => {
  try {
    const formularios = await FormularioEmpleado.find();
    res.json(formularios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un formulario de empleado por su ID
router.get("/:id", async (req, res) => {
  try {
    const formulario = await FormularioEmpleado.findById(req.params.id);
    if (!formulario) {
      return res.status(404).json({ message: "Formulario no encontrado" });
    }
    res.json(formulario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para actualizar un formulario de empleado por su ID
router.put("/:id", async (req, res) => {
  try {
    const formulario = await FormularioEmpleado.findById(req.params.id);
    if (!formulario) {
      return res.status(404).json({ message: "Formulario no encontrado" });
    }
    formulario.set(req.body);
    await formulario.save();
    res.json(formulario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para eliminar un formulario de empleado por su ID
router.delete("/:id", async (req, res) => {
  try {
    const formulario = await FormularioEmpleado.findByIdAndDelete(req.params.id);
    if (!formulario) {
      return res.status(404).json({ message: "Formulario no encontrado" });
    }
    res.json({ message: "Formulario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para subir el archivo del currículum utilizando Multer
router.post("/:id/curriculum", upload.single("curriculum"), async (req, res) => {
  try {
    const formulario = await FormularioEmpleado.findById(req.params.id);
    if (!formulario) {
      return res.status(404).json({ message: "Formulario no encontrado" });
    }
    formulario.curriculum = { nombreDoc: req.file.originalname };
    await formulario.save();
    res.json(formulario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
