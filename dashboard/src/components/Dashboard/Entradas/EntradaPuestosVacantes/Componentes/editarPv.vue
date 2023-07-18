<script>
import seleccionFormPv from './seleccionFormPv.vue'
import apiPuestosVacantes from '../../../../../services/Work/apiPuestosVacantes'
import BtnBack from '../../../General/BtnBack.vue'
import FileUploaderDef from '../../../General/FileUploaderDef.vue'
import BotonesCrudActualizar from '../BotonesCrudActualizar.vue'
export default {
  data() {
    return {
      estadoeditarpv: true,
      estadoseleccionform: false,
      puestosVacantes: '',
      imagenpv: '',
      newDatapv: ''
    }
  },
  components: {
    FileUploaderDef,
    seleccionFormPv,
    BtnBack,
    BotonesCrudActualizar
  },
  props: ['idpv'],
  methods: {
    cambiarEstado() {
      this.estadoeditarpv = !this.estadoeditarpv
      this.$emit('estadoeditarpvcam', this.estadoeditarpv)
    },
    cambiarestadoseleccionform() {
      this.estadoseleccionform = !this.estadoseleccionform
      this.estadoeditarpv = !this.estadoeditarpv
    },
    actuaizarseleccionform(valor) {
      this.estadoseleccionform = valor
      this.estadoeditarpv = !this.estadoeditarpv
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
    },

    asignarmagen(valor) {
      this.newDatapv.imgPuesto = valor
      console.log(this.newDatapv)
      this.$emit('newDatapv', this.newDatapv)
      console.log(valor)
    },
    titulo(event) {
      this.newDatapv.titulo = event.target.innerText
      console.log(this.newDatapv)
      this.$emit('newDatapv', this.newDatapv)
    },
    experiencia(event) {
      this.newDatapv.experiencia = event.target.innerText
      console.log(this.newDatapv)
      this.$emit('newDatapv', this.newDatapv)
    },
    departamento(event) {
      this.newDatapv.departamento = event.target.innerText
      console.log(this.newDatapv)
      this.$emit('newDatapv', this.newDatapv)
    },
    tipoempleo(event) {
      this.newDatapv.tipoempleo = event.target.innerText
      console.log(this.newDatapv)
      this.$emit('newDatapv', this.newDatapv)
    },
    objetivoPuesto(event) {
      this.newDatapv.objetivoPuesto = event.target.innerText
      console.log(this.newDatapv)
      this.$emit('newDatapv', this.newDatapv)
    },
    capturarFunciones(event) {
      const funcionesHTML = event.target.innerHTML
      const parser = new DOMParser()
      const htmlDoc = parser.parseFromString(funcionesHTML, 'text/html')
      const elementosLi = htmlDoc.getElementsByTagName('li')
      const funciones = Array.from(elementosLi).map((li) => li.innerHTML.trim())

      // Asigna directamente el arreglo de funciones a this.newpuesto.funciones
      this.newDatapv.funciones = funciones

      console.log(this.newDatapv)
      this.$emit('newDatapv', this.newDatapv)
    },
    capturarRequisitos(event) {
      const requisitosHTML = event.target.innerHTML
      const parser = new DOMParser()
      const htmlDoc = parser.parseFromString(requisitosHTML, 'text/html')
      const elementosLi = htmlDoc.getElementsByTagName('li')
      const requisitos = Array.from(elementosLi).map((li) => li.innerText.trim())

      // Asigna directamente el arreglo de requisitos a this.newDatapv.requisitos
      this.newDatapv.requisitos = requisitos

      console.log(this.newDatapv)
      this.$emit('newDatapv', this.newDatapv)
    },

    fetchPv() {
      apiPuestosVacantes
        .getPuestosVacantes()
        .then((response) => {
          this.puestosVacantes = response.data
          this.newDatapv = this.puestosVacantes.find((puesto) => puesto._id === this.idpv)
          this.$emit('newDatapv', this.newDatapv)
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    }
  },
  created() {
    this.fetchPv()
  }
}
</script>
<template>
  <div v-if="estadoeditarpv" class="nuevo-pv">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrudActualizar class="btn-crud" :newDatapv="newDatapv" />
    </div>
    <div class="flex justify-end">
      <button @click="cambiarEstado" class="btn-back flex items-center">
        <BtnBack disabled />
      </button>
    </div>
    <div v-for="puesto in puestosVacantes" class="cont-workdes">
      <div v-if="puesto._id === idpv" class="lg:columns-2 lg:flex lg:items-center cont-text">
        <div
          class="imagen-round relative bg-violet-400 rounded-full m-auto flex justify-center items-center"
        >
          <FileUploaderDef :imagebd="puesto.imgPuesto" @imgrecortada="asignarmagen" />
          <!-- <img src="../../../assets/cDashboard/Iconmaterial-perm-media.svg" alt="" class="absolute w-52" />
          <input class="absolute opacity-0" type="file" v-on:change="previewImage" />
          <img :src="imagenpv" class="object-cover w-full h-full rounded-full" alt="" /> -->
        </div>
        <div class="ttl-work lg:w-2/4">
          <div class="font-bold">
            <h1
              contenteditable="true"
              class="ttl-work1 text-center font-TestKarbonSemiBold text-AzulPerla lg:text-right"
              @input="titulo"
            >
              {{ puesto.titulo }}
            </h1>
            <div class="lg:flex">
              <div class="ind-tipo flex font-KarbonRegular items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
                  <path
                    id="Icon_material-watch-later"
                    data-name="Iconmaterial-watch-later"
                    d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                    transform="translate(-3 -3)"
                    fill="#df9575"
                  />
                </svg>

                &nbsp;
                <span class="spn-ind" contenteditable="true" @input="experiencia">{{
                  puesto.experiencia
                }}</span>
              </div>
              <div class="ind-tipo flex font-KarbonRegular items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
                  <path
                    id="Icon_material-watch-later"
                    data-name="Iconmaterial-watch-later"
                    d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                    transform="translate(-3 -3)"
                    fill="#df9575"
                  />
                </svg>

                &nbsp;
                <span class="spn-ind" contenteditable="true" @input="departamento">{{
                  puesto.departamento
                }}</span>
              </div>
              <div class="ind-tipo flex font-KarbonRegular items-center justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
                  <path
                    id="Icon_material-watch-later"
                    data-name="Iconmaterial-watch-later"
                    d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                    transform="translate(-3 -3)"
                    fill="#df9575"
                  />
                </svg>
                &nbsp;
                <span class="spn-ind" contenteditable="true" @input="tipoempleo">{{
                  puesto.tipoempleo
                }}</span>
              </div>
            </div>
          </div>
          <div class="obj-work">
            <h1 class="underline font-KarbonRegular text-AzulPerla text-left">
              Objetivo del puesto
            </h1>
            <p
              contenteditable="true"
              class="text-justify font-KarbonRegular text-AzulPerla"
              @input="objetivoPuesto"
            >
              {{ puesto.objetivoPuesto }}
            </p>
          </div>
          <div class="funciones-work text-AzulPerla">
            <h1 class="font-KarbonRegular text-left">Funciones</h1>
            <ul
              contenteditable="true"
              class="font-KarbonRegular text-left list-disc"
              @input="capturarFunciones($event)"
            >
              <li v-for="fun in puesto.funciones">
                {{ fun }}
              </li>
              <li v-if="!puesto.funciones || puesto.funciones.length === 0">No Hay Funciones...</li>
            </ul>
          </div>
          <div class="requisitos-work text-AzulPerla">
            <h1 class="font-KarbonRegular t text-left">Requisitos</h1>
            <ul
              contenteditable="true"
              class="font-KarbonRegular text-left list-disc"
              @input="capturarRequisitos($event)"
            >
              <li v-for="rec in puesto.requisitos">
                {{ rec }}
              </li>
              <li v-if="!puesto.requisitos || puesto.requisitos.length === 0">
                No Hay Requisitos...
              </li>
            </ul>
          </div>
          <!-- <div class="cont-salary">
            <p class="salary-work font-KarbonRegular text-right text-AzulPerla">
              Sueldo: S/.<span class="spn-salary" contenteditable="true">{{ puesto.sueldo }}</span>
            </p>
          </div> -->
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button @click="cambiarestadoseleccionform" class="btn-nav shadow-2xl">Siguiente</button>
    </div>
  </div>
  <seleccionFormPv
    v-if="estadoseleccionform"
    @seleccionformcam="actuaizarseleccionform"
    @seleccionado="actualizarformulario"
  />
</template>
<style scoped>
.cont-btn {
  height: auto;
  width: auto;
  bottom: 10%;
  right: 1%;
}

.btn-crud {
  height: 10vh;
  /* background-color: rgba(220, 20, 60, 0.238); */
}

.nuevo-pv {
  padding-bottom: 5vh;
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
}

@media (min-width: 1024px) {
  .cont-btn {
    width: 30vh;
    height: 7vh;
    top: 0%;
    right: 15vw;
  }

  .btn-crud {
    height: 7vh;
    /* background-color: rgba(220, 20, 60, 0.238); */
  }

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

  .cont-workdes {
    padding-top: 1%;
  }

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
