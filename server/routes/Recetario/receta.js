import express from "express";
import RecetarioModel from "../../models/Recetario/receta.js";
import upload from "../../middlewares/multerConfig.js";

const router = express.Router();

//obtener todas las recetas
router.get("/", async (req, res) => {
  try {
    const recetas = await RecetarioModel.find();
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las recetas" });
  }
});
//obtener receta por Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const receta = await RecetarioModel.findById(id);
    if (receta) {
      res.json(receta);
    } else {
      res.status(404).json({ error: "Receta no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la receta pr Id" });
  }
});
//crear nueva receta
router.post("/", upload.fields([
    { name: "imgGeneral", maxCount: 1 },
    { name: "imgCarousel", maxCount: 4 }
  ]), async (req, res) => {
    try {
      const recetaData = req.body;
      const imgGeneralFiles = req.files["imgGeneral"]; // Archivos de imagen imgGeneral subidos por Multer
      const imgCarouselFiles = req.files["imgCarousel"]; // Archivos de imagen imgCarousel subidos por Multer
  
      // Validar si se subió una imagen imgGeneral
      let imgGeneralPath = "";
      if (imgGeneralFiles && imgGeneralFiles.length > 0) {
        imgGeneralPath = imgGeneralFiles[0].path;
      }
  
      // Validar si se subieron imágenes imgCarousel
      let imgCarouselPaths = [];
      if (imgCarouselFiles && imgCarouselFiles.length > 0) {
        imgCarouselPaths = imgCarouselFiles.map((file) => file.path);
      }
  
      // Obtener los arreglos de ingredientes y preparación del cuerpo de la solicitud
      const ingredientes = JSON.parse(recetaData.ingredientes);
      const preparacion = JSON.parse(recetaData.preparacion);
  
      // Crear la nueva receta con los datos y las rutas de imágenes, ingredientes y preparación
      const receta = new RecetarioModel({
        ...recetaData,
        ingredientes,
        preparacion,
        imgGeneral: imgGeneralPath,
        imgCarousel: imgCarouselPaths,
      });
  
      const nuevaReceta = await receta.save();
      res.status(201).json(nuevaReceta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
//actualizar receta por Id
//eliminar receta por Id

export default router;
