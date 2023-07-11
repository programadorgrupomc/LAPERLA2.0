import express from "express";

//llamado de rutas
import heroesRoutes from "./Inicio/heroes.js";
import nuestroPolloRoutes from "./Inicio/nuestrosPollo.js";
import procesos from "./Inicio/procesos.js";
import usuarios from "./Auth/usuarios.js";
import nosotros from "./Nosotros/nosotros.js";
import recetas from "./Recetario/receta.js";

const router = express.Router();

//Rutas del proyecto
router.use("/heroes", heroesRoutes);
router.use("/nuestropollo", nuestroPolloRoutes);
router.use("/procesos", procesos);
router.use("/usuarios", usuarios);
router.use("/nosotros", nosotros);
router.use("/recetas", recetas);

//export
export default router;
