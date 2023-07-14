import mongoose from "mongoose";

const noticiaSchema = new mongoose.Schema({
  titulo: { type: String },
  fecha: { type: String },
  contenido: { type: String },
  imgHeroNoticia: { type: String },
  imgsCarouselNoticia: [{ type: String }],
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
  estado: { type: Boolean, default: true }, // Nuevo campo "estado" con valor por defecto en false
});

const Noticias = mongoose.model("Noticias", noticiaSchema);
export default Noticias;
