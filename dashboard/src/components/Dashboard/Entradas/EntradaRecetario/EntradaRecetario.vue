<template>
  <div class="overflow-auto">
    <FolderRecetario :recetasprop="recetas" />
  </div>
</template>
<script>
import FolderRecetario from './Componentes/FolderRecetas.vue'
import apiRecetario from '../../../../services/Recetario/apiRecetario'
export default {
  data() {
    return {
      recetas: []
    }
  },
  components: {
    FolderRecetario
  },
  methods: {
    fetchRecetas() {
      apiRecetario
        .getRecetas()
        .then((response) => {
          this.recetas = response.data
          console.log(this.recetas)
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    }
  },
  mounted() {
    this.fetchRecetas()
  }
}
</script>
<style scoped></style>
