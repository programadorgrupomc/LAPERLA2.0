<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrud
        class="btn-crud"
        :dataNuestroPollo1="newDataNp1"
        :dataNuestroPollo2="newDataNp2"
        :dataNuestroPollo3="newDataNp3"
        :dataNuestroPollo4="newDataNp4"
        :newProcesos="newDataProcesos"
        :newhero="newdatahero"
      />
    </div>
    <div class="cont-components w-full h-full">
      <componentHero class="border" :heroesdata="heroes" @dataupdatehero="actualizarnewDataHero" />
      <NuestroPollo1
        class="border"
        :nuestrosPollosData="nuestrosPollos"
        @dataupdate="actualizarnewdataNp1"
      />
      <NuestroPollo2
        class="border"
        :nuestrosPollosData="nuestrosPollos"
        @dataupdate2="actualizarnewdataNp2"
      />
      <NuestroPollo3
        class="border"
        :nuestrosPollosData="nuestrosPollos"
        @dataupdate3="actualizarnewdataNp3"
      />
      <NuestroPollo4
        class="border"
        :nuestrosPollosData="nuestrosPollos"
        @dataupdate4="actualizarnewdataNp4"
      />
      <NuestroProcesos
        class="border"
        :procesosData="procesos"
        @procesosupdate="actualizarnewdataprocesos"
      />
    </div>
  </div>
</template>
<script>
import BotonesCrud from '../../General/BotonesCrud.vue'
import componentHero from './Componentes/componentHero.vue'
import NuestroPollo1 from './Componentes/NuestroPollo1.vue'
import NuestroPollo2 from './Componentes/NuestroPollo2.vue'
import NuestroPollo3 from './Componentes/NuestroPollo3.vue'
import NuestroPollo4 from './Componentes/NuestroPollo4.vue'
import NuestroProcesos from './Componentes/NuestroProcesos.vue'

//api
import apiHero from '@/services/Inicio/apiHero.js'
import apiNuestroPollo from '@/services/Inicio/apiNuestroPollo.js'
import apiProcesos from '@/services/Inicio/apiProcesos.js'

export default {
  data() {
    return {
      heroes: [],
      nuestrosPollos: [],
      procesos: [],

      newdatahero: [],
      newDataNp1: [],
      newDataNp2: [],
      newDataNp3: [],
      newDataNp4: [],
      newDataProcesos: []
    }
  },
  components: {
    BotonesCrud,
    componentHero,
    NuestroPollo1,
    NuestroPollo2,
    NuestroPollo3,
    NuestroPollo4,
    NuestroProcesos
  },
  methods: {
    fetchHeroes() {
      apiHero
        .getHeroes()
        .then((response) => {
          this.heroes = response.data
          console.log(this.heroes)
        })
        .catch((error) => {
          console.error('Error fetching heroes:', error)
        })
    },
    fetchNuestrosPollos() {
      apiNuestroPollo
        .getNuestroPollos()
        .then((response) => {
          this.nuestrosPollos = response.data
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    },
    fetchProcesos() {
      apiProcesos
        .getProcesos()
        .then((response) => {
          this.procesos = response.data
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    },
    actualizarnewDataHero(valor) {
      this.newdatahero = valor
      console.log(this.newdatahero)
    },
    actualizarnewdataNp1(valor) {
      this.newDataNp1 = valor
      console.log(this.newDataNp1)
    },
    actualizarnewdataNp2(valor) {
      this.newDataNp2 = valor
      console.log(this.newDataNp2)
    },
    actualizarnewdataNp3(valor) {
      this.newDataNp3 = valor
      console.log(this.newDataNp3)
    },
    actualizarnewdataNp4(valor) {
      this.newDataNp4 = valor
      console.log(this.newDataNp4)
    },
    actualizarnewdataprocesos(valor) {
      this.newDataProcesos = valor
      console.log(this.newDataProcesos)
    }
  },
  mounted() {
    this.fetchHeroes()
    this.fetchNuestrosPollos()
    this.fetchProcesos()
  }
}
</script>
<style scoped>
.cont-components {
  background-color: #fcf5eb;
}

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
}
</style>
