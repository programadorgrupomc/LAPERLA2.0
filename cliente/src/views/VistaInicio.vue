<script setup>
import HeroInicio from '../components/Inicio/HeroInicio.vue';
import TituloInicio from '../components/Inicio/tituloInicio.vue';
import NuestroPollo from '../components/Inicio/NuestroPollo1.vue'
</script>
<template>
  <main class="tituloinicio">
    <HeroInicio />
    <TituloInicio />
    <NuestroPollo />
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