import mongoose from "mongoose";

const nostrosShcema = new mongoose.Schema({
  titulo: { type: String },
  contenido: { type: String },
  año: { type: String },
  imagen: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaaModificacion: { type: Date },
});

const Nosotros = mongoose.model("Nosotros", nostrosShcema);
export default Nosotros;
