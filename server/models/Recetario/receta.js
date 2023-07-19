import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema({
  titulo: { type: String },
  dificultad: { type: String },
  porciones: { type: String },
  tiempo: { type: String },
  infnutricional: { type: String },
  categoria: { type: String },
  imgGeneral: { type: String },
  ingredientes: [{ type: String }],
  preparacion: [{ type: String }],
  imgCarousel: [{ type: String }],
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
  estado: { type: Boolean, default: true }, 
});

const Receta = mongoose.model("Receta", recetaSchema);

export default Receta;
