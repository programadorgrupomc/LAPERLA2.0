import "dotenv/config";
import "./database/connectdb.js";

import express from "express";
import cors from "cors";

//para file beta
import path from "path";
import fs from "fs";
import "esm";

//todas las rutas
import routes from "./routes/routes.js";

const app = express();
app.use(express.static("public"));
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(cors());
app.use(routes);

//para files Beta
app.get("/files", (req, res) => {
  const uploadsFolder = path.join(process.cwd(), "public", "uploads");

  fs.readdir(uploadsFolder, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error reading files" });
    } else {
      const fileList = files.map((file) => ({
        name: file,
        url: `/uploads/${file}`, // Assuming you have a route to serve the files from the "public/uploads" folder
      }));
      res.json(fileList);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutando en el puerto ✔ ${port}`);
});
