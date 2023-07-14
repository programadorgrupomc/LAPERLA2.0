import express from "express";

//llamado de rutas
import heroesRoutes from "./Inicio/heroes.js";
import nuestroPolloRoutes from "./Inicio/nuestrosPollo.js";
import procesos from "./Inicio/procesos.js";
import usuarios from "./Auth/usuarios.js";
import nosotros from "./Nosotros/nosotros.js";
import recetas from "./Recetario/receta.js";
import workroute from "./Work/puestosVacantes.js";
import pptwork from "./Work/pptWork.js";
import herowork from "./Work/herowork.js";
import filosofia from "./Nosotros/filosofia.js";
import lineatiempo from "./Nosotros/lineatiempo.js";
import culturaorganizacional from "./Nosotros/culturaorganizacional.js";
import footer from "./General/footer.js";

import noticia from "./Noticias/noticia.js";

const router = express.Router();

//Rutas del proyecto
router.use("/heroes", heroesRoutes);
router.use("/nuestropollo", nuestroPolloRoutes);
router.use("/procesos", procesos);
router.use("/usuarios", usuarios);
router.use("/nosotros", nosotros);
router.use("/recetas", recetas);
router.use("/puestovacante", workroute);
router.use("/pptwork", pptwork);
router.use("/herowork", herowork);
router.use("/filosofia", filosofia);
router.use("/lineatiempo", lineatiempo);
router.use("/culturaorganizacional", culturaorganizacional);

router.use("/noticia", noticia);

//export
export default router;
