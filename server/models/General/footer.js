import mongoose from "mongoose";
const opcionesheaderSchema = new mongoose.Schema({
  telefono: { type: String },
  email: { type: String },
  direccion: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});

const OpcionesHeader = mongoose.model("OpcionesHeader", opcionesheaderSchema);
export default OpcionesHeader;
