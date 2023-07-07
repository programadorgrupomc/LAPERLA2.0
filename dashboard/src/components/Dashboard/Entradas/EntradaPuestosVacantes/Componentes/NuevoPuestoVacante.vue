<script>
// import botonesControl from '../../cDashboard/botonesControl.vue'
import seleccionFormPv from './seleccionFormPv.vue'
import BtnBack from '../../../General/BtnBack.vue'
import FileUploaderDef from '../../../General/FileUploaderDef.vue'
export default {
  data() {
    return {
      estadonuevopv: true,
      estadoseleccionform: false,
      imagenpv: ''
    }
  },
  components: {
    // botonesControl,
    seleccionFormPv,
    BtnBack,
    FileUploaderDef
  },
  methods: {
    cambiarEstado() {
      this.estadonuevopv = !this.estadonuevopv
      this.$emit('estadonuevopvcam', this.estadonuevopv)
    },
    cambiarestadoseleccionform() {
      this.estadoseleccionform = !this.estadoseleccionform
      this.estadonuevopv = !this.estadonuevopv
    },
    actuaizarseleccionform(valor) {
      this.estadoseleccionform = valor
      this.estadonuevopv = !this.estadonuevopv
    },
    previewImage(event) {
      const file = event.target.files[0] // Obtener el archivo seleccionado

      // Verificar si se seleccionó un archivo
      if (file) {
        // Crear una URL local para el archivo seleccionado
        this.imagenpv = URL.createObjectURL(file)
      } else {
        this.imagenpv = '' // Limpiar la URL de la imagen si no se selecciona ningún archivo
      }
    }
  }
}
</script>
<template>
  <div v-if="estadonuevopv" class="nuevo-pv overflow-x-hidden">
    <!-- <botonesControl @recetavacia="actualizarreceta" class="hidden lg:block absolute btn-control" /> -->
    <div class="flex justify-end">
      <BtnBack />
    </div>
    <div class="cont-workdes">
      <div class="lg:columns-2 lg:flex lg:items-center cont-text">
        <div class="imagen-round relative bg-violet-400 rounded-full m-auto flex justify-center items-center">
          <FileUploaderDef />
          <!-- <img src="../../../assets/cDashboard/Iconmaterial-perm-media.svg" alt="" class="absolute w-52" />
          <input class="absolute opacity-0" type="file" v-on:change="previewImage" />
          <img :src="imagenpv" class="object-cover w-full h-full rounded-full" alt="" /> -->
        </div>
        <div class="ttl-work lg:w-2/4">
          <div class="font-bold">
            <h1 contenteditable="true" class="ttl-work1 text-center font-TestKarbonSemiBold text-AzulPerla lg:text-right">
              Titulo Puesto Vacante
            </h1>
            <div class="lg:flex">
              <div class="ind-tipo flex font-KarbonRegular items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
                  <path id="Icon_material-watch-later" data-name="Icon material-watch-later"
                    d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                    transform="translate(-3 -3)" fill="#df9575" />
                </svg>

                &nbsp; <span class="spn-ind" contenteditable="true">Experiencia</span>
              </div>
              <div class="ind-tipo flex font-KarbonRegular items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
                  <path id="Icon_material-watch-later" data-name="Icon material-watch-later"
                    d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                    transform="translate(-3 -3)" fill="#df9575" />
                </svg>

                &nbsp; <span class="spn-ind" contenteditable="true">Departamento</span>
              </div>
              <div class="ind-tipo flex font-KarbonRegular items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
                  <path id="Icon_material-watch-later" data-name="Icon material-watch-later"
                    d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                    transform="translate(-3 -3)" fill="#df9575" />
                </svg>

                &nbsp; <span class="spn-ind" contenteditable="true">Tipo de empleo</span>
              </div>
            </div>
          </div>
          <div class="obj-work">
            <h1 class="underline font-KarbonRegular text-AzulPerla text-left">
              Objetivo del puesto
            </h1>
            <p contenteditable="true" class="text-justify font-KarbonRegular text-AzulPerla">
              Descripcion
            </p>
          </div>
          <div class="funciones-work text-AzulPerla">
            <h1 class="font-KarbonRegular text-left">Funciones</h1>
            <ul contenteditable="true" class="font-KarbonRegular text-left list-disc">
              <li>Funciones</li>
            </ul>
          </div>
          <div class="requisitos-work text-AzulPerla">
            <h1 class="font-KarbonRegular t text-left">Requisitos</h1>
            <ul contenteditable="true" class="font-KarbonRegular text-left list-disc">
              <li>Requisito</li>
            </ul>
          </div>
          <div class="cont-salary">
            <p class="salary-work font-KarbonRegular text-right text-AzulPerla">
              Sueldo: S/.<span class="spn-salary" contenteditable="true">000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button @click="cambiarestadoseleccionform" class="btn-nav shadow-2xl">Siguiente</button>
    </div>
  </div>
  <seleccionFormPv v-if="estadoseleccionform" @seleccionformcam="actuaizarseleccionform" />
</template>
<style scoped>
.btn-nav {
  background-color: rgb(89, 35, 140);
  width: 40%;
  font-size: 5.2vw;
  margin: 2%;
  border-radius: 2vw;
  font-weight: bold;
  color: white;
}

.btn-back {
  padding: 5%;
  padding-top: 1%;
  padding-bottom: 2%;
  font-size: 4vw;
}

svg {
  width: 5%;
}

.cont-workdes {
  overflow: hidden;
  background-color: #fcf5eb;
  padding: 4%;
}

.nuevo-pv {
  padding-bottom: 12vh;
}

.cont-text {
  padding: 1%;
}

.imagen-round {
  width: 80%;
  height: auto;
  min-height: 300px;
  min-width: 300px;
}

.ttl-work {
  padding: 4%;
}

.ttl-work1 {
  font-size: 7vw;
  padding-bottom: 2%;
  border: #aeaeae solid 0.1vw;
  background-color: #ffffff33;
  border-radius: 5vw;
}

.ind-tipo {
  font-size: 4vw;
  padding: 2%;
  padding-bottom: 2%;
  margin-top: 5%;
  color: #c95c2d;
  -webkit-text-stroke: #c95c2d 0.1vw;
  border: #aeaeae solid 0.1vw;
  background-color: #ffffff33;
  border-radius: 4vw;
}

.obj-work {
  padding-bottom: 2%;
}

.obj-work h1 {
  font-size: 7vw;
  -webkit-text-stroke: #471d7c 0.1vw;
}

.obj-work p {
  font-size: 5vw;
  -webkit-text-stroke: #471d7c 0.05vw;
  padding-top: 2%;
  border: #aeaeae solid 0.1vw;
  background-color: #ffffff33;
  border-radius: 5vw;
  padding: 1.5%;
}

.funciones-work {
  padding-left: 6%;
  padding-bottom: 2%;
}

.funciones-work h1 {
  font-size: 7vw;
  -webkit-text-stroke: #471d7c 0.1vw;
}

.funciones-work ul {
  font-size: 5vw;
  -webkit-text-stroke: #471d7c 0.05vw;
  border: #aeaeae solid 0.1vw;
  background-color: #ffffff33;
  border-radius: 5vw;
  padding: 8%;
}

.requisitos-work {
  padding-left: 6%;
  padding-top: 2%;
}

.requisitos-work h1 {
  font-size: 7vw;
  -webkit-text-stroke: #471d7c 0.1vw;
}

.requisitos-work ul {
  font-size: 5vw;
  -webkit-text-stroke: #471d7c 0.05vw;
  border: #aeaeae solid 0.1vw;
  background-color: #ffffff33;
  border-radius: 5vw;
  padding: 8%;
}

.cont-salary {
  padding-top: 2%;
  padding-bottom: 2%;
}

.salary-work {
  font-size: 6vw;
  -webkit-text-stroke: #471d7c 0.15vw;
  /* border: #AEAEAE solid 0.1vw;
    background-color: #FFFFFF33;
    border-radius: 5vw; */
  padding-right: 3%;
}

.spn-salary {
  border: #aeaeae solid 0.1vw;
  background-color: #ffffff33;
  border-radius: 4vw;
  padding: 1%;
}

@media (min-width: 768px) {
  .btn-back {
    padding: 5%;
    padding-top: 1%;
    padding-bottom: 2%;
    font-size: 3vw;
  }

  .btn-nav {
    background-color: rgb(89, 35, 140);
    width: 40%;
    font-size: 3.2vw;
    margin: 2%;
    border-radius: 2vw;
    font-weight: bold;
    color: white;
  }

  .nuevo-pv {
    padding-bottom: 3vh;
  }
}

@media (min-width: 1024px) {
  .btn-control {
    height: 6vh;
    top: -0%;
    right: 8vw;
  }

  .btn-nav {
    background-color: rgb(89, 35, 140);
    width: 20%;
    font-size: 1.2vw;
    margin: 2%;
    border-radius: 2vw;
    font-weight: bold;
    color: white;
  }

  .btn-back {
    padding: 5%;
    padding-top: 1%;
    padding-bottom: 2%;
    font-size: 1.1vw;
  }

  svg {
    width: 12%;
  }

  .cont-workdes {}

  .cont-text {
    padding: 1%;
  }

  .imagen-round {
    width: 35vw;
    height: 35vw;
  }

  .ttl-work {
    padding: 0%;
  }

  .ttl-work1 {
    font-size: 2.5vw;
    padding-bottom: 2%;
    border: #aeaeae solid 0.1vw;
    background-color: #ffffff33;
    border-radius: 2vw;
    padding: 2%;
  }

  .ind-tipo {
    font-size: 1.5vw;
    padding-top: 1%;
    padding-bottom: 2%;
    color: #c95c2d;
    -webkit-text-stroke: #c95c2d 0.09vw;
    border: #aeaeae solid 0.1vw;
    background-color: #ffffff33;
    border-radius: 2vw;
    padding: 2%;
    margin: 1%;
    width: 33.3%;
  }

  .spn-ind {
    width: 88%;
    font-size: 1.2vw;
  }

  .obj-work {
    padding-bottom: 2%;
  }

  .obj-work h1 {
    font-size: 3vw;
    -webkit-text-stroke: #471d7c 0.1vw;
  }

  .obj-work p {
    font-size: 2vw;
    -webkit-text-stroke: #471d7c 0.05vw;
    padding-top: 2%;
    border: #aeaeae solid 0.1vw;
    background-color: #ffffff33;
    border-radius: 2vw;
    padding: 2%;
    min-height: 300px;
  }

  .funciones-work {
    padding-left: 6%;
    padding-bottom: 2%;
  }

  .funciones-work h1 {
    font-size: 2.5vw;
    -webkit-text-stroke: #471d7c 0.1vw;
  }

  .funciones-work ul {
    font-size: 1.5vw;
    -webkit-text-stroke: #471d7c 0.05vw;
    border: #aeaeae solid 0.1vw;
    background-color: #ffffff33;
    border-radius: 2vw;
    padding: 4%;
    min-height: 300px;
  }

  .requisitos-work {
    padding-left: 6%;
    padding-top: 2%;
  }

  .requisitos-work h1 {
    font-size: 2.5vw;
    -webkit-text-stroke: #471d7c 0.1vw;
  }

  .requisitos-work ul {
    font-size: 1.5vw;
    -webkit-text-stroke: #471d7c 0.05vw;
    border: #aeaeae solid 0.1vw;
    background-color: #ffffff33;
    border-radius: 2vw;
    padding: 4%;
    min-height: 300px;
  }

  .cont-salary {
    padding-top: 2%;
    padding-bottom: 2%;
  }

  .spn-salary {
    border: #aeaeae solid 0.1vw;
    background-color: #ffffff33;
    border-radius: 2vw;
    padding: 2%;
  }

  .salary-work {
    font-size: 2.2vw;
    -webkit-text-stroke: #471d7c 0.15vw;
  }

  .btn-postular {
    padding: 0.5%;
    border-radius: 2vw;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 1.4vw;
  }

  .btn-postular:hover {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
