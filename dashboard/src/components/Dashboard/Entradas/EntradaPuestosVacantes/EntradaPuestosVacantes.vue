<template>
  <div>
    <FolderPuestosVacantes :puestosVacantesprop="puestosvacantes" />
  </div>
</template>

<script>
import FolderPuestosVacantes from './Componentes/FolderPuestosVacantes.vue'
import apiPuestosVacantes from '../../../../services/Work/apiPuestosVacantes.js'

export default {
  data() {
    return {
      puestosvacantes: []
    }
  },
  components: {
    FolderPuestosVacantes
  },
  methods: {
    async fetchPuestosvacantes() {
      try {
        const response = await apiPuestosVacantes.getPuestosVacantes()
        this.puestosvacantes = response.data
        console.log(this.puestosvacantes)
      } catch (error) {
        console.error('Hubo un problema con la petición', error)
      }
    }
  },
  async mounted() {
    await this.fetchPuestosvacantes()
  }
}
</script>

<style scoped></style>
