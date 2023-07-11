<template>
  <div class="vista-noticias">
    <NoticiasNoticia />
  </div>
</template>
<script>
import NoticiasNoticia from '../components/Noticias/NoticiasNoticia.vue'
export default {
  components: {
    NoticiasNoticia
  }
}
</script>
<style scoped>
.vista-noticias {
  background-color: #fcf5eb;
}
@media (min-width: 1024px) {
  .vista-noticias {
    padding-top: 12vh;
  }
}
</style>
