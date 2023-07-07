import mongoose from "mongoose";
const direccionesSchema = new mongoose.Schema({
  ciudad: { type: String },
  direccion: { type: String },
  telefono: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});
const Direcciones = mongoose.model("Direcciones", direccionesSchema);
export default Direcciones;
