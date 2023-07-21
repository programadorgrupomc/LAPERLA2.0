<script>
import BtnBack from '../../../General/BtnBack.vue'
import apiRecetario from '../../../../../services/Recetario/apiRecetario'
export default {
  data() {
    return {
      recetas: '',
      idreceta: '',
      recetaslocal: []
    }
  },
  props: ['recetasprop'],
  components: {
    BtnBack
  },
  methods: {
    deleteReceta(id) {
      const rpta = window.confirm('Seguro que desea eliminar La Publicacion?')
      if (rpta) {
        apiRecetario
          .deleteRecetas(id)
          .then(() => {
            alert('Eliminacion Exitoso!')
            location.reload()
          })
          .catch((error) => {
            console.log(`Hubo un error al eliminar ${error}`)
          })
      }
    },
    updateEstadoReceta(id, estado) {
      const rpta = window.confirm('¿Seguro que desea cambiar la visibilidad de la Publicación?')
      if (rpta) {
        const formData = new FormData()
        if (estado == true) {
          formData.append('estado', false)
        } else if (estado == false) {
          formData.append('estado', true)
        }
        apiRecetario
          .updateReceta(id, formData)
          .then((response) => {
            alert('¡Actualización Exitosa!')
            location.reload()
          })
          .catch((error) => {
            console.log(`Hubo un error al Actualizar: ${error}`)
          })
      }
    }
  },
  computed: {
    recetasActivas() {
      // Filtrar las recetas que tienen el estado en true (activas)
      return this.recetaslocal.filter((receta) => receta.estado === true)
    },
    recetasInactivas() {
      // Filtrar las recetas que tienen el estado en false (inactivas)
      return this.recetaslocal.filter((receta) => receta.estado === false)
    }
  },
  updated() {
    this.recetaslocal = this.recetasprop
    console.log(this.recetaslocal)
  },
  watch: {
    recetasprop(newVal) {
      this.recetaslocal = newVal
    },
    recetaslocal(newVal) {
      this.$nextTick(() => {
        // Actualizar los arrays de recetasActivas y recetasInactivas después de que recetaslocal cambie
        this.$forceUpdate()
      })
    }
  }
}
</script>
<template>
  <div>
    <div class="cont-folder">
      <div class="flex justify-end">
        <BtnBack />
      </div>
      <div class="header-folder flex flex-col justify-center items-center lg:flex-row lg:mx-auto">
        <p class="title-folder font-TestKarbonBold">RECETARIO</p>
        <div class="w-full flex flex-col lg:flex-row justify-end items-center">
          <button class="btn-añadirentradda font-TestKarbonSemiBold">
            <router-link to="/dashboard/entradas/recetario/nuevareceta">
              Añadir Entrada
            </router-link>
          </button>
          <div class="btn-buscar">
            <!-- <buscador @search="buscar" /> -->
          </div>
        </div>
      </div>

      <div>
        <h2>Recetas Activas:</h2>
        <div
          class="items-folder flex flex-col justify-center items-center lg:mx-auto lg:grid lg:grid-cols-3"
        >
          <div v-for="receta in recetasActivas" class="itemf relative bg-stone-600">
            <div class="absolute w-full flex justify-center transition-all">
              <button
                class="button btn-estado transition-all"
                :class="{ 'bg-red-500': receta.estado, 'bg-green-500': !receta.estado }"
                @click="updateEstadoReceta(receta._id, receta.estado)"
              >
                <p v-if="receta.estado === false">Activar</p>
                <p v-if="receta.estado === true">Desactivar</p>
              </button>
            </div>
            <img
              class="object-cover h-full w-full"
              loading="lazy"
              :src="`http://localhost:3000/uploads/images/${receta.imgGeneral}`"
              alt="receta-item"
            />
            <div class="cont-actions absolute flex flex-col justify-center items-center">
              <p class="text-white">{{ receta.titulo }}</p>
              <div class="cont-btnsaction flex justify-between">
                <!-- enviar la data segun el id -->
                <button
                  @click="cambiarestadoeditarreceta(receta._id)"
                  class="btn-action shadow-xl flex justify-center items-center font-TestKarbonSemiBold"
                >
                  Editar
                </button>
                <button
                  @click="cambiarestadoverreceta(receta._id)"
                  class="btn-action shadow-xl flex justify-center items-center font-TestKarbonSemiBold"
                >
                  Ver
                </button>
                <button
                  @click="deleteReceta(receta._id)"
                  class="btn-action shadow-xl flex justify-center items-center font-TestKarbonSemiBold"
                >
                  Eliminar
                </button>
              </div>
            </div>
            <p v-if="recetasActivas.length === 0">No hay recetas Activas...</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Recetas Inactivas:</h2>
        <div
          class="items-folder flex flex-col justify-center items-center lg:mx-auto lg:grid lg:grid-cols-3"
        >
          <div v-for="receta in recetasInactivas" class="itemf relative bg-stone-600">
            <div class="absolute w-full flex justify-center transition-all">
              <button
                class="button btn-estado transition-all"
                :class="{ 'bg-red-500': receta.estado, 'bg-green-500': !receta.estado }"
                @click="updateEstadoReceta(receta._id, receta.estado)"
              >
                <p v-if="receta.estado === false">Activar</p>
                <p v-if="receta.estado === true">Desactivar</p>
              </button>
            </div>
            <img
              class="object-cover h-full w-full"
              loading="lazy"
              :src="`http://localhost:3000/uploads/images/${receta.imgGeneral}`"
              alt="receta-item"
            />
            <div class="cont-actions absolute flex flex-col justify-center items-center">
              <p class="text-white">{{ receta.titulo }}</p>
              <div class="cont-btnsaction flex justify-between">
                <!-- enviar la data segun el id -->
                <button
                  @click="cambiarestadoeditarreceta(receta._id)"
                  class="btn-action shadow-xl flex justify-center items-center font-TestKarbonSemiBold"
                >
                  Editar
                </button>
                <button
                  @click="cambiarestadoverreceta(receta._id)"
                  class="btn-action shadow-xl flex justify-center items-center font-TestKarbonSemiBold"
                >
                  Ver
                </button>
                <button
                  @click="deleteReceta(receta._id)"
                  class="btn-action shadow-xl flex justify-center items-center font-TestKarbonSemiBold"
                >
                  Eliminar
                </button>
              </div>
            </div>
            <p v-if="recetasInactivas.length === 0">No hay recetas Inactivas...</p>
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

.cont-folder {
  padding: 1%;
  margin-bottom: 6%;
  padding-bottom: 10vh;
}

.header-folder {
  padding-top: 2%;
  padding-bottom: 2%;
  width: 100%;
}

.title-folder {
  padding: 1%;
  font-size: 8vw;
}

.btn-añadirentradda {
  background-color: #ff8f33;
  width: 80%;
  padding: 1%;
  border-radius: 3vw;
  margin-top: 2%;
  margin-bottom: 2%;
  color: white;
  border: solid #606060 0.1vw;
  font-size: 5vw;
}

.btn-buscar {
  width: 80%;
}

.itemf {
  overflow: hidden;
  width: 85%;
  margin: 1%;
  border-radius: 4vw;
  height: 85%;
  min-height: 250px;
}

.cont-actions {
  transform: translateY(-100%);
  width: 100%;
  height: auto;
  padding-bottom: 4%;
}

.cont-actions p {
  padding: 2%;
  font-size: 5vw;
  text-align: center;
  font-weight: bold;
  -webkit-text-stroke: #606060 0.2vw;
}

.cont-btnsaction {
  width: 90%;
}

.btn-action {
  background-color: #ff8f33;
  width: 30%;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 2vw;
  font-size: 5vw;
  color: white;
}

.btn-estado {
  margin: 2%;
  border-radius: 2vh;
  min-width: 100px;
  font-size: 2vh;
}

.btn-estado:hover {
  transform: scale(1.1);
  filter: brightness(85%);
}

h2 {
  margin-left: 5vh;
  padding: 2%;
}

@media (min-width: 768px) {
  .btn-back {
    padding: 5%;
    padding-bottom: 0%;
    font-size: 4vw;
  }

  .cont-folder {
    padding: 1%;
    margin-bottom: 6%;
    padding-bottom: 5vh;
  }

  .header-folder {
    padding-top: 2%;
    padding-bottom: 2%;
    width: 100%;
  }

  .title-folder {
    padding: 1%;
    font-size: 7vw;
  }

  .btn-añadirentradda {
    background-color: #ff8f33;
    width: 80%;
    padding: 1%;
    border-radius: 3vw;
    margin-top: 2%;
    margin-bottom: 2%;
    color: white;
    border: solid #606060 0.1vw;
    font-size: 4vw;
  }

  .btn-buscar {
    width: 80%;
  }

  .itemf {
    overflow: hidden;
    width: 85%;
    margin: 1%;
    border-radius: 4vw;
    height: 50vh;
    min-height: 450px;
  }

  .cont-actions {
    transform: translateY(-100%);
    width: 100%;
    height: auto;
    padding-bottom: 4%;
  }

  .cont-actions p {
    padding: 2%;
    font-size: 4.5vw;
    text-align: center;
    font-weight: bold;
    -webkit-text-stroke: #606060 0.2vw;
  }

  .cont-btnsaction {
    width: 90%;
  }

  .btn-action {
    background-color: #ff8f33;
    width: 30%;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 2vw;
    font-size: 4vw;
    color: white;
  }
}

@media (min-width: 1024px) {
  .btn-back {
    padding: 5%;
    padding-bottom: 0%;
    font-size: 1vw;
  }

  .cont-folder {
    padding: 1%;
    margin-bottom: 6%;
    height: 100%;
  }

  .header-folder {
    padding-top: 2%;
    padding-bottom: 2%;
    width: 80%;
  }

  .title-folder {
    padding: 1%;
    font-size: 2vw;
  }

  .btn-añadirentradda {
    background-color: #ff8f33;
    width: 25%;
    padding: 0.5%;
    border-radius: 3vw;
    margin-top: 2%;
    margin-bottom: 2%;
    color: white;
    border: solid #606060 0.1vw;
    font-size: 1.2vw;
    margin-right: 2%;
  }

  .btn-buscar {
    width: 25%;
  }

  .items-folder {
    width: 80%;
    height: auto;
  }

  .itemf {
    overflow: hidden;
    width: 95%;
    margin: 1%;
    border-radius: 1.5vw;
    height: 95%;
    min-height: 150px;
  }

  .cont-actions {
    transform: translateY(-100%);
    width: 100%;
    height: auto;
    padding-bottom: 4%;
  }

  .cont-actions p {
    padding: 2%;
    font-size: 1.5vw;
    text-align: center;
    font-weight: bold;
    -webkit-text-stroke: #606060 0.02vw;
  }

  .cont-btnsaction {
    width: 90%;
  }

  .btn-action {
    background-color: #ff8f33;
    width: 30%;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 2vw;
    font-size: 1vw;
    color: white;
  }
}
</style>
