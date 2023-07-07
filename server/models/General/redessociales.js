import mongoose from "mongoose";
const redessocialesSchema = new mongoose.Schema({
  nombre: { type: String },
  link: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});

const RedesSociales = mongoose.model("RedesSociales", redessocialesSchema);
export default RedesSociales;
