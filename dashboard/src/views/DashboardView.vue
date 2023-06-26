<script>
import BarraNavegacion from '../components/Dashboard/General/BarraNavegacion.vue';
import BarraSuperior from '../components/Dashboard/General/BarraSuperior.vue';
export default {
  components: {
    BarraNavegacion,
    BarraSuperior
  }
}
</script>

<template>
  <div class="cont-dash">
    <div class="barra-sup">
      <BarraSuperior />
    </div>
    <div class="cont-barcon lg:flex ">
      <div class="barra-nav">
        <BarraNavegacion />
      </div>
      <div class="contenido">
        contenido
      </div>
    </div>
  </div>
</template>
<style scoped>
.cont-dash {
  height: 100vh;
  width: 100vw;
  background-color: blueviolet;
}

@media (min-width: 1024px) {
  .cont-barcon {
    height: 93%;
  }

  .barra-sup {
    width: 100%;
    height: 7%;
  }

  .barra-nav {
    width: 20%;
    height: 100%;
    background-color: aqua;
  }

  .contenido {
    background-color: greenyellow;
    width: 80%;
    height: 100%;
  }
}
</style>
