import multer from "multer";
import path from "path";
import fs from "fs";

// Función para obtener la fecha de subida en formato "yyyymmdd-hhmmss"
const getUploadDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}${month}${day}-${hours}${minutes}${seconds}`;
};

// Función para obtener la carpeta de destino según el tipo de archivo
const getDestination = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, "public/uploads/images");
  } else if (file.mimetype.startsWith("video/")) {
    cb(null, "public/uploads/videos");
  } else if (
    file.mimetype === "application/pdf" ||
    file.mimetype === "application/msword" ||
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    cb(null, "public/uploads/documents");
  } else {
    cb(new Error("Tipo de archivo no válido."));
  }
};

// Configuración de Multer para el almacenamiento de archivos
const storage = multer.diskStorage({
  destination: getDestination, // Ruta de la carpeta de almacenamiento de archivos en el servidor
  filename: (req, file, cb) => {
    const uploadDate = getUploadDate();
    const fileInfo = path.parse(file.originalname);
    const finalFileName = `${fileInfo.name}-${uploadDate}${fileInfo.ext}`;
    cb(null, finalFileName); // Nombre de archivo con fecha de subida
  },
});

// Función para filtrar los tipos de archivos permitidos (igual que antes)
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("video/") ||
    file.mimetype === "application/pdf" ||
    file.mimetype === "application/msword" ||
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "El archivo debe ser una imagen, video, PDF, DOC o DOCX válido."
      )
    );
  }
};

// Instanciar el middleware de Multer
const upload = multer({ storage, fileFilter });

export default upload;
