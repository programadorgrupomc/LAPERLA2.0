import mongoose from "mongoose";

const nuestroPolloSchema = mongoose.Schema({
  titulo: { type: String },
  contenido: { type: String },
  imgGeneral: { type: String },
  imgDetalle: { type: String },
  usuarioUltimaEdicion: { type: String },
  fechaUltimaEdicion: { type: Date },
});

const nuestroPollo = mongoose.model("NuestroPollo", nuestroPolloSchema);
export default nuestroPollo;
