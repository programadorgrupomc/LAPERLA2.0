import "dotenv/config";
import "./database/connectdb.js";

import express from "express";
import cors from "cors";

// para file beta
import path from "path";
import fs from "fs";
import "esm";

// todas las rutas
import routes from "./routes/routes.js";

const app = express();
app.use(express.static("public"));
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(cors());
app.use(routes);

// Assuming you have separate folders for images, videos, and documents under "public/uploads"
const imagesFolder = path.join(process.cwd(), "public", "uploads", "images");
const videosFolder = path.join(process.cwd(), "public", "uploads", "videos");
const documentsFolder = path.join(process.cwd(), "public", "uploads", "documents");

// Function to read files from a folder and add them to the fileList array
const readFilesFromFolder = (folderPath, fileCategory, callback) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      callback([]);
    } else {
      const fileList = files.map((file) => ({
        name: file,
        url: `/uploads/${fileCategory}/${file}`, // Assuming you have a route to serve the files from the respective subfolder
      }));
      callback(fileList);
    }
  });
};

// Route to show image files
app.get("/files/images", (req, res) => {
  readFilesFromFolder(imagesFolder, "images", (imageFiles) => {
    res.json(imageFiles);
  });
});

// Route to show video files
app.get("/files/videos", (req, res) => {
  readFilesFromFolder(videosFolder, "videos", (videoFiles) => {
    res.json(videoFiles);
  });
});

// Route to show document files
app.get("/files/documents", (req, res) => {
  readFilesFromFolder(documentsFolder, "documents", (documentFiles) => {
    res.json(documentFiles);
  });
});

app.listen(port, () => {
  console.log(`Servidor ejecutando en el puerto ✔ ${port}`);
});
