<template>
  <div>
    <ver-pv v-if="estadoverpv" @verpvcam="actualizarpv" :idpv="idpv" />
    <editar-pv v-if="estadoeditarpv" @estadoeditarpvcam="actualizaretadoeditarpv" :idpv="idpv" />
    <div v-if="estadofolderPv" class="cont-folder">
      <div class="flex justify-end">
        <BtnBack />
      </div>
      <div class="header-folder flex flex-col justify-center items-center lg:flex-row lg:mx-auto">
        <p class="title-folder font-TestKarbonBold">Puestos Vacantes</p>
        <div class="w-full flex flex-col lg:flex-row justify-end items-center">
          <button @click="cambiarestadonuevopv" class="btn-añadirentradda font-TestKarbonSemiBold">
            <router-link to="/dashboard/entradas/puestosvacantes/nuevopuestovacante">
              Añadir Entrada
            </router-link>
          </button>
          <div class="btn-buscar"><!-- <buscador /> --></div>
        </div>
      </div>
      <div class="items-folder flex flex-col justify-center items-center lg:mx-auto lg:grid lg:grid-cols-3">
        <div v-for="puesto in puestosVacanteslocal" class="itemf relative bg-stone-600">
          <!-- aca debe ir linkeado la imgen del puesto vacante -->
          <img class="object-cover h-full w-full" loading="lazy"
            :src="`http://localhost:3000/uploads/${puesto.imgPuesto}`" alt="receta-item" />
          <div class="cont-actions absolute flex flex-col justify-center items-center">
            <p class="text-white">{{ puesto.titulo }}</p>
            <div class="cont-btnsaction flex justify-between">
              <button @click="cambiarestadoeditarpc(puesto._id)"
                class="btn-action shadow-xl flex justify-center items-center font-TestKarbonSemiBold">
                Editar
              </button>
              <button @click="cambiarestadoverpv(puesto._id)"
                class="btn-action shadow-xl flex justify-center items-center font-TestKarbonSemiBold">
                Ver
              </button>
              <button @click="deletePv(puesto._id)"
                class="btn-action shadow-xl flex justify-center items-center font-TestKarbonSemiBold">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnBack from '../../../General/BtnBack.vue'
import apiPuestosVacantes from '../../../../../services/Work/apiPuestosVacantes';
import verPv from './verPv.vue';
import editarPv from './editarPv.vue'

export default {
  data() {
    return {
      estadofolderPv: true,
      estadonuevopv: false,
      estadoverpv: false,
      estadoeditarpv: false,
      puestosVacanteslocal: [],
      idpv: ''
    }
  },
  props: ['puestosVacantesprop'],
  components: {
    BtnBack,
    verPv,
    editarPv
  },
  methods: {
    cambiaestpv() {
      this.estadofolderPv = !this.estadofolderPv;
      this.$emit('estadopvcam', this.estadofolderPv)
    },
    cambiarestadonuevopv() {
      this.estadonuevopv = !this.estadonuevopv;
      this.estadofolderPv = !this.estadofolderPv;
    },
    actualizarestadonuevopv(valor) {
      this.estadonuevopv = valor;
      this.estadofolderPv = !this.estadofolderPv;
    },
    cambiarestadoverpv(id) {
      this.estadoverpv = !this.estadoverpv;
      this.idpv = id;
      this.estadofolderPv = !this.estadofolderPv;
    },
    actualizarpv(valor) {
      this.estadoverpv = valor;
      this.estadofolderPv = !this.estadofolderPv;
    },

    cambiarestadoeditarpc(id) {
      this.estadoeditarpv = !this.estadoeditarpv;
      this.idpv = id;
      this.estadofolderPv = !this.estadofolderPv;
    },
    actualizaretadoeditarpv(valor) {
      this.estadoeditarpv = valor;
      this.estadofolderPv = !this.estadofolderPv
    },
    deletePv(id) {
      apiPuestosVacantes.deletePuestosVacantes(id)
        .then((response) => {
          alert('Eliminacion Exitoso!')
          location.reload();
        })
        .catch((error) => {
          console.log(`Hubo un error al eliminar ${error}`)
        })
    }
  },
  created() { },
  updated() {
    this.puestosVacanteslocal = this.puestosVacantesprop;
    console.log(this.puestosVacantesprop)
  },
  watch: {
    puestosVacantesprop(newVal) {
      this.puestosVacanteslocal = newVal;
    }
  }
}
</script>

<style scoped>
.btn-back {
  padding: 5%;
  padding-bottom: 0%;
  font-size: 5vw;
}

.cont-folder {
  padding: 1%;
  margin-bottom: 6%;
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

.items-folder {
  padding-bottom: 10vh;
}

.itemf {
  overflow: hidden;
  width: 85%;
  margin: 1%;
  border-radius: 4vw;
  height: 50vw;
  min-height: 250px;
  background-color: #ff8f33;
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

@media (min-width: 768px) {
  .btn-back {
    padding: 5%;
    padding-bottom: 0%;
    font-size: 4vw;
  }

  .cont-folder {
    padding: 1%;
    margin-bottom: 6%;
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

  .items-folder {}

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
    width: 35%;
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
    min-height: 16vw;
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
