<template>
  <div class="carrusel-cont">
    <div class="p-2 flex justify-end lg:p-8">
      <h1 class="pr-2 pt-2 title-carrusel font-semibold font-KarbonRegular lg:pr-4">
        RECETAS RELACIONADAS
      </h1>
    </div>
    <div>
      <!-- para escritorio -->
      <div class="hidden lg:block">
        <swiper :watchSlidesProgress="true" :slidesPerView="4" class="mySwiper">
          <swiper-slide
            v-for="i in recetas"
            :key="i.id"
            class="swcarrec m-2 lg:m-10 hover:rounded-3xl"
          >
            <router-link :to="`/receta/desc/${i.id}`">
              <div class="contenido-iterable relative flex justify-center items-center">
                <img
                  @click="navigate"
                  role="link"
                  loading="lazy"
                  class="transition-all w-full h-auto object-cover hover:rounded-3xl"
                  src="@/assets/Recetario/receta1.jpg"
                />
                <p
                  @click="navigate"
                  role="link"
                  class="transition-all texto-receta font-TestKarbonMedium absolute text-center text-white"
                >
                  {{ i.nombre }}
                </p>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
      <!-- para mobile -->
      <div class="lg:hidden bg-FondoNp2 p-10 overflow-hidden">
        <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
          <swiper-slide v-for="i in recetas" :key="i.id">
            <router-link :to="`/receta/desc/${i.id}`">
              <div class="rounded-2xl contenido-iterable relative flex justify-center items-center">
                <img
                  @click="navigate"
                  role="link"
                  loading="lazy"
                  class="transition-all w-full h-auto object-cover rounded-2xl shadow-2xl"
                  src="@/assets/Recetario/receta1.jpg"
                />
                <p
                  @click="navigate"
                  role="link"
                  class="transition-all texto-receta absolute text-center font-TestKarbonMedium text-white font-bold"
                >
                  {{ i.nombre }}
                </p>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper'

import receta1Image from '../../assets/Recetario/receta1.jpg'

export default {
  name: 'CarruselReceta',
  data() {
    return {
      recetas: [
        {
          id: 1,
          nombre: 'Receta 1',
          imagen: receta1Image
          // Otros detalles de la receta
        },
        {
          id: 2,
          nombre: 'Receta 2',
          imagen: receta1Image
          // Otros detalles de la receta
        },
        {
          id: 3,
          nombre: 'Receta 3',
          imagen: receta1Image
          // Otros detalles de la receta
        },
        {
          id: 4,
          nombre: 'Receta 4',
          imagen: receta1Image
          // Otros detalles de la receta
        },
        {
          id: 5,
          nombre: 'Receta 5',
          imagen: receta1Image
          // Otros detalles de la receta
        },
        {
          id: 6,
          nombre: 'Receta 6',
          imagen: receta1Image
          // Otros detalles de la receta
        },
        {
          id: 7,
          nombre: 'Receta 7',
          imagen: receta1Image
          // Otros detalles de la receta
        },
        {
          id: 8,
          nombre: 'Receta 8',
          imagen: receta1Image
          // Otros detalles de la receta
        }
        // Agrega más objetos de recetas si es necesario
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [EffectCards]
    }
  },
  mounted() {}
}
</script>

<style scoped>
.carrusel-cont {
  background-color: #eeddc7;
}

.title-carrusel {
  color: #471d7c;
  font-size: 8vw;
  -webkit-text-stroke: 0.4vw;
}

.mySwiperMobile {
  height: 50vh;
  margin-top: 10%;
  margin-bottom: 20%;
}

.swcarrecmobile {
  margin: 80%;
}

@media (min-width: 768px) {
  .title-carrusel {
    font-size: 6vw;
    padding-top: 4%;
    padding-bottom: 4%;
  }

  .contenido-iterable {
    transform: scale(0.8);
  }
}

@media (min-width: 1024px) {
  .texto-receta {
    font-size: 3.5vw;
    color: rgba(255, 255, 255, 0.692);
  }

  .title-carrusel {
    font-size: 5vw;
    -webkit-text-stroke: 0.15vw;
    padding-top: 0%;
    padding-bottom: 0%;
  }

  .contenido-iterable {
    transform: scale(1);
  }

  .contenido-iterable img {
    filter: brightness(50%);
  }
}

@media (min-width: 5120px) {
  .title-carrusel {
    font-size: 6vh;
    line-height: normal;
  }

  .swcarrec {
    padding: 150px;
  }
}
</style>
