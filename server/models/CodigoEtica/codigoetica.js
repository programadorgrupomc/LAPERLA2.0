import mongoose from "mongoose";
const codigoeticaSchema = new mongoose.Schema({
  contenido: { type: String },
  responsabilidades: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});
const CodigoEtica = mongoose.model("CodigoEtica", codigoeticaSchema);
export default CodigoEtica;
