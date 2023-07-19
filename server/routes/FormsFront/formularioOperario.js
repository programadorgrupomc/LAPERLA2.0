import express from "express";
import upload from "../../middlewares/multerConfig.js";
import FormularioOperario from "../../models/FormsFront/formularioOperario.js";

const router = express.Router();

// Crear un nuevo FormularioOperario
router.post("/", upload.single("curriculum"), async (req, res) => {
  try {
    const { documento, ...rest } = req.body;
    const formularioOperario = new FormularioOperario({
      ...rest,
      curriculum: { documento: req.file.filename },
    });
    await formularioOperario.save();
    res.status(201).json(formularioOperario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los FormulariosOperarios
router.get("/", async (req, res) => {
  try {
    const formulariosOperarios = await FormularioOperario.find();
    res.json(formulariosOperarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener un solo FormularioOperario por su ID
router.get("/:id", async (req, res) => {
  try {
    const formularioOperario = await FormularioOperario.findById(req.params.id);
    if (!formularioOperario) {
      return res.status(404).json({ error: "FormularioOperario not found" });
    }
    res.json(formularioOperario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un FormularioOperario por su ID
router.put("/:id", upload.single("curriculum"), async (req, res) => {
  try {
    const { documento, ...rest } = req.body;
    const formularioOperario = await FormularioOperario.findByIdAndUpdate(
      req.params.id,
      {
        ...rest,
        curriculum: { documento: req.file ? req.file.filename : documento },
      },
      { new: true }
    );
    if (!formularioOperario) {
      return res.status(404).json({ error: "FormularioOperario not found" });
    }
    res.json(formularioOperario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un FormularioOperario por su ID
router.delete("/:id", async (req, res) => {
  try {
    const formularioOperario = await FormularioOperario.findByIdAndDelete(
      req.params.id
    );
    if (!formularioOperario) {
      return res.status(404).json({ error: "FormularioOperario not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
