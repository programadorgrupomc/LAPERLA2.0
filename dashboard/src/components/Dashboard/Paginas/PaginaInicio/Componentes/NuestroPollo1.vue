<template>
  <div
    v-if="nuestrosPollosData && nuestrosPollosData.length > 0"
    class="np1 flex flex-col lg:flex-row justify-center"
  >
    <div class="lado1 flex flex-col lg:items-center justify-center lg:justify-around">
      <div
        class="np1-contenedor contenedor-texto1 flex flex-col justify-center items-center lg:items-start"
      >
        <p contenteditable="true" class="titulo border text-center lg:text-left" @input="titulo">
          {{ nuestrosPollosData[0].titulo }}
        </p>
        <p contenteditable="true" class="texto border text-center lg:text-left" @input="contenido">
          {{ nuestrosPollosData[0].contenido }}
        </p>
      </div>
      <div class="np1-contenedor lg:hidden flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo1"></div>
          <!-- <img src="../../assets/Inicio/imgcont1.jpg" class="absolute img-circulo1 shadow-2xl" alt="img-circulo1"> -->
          <div class="absolute img-circulo1 shadow-2xl">
            <FileUploaderDef
              :imagebd="nuestrosPollosData[0].imgGeneral"
              @imgrecortada="asignarmagen"
            />
          </div>
        </div>
      </div>
      <div class="np1-contenedor flex justify-center items-center">
        <div class="contenedor-1 relative">
          <div class="imgNp-1 border relative overflow-hidden">
            <FileUploaderRect
              :imagedetbd="nuestrosPollosData[0].imgDetalle"
              @imgrecortada="asignarmagendetalle"
            />
          </div>
          <!-- <img src="../../assets/Inicio/CarnePollo.png" class="imgNp-1 relative" alt="carne-pollo"> -->
          <img
            src="../../../../../assets/Dashboard/Paginas/Inicio/Row1.svg"
            class="rowNp-1 relative"
            alt="rowNp-1"
          />
          <div class="indicador1 relative flex flex-col justify-center items-center">
            <p>Pechuga</p>
            <p contenteditable="true" class="porcentaje border">35%</p>
            <p>Del Pollo</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lado2 lg:flex lg:items-center lg:justify-center">
      <div class="np1-contenedor np1-contenedorlg relative lg:flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo1"></div>
          <!-- <img src="../../assets/Inicio/imgcont1.jpg" class="absolute img-circulo1 shadow-2xl" alt="img-circulo1"> -->
          <div class="absolute img-circulo1 shadow-2xl">
            <!-- <img :src="`http://localhost:3000/uploads/${nuestrosPollosData[0].imgGeneral}`" alt=""> -->
            <FileUploaderDef
              class="rounded-full"
              :imagebd="nuestrosPollosData[0].imgGeneral"
              @imgrecortada="asignarmagen"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FileUploaderDef from '../../../General/FileUploaderDef.vue'
import FileUploaderRect from '../../../General/FileUploaderRect.vue'

export default {
  data() {
    return {
      nuestroPolloLocal: {
        titulo: '',
        contenido: '',
        imgGeneral: '',
        imgDetalle: ''
      }
    }
  },
  components: {
    FileUploaderDef,
    FileUploaderRect
  },
  props: ['nuestrosPollosData'],
  methods: {
    titulo(event) {
      this.nuestroPolloLocal.titulo = event.target.innerText
      console.log(this.nuestroPolloLocal)
      this.$emit('dataupdate', this.nuestroPolloLocal)
    },
    contenido(event) {
      this.nuestroPolloLocal.contenido = event.target.innerText
      console.log(this.nuestroPolloLocal)
      this.$emit('dataupdate', this.nuestroPolloLocal)
    },
    asignarmagen(valor) {
      this.nuestroPolloLocal.imgGeneral = valor
      console.log(this.nuestroPolloLocal)
      this.$emit('dataupdate', this.nuestroPolloLocal)
      console.log(valor);
    },
    asignarmagendetalle(valor) {
      this.nuestroPolloLocal.imgDetalle = valor
      console.log(this.nuestroPolloLocal)
      this.$emit('dataupdate', this.nuestroPolloLocal)
    }
  },
  mounted() {},
  updated() {
    this.nuestroPolloLocal = this.nuestrosPollosData[0]
    this.$emit('dataupdate', this.nuestroPolloLocal)
  }
}
</script>
<style scoped>
.np1 {
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

.np1-contenedor {
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

.circulo-fondo1 {
  width: 25vh;
  height: 25vh;
  background-color: #ffcd00;
  border-radius: 50%;
}

.img-circulo1 {
  background-color: transparent;
  height: 22vh;
  width: 22vh;
  border-radius: 50%;
  right: -5%;
  bottom: -5%;
}

.contenedor-1 {
  height: 100%;
  width: 25vh;
}

.imgNp-1 {
  height: 50%;

  left: -40%;
}

.rowNp-1 {
  height: 35%;
  top: -5%;
  right: -25%;
}

.indicador1 {
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
  .np1-contenedor {
    min-height: 200px;
  }

  .lado1,
  .lado2 {
    width: 35%;
    /* border: #471D7C solid; */
  }

  .titulo {
    width: 80%;
    font-size: 4vw;
  }

  .texto {
    padding-top: 5%;
    font-size: 1.5vw;
  }

  .circulo-fondo1 {
    height: 35vw;
    width: 35vw;
  }

  .img-circulo1 {
    width: 30vw;
    height: 30vw;
  }

  /* //mejorar esta mal */
  .imgNp-1 {
    height: auto;
    min-height: 10vw;
  }

  .rowNp-1 {
    height: 6vw;
    top: 2vw;
    right: -10%;
  }

  .indicador1 {
    font-size: 1.5vw;
    right: -25%;
    top: -0.5vw;
  }

  .porcentaje {
    font-size: 6vw;
  }

  .contenedor-1 {
    width: auto;
    top: -60%;
  }
}
</style>
