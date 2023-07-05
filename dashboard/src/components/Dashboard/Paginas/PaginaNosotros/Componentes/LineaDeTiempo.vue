<template>
  <div class="linea-tiempo bg-FondoPerla">
    <div class="linea-titulo">
      <p class="titulo text-right">NUESTRA HISTORIA</p>
    </div>
    <div
      v-for="(time, index) in data"
      :key="index"
      class="linea-contenido flex flex-col items-start justify-center relative"
      :class="'linea-contenido' + index"
    >
      <div class="contenido flex-col flex justify-around lg:flex-row lg:items-center">
        <div class="contenido-txt-img flex flex-col lg:flex-row lg:items-center">
          <div class="txt">
            <h1
              contenteditable="true"
              class="border txt-h1 flex justify-center items-center lg:justify-end"
              :class="'txt-h1' + index"
            >
              {{ time.titulo }}
            </h1>
            <p
              contenteditable="true"
              class="border txt-p m-auto lg:m-0 flex justify-center items-center"
              :class="'txt-p' + index"
            >
              {{ time.contenido }}
            </p>
          </div>
          <div class="img m-auto">
            <!-- <img src="../../assets/Nosotros/imgtimel1.png" class="img-tl" :class="'img-tl' + index" alt=""> -->
            <FileUploaderRect />
          </div>
        </div>
        <div class="year flex justify-center items-center" :class="'year' + index">
          <p class="h-full flex items-center">{{ time.año }}</p>
        </div>
      </div>
      <div
        class="linea shadow-2xl absolute flex justify-center items-center"
        :class="'linea' + index"
      >
        <img
          v-if="index === 0"
          class="punta absolute top-0"
          src="../../../../../assets/Dashboard/Nosotros/TriangleTimeLine.svg"
          alt=""
        />
        <img class="elipse" src="../../../../../assets/Nosotros/ElipseTimeLine.svg" alt="" />
        <img
          v-if="index === data.length - 1"
          class="punta absolute bottom-0"
          src="../../../../../assets/Dashboard/Nosotros/TriangleTimeLine.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import FileUploaderRect from '../../../General/FileUploaderRect.vue'
export default {
  data() {
    return {
      data: [
        {
          titulo: 'MEJOR POLLO DEL NORTE',
          contenido:
            'Todo este esfuerzo permitió convertirnos en el mejor pollo que se produce en Trujillo distribuyéndonos diariamente en las zonas Barranca, Casma, Huarmey, Chimbote, Chiclayo, Piura y Cajamarca. Y también es llevado por compradores particulares hasta la ciudad de Lima.',
          año: '2018'
        },
        {
          titulo: 'MODERNIZACIÓN DEL AMBIENTE',
          contenido:
            'Con el paso del tiempo compra terrenos para instalar una nueva planta de Incubación con maquinaria moderna de esa época, también moderniza su planta de alimento balanceado para una buena elaboración de los alimentos que producían.',
          año: '1995'
        },
        {
          titulo: 'NOMBRE LA PERLA S.A.C.',
          contenido:
            'Allí por el año 1986, después de sobrevivir a las graves crisis avícolas comerciales de esa época, decide cambiar la razón social a Molino La Perla SAC e incursiona en la crianza de pollos de carne; en donde empieza a construir galpones para su crianza en diversas zonas como Santo Domingo, Vía de Evitamiento, Tablazo de Huanchaco.',
          año: '1986'
        },
        {
          titulo: 'FUNDACIÓN DE LA PERLA',
          contenido:
            'Ingeniero Ramón Ganoza Calderón en el mes de octubre del año 1961 funda la empresa Avícola La Perla, donde con poco capital invierte en la compra de unos pequeños terrenos muy rústicos en esa época, y empieza a criar reproductoras de pollo carne de la línea genética Hubbard de USA.',
          año: '1961'
        }
      ]
    }
  },
  components: {
    FileUploaderRect
  },
  methods: {},
  mounted() {}
}
</script>

<style scoped>
.linea-tiempo {
  /* border: #463725 solid; */
  height: 100%;
  padding-bottom: 15%;
}

.linea-titulo {
  padding: 2%;
  height: auto;
}

.titulo {
  font-size: 5vh;
  color: #463725;
  font-family: 'TestKarbonMedium';
  -webkit-text-stroke: #463725 0.1vh;
  line-height: normal;
}

.linea-contenido {
  padding: 4%;
  width: 100%;
  height: 90vh;
  /* border: #471D7C solid; */
}

.contenido {
  /* border: #f9089d solid; */
  width: 80vw;
  height: 100%;
}

.contenido-txt-img {
  height: 88%;
  max-height: 90%;
  /* border: #cf551d solid; */
  margin: 2%;
  padding: 2%;
}

/* .txt {
     border: #3bf466 solid; 
} */

.txt h1 {
  /* border: #7c2b1b solid; */
  color: #463725;
  font-family: 'KarbonRegular';
  font-size: 5.5vw;
  -webkit-text-stroke: #463725 0.1vh;
  text-align: center;
}

.txt p {
  height: auto;
  width: 95%;
  /* border: #fdfdfd solid; */
  color: #463725;
  font-family: 'KarbonRegular';
  font-size: 4.8vw;
  text-align: justify;
}

.img {
  height: auto;
  width: 25vh;
  /* border: #ebc20e solid; */
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 3vw; */
}

.year {
  height: 8%;
  /* border: #8135df solid; */
  margin: 2%;
  font-family: 'KarbonRegular';
  font-size: 10vw;
  color: #471d7c;
  -webkit-text-stroke: #471d7c 0.3vh;
}

.linea {
  background: #d4531d;
  height: 100%;
  width: 1.5%;
  right: 5%;
}

.elipse {
  transform: scale(6);
}

.punta {
  transform: scale(3.5);
}

@media (min-width: 768px) {
  .txt p {
    height: auto;
    width: 95%;
    /* border: #fdfdfd solid; */
    color: #463725;
    font-family: 'KarbonRegular';
    font-size: 3.8vw;
    text-align: justify;
  }
}

@media (min-width: 1024px) {
  .linea-tiempo {
    /* border: #463725 solid; */
    height: 100%;
    padding-bottom: 13vw;
  }

  .linea-titulo {
    padding: 2%;
    height: 10%;
    max-height: 10%;
  }

  .titulo {
    font-size: 5vw;
    color: #463725;
    font-family: 'TestKarbonMedium';
    -webkit-text-stroke: #463725 0.1vw;
  }

  .linea-contenido {
    padding: 1%;
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
    height: 100%;
    /* border: #471D7C solid; */
  }

  .contenido {
    /* border: #f9089d solid; */
    width: 100%;
    height: 100%;
  }

  .contenido-txt-img {
    height: 90%;
    /* border: #cf551d solid; */
    margin: 1%;
    width: 70%;
    padding: 2%;
  }

  .txt {
    /* border: #3bf466 solid; */
    height: 80%;
    width: 90%;
  }

  .txt h1 {
    height: 20%;
    width: 80%;
    /* border: #7c2b1b solid; */
    color: #463725;
    font-family: 'KarbonRegular';
    font-size: 2vw;
    -webkit-text-stroke: #463725 0.1vh;
    text-align: right;
    padding-bottom: 5%;
  }

  .txt p {
    height: 80%;
    width: 80%;
    /* border: #fdfdfd solid; */
    color: #463725;
    font-family: 'KarbonRegular';
    font-size: 1.2vw;
    text-align: right;
  }

  .img {
    height: 100%;
    width: 30%;
    /* border: #ebc20e solid; */
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 0vw; */
  }

  .year {
    height: 80%;
    /* border: #8135df solid; */
    margin: 2%;
    font-family: 'KarbonRegular';
    font-size: 3vw;
    color: #471d7c;
    -webkit-text-stroke: #471d7c 0.15vw;
  }

  .linea {
    background: #d4531d;
    height: 100%;
    width: 0.6%;
    right: 20%;
  }

  .elipse {
    transform: scale(5);
  }

  .punta {
    transform: scale(3.5);
  }
}
</style>
