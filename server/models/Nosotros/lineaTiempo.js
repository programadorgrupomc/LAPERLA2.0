import mongoose from "mongoose";

const lineaSchema = new mongoose.Schema({
  titulo: { type: String },
  contenido: { type: String },
  año: { type: String },
  imagen: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaaModificacion: { type: Date },
});

const LineaTiempo = mongoose.model("LineaTiempo", lineaSchema);
export default LineaTiempo;
