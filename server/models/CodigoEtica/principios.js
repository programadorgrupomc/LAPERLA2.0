import mongoose from "mongoose";
const principiosSchema = new mongoose.Schema({
  titulo: { type: String },
  contenido: { type: String },
  imgprincipios: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});
const Principios = mongoose.model("Principios", principiosSchema);
export default Principios;
