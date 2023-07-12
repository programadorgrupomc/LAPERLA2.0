<template>
  <div class="cont-dash">
    <div class="barra-sup z-50 relative">
      <BarraSuperior />
      <button class="absolute h-full top-0 lg:hidden" type="button" @click="showbarranavegacionf">
        <img class="h-4/6" src="../assets/Dashboard/General/justify.svg" alt="" />
      </button>
      <button class="hidden lg:block absolute h-full top-0">
        <router-link to="/dashboard">
          <img class="h-3/5 hover:scale-110 transition-all" src="../assets/Dashboard/General/home.svg" alt="" />
        </router-link>
      </button>
    </div>
    <div class="cont-barcon lg:flex lg:justify-center lg:items-center">
      <div class="barra-nav">
        <BarraNavegacion v-show="showbarranavegacion" class="absolute z-50 w-full lg:relative"
          @estadocam="actualizarbarra" />
      </div>
      <div class="contenido overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
import BarraNavegacion from '../components/Dashboard/General/BarraNavegacion.vue'
import BarraSuperior from '../components/Dashboard/General/BarraSuperior.vue'
export default {
  data() {
    return {
      showbarranavegacion: false
    }
  },
  components: {
    BarraNavegacion,
    BarraSuperior
  },
  methods: {
    showbarranavegacionf() {
      this.showbarranavegacion = !this.showbarranavegacion
    },
    actualizarbarra(valor) {
      this.showbarranavegacion = valor
      if (window.innerWidth > 1024) {
        this.showbarranavegacion = true
      }
    }
  },
  mounted() {
    //mantener activo el navbar
    if (window.innerWidth > 1024) {
      this.showbarranavegacion = true
    }
    document.title = 'Dashboard'
  }
}
</script>
<style scoped>
.cont-dash {
  min-height: 390px;
  height: 100vh;
  min-width: 200px;
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
    width: 22%;
    height: 100%;
  }

  .contenido {
    width: 78%;
    height: 100%;
  }
}
</style>
