import multer from 'multer';
import path from 'path';

// Configuración de Multer para el almacenamiento de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Ruta de la carpeta de almacenamiento de archivos en el servidor
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension); // Nombre de archivo único en el servidor
  },
});
 
// Función para filtrar los tipos de archivos permitidos
const fileFilter = (req, file, cb) => {
  // Verificar el tipo de archivo permitido (imágenes y videos)
  if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('El archivo debe ser una imagen o video válido.'));
  }
};

// Instanciar el middleware de Multer
const upload = multer({ storage, fileFilter });

export default upload;
