import "dotenv/config";
import "./database/connectdb.js";

import express from "express";
import cors from "cors";

//todas las rutas
import routes from "./routes/routes.js";

const app = express();
app.use(express.static('public'));
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor ejecutando en el puerto ✔ ${port}`);
});
