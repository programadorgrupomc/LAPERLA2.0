import express from "express";
import Noticias from "../../models/Noticias/noticia.js";
import upload from "../../middlewares/multerConfig.js";

const router = express.Router();

// Ruta para obtener todas las noticias
router.get("/", async (req, res) => {
  try {
    const noticias = await Noticias.find();
    res.json(noticias);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener las noticias", details: error.message });
  }
});

// Ruta para obtener una noticia por su ID
router.get("/:id", async (req, res) => {
  try {
    const noticia = await Noticias.findById(req.params.id);
    if (noticia) {
      res.json(noticia);
    } else {
      res.status(404).json({ message: "Noticia no encontrada" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener la noticia", details: error.message });
  }
});

// Ruta para crear una nueva noticia con imágenes
router.post(
  "/",
  upload.fields([
    { name: "imgHeroNoticia", maxCount: 1 },
    { name: "imgsCarouselNoticia", maxCount: 10 },
  ]),
  async (req, res) => {
    console.log(req.body);
    try {
      const {
        titulo,
        fecha,
        contenido,
        usuarioUltimaModificacion,
        fechaUltimaModificacion,
        estado,
      } = req.body;

      const imgHeroNoticia = req.files["imgHeroNoticia"]
        ? req.files["imgHeroNoticia"][0].filename
        : "";

      let imgsCarouselNoticia = [];
      if (req.files["imgsCarouselNoticia"]) {
        imgsCarouselNoticia = req.files["imgsCarouselNoticia"].map(
          (file) => file.filename
        );
      }

      const nuevaNoticia = new Noticias({
        titulo,
        fecha,
        contenido,
        imgHeroNoticia,
        imgsCarouselNoticia,
        usuarioUltimaModificacion,
        fechaUltimaModificacion,
        estado,
      });

      const noticiaGuardada = await nuevaNoticia.save();
      res.status(201).json(noticiaGuardada);
    } catch (error) {
      res
        .status(400)
        .json({ error: "Error al crear la noticia", details: error.message });
    }
  }
);

// Ruta para actualizar una noticia con imágenes por su ID
router.put(
  "/:id",
  upload.fields([
    { name: "imgHeroNoticia", maxCount: 1 },
    { name: "imgsCarouselNoticia", maxCount: 10 },
  ]),
  async (req, res) => {
    try {
      const {
        titulo,
        fecha,
        contenido,
        usuarioUltimaModificacion,
        fechaUltimaModificacion,
        estado,
      } = req.body;

      const imgHeroNoticia = req.files["imgHeroNoticia"]
        ? req.files["imgHeroNoticia"][0].filename
        : "";

      let imgsCarouselNoticia = [];
      if (req.files["imgsCarouselNoticia"]) {
        imgsCarouselNoticia = req.files["imgsCarouselNoticia"].map(
          (file) => file.filename
        );
      }

      const noticia = await Noticias.findById(req.params.id);
      if (noticia) {
        noticia.titulo = titulo;
        noticia.fecha = fecha;
        noticia.contenido = contenido;
        noticia.imgHeroNoticia = imgHeroNoticia;
        noticia.imgsCarouselNoticia = imgsCarouselNoticia;
        noticia.usuarioUltimaModificacion = usuarioUltimaModificacion;
        noticia.fechaUltimaModificacion = fechaUltimaModificacion;
        noticia.estado = estado;

        const noticiaActualizada = await noticia.save();
        res.json(noticiaActualizada);
      } else {
        res.status(404).json({ message: "Noticia no encontrada" });
      }
    } catch (error) {
      res.status(400).json({
        error: "Error al actualizar la noticia",
        details: error.message,
      });
    }
  }
);

// Ruta para eliminar una noticia por su ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const noticia = await Noticias.findByIdAndDelete(id);
    if (noticia) {
      res.json({ message: "noticia vacante eliminado correctamente" });
    } else {
      res.status(404).json({ error: "noticia  no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el noticia " });
  }
});

export default router;
