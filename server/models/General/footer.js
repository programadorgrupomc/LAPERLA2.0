import mongoose from "mongoose";
const footerSchema = new mongoose.Schema({
  telefono: { type: String },
  email: { type: String },
  direccion: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});

const footer = mongoose.model("footer", footerSchema);
export default footer;
