<template>
  <div class="vista-recetario">
    <RecetasRecetario />
  </div>
</template>

<script>
import RecetasRecetario from '../components/Recetario/RecetasRecetario.vue'

export default {
  components: {
    RecetasRecetario
  }
}
</script>

<style scoped>
.vista-recetario {
  background-color: #fcf5eb;
}
@media (min-width: 1024px) {
  .vista-recetario {
    padding-top: 12vh;
  }
}
</style>
