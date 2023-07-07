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
  imgsCarousel: [{ type: String }],
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});

const Recetario = mongoose.model("Recetario", recetaSchema);
export default Recetario;
