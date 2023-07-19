import express from "express";
import upload from "../../middlewares/multerConfig.js";
import FormularioEmpleado from "../../models/FormsFront/formularioEmpleados.js";

const router = express.Router();


// Crear un nuevo FormularioEmpleado
router.post("/", upload.single("curriculum"), async (req, res) => {
  try {
    const { nombreDoc, ...rest } = req.body;
    const formularioEmpleado = new FormularioEmpleado({
      ...rest,
      curriculum: { nombreDoc: req.file.filename },
    });
    await formularioEmpleado.save();
    res.status(201).json(formularioEmpleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los FormularioEmpleados
router.get("/", async (req, res) => {
  try {
    const formulariosEmpleados = await FormularioEmpleado.find();
    res.json(formulariosEmpleados);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener un solo FormularioEmpleado por su ID
router.get("/:id", async (req, res) => {
  try {
    const formularioEmpleado = await FormularioEmpleado.findById(req.params.id);
    if (!formularioEmpleado) {
      return res.status(404).json({ error: "FormularioEmpleado not found" });
    }
    res.json(formularioEmpleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Actualizar un FormularioEmpleado por su ID
router.put("/:id", upload.single("curriculum"), async (req, res) => {
  try {
    const { nombreDoc, ...rest } = req.body;
    const formularioEmpleado = await FormularioEmpleado.findByIdAndUpdate(
      req.params.id,
      {
        ...rest,
        curriculum: { nombreDoc: req.file ? req.file.filename : nombreDoc },
      },
      { new: true }
    );
    if (!formularioEmpleado) {
      return res.status(404).json({ error: "FormularioEmpleado not found" });
    }
    res.json(formularioEmpleado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un FormularioEmpleado por su ID
router.delete("/:id", async (req, res) => {
  try {
    const formularioEmpleado = await FormularioEmpleado.findByIdAndDelete(
      req.params.id
    );
    if (!formularioEmpleado) {
      return res.status(404).json({ error: "FormularioEmpleado not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
