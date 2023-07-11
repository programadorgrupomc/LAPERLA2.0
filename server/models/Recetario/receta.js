import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema({
  titulo: { type: String },
  dificultad: { type: String },
  porciones: { type: String },
  tiempo: { type: String },
  infnutricional: { type: String },
  categoria: { type: String },
  imgGeneral: { type: String },
  ingredientes: [{
    nombre: { type: String },
  }],
  preparacion: [{
    paso: { type: String },
  }],
  imgCarousel: [{
    img: { type: String },
  }],
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});

const Receta = mongoose.model("Receta", recetaSchema);

export default Receta;
