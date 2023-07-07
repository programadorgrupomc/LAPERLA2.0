import mongoose from "mongoose";

const filosofiaShcema = new mongoose.Schema({
  titulo: { type: String },
  contenido: { type: String },
  imagen: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaaModificacion: { type: Date },
});

const NuestraFilosofia = mongoose.model("NuestraFilosofia", filosofiaShcema);
export default NuestraFilosofia;
