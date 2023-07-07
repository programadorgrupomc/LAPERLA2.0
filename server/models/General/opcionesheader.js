import mongoose from "mongoose";
const opcionesheaderSchema = new mongoose.Schema({
  titulo: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});

const OpcionesHeader = mongoose.model("OpcionesHeader", opcionesheaderSchema);
export default OpcionesHeader;
