import mongoose from "mongoose";

// Define el esquema para los subdocumentos de Educación
const educacionSchema = new mongoose.Schema({
  EstadodeEstudio: String,
  niveldeestudio: String,
  titulo: String,
  institucion: String,
});

// Define el esquema para los subdocumentos de Idiomas
const idiomaSchema = new mongoose.Schema({
  Idioma: String,
  nivelescrito: String,
  niveloral: String,
});

// Define el esquema para los subdocumentos de Experiencia Laboral
const experienciaLaboralSchema = new mongoose.Schema({
  nombredelpuesto: String,
  nombredelaempresa: String,
  fechadeinicio: Date,
  pais: String,
  actualmentetrabajoaqui: Boolean,
  fechadefinicion: Date,
});

const formularioEmpleadoSchema = new mongoose.Schema(
  {
    datosPersonales: {
      TipoDeDocumentoDeIdentidad: String,
      NumeroDeDocumentoDeIdentidad: String,
      Nombre: String,
      Apellidos: String,
      celular: String,
      email: String,
      fechadenacimiento: Date,
      genero: String,
      nacionalidad: String,
      paisderesidencia: String,
      provincia: String,
      localidad: String,
    },
    educacion: [educacionSchema], // Permite tener varios objetos de Educación como un arreglo
    idiomas: [idiomaSchema], // Permite tener varios objetos de Idiomas como un arreglo
    experienciaLaboral: [experienciaLaboralSchema], // Permite tener varios objetos de Experiencia Laboral como un arreglo
    curriculum: {
      nombreDoc: String, // Almacenar solo el nombre del archivo, el archivo cargar por multer
    },
    espectativasPersonales: {
      mensaje: String,
    },
    terminosYcondiciones: {
      acepto: Boolean,
    },
  },
  { timestamps: true, puestoVacante: String }
);

const FormularioEmpleado = mongoose.model(
  "FormularioEmpleado",
  formularioEmpleadoSchema
);

export default FormularioEmpleado;
