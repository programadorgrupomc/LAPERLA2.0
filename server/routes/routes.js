import express from "express";

//llamado de rutas
import heroesRoutes from "./Inicio/heroes.js";
import nuestroPolloRoutes from "./Inicio/nuestrosPollo.js";
import procesos from "./Inicio/procesos.js";
import usuarios from "./Auth/usuarios.js";

const router = express.Router();

//Rutas del proyecto
router.use("/heroes", heroesRoutes);
router.use("/nuestropollo", nuestroPolloRoutes);
router.use("/procesos", procesos);
router.use("/usuarios", usuarios);

//export
export default router;
