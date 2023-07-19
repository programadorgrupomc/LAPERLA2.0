<template>
  <div v-if="puestoMostrar">
    <div class="cont-workdes">
      <div class="lg:columns-2 lg:flex lg:items-center cont-text">
        <div class="imagen-round bg-violet-400 rounded-full m-auto">
          <img loading="lazy" class="h-full w-full rounded-full"
            :src="`http://localhost:3000/uploads/${puestoMostrar.imgPuesto}`" alt="imagen circular" />
        </div>
        <div class="ttl-work lg:w-2/4">
          <div class="font-bold">
            <h1 class="ttl-work1 text-center font-TestKarbonSemiBold text-AzulPerla lg:text-right">
              {{ puestoMostrar.titulo }}
            </h1>
            <div class="ind-tipo flex font-KarbonRegular items-center justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
                <path id="Icon_material-watch-later" data-name="Icon material-watch-later"
                  d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                  transform="translate(-3 -3)" fill="#df9575" />
              </svg>

              &nbsp; {{ puestoMostrar.tipoempleo }}
            </div>
          </div>
          <div class="obj-work">
            <h1 class="underline font-KarbonRegular text-AzulPerla text-left">
              Objetivo del puesto
            </h1>
            <p class="text-justify font-KarbonRegular text-AzulPerla">
              {{ puestoMostrar.objetivoPuesto }}
            </p>
          </div>
          <div class="funciones-work text-AzulPerla">
            <h1 class="font-KarbonRegular text-left">Funciones</h1>
            <ul class="font-KarbonRegular text-left list-disc">
              <li>
                Liderar proyectos de mejora (mediano plazo) y proyectos de transformación (largo
                plazo), principalmente de carácter tecnológico, acompañando al negocio durante el
                todo el ciclo de vida (concepto, propuesta de diseño, implementación, resultados,
                seguimiento). Se puede tener más de 1 proyecto simultáneamente.
              </li>
              <li>
                Ejecutar relevamientos, entrevistas, medición de tiempos en proyectos de mejora y
                proyectos de transformación.
              </li>
              <li>
                Ejecutar proyectos de mejora y transformación, de acuerdo a la asignación del jefe.
              </li>
              <li>Atender pedidos, formalizaciones o miniproyectos (menor duración).</li>
              <li>Atender pedidos y formalizaciones.</li>
              <li>Realizar Mentoring a los Analistas Junior y Middle como guía de proyectos.</li>
            </ul>
          </div>
          <div class="requisitos-work text-AzulPerla">
            <h1 class="font-KarbonRegular t text-left">Requisitos</h1>
            <ul class="font-KarbonRegular text-left list-disc">
              <li>
                Bachiller de Ingeniería Industrial, Ingeniería empresarial, Ingeniería de sistemas,
                Administración o carreras afines.
              </li>
              <li>
                Mínimo 3 años de experiencia realizando funciones similares en áreas de procesos,
                proyectos, innovación, transformación, producto o tecnología.
              </li>
              <li>Conocimientos en Lean Six Sigma y PMI.</li>
              <li>Conocimientos en Scrum, Agile, Design Thinking y Design Sprint.</li>
              <li>Manejo de Microsoft Office a nivel avanzado.</li>
            </ul>
          </div>
          <div class="cont-salary">
            <!-- <p class="salary-work font-KarbonRegular text-right text-AzulPerla">Sueldo: S/.8600</p> -->
          </div>
        </div>
      </div>
      <div class="text-white font-bold flex justify-center">
        <button @click="scrollToForm()" class="bg-NaranjaPerla btn-postular font-TestKarbonMedium transition-all">
          POSTULACION
        </button>
      </div>
    </div>
    <FormPost1Vue v-show="mostrarform" />
    <!-- <form-post-2 v-show="mostrarform" id="form2" /> -->
  </div>
  
</template>

<script>
import FormPost1Vue from './FormsPostulacion/FormPost1.vue'
import FormPost2 from './FormsPostulacion/FormPost2.vue'
import imagenpuesto from '../../assets/Work/imgwork1 (1).jpg'
import apiPuestosVacantes from '../../../../dashboard/src/services/Work/apiPuestosVacantes.js'


export default {
  name: 'DescripcionWork',
  data() {
    return {
      mostrarform: false,
      puestos: [

      ],
      idpuesto: '',
      puestoMostrar: ''
    }
  },
  components: {
    FormPost1Vue,
    FormPost2
  },
  methods: {
    scrollToForm() {
      this.mostrarform = true
      this.$nextTick(() => {
        const formElement = document.getElementById('form2')
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    },
    fetchPuestos() {
      apiPuestosVacantes.getPuestosVacantes()
        .then((response) => {
          this.puestos = response.data;
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    }
  },
  mounted() {
    setInterval(() => {
      this.fetchPuestos();
      console.log(this.puestos)
      const puestoId = this.$route.params.id
      this.idpuesto = puestoId
      this.puestoMostrar = this.puestos.find((puesto) => puesto._id === puestoId)
      console.log(puestoId)
      console.log(this.puestoMostrar)
    }, 2000);
    //resulta que no es necesario coventir a numero xd

  }
}
</script>

<style scoped>
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
}

.ttl-work {
  padding: 4%;
}

.ttl-work1 {
  font-size: 7vw;
  padding-bottom: 2%;
}

.ind-tipo {
  font-size: 4vw;
  padding-top: 1%;
  padding-bottom: 2%;
  color: #c95c2d;
  -webkit-text-stroke: #c95c2d 0.1vw;
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
}

.cont-salary {
  padding-top: 2%;
  padding-bottom: 2%;
}

.salary-work {
  font-size: 6vw;
  -webkit-text-stroke: #471d7c 0.15vw;
}

.btn-postular {
  padding: 2%;
  border-radius: 3vw;
  padding-left: 5%;
  padding-right: 5%;
  font-size: 4.5vw;
}

@media (min-width: 1024px) {
  svg {
    width: 4%;
  }

  .header {
    position: fixed;
    margin-top: -12vh;
    z-index: 50;
  }

  .cont-workdes {
    padding-top: 12vh;
  }

  .cont-text {
    padding: 1%;
  }

  .imagen-round {
    width: 45%;
    height: auto;
  }

  .ttl-work {
    padding: 0%;
  }

  .ttl-work1 {
    font-size: 3.5vw;
    padding-bottom: 2%;
    width: 100%;
  }

  .ind-tipo {
    font-size: 1.5vw;
    padding-top: 1%;
    padding-bottom: 2%;
    color: #c95c2d;
    -webkit-text-stroke: #c95c2d 0.09vw;
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
  }

  .cont-salary {
    padding-top: 2%;
    padding-bottom: 2%;
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
