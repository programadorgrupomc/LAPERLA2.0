<template>
  <div>
    <FolderPuestosVacantes :puestosVacantesprop="puestosvacantes"/>
  </div>
</template>
<script>
import FolderPuestosVacantes from './Componentes/FolderPuestosVacantes.vue'
import apiPuestosVacantes from '../../../../services/Work/apiPuestosVacantes.js';

export default {
  data() {
    return {
      puestosvacantes: [],
    }
  },
  components: {
    FolderPuestosVacantes
  },
  methods: {
    fetchPuestosvacantes() {
      apiPuestosVacantes.getPuestosVacantes()
        .then((response) => {
          this.puestosvacantes = response.data;
          console.log(this.puestosvacantes)
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    }
  },
  mounted() {
    this.fetchPuestosvacantes();
  }
}
</script>
<style scoped></style>
