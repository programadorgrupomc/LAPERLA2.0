import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

// Roles
const roles = {
  values: ["ADMINISTRADOR", "COLABORADOR", "VISUALIZADOR"],
  message: "{VALUE} no es un rol válido",
};

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: { type: String, required: [true, "El nombre es necesario"] },
  apellido: { type: String, required: [true, "El apellido es necesario"] },
  email: { type: String, unique: true, required: [true, "Email es necesario"] },
  password: { type: String, required: [true, "Pass es necesario"] },
  date: { type: Date, default: Date.now },
  role: { type: String, default: "VISUALIZADOR", enum: roles },
  activo: { type: Boolean, default: true },
  //DATOS ADICIONALES
  imgusuario: { type: String },
  nickname: { type: String },
  telefono: { type: String },
  descripcion: { type: String },
  resetPasswordCode: { type: String, default: null }, // Agregamos el campo resetPasswordCode
});

// Validator
usuarioSchema.plugin(uniqueValidator, {
  message: "Error, esperaba {PATH} único.",
});

// Convertir a modelo
const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;
