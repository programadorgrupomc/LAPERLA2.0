<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrud class="btn-crud" />
    </div>
    <div class="cont-components w-full h-full">
      <PresentacionNosotros class="border" />
      <LineaDeTiempo class="" />
      <NuestraFilosofia />
      <CulturaOrganizacional class="" />
    </div>
  </div>
</template>
<script>
import PresentacionNosotros from './Componentes/PresentacionNosotros.vue'
import LineaDeTiempo from './Componentes/LineaDeTiempo.vue'
import BotonesCrud from '../../General/BotonesCrud.vue'
import CulturaOrganizacional from './Componentes/CulturaOrganizacional.vue'
import NuestraFilosofia from './Componentes/NuestraFilosofia.vue'
export default {
  components: {
    PresentacionNosotros,
    LineaDeTiempo,
    BotonesCrud,
    CulturaOrganizacional,
    NuestraFilosofia
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
