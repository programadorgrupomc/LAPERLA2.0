

<template>
  <div class="cont-dash">
    <div class="barra-sup relative">
      <BarraSuperior />
      <button class="absolute h-full top-0 lg:hidden" @click="showbarranavegacionf"><img class="h-4/6"
          src="../assets/Dashboard/General/justify.svg" alt=""></button>
      <button class="hidden lg:block absolute h-full top-0"><img class="h-3/5" src="../assets/Dashboard/General/home.svg"
          alt=""></button>
    </div>
    <div class="cont-barcon lg:flex lg:justify-center lg:items-center">
      <div class="barra-nav">
        <BarraNavegacion v-show="showbarranavegacion" class="absolute w-full lg:relative" />
      </div>
      <div class="contenido">
        contenido
      </div>
    </div>
  </div>
</template>
<script>
import BarraNavegacion from '../components/Dashboard/General/BarraNavegacion.vue';
import BarraSuperior from '../components/Dashboard/General/BarraSuperior.vue';
export default {
  data() {
    return {
      showbarranavegacion: false,
    }
  },
  components: {
    BarraNavegacion,
    BarraSuperior
  },
  methods: {
    showbarranavegacionf() {
      this.showbarranavegacion = !this.showbarranavegacion;
    }
  },
  mounted() {
    //mantener activo el navbar
    if (window.innerWidth > 1024) {
      this.showbarranavegacion = true;
    }
  }
}
</script>
<style scoped>
.cont-dash {
  height: 100vh;
  width: 100vw;
}

.barra-sup {
  width: 100%;
  height: 7%;
}

.barra-sup button {
  margin-left: 3vh;
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
