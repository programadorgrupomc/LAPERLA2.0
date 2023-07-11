<template>
  <main class="vista-inicio">
    <HeroInicio />
    <TituloInicio />
    <NuestroPollo1 />
    <NuestroPollo2 />
    <NuestroPollo3 />
    <NuestroPollo4 />
    <NuestroProcesos />
    <!-- <ButtomDesliza class="fixed bottom-0 right-0 z-50"/> -->
  </main>
</template>

<script setup>
import HeroInicio from '../components/Inicio/HeroInicio.vue'
import TituloInicio from '../components/Inicio/TituloInicio.vue'
import NuestroPollo1 from '../components/Inicio/NuestroPollo1.vue'
import NuestroPollo2 from '../components/Inicio/NuestroPollo2.vue'
import NuestroPollo3 from '../components/Inicio/NuestroPollo3.vue'
import NuestroPollo4 from '../components/Inicio/NuestroPollo4.vue'
import NuestroProcesos from '../components/Inicio/NuestroProcesos.vue'
import ButtomDesliza from '../components/General/ButtomDesliza.vue'
</script>

<style scoped>
.vista-inicio {
  background-color: #fcf5eb;
  width: 100%;
  min-width: 250px;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .vista-inicio {
    /* padding-top: 12vh; */
  }
}
</style>
