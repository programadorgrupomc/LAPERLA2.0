import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  contenido: { type: String },
  imgVisual: { type: String },
  usuarioUltimaEdicion: { type: String },
  fechaUltimaEdicion: { type: Date },
});

const Hero = mongoose.model("Hero", heroSchema);
export default Hero;
