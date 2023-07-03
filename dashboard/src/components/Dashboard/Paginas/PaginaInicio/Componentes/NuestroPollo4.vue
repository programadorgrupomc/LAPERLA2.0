<template>
  <div class="np4 flex flex-col lg:flex-row justify-center">
    <div class="hidden lado2 lg:flex lg:items-center lg:justify-center">
      <div class="np4-contenedor np4-contenedorlg relative lg:flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo4"></div>
          <div class="absolute img-circulo4 shadow-2xl">
            <FileUploaderDef />
          </div>
          <!-- <img src="../../assets/Inicio/imgcont2.jpg" class="absolute img-circulo4 shadow-2xl" alt="img-circulo4"> -->
        </div>
      </div>
    </div>
    <div class="lado1 flex flex-col lg:items-center justify-around lg:justify-around">
      <div
        class="np4-contenedor contenedor-texto4 flex flex-col justify-center items-center lg:items-end"
      >
        <p contenteditable="true" class="border titulo text-center lg:text-right">SABOR Y AROMA</p>
        <p contenteditable="true" class="border texto text-center lg:text-right">
          Su sabor único permite preparar variedad de potajes deleitando tu paladar.
        </p>
      </div>
      <div class="np4-contenedor lg:hidden flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo4"></div>
          <div class="absolute img-circulo4 shadow-2xl">
            <FileUploaderDef />
          </div>
          <!-- <img src="../../assets/Inicio/imgcont2.jpg" class="absolute img-circulo4 shadow-2xl" alt="img-circulo4"> -->
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
  methods: {},
  mounted() {}
}
</script>
<style scoped>
.np4 {
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

.np4-contenedor {
  height: 33%;
  max-height: 33%;
}

.titulo {
  width: 60%;
  font-family: 'TestKarbonMedium';
  font-size: 5vh;
  line-height: normal;
  color: #471d7c;
  padding-bottom: 2%;
  -webkit-text-stroke: #471d7c 0.1vh;
}

.texto {
  width: 80%;
  font-family: 'KarbonRegular';
  color: #471d7c;
  font-size: 3vh;
  -webkit-text-stroke: #471d7c 0.1vh;
}

.circulo-fondo4 {
  width: 25vh;
  height: 25vh;
  background-color: #ebdac0;
  border-radius: 50%;
}

.img-circulo4 {
  background-color: transparent;
  height: 22vh;
  width: 22vh;
  border-radius: 50%;
  right: 12.5%;
  bottom: -5%;
}

.contenedor-2 {
  height: 100%;
}

.img-1 {
  height: 60%;
  left: -30%;
  top: 10%;
}

.row-1 {
  height: 22%;
  top: -20%;
  right: -28%;
}

.indicador {
  font-size: 2.5vh;
  font-family: 'KarbonRegular';
  line-height: 1;
  color: #471d7c;
  -webkit-text-stroke: #471d7c 0.1vh;
  height: 25%;
  top: -20%;
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
  .np4-contenedor {
    min-height: 200px;
  }

  .lado1,
  .lado2 {
    width: 35%;
    /* border: #471D7C solid; */
  }

  .titulo {
    font-size: 4vw;
    line-height: normal;
  }

  .texto {
    padding-top: 5%;
    font-size: 1.5vw;
  }

  .circulo-fondo4 {
    height: 35vw;
    width: 35vw;
  }

  .img-circulo4 {
    width: 30vw;
    height: 30vw;
  }

  .img-1 {
    height: 10vw;
    top: 10vw;
    transform: translateX(150%);
  }

  .row-1 {
    height: 4vw;
    top: 2vw;
    right: 25%;
  }

  .indicador {
    font-size: 2vw;
    right: -20%;
    top: 5vw;
  }

  .porcentaje {
    font-size: 6vw;
  }

  .contenedor-2 {
    top: -60%;
  }
}
</style>
