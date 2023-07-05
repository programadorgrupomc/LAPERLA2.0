<template>
  <div
    v-if="nuestrosPollosData && nuestrosPollosData.length > 0"
    class="np3 flex flex-col lg:flex-row justify-center"
  >
    <div class="lado1 flex flex-col lg:items-center justify-around lg:justify-around">
      <div
        class="np3-contenedor contenedor-texto3 flex flex-col justify-center items-center lg:items-start"
      >
        <p contenteditable="true" class="border titulo text-center lg:text-left">
          {{ nuestrosPollosData[2].titulo }}
        </p>
        <p contenteditable="true" class="border texto text-center lg:text-left">
          {{ nuestrosPollosData[2].contenido }}
        </p>
      </div>
      <div class="np3-contenedor lg:hidden flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo3"></div>
          <div class="absolute img-circulo3 shadow-2xl">
            <FileUploaderDef :imagebd="nuestrosPollosData[2].imgGeneral" />
          </div>
          <!-- <img src="../../assets/Inicio/imgcont3.jpg" class="absolute img-circulo3 shadow-2xl" alt="img-circulo3"> -->
        </div>
      </div>
    </div>
    <div class="hidden lado2 lg:flex lg:items-center lg:justify-center">
      <div class="np3-contenedor np3-contenedorlg relative lg:flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo3"></div>
          <div class="absolute img-circulo3 shadow-2xl">
            <FileUploaderDef :imagebd="nuestrosPollosData[2].imgGeneral" />
          </div>
          <!-- <img src="../../assets/Inicio/imgcont3.jpg" class="absolute img-circulo3 shadow-2xl" alt="img-circulo3"> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FileUploaderDef from '../../../General/FileUploaderDef.vue'
export default {
  data() {
    return {}
  },
  components: {
    FileUploaderDef
  },
  props: ['nuestrosPollosData'],
  methods: {},
  mounted() {}
}
</script>
<style scoped>
.np3 {
  padding: 2%;
  width: 100%;
  min-width: 250px;
  height: 100vh;
  min-height: 600px;
}

.lado1 {
  width: 100%;
  min-width: 250px;
  min-height: 90vh;
  /* border: #471D7C solid; */
}

.np3-contenedor {
  height: 30%;
  max-height: 30%;
}

.titulo {
  width: 60%;
  font-family: 'TestKarbonMedium';
  font-size: 5vh;
  color: #471d7c;
  -webkit-text-stroke: #471d7c 0.1vh;
}

.texto {
  width: 80%;
  font-family: 'KarbonRegular';
  color: #471d7c;
  font-size: 3vh;
  -webkit-text-stroke: #471d7c 0.1vh;
}

.circulo-fondo3 {
  width: 25vh;
  height: 25vh;
  background-color: #8a67bf;
  border-radius: 50%;
}

.img-circulo3 {
  background-color: transparent;
  height: 22vh;
  width: 22vh;
  border-radius: 50%;
  right: -5%;
  bottom: -5%;
}

.contenedor-1 {
  height: 100%;
}

.img-1 {
  height: 80%;
  left: -40%;
}

.row-1 {
  height: 35%;
  top: -40%;
  right: -25%;
}

.indicador {
  font-size: 2.5vh;
  font-family: 'KarbonRegular';
  line-height: 1;
  color: #471d7c;
  -webkit-text-stroke: #471d7c 0.1vh;
  height: 25%;
  top: -60%;
  right: -50%;
}

.porcentaje {
  font-size: 6vh;
  font-family: 'MuseoSans';
  line-height: normal;
}

@media (min-width: 768px) {
  .texto {
    width: 60%;
  }
}

@media (min-width: 1024px) {
  .np3-contenedor {
    min-height: 200px;
  }

  .lado1,
  .lado2 {
    width: 35%;
    /* border: #471D7C solid; */
  }

  .titulo {
    font-size: 4vw;
    width: 100%;
  }

  .texto {
    padding-top: 5%;
    font-size: 1.5vw;
  }

  .circulo-fondo3 {
    height: 35vw;
    width: 35vw;
  }

  .img-circulo3 {
    width: 30vw;
    height: 30vw;
  }

  .img-1 {
    height: 26vw;
  }

  .row-1 {
    height: 6vw;
    top: -12.5vw;
    right: -20%;
  }

  .indicador {
    font-size: 1.5vw;
    right: -20%;
    top: -15.5vw;
  }

  .porcentaje {
    font-size: 6vw;
  }

  .contenedor-1 {
    top: -60%;
  }
}
</style>
