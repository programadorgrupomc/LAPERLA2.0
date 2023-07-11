import express from "express";
import nosotrosModel from "../../models/Nosotros/nosotros.js";
import upload from "../../middlewares/multerConfig.js";

const router = express.Router();

//obtener todos los nosotros
router.get("/", async (req, res) => {
  try {
    const nosotros = await nosotrosModel.find();
    res.json(nosotros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los Nosotros" });
  }
});
//obtener un nosotros por Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const nosotros = await nosotrosModel.findById(id);
    if (nosotros) {
      res.json(nosotros);
    } else {
      res.status(404).json({ error: "Nosotros no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los nosotros" });
  }
});
//crear un nuevo nosotros
router.post("/", upload.single("imagen"), async (req, res) => {
  const { titulo, contenido, año, usuarioUltimaModificacion } = req.body;
  let imagen;
  if (req.file) {
    imagen = req.file.filename;
  }
  try {
    const nuevoNosotros = new nosotrosModel({
      titulo,
      contenido,
      imagen,
      año,
      usuarioUltimaModificacion,
      fechaUltimaaModificacion: Date.now(),
    });
    await nuevoNosotros.save();
    res.json(nuevoNosotros);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el nosotros" });
  }
});
//actualizar un nostros por Id
router.put("/:id", upload.single("imagen"), async (req, res) => {
  console.log(req.body);
  const { id } = req.params;
  const { titulo, contenido, año, usuarioUltimaModificacion } = req.body;
  let imagen;
  if (req.file) {
    imagen = req.file.filename;
  }

  try {
    const nostros = await nosotrosModel.findByIdAndUpdate(
      id,
      {
        titulo,
        contenido,
        año,
        imagen,
        usuarioUltimaModificacion,
        fechaUltimaaModificacion: Date.now(),
      },
      { new: true }
    );
    if (nostros) {
      res.json(nostros);
    } else {
      res.status(404).json({ error: "Nosotros no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Nosotros" });
  }
});
//Eliminar un nosotros por Id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const nosotros = await nosotrosModel.findByIdAndDelete(id);
    if (nosotros) {
      res.json({ message: "Nosotros eliminado correctamente" });
    } else {
      res.status(404).json({ error: "Nosotros no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el nosotros" });
  }
});
export default router;