<script setup>
import HeroInicio from '../components/Inicio/HeroInicio.vue';
import TituloInicio from '../components/Inicio/tituloInicio.vue';
import NuestroPollo1 from '../components/Inicio/NuestroPollo1.vue'
import NuestroPollo2 from '../components/Inicio/NuestroPollo2.vue';
import NuestroPollo3 from '../components/Inicio/NuestroPollo3.vue';
import NuestroPollo4 from '../components/Inicio/NuestroPollo4.vue';
</script>
<template>
  <main class="tituloinicio">
    <HeroInicio />
    <TituloInicio />
    <NuestroPollo1 />
    <NuestroPollo2 />
    <NuestroPollo3 />
    <NuestroPollo4 />
  </main>
</template>
<style scoped>
.tituloinicio {
  background-color: #FCF5EB;
  width: 100%;
  min-width: 250px;
  overflow: hidden;
}
</style>