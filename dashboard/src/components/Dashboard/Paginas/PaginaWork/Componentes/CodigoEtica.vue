<template>
  <div v-if="codigoEtica" class="cont-ce flex flex-col items-center justify-center">
    <div class="texto font-KarbonRegular text-center text-white">{{ codigoEtica }}</div>
    <router-link to="/work/ce" custom v-slot="{ navigate }">
      <button type="button" @click="navigate" role="link" class="btn-laperla font-TestKarbonMedium">
        CODIGO DE ETICA
      </button>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      codigoEtica: 'Conoce sobre la filosofía de Molino La Perla'
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped>
.cont-ce {
  background-image: url('@/assets/Work/imgCe.jpg'), linear-gradient(to bottom, #c1b199, #c1b199);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  height: 30vh;
}

.texto {
  font-size: 6.5vw;
  line-height: normal;
  padding: 3%;
  -webkit-text-stroke: white 0.1vw;
}

.btn-laperla {
  background-color: #fff7ec;
  color: #6e5b44;
  font-size: 4.5vw;
  margin-top: 2%;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 1vw;
}

@media (min-width: 768px) {
  .cont-ce {
    height: 35vh;
  }

  .texto {
    font-size: 5vw;
  }

  .btn-laperla {
    font-size: 3.5vw;
  }
}

@media (min-width: 1024px) {
  .cont-ce {
    height: 25vw;
  }

  .texto {
    font-size: 2vw;
    line-height: normal;
    -webkit-text-stroke: white 0.02vw;
  }

  .btn-laperla {
    margin-top: 0%;
    font-size: 1.5vw;
    border-radius: 1vw;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 0.4%;
    padding-bottom: 0.4%;
    border-radius: 0.5vw;
  }

  .btn-laperla:hover {
    border-radius: 2vw;
  }
}
</style>
