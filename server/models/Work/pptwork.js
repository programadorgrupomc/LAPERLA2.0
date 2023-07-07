import mongoose from "mongoose";
const pptWorkSchema = new mongoose.Schema({
  titulo: { type: String },
  contenido: { type: String },
  imgPpt: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});

const PptWork = mongoose.model("PptWork", pptWorkSchema);
export default PptWork;
