import mongoose from "mongoose";
const puestosVacantesSchema = new mongoose.Schema({
  titulo: { type: String },
  experiencia: { type: String },
  departamento: { type: String },
  tipoempleo: { type: String },
  objetivoPuesto: { type: String },
  funciones: [{ type: String }],
  requisitos: [{ type: String }],
  sueldo: { type: String },
  _idformulario: { type: String },
  imgPuesto: { type: String },
  usuarioUltimaModificacion: { type: String },
  fechaUltimaModificacion: { type: Date },
});

const PuestosVacantes = mongoose.model(
  "PuestosVacantes",
  puestosVacantesSchema
);
export default PuestosVacantes;
