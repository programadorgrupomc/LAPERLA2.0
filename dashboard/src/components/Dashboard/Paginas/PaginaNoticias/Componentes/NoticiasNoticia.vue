<template>
  <div class="not-component">
    <div class="title">
      <h1 class="title-noticias lg:text-right">NOTICIAS</h1>
    </div>
    <div v-for="(not, index) in noticiasData" :key="index">
      <div class="cont-noticia lg:flex transition-all">
        <div class="cont-imgn lg:flex justify-center items-center">
          <!-- <img loading="lazy" class="lg:w-full h-full object-cover transition-all"
                            src="../../../../../assets/Dashboard/Noticias/imgnot1(4).jpg" :alt="not.imgehero" /> -->
          <FileUploaderRect />
        </div>
        <div
          class="cont-text flex flex-col justify-center"
          :class="{
            'lg:order-none': index % 2 === 0,
            'lg:order-first': index % 2 === 1
          }"
        >
          <div class="icon-noticiasvg flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-journals"
              viewBox="0 0 16 16"
            >
              <path
                d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z"
              />
              <path
                d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z"
              />
            </svg>
          </div>
          <h1 contenteditable="true" class="border border-white text-center">{{ not.titulo }}</h1>
          <p contenteditable="true" class="border border-white text-justify lg:text-center">
            {{ not.descripcion }}
          </p>
        </div>
      </div>
    </div>
    <StartButton class="mt-8" />
  </div>
</template>

<script>
import StartButton from './StartButton.vue'
import FileUploaderRect from '../../../General/FileUploaderRect.vue'
export default {
  data() {
    return {
      noticiasData: [
        {
          id: '1',
          imghero: 'Hola',
          titulo: 'DÍA DEL TRABAJADOR',
          descripcion:
            'En Molino La Perla conmemoramos a nivel mundial al movimiento obrero y la fuerza laboral, como movimiento reivindicativo de diferentes causas relacionadas con el trabajo.'
        },
        {
          id: '2',
          imghero: 'Hola',
          titulo: 'DÍA DE LA MUJER',
          descripcion:
            'Conmemoramos el 8 de marzo de 1908, un suceso transcendental que marcó la historia del trabajo y la lucha sindical en el mundo entero: 129 mujeres murieron en un incendio en la fábrica Cotton, de Nueva York.'
        },
        {
          id: '3',
          imghero: 'Hola',
          titulo: 'DÍA DEL AGRADECIMIENTO AL GALPONERO',
          descripcion:
            'Celebramos a nuestros granjeros de Molino La Perla y de nuestra nación, y el importante papel que desempeñan en nuestra vida diaria.'
        },
        {
          id: '4',
          imghero: 'Hola',
          titulo: 'DÍA DEL CAMPESINO',
          descripcion:
            'El campesino, agricultor o ganadero, hace producir con su trabajo y esfuerzo la tierra y los animales, recursos que nos fueron brindados y que son mundialmente conocidos, porque representan una mayor fuente de riqueza.'
        }
      ]
    }
  },
  components: {
    StartButton,
    FileUploaderRect
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.icon-noticiasvg svg {
  width: 10%;
}

.not-component {
  color: #471d7c;
  padding: 5%;
  background-color: white;
}

.cont-noticia {
  background-color: #f5ebdc;
  padding: 3%;
  margin-top: 8%;
  border-radius: 5vw;
  box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.4);
}

.cont-imgn {
  height: 35vh;
  width: 100%;
}

.cont-imgn img {
  width: 100%;
  border-radius: 5vw;
}

.icon-noticiasvg svg {
  scale: 1;
}

.title-noticias {
  font-size: 12vw;
}

.title {
  font-family: 'TestKarbonSemiBold';
  color: #471d7c;
}

.cont-text {
  font-family: 'KarbonRegular';
  padding: 5%;
  height: 50vh;
}

.cont-text h1 {
  -webkit-text-stroke: 0.1vw #471d7c;
  font-size: 8vw;
  padding-top: 4%;
  padding-bottom: 4%;
}

.cont-text p {
  font-size: 5vw;
  padding: 1%;
}

@media (min-width: 768px) {
  .not-component {
    color: #471d7c;
    padding: 6%;
    background-color: white;
  }

  .cont-noticia {
    background-color: #f5ebdc;
    padding: 3%;
    margin-top: 8%;
    border-radius: 5vw;
    box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.4);
  }

  .cont-imgn img {
    border-radius: 5vw;
    height: 40vh;
    width: 100%;
  }

  .title-noticias {
    font-size: 12vw;
  }

  .title {
    font-family: 'TestKarbonSemiBold';
    color: #471d7c;
  }

  .cont-text {
    font-family: 'KarbonRegular';
    padding: 4%;
  }

  .cont-text h1 {
    -webkit-text-stroke: 0.1vw #471d7c;
    font-size: 6vw;
    padding-top: 4%;
    padding-bottom: 4%;
  }

  .cont-text p {
    font-size: 4vw;
    padding: 1%;
  }

  .icon-noticiasvg svg {
    width: 6%;
  }
}

@media (min-width: 1024px) {
  .not-component {
    color: #471d7c;
    padding: 5%;
    padding-top: 0%;
    background-color: white;
  }

  .cont-noticia {
    background-color: #f5ebdc;
    padding: 0%;
    margin-top: 3%;
    margin-bottom: 8%;
    border-radius: 0vw;
    box-shadow: none;
    width: 100%;
  }

  .cont-noticia:hover {
    filter: brightness(92%);
    box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.4);
  }

  .cont-imgn {
    height: 100%;
    min-height: 45vh;
    width: 100%;
  }

  .cont-imgn img {
    border-radius: 0vw;
    height: auto;
    width: 100%;
  }

  .title-noticias {
    font-size: 8.5vw;
  }

  .title {
    font-family: 'TestKarbonSemiBold';
    color: #471d7c;
  }

  .cont-text {
    font-family: 'KarbonRegular';
    padding: 5%;
    width: 120%;
  }

  .cont-text h1 {
    -webkit-text-stroke: 0.1vw #471d7c;
    font-size: 2.5vw;
    padding-top: 4%;
    padding-bottom: 4%;
  }

  .cont-text p {
    font-size: 1.5vw;
    padding: 1%;
  }

  .icon-noticiasvg svg {
    width: 5%;
  }
}

@media (min-width: 5120px) {
  .icon-noticiasvg svg {
    width: 5%;
  }
}
</style>
