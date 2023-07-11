<template>
  <div class="opciones lg:flex">
    <div v-for="opcion in opciones" :key="opcion.id" class="opciones-opcion flex">
      <img
        src="../../../assets/General/circle.svg"
        class="opcion-circle hidden lg:block"
        alt="circle-svg"
      />
      <p class="opcion">{{ opcion.opcion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opciones: [
        { id: '1', opcion: 'Inicio', ruta: '' },
        { id: '2', opcion: 'Nosotros', ruta: '' },
        { id: '3', opcion: 'Recetario', ruta: '' },
        { id: '4', opcion: 'Noticias', ruta: '' },
        { id: '5', opcion: 'Trabaja con nosotros', ruta: '' },
        { id: '6', opcion: 'Contáctanos', ruta: '' }
      ]
    }
  },
  components: {}
}
</script>

<style scoped>
.opciones {
  background-color: #ebdac0;
  height: auto;
  width: 100%;
  padding: 2%;
}

.opcion {
  font-family: 'KarbonRegular';
  font-size: 10vw;
  font-weight: bold;
  color: #471d7c;
  -webkit-text-stroke: #471d7c 0.5vw;
}

@media (min-width: 1024px) {
  .opciones {
    background-color: #ebdac0;
    min-height: auto;
    height: 8vh;
    max-height: 90px;
    width: 100%;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .opciones-opcion {
    background-color: darkgoldenrod;
    margin: 0.5%;
  }

  .opcion {
    font-family: 'KarbonRegular';
    font-size: 1.5vw;
    font-weight: bold;
    color: #471d7c;
    -webkit-text-stroke: #471d7c 0.05vw;
  }

  .opcion-circle {
    width: 0.8vw;
  }
}
</style>
