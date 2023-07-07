import mongoose from "mongoose";

const culturaOrgShcema = new mongoose.Schema({
  contenido: { type: String },
  imagen: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaaModificacion: { type: Date },
});

const CulturaOrganizacional = mongoose.model(
  "CulturaOrganizacional",
  culturaOrgShcema
);
export default CulturaOrganizacional;
