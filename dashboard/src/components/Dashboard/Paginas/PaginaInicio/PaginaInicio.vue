<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrud class="btn-crud" />
    </div>
    <div class="cont-components w-full h-full">
      <componentHero class="border"/>
      <NuestroPollo1 class="border"/>
      <NuestroPollo2 class="border"/>
      <NuestroPollo3 class="border"/>
      <NuestroPollo4 class="border"/>
      <NuestroProcesos class="border"/>
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

export default {
  components: {
    BotonesCrud,
    componentHero,
    NuestroPollo1,
    NuestroPollo2,
    NuestroPollo3,
    NuestroPollo4,
    NuestroProcesos
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
