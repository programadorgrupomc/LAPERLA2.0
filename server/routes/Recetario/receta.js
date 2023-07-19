import express from "express";
import Receta from "../../models/Recetario/receta.js";
import upload from "../../middlewares/multerConfig.js";
const router = express.Router();
// Ruta para obtener todas las recetas
router.get("/", async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.json(recetas);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener las recetas", details: error.message });
  }
});
// Ruta para obtener una receta por su ID
router.get("/:id", async (req, res) => {
  try {
    const receta = await Receta.findById(req.params.id);
    if (receta) {
      res.json(receta);
    } else {
      res.status(404).json({ message: "Receta no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener la receta", details: error.message });
  }
});
// Ruta para crear una nueva receta con imágenes
router.post(
  "/",
  upload.fields([
    { name: "imgGeneral", maxCount: 1 },
    { name: "imgCarousel", maxCount: 10 },
  ]),
  async (req, res) => {
    console.log(req.body);
    try {
      const {
        titulo,
        dificultad,
        porciones,
        tiempo,
        infnutricional,
        categoria,
        ingredientes,
        preparacion,
        usuarioUltimaModificacion,
        fechaUltimaModificacion,
        estado,
      } = req.body;
      const imgGeneral = req.files["imgGeneral"]
        ? req.files["imgGeneral"][0].filename
        : "";
      let imgCarousel = [];
      if (req.files["imgCarousel"]) {
        imgCarousel = req.files["imgCarousel"].map((file) => file.filename);
      }
      const nuevaReceta = new Receta({
        titulo,
        dificultad,
        porciones,
        tiempo,
        infnutricional,
        categoria,
        imgGeneral,
        ingredientes,
        preparacion,
        imgCarousel,
        usuarioUltimaModificacion,
        fechaUltimaModificacion,
        estado,
      });
      const recetaGuardada = await nuevaReceta.save();
      res.status(201).json(recetaGuardada);
    } catch (error) {
      res
        .status(400)
        .json({ error: "Error al crear la receta", details: error.message });
    }
  }
);
// Ruta para actualizar una receta con imágenes por su ID
router.put(
  "/:id",
  upload.fields([
    { name: "imgGeneral", maxCount: 1 },
    { name: "imgCarousel", maxCount: 10 },
  ]),
  async (req, res) => {
    try {
      const {
        titulo,
        dificultad,
        porciones,
        tiempo,
        infnutricional,
        categoria,
        ingredientes,
        preparacion,
        usuarioUltimaModificacion,
        fechaUltimaModificacion,
        estado,
      } = req.body;
      const imgGeneral = req.files["imgGeneral"]
        ? req.files["imgGeneral"][0].filename
        : "";
      let imgCarousel = [];
      if (req.files["imgCarousel"]) {
        imgCarousel = req.files["imgCarousel"].map((file) => file.filename);
      }
      const receta = await Receta.findById(req.params.id);
      if (receta) {
        receta.titulo = titulo;
        receta.dificultad = dificultad;
        receta.porciones = porciones;
        receta.tiempo = tiempo;
        receta.infnutricional = infnutricional;
        receta.categoria = categoria;
        receta.imgGeneral = imgGeneral;
        receta.ingredientes = ingredientes;
        receta.preparacion = preparacion;
        receta.imgCarousel = imgCarousel;
        receta.usuarioUltimaModificacion = usuarioUltimaModificacion;
        receta.fechaUltimaModificacion = fechaUltimaModificacion;
        receta.estado = estado;
        const recetaActualizada = await receta.save();
        res.json(recetaActualizada);
      } else {
        res.status(404).json({ message: "Receta no encontrada" });
      }
    } catch (error) {
      res.status(400).json({
        error: "Error al actualizar la receta",
        details: error.message,
      });
    }
  }
);
// Ruta para eliminar una receta por su ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const receta = await Receta.findByIdAndDelete(id);
    if (receta) {
      res.json({ message: "Receta eliminada correctamente" });
    } else {
      res.status(404).json({ error: "Receta no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la receta" });
  }
});
export default router;
