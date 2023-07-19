import mongoose from "mongoose";

const formularioOperarioSchema = new mongoose.Schema({
  datosPersonales: {
    TipoDocumentoDeIdentidad: String,
    NumeroDocumentoDeIdentidad: String,
    nombre: String,
    apellidos: String,
    fechanacimiento: Date,
    celular: String,
    lugar: String,
    dosisdevacunacioncovid: String,
    hastrabajadoconnosotros: Boolean,
  },
  curriculum: {
    documento: String, // Almacenar solo el nombre del archivo
  },
  terminosycondiciones: {
    acepto: Boolean,
  },
});

const FormularioOperario = mongoose.model(
  "FormularioOperario",
  formularioOperarioSchema
);

export default FormularioOperario;
