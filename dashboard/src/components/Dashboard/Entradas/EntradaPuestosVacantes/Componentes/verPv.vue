<script>
import { usePuestosVacantesStore } from '../../../stores/StoreWork/storePuestosVacantes.js'

export default {
  data() {
    return {
      estadoverpv: true,
      puestosVacantes: ''
    }
  },
  props: ['idpv'],
  methods: {
    cambiarestadopv() {
      this.estadoverpv = !this.estadoverpv
      this.$emit('verpvcam', this.estadoverpv)
    },

    async obtenerPuestosVacantes() {
      const puestosvantesstore = usePuestosVacantesStore()
      try {
        await puestosvantesstore.obtenerPuestosVacantes()
        this.puestosVacantes = puestosvantesstore.puestos
      } catch (error) {
        console.error('Error al obtener los puestos vacantes', error)
      }
    }
  },
  created() {
    this.obtenerPuestosVacantes()
  }
}
</script>
<template>
  <div>
    <div class="flex justify-end">
      <button @click="cambiarestadopv" class="btn-back flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <p>Atras</p>
      </button>
    </div>
    <div v-for="pv in puestosVacantes" class="cont-workdes">
      <div v-if="pv._id === idpv" class="lg:columns-2 lg:flex lg:items-center cont-text">
        <div class="imagen-round bg-violet-400 rounded-full m-auto">
          <img
            loading="lazy"
            class="h-full w-full rounded-full"
            src="../../../assets/AssetsWork/imgwork1(1).jpg"
            alt="imagen circular"
          />
        </div>
        <div class="ttl-work lg:w-2/4">
          <div class="font-bold">
            <h1 class="ttl-work1 text-center font-TestKarbonSemiBold text-AzulPerla lg:text-right">
              {{ pv.titulo }}
            </h1>
            <div class="ind-tipo flex font-KarbonRegular items-center justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
                <path
                  id="Icon_material-watch-later"
                  data-name="Icon material-watch-later"
                  d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                  transform="translate(-3 -3)"
                  fill="#df9575"
                />
              </svg>

              &nbsp; {{ pv.tipoempleo }}
            </div>
          </div>
          <div class="obj-work">
            <h1 class="underline font-KarbonRegular text-AzulPerla text-left">
              Objetivo del puesto
            </h1>
            <p class="text-justify font-KarbonRegular text-AzulPerla">
              {{ pv.descripcion }}
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
            <p class="salary-work font-KarbonRegular text-right text-AzulPerla">
              Sueldo: S/.{{ pv.sueldo }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-back {
  padding: 5%;
  padding-bottom: 0%;
  font-size: 5vw;
}

svg {
  width: 5%;
}

.cont-workdes {
  overflow: hidden;
  background-color: #fcf5eb;
  padding: 4%;
  padding-bottom: 5vh;
}

.cont-text {
  padding: 1%;
}

.imagen-round {
  width: 80vw;
  height: 80vw;
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

@media (min-width: 768px) {
  .btn-back {
    padding: 5%;
    padding-bottom: 0%;
    font-size: 4vw;
  }
  .cont-workdes {
    overflow: hidden;
    background-color: #fcf5eb;
    padding: 4%;
    padding-bottom: 1vh;
  }
}

@media (min-width: 1024px) {
  .btn-back {
    padding: 5%;
    padding-bottom: 0%;
    font-size: 1vw;
  }

  svg {
    width: 4%;
  }

  .header {
    position: fixed;
    margin-top: -12vh;
    z-index: 50;
  }

  .cont-workdes {
    margin-top: 0vh;
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
