import mongoose from "mongoose";
const heroWorkSchema = new mongoose.Schema({
  titulo: { type: String },
  imgHero: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});

const HeroWork = mongoose.model("HeroWork", heroWorkSchema);
export default HeroWork;
