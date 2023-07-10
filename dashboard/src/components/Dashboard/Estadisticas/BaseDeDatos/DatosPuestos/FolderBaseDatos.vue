<template>
  <div class="">
    <div class="border puestobd bg-white flex justify-between items-center">
      <p>Analista Senior de Transformación de Procesos</p>
      <div class="desplegar" @click="showTablees">
        <img
          class="w-full h-full"
          src="../../../../../assets/Dashboard/General/desplegar.svg"
          alt="desplegar"
        />
      </div>
    </div>
    <div class="tabla" v-if="showTable">
      <TablaPostulantes />
    </div>
  </div>
</template>
<script>
import TablaPostulantes from './Componentes/TablaPostulantes.vue'
export default {
  data() {
    return {
      showTable: false
    }
  },
  components: {
    TablaPostulantes
  },
  methods: {
    showTablees() {
      this.showTable = !this.showTable
    }
  }
}
</script>
<style scoped>
.puestobd {
  margin: 5%;
  border-radius: 5vh;
  padding: 1%;
  font-size: 2vh;
}

.puestobd p {
  margin: auto;
  width: 80%;
  font-size: 2vh;
}

.desplegar {
  width: 5vh;
}

.tabla {
  margin: 5%;
  background-color: white;
}
</style>
