import "dotenv/config";
import "./database/connectdb.js"
import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({}));

app.listen(port, () => {
  console.log(`Servidor ejecutando en el puerto ✔ ${port}`);
});
