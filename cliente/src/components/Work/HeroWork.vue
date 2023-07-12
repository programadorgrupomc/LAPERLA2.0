<script>
export default {
  name: 'HeroWork',
  data() {
    return {
      herowork: '¡SE PARTE DE NUESTRO EQUIPO!'
    }
  },
  methods: {},
  mounted() {}
}
</script>
<template>
  <div v-if="herowork" class="contpadding">
    <div class="cont-hero h-auto w-full bg-fondoPerla relative">
      <img
        loading="lazy"
        class="imgherowork object-cover w-full"
        src="@/assets/Work/Trabajacon NosotrosFotodePortada.jpg"
        alt="hero"
      />
      <div class="gradient absolute bottom-0 w-full"></div>
      <p class="ttl-herowork absolute font-bold text-white text-right">{{ herowork }}</p>
    </div>
  </div>
</template>

<style scoped>
.gradient {
  height: 40vh;
  background: transparent linear-gradient(180deg, #46372500 0%, #471d7c 87%, #471d7c 100%) 0% 0%
    no-repeat padding-box;
  mix-blend-mode: multiply;
}

.cont-hero {
  height: 90vh;
}

.ttl-herowork {
  font-family: 'TestKarbonMedium';
  font-size: 6.5vw;
  right: 5%;
  bottom: 7%;
}

.imgherowork {
  height: 90vh;
}

/* para padding falta aun */
@media (min-width: 1024px) {
  .cont-hero {
    height: 88vh;
  }

  .imgherowork {
    height: 88vh;
  }

  .ttl-herowork {
    font-family: 'TestKarbonMedium';
    font-size: 5vw;
    right: 5%;
    bottom: 5%;
  }
}

@media (min-width: 5120px) {
  .ttl-herowork {
    font-size: 4vw;
  }
}
</style>
