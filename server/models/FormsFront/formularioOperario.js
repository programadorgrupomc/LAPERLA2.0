import mongoose from "mongoose";

const formularioOperarioSchema = new mongoose.Schema(
  {
    datosPersonales: {
      TipoDocumentoDeIdentidad: String,
      NumeroDocumentoDeIdentidad: String,
      nombre: String,
      apellidos: String,
      fechanacimiento: String,
      celular: String,
      lugar: String,
      dosisdevacunacioncovid: String,
      hastrabajadoconnosotros: String,
    },
    curriculum: {
      documento: String, // Almacenar solo el nombre del archivo, el archivo cargar por multer
    },
    terminosycondiciones: {
      acepto: Boolean,
    },
    puestoVacante: String,
  },
  {
    timestamps: true, // Agregar timestamps (createdAt y updatedAt)
  }
);

const FormularioOperario = mongoose.model(
  "FormularioOperario",
  formularioOperarioSchema
);

export default FormularioOperario;
