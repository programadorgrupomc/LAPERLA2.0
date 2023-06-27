<template>
  <div class="w-full h-full overflow-y-auto cont-pagop">
    <PaginasOp />
  </div>
</template>
<script>
import PaginasOp from '../../components/Dashboard/Paginas/PaginasOp.vue'
export default {
  components: {
    PaginasOp
  }
}
</script>
<style scoped>
.cont-pagop {
  background-color: #f7f7f7;
}
</style>
