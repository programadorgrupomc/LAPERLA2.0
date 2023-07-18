<template>
  <div>
    <FolderNoticias :noticiasprop="noticias" />
  </div>
</template>
<script>
import FolderNoticias from './Componentes/FolderNoticias.vue'
import apiNoticias from '../../../../services/Noticias/apiNoticias'
export default {
  data() {
    return {
      noticias: []
    }
  },
  components: {
    FolderNoticias
  },
  methods: {
    fetchNoticias() {
      apiNoticias
        .getNoticias()
        .then((response) => {
          this.noticias = response.data
          console.log(this.noticias)
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    }
  },
  mounted() {
    this.fetchNoticias()
  }
}
</script>
<style scoped></style>
