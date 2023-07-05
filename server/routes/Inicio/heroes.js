import express from 'express';
import Hero from '../../models/Inicio/hero.js'

const router = express.Router();

// Obtener todos los héroes
router.get("/", async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los héroes" });
  }
});

// Obtener un héroe por su ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const hero = await Hero.findById(id);
    if (hero) {
      res.json(hero);
    } else {
      res.status(404).json({ error: "Héroe no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el héroe" });
  }
});

// Crear un nuevo héroe
router.post("/", async (req, res) => {
    console.log(req.body)
  const { contenido, usuarioUltimaEdicion, fechaUltimaEdicion } = req.body;

  try {
    const hero = new Hero({
      contenido,
      usuarioUltimaEdicion,
      fechaUltimaEdicion,
    });
    await hero.save();
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el héroe" });
  }
});

// Actualizar un héroe
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { contenido, usuarioUltimaEdicion } = req.body;
  
    try {
      const fechaUltimaEdicion = new Date(); // Obtiene la fecha actual
  
      const hero = await Hero.findByIdAndUpdate(
        id,
        { contenido, usuarioUltimaEdicion, fechaUltimaEdicion },
        { new: true }
      );
  
      if (hero) {
        res.json(hero);
      } else {
        res.status(404).json({ error: "Héroe no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el héroe" });
    }
  });
  
// Eliminar un héroe
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const hero = await Hero.findByIdAndDelete(id);
    if (hero) {
      res.json({ message: "Héroe eliminado correctamente" });
    } else {
      res.status(404).json({ error: "Héroe no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el héroe" });
  }
});

export default router;