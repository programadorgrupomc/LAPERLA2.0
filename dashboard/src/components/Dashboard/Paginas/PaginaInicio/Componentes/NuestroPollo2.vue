<template>
  <div
    v-if="nuestrosPollosData && nuestrosPollosData.length > 0"
    class="np2 flex flex-col lg:flex-row justify-center"
  >
    <div class="hidden lado2 lg:flex lg:items-center lg:justify-center">
      <div class="np2-contenedor np2-contenedorlg relative lg:flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo2"></div>
          <div class="absolute img-circulo2 shadow-2xl">
            <FileUploaderDef :imagebd="nuestrosPollosData[1].imgGeneral" />
          </div>
          <!-- <img src="../../assets/Inicio/imgcont2.jpg" class="absolute img-circulo2 shadow-2xl" alt="img-circulo2"> -->
        </div>
      </div>
    </div>
    <div class="lado1 flex flex-col lg:items-center justify-center lg:justify-around">
      <div
        class="np2-contenedor contenedor-texto2 flex flex-col justify-center items-center lg:items-end"
      >
        <p contenteditable="true" class="titulo border text-center lg:text-right">
          {{ nuestrosPollosData[1].titulo }}
        </p>
        <p contenteditable="true" class="texto border text-center lg:text-right">
          {{ nuestrosPollosData[1].contenido }}
        </p>
      </div>
      <div class="np2-contenedor lg:hidden flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo2"></div>
          <div class="absolute img-circulo2 shadow-2xl">
            <FileUploaderDef :imagebd="nuestrosPollosData[1].imgGeneral" />
          </div>
          <!-- <img src="../../assets/Inicio/imgcont2.jpg" class="absolute img-circulo2 shadow-2xl" alt="img-circulo2"> -->
        </div>
      </div>
      <div class="np2-contenedor flex justify-center items-center">
        <div class="contenedor-2 relative">
          <img
            src="../../../../../assets/Dashboard/Paginas/Inicio/ProteinaC2.svg"
            class="imgNp-2 relative"
            alt="carne-pollo"
          />
          <img
            src="../../../../../assets/Dashboard/Paginas/Inicio/Row2.svg"
            class="rowNp-2 relative"
            alt="rowNp-2"
          />
          <div class="indicador2 relative flex flex-col justify-center items-center">
            <p contenteditable="true" class="border">Gran fuente proteica.</p>
          </div>
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
.np2 {
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

.np2-contenedor {
  height: 33%;
  max-height: 33%;
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

.circulo-fondo2 {
  width: 25vh;
  height: 25vh;
  background-color: #ff7439;
  border-radius: 50%;
}

.img-circulo2 {
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

.imgNp-2 {
  height: 60%;
  left: -35%;
  top: 10%;
}

.rowNp-2 {
  height: 22%;
  top: -20%;
  right: -28%;
}

.indicador2 {
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
  .np2-contenedor {
    min-height: 200px;
  }

  .lado1,
  .lado2 {
    width: 35%;
    /* border: #471D7C solid; */
  }

  .titulo {
    font-size: 4vw;
  }

  .texto {
    padding-top: 5%;
    font-size: 1.5vw;
  }

  .circulo-fondo2 {
    height: 35vw;
    width: 35vw;
  }

  .img-circulo2 {
    width: 30vw;
    height: 30vw;
  }

  .imgNp-2 {
    height: 10vw;
    top: 10vw;
    transform: translateX(150%);
  }

  .rowNp-2 {
    height: 4vw;
    top: 2vw;
    right: 25%;
  }

  .indicador2 {
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
