import express from "express";

//llamado de rutas
import heroesRoutes from "./Inicio/heroes.js";
import nuestroPolloRoutes from "./Inicio/nuestrosPollo.js";

const router = express.Router();

//Rutas del proyecto
router.use("/heroes", heroesRoutes);
router.use("/nuestropollo", nuestroPolloRoutes);

//export
export default router;
