<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrud class="btn-crud" />
    </div>
    <div class="cont-components w-full h-full">
      <HeroWork />
      <PresentacionWork />
      <PuestosVacantes />
    </div>
  </div>
</template>
<script>
import BotonesCrud from '../../General/BotonesCrud.vue'
import PresentacionWork from './Componentes/PresentacionWork.vue'
import HeroWork from './Componentes/HeroWork.vue'
import PuestosVacantes from './Componentes/PuestosVacantes.vue'
export default {
  components: {
    BotonesCrud,
    HeroWork,
    PresentacionWork,
    PuestosVacantes
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
