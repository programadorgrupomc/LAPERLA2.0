import mongoose from "mongoose";

const procesosShcema = new mongoose.Schema({
  titulo: { type: String },
  contenido: { type: String },
  imagen: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaaModificacion: { type: Date },
});

const NuestrosProcesos = mongoose.model("NuestrosProcesos", procesosShcema);
export default NuestrosProcesos;
