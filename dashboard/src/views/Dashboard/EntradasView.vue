<template>
  <div class="w-full h-full overflow-y-auto cont-entradas">
    <EntradasData />
  </div>
</template>
<script>
import EntradasData from '../../components/Dashboard/Entradas/EntradasData.vue'
export default {
  components: {
    EntradasData
  }
}
</script>
<style scoped>
.cont-entradas {
  background-color: #f7f7f7;
}
</style>
