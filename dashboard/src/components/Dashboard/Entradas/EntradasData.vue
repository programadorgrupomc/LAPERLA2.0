<template>
  <div class="cont-inputs">
    <div class="cont-input bg1 flex flex-col justify-center items-center text-white transition-all">
      Recetario
      <router-link to="/dashboard/entradas/recetario">
        <button @click="cambiarestadoRf" class="btn-plus">Ver más</button>
      </router-link>
    </div>
    <div class="cont-input bg2 flex flex-col justify-center items-center text-white transition-all">
      Noticias
      <router-link to="/dashboard/entradas/noticias">
        <button @click="cambiarestadonot" class="btn-plus">Ver más</button>
      </router-link>
    </div>
    <div class="cont-input bg3 flex flex-col justify-center items-center text-white transition-all">
      Puestos Vacantes
      <router-link to="/dashboard/entradas/puestosvacantes">
        <button @click="cambiarestadopv" class="btn-plus">Ver más</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import BotonesCrudEntradaRec from './EntradaRecetario/BotonesCrudEntradaRec.vue'

export default {
  data() {
    return {
      estadofolderRec: false,
      estadonot: false,
      estadopv: false,
      estadoviewinputs: true
    }
  },
  components: {
    BotonesCrudEntradaRec
  },
  methods: {}
}
</script>
<style scoped>
.cont-input {
  height: 30%;
  margin-top: 3vw;
  margin-bottom: 3vw;
  overflow: hidden;
  width: 100%;
  font-size: 6vw;
  font-weight: bold;
  min-height: 150px;
}

.btn-plus {
  font-size: 4vw;
  font-weight: lighter;
}

.bg1 {
  background-image: url('@/assets/Dashboard/Entradas/wel-recetas.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.5);
}

.bg2 {
  background-image: url('@/assets/Dashboard/Entradas/wel-noticias.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.5);
}

.bg3 {
  background-image: url('@/assets/Dashboard/Entradas/wel-puestos.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.5);
}

@media (min-width: 768px) {
  .cont-input {
    height: 29%;
    margin-top: 3vw;
    margin-bottom: 3vw;
    overflow: hidden;
    width: 100%;
    font-size: 5vw;
    font-weight: bold;
    min-height: 150px;
  }

  .btn-plus {
    font-size: 3.5vw;
    font-weight: lighter;
  }
}

@media (min-width: 1024px) {
  .cont-input {
    height: 40%;
    margin-top: 1vw;
    margin-bottom: 1vw;
    overflow: hidden;
    width: 100%;
    font-size: 2vw;
    font-weight: bold;
    min-height: 300px;
  }

  .btn-plus {
    font-size: 1.2vw;
    font-weight: lighter;
  }

  .btn-plus:hover {
    animation: animBtn-plus 2s ease 0s 1 normal forwards;
  }

  @keyframes animBtn-plus {
    0%,
    100% {
      transform: rotate(0deg);
      transform-origin: 50% 0;
    }

    10% {
      transform: rotate(2deg);
    }

    20%,
    40%,
    60% {
      transform: rotate(-4deg);
    }

    30%,
    50%,
    70% {
      transform: rotate(4deg);
    }

    80% {
      transform: rotate(-2deg);
    }

    90% {
      transform: rotate(2deg);
    }
  }
}
</style>
