<template>
  <div class="contenedorformEs bg-FondoPerla">
    <p class="titleform text-AzulPerla font-TestKarbonSemiBold">Datos Personales</p>
    <form action="" class="flex flex-col w-full">
      <div class="contenedorcolumnas columns-2">
        <div class="flex flex-col break-inside-avoid">
          <div class="inpsel">
            <label for="docid">Documento de identidad</label>
            <select class="perlaselect" name="TipoDocumentoDeIdentidad" id="docid"
              v-model="newformOperarioData.datosPersonales.TipoDocumentoDeIdentidad">
              <option value="">Seleccionar</option>
              <option value="dni">DNI</option>
              <option value="ce">CARNET DE EXTRAJERIA</option>
            </select>
          </div>
          <input class="perlainput inptdt" type="text" placeholder="Nombre"
            v-model="newformOperarioData.datosPersonales.nombre" />
          <div class="inpsel">
            <label for="fechanacimiento">Fecha de nacimiento</label>
            <input class="perlaselect" type="date" v-model="newformOperarioData.datosPersonales.fechanacimiento">
          </div>
          <div class="inpsel">
            <label for="lugar">¿De dónde eres?</label>
            <select class="perlaselect" name="lugar" id="lugar" v-model="newformOperarioData.datosPersonales.lugar">
              <option value="">Seleccionar</option>
              <option value="trujillo">Trujillo</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div class="inpsel">
            <label for="workback">¿Has trabajado con nosotros anteriormente?</label>
            <select class="perlaselect" name="workback" id="workback"
              v-model="newformOperarioData.datosPersonales.hastrabajadoconnosotros">
              <option value="">Seleccionar</option>
              <option value="1">SI</option>
              <option value="0">NO</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col break-inside-avoid columna2">
          <input class="perlainput inptdt" type="text" placeholder="Número de documento de identidad"
            v-model="newformOperarioData.datosPersonales.NumeroDocumentoDeIdentidad" />
          <input class="perlainput inptdt" type="text" placeholder="Apellidos"
            v-model="newformOperarioData.datosPersonales.apellidos" />
          <div class="inpsel">
            <label for="celular">Celular</label>
            <div class="flex w-full">
              <select class="perlaselect w-2/5" name="codcountry" id="codcountry">
                <option value="pe">
                  <p>🇵🇪</p>
                  +51
                </option>
              </select>
              <input class="perlainput pl-4 w-full" type="text" v-model="newformOperarioData.datosPersonales.celular" />
            </div>
          </div>
          <div class="inpsel">
            <label for="covid">Dosis de vacunación COVID-19</label>
            <select class="perlaselect" name="covid" id="covid"
              v-model="newformOperarioData.datosPersonales.dosisdevacunacioncovid">
              <option value="">Seleccionar</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
      <!-- cargar archivo -->
      <div class="contenedorformMo bg-FondoPerla">
        <p class="titleform text-AzulPerla font-TestKarbonSemiBold">Currículum</p>
        <div class="inpsel">
          <label for="">Adjuntar archivo desde</label>
          <div class="flex w-full justify-between">
            <button type="button" class="perlaselect w-full flex justify-center lg:items-center"
              onclick="document.getElementById('fileInput').click();">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill"
                viewBox="0 0 16 16">
                <path
                  d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
              </svg>&nbsp;Mis Archivos
            </button>
            <input type="file" id="fileInput" style="display: none" @change="onFileSelected" />
            <button class="perlaselect w-full flex justify-center lg:items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dropbox"
                viewBox="0 0 16 16">
                <path
                  d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2 8.01 4.555Zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555-4.006-2.555Zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555L8.01 9.651Z" />
              </svg>&nbsp;Dropbox
            </button>
            <button class="perlaselect w-full">&nbsp;Drive</button>
          </div>
          <p class="indicadorf4 font-KarbonRegular text-AzulPerla">
            Tamaño maximo 15MB. Formato: .pdf o .doc o .docx
          </p>
          <!-- arrastrar -->
          <div>
            <div class="flex items-center justify-center w-full">
              <label for="dropzone-file"
                class="bg-FondoPerla flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" @change="onFileSelected" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex termsandcon items-center justify-center">
        <input class="ckboxperla" type="checkbox" />
        <p class="texto">
          He leído y acepto los Términos y Condiciones y las Políticas de privacidad
        </p>
      </div>
      <div class="descicionbtn flex items-center justify-around">
        <button class="btnesc font-TestKarbonMedium" type="reset">CANCELAR</button>
        <button class="btnsub font-TestKarbonMedium" type="button" @click="guardarFormOperario">ENVIAR
          POSTULACIÓN</button>
      </div>
    </form>
  </div>
</template>

<script>
import apiFormOperario from '../../../../services/FormsFront/apiFormOperario.js';

export default {
  data() {
    return {
      newformOperarioData: {
        datosPersonales: {
          TipoDocumentoDeIdentidad: '',
          NumeroDocumentoDeIdentidad: '',
          nombre: '',
          apellidos: '',
          fechanacimiento: '',
          celular: '',
          lugar: '',
          dosisdevacunacioncovid: '',
          hastrabajadoconnosotros: '',
        },
        curriculum: {
          documento: '', // Almacenar solo el nombre del archivo, el archivo cargar por multer
        },
        terminosycondiciones: {
          acepto: true,
        },
        puestoVacante: 'Admin',
      },
    };
  },
  methods: {
    onFileSelected(event) {
      this.newformOperarioData.curriculum.documento = event.target.files[0];
    },
    handleFileInputClick() {
      this.$refs.fileInput.click();
    },
    guardarFormOperario() {
      const formData = new FormData();
      formData.append('datosPersonales.TipoDocumentoDeIdentidad', this.newformOperarioData.datosPersonales.TipoDocumentoDeIdentidad);
      formData.append('datosPersonales.NumeroDocumentoDeIdentidad', this.newformOperarioData.datosPersonales.NumeroDocumentoDeIdentidad);
      formData.append('datosPersonales.nombre', this.newformOperarioData.datosPersonales.nombre);
      formData.append('datosPersonales.apellidos', this.newformOperarioData.datosPersonales.apellidos);
      formData.append('datosPersonales.fechanacimiento', this.newformOperarioData.datosPersonales.fechanacimiento);
      formData.append('datosPersonales.celular', this.newformOperarioData.datosPersonales.celular);
      formData.append('datosPersonales.lugar', this.newformOperarioData.datosPersonales.lugar);
      formData.append('datosPersonales.dosisdevacunacioncovid', this.newformOperarioData.datosPersonales.dosisdevacunacioncovid);
      formData.append('datosPersonales.hastrabajadoconnosotros', this.newformOperarioData.datosPersonales.hastrabajadoconnosotros);
      formData.append('curriculum', this.newformOperarioData.curriculum.documento);
      // formData.append('terminosycondiciones.acepto', this.newformOperarioData.terminosycondiciones.acepto)
      // formData.append('puestoVacante', this.newformOperarioData.puestoVacante);
      // console.log(formData)
      apiFormOperario.createFormOperario(formData)
        .then(() => {
          console.log("Formulario guardado correctamente");
        })
        .catch((error) => {
          console.log(`Error al crear formulario ${JSON.stringify(error)}`);
        });
    },
  },
};
</script>

<style scoped>
.perlainput:hover {
  transition: all;
  background-color: #6e5b4423;
}

.perlaselect:hover {
  background-color: #6e5b4446;
}

.contenedorcolumnas {
  padding: 4%;
  gap: 13vw;
}

.columna2 {
  padding-top: 8%;
}

.contenedorformEs {
  padding: 4%;
  padding-left: 15%;
  padding-right: 15%;
}

.titleform {
  font-size: 4vw;
  line-height: normal;
}

.inpsel {
  display: flex;
  flex-direction: column;
  padding-top: 4%;
  padding-bottom: 4%;
  width: 100%;
}

.inptdt {
  margin-bottom: 6%;
  margin-top: 6%;
}

.termsandcon {
  padding-top: 3%;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 3%;
}

.termsandcon p {
  padding-left: 4%;
}

.descicionbtn {
  padding-top: 5%;
  padding-bottom: 5%;
}

.btnsub {
  font-size: 1.5vw;
  line-height: normal;
  background-color: #e97b4d;
  color: white;
  width: 30%;
  border-radius: 1.5vw;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.btnesc {
  margin-top: 2%;
  color: #471d7c;
  font-size: 1.2vw;
}

label,
.texto {
  font-family: 'KarbonRegular';
  font-size: 1.4vw;
  line-height: normal;
  color: #471d7c;
  -webkit-text-stroke: 0.05vw #471d7c;
}

::placeholder {
  font-family: 'KarbonRegular';
  font-size: 1.4vw;
  line-height: normal;
  color: #471d7c;
  -webkit-text-stroke: 0.05vw #471d7c;
}

.perlaselect {
  font-size: 1.3vw;
  line-height: normal;
  color: #471d7c;
  font-family: 'KarbonRegular';
  appearance: none;
  text-align: center;
  margin-top: 1%;
  padding: 0.5%;
  background-color: #f5ede1;
  border: solid #6e5b44 0.01vw;
}

.perlainput {
  font-size: 1.3vw;
  line-height: normal;
  color: #471d7c;
  font-family: 'KarbonRegular';
  margin-top: 1%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  background-color: #fcf5eb;
  border-bottom: solid #6e5b44 0.05vw;
}
</style>
