import express from "express";
import FormularioOperario from "../../models/FormsFront/formularioOperario.js";
import upload from "../../middlewares/multerConfig.js";

const router = express.Router();
// Ruta para crear un nuevo formulario de Operario
router.post("/", upload.single("documento"), async (req, res) => {
  try {
    const formularioData = req.body;
    // Extraer el nombre del archivo después de ser almacenado por Multer
    const archivo = req.file;
    formularioData.curriculum = archivo.filename; // Almacenar solo el nombre del archivo
    const formulario = new FormularioOperario(formularioData);
    await formulario.save();
    res.status(201).json({ message: "Formulario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el formulario" });
  }
});

// Ruta para obtener todos los formularios de Operario
router.get("/", async (req, res) => {
  try {
    const formularios = await FormularioOperario.find();
    res.status(200).json(formularios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los formularios" });
  }
});

export default router;
