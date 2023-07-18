<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrudNosotros class="btn-crud" />
    </div>
    <div class="cont-components w-full h-full">
      <PresentacionNosotros class="border" :nosotrosData="nosotros" />
      <LineaDeTiempo class="overflow-y-auto" />
      <NuestraFilosofia />
      <CulturaOrganizacional class="" />
    </div>
  </div>
</template>
<script>
import PresentacionNosotros from './Componentes/PresentacionNosotros.vue'
import LineaDeTiempo from './Componentes/LineaDeTiempo.vue'
import BotonesCrudNosotros from './BotonesCrudNosotros.vue'
import CulturaOrganizacional from './Componentes/CulturaOrganizacional.vue'
import NuestraFilosofia from './Componentes/NuestraFilosofia.vue'

//api
import apiNostros from '../../../../services/Nosotros/apiNostros.js'

export default {
  data() {
    return {
      nosotros: []
    }
  },
  components: {
    PresentacionNosotros,
    LineaDeTiempo,
    BotonesCrudNosotros,
    CulturaOrganizacional,
    NuestraFilosofia
  },
  methods: {
    fetchNosotros() {
      apiNostros
        .getNosotros()
        .then((response) => {
          this.nosotros = response.data
          console.log(this.nosotros)
        })
        .catch((error) => {
          console.error('Error fetching nosotros:', error)
        })
    }
  },
  mounted() {
    this.fetchNosotros()
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
