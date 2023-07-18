<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import '../../../../../../node_modules/swiper/swiper-bundle.css'

import BtnBack from '../../../General/BtnBack.vue'
import apiNoticias from '../../../../../services/Noticias/apiNoticias'
export default {
  data() {
    return {
      estadovernoticia: true,
      noticiaslocal: [],
      modules: [Swiper]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    BtnBack
  },
  props: ['idnoticia'],
  methods: {
    cambiarestadovernoticia() {
      this.estadovernoticia = !this.estadovernoticia
      this.$emit('vernoticiacam', this.estadovernoticia)
    },
    fetchNoticias() {
      apiNoticias
        .getNoticias()
        .then((response) => {
          this.noticiaslocal = response.data
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    }
  },
  created() {
    this.fetchNoticias()
  }
}
</script>
<template>
  <div>
    <div class="flex justify-end">
      <button @click="cambiarestadovernoticia" class="btn-back flex items-center">
        <BtnBack disabled />
      </button>
    </div>
    <div v-for="noticia in noticiaslocal">
      <div v-if="noticia._id === idnoticia" class="overflow-hidden cont-des bg-FondoPerla">
        <!-- hero -->
        <div class="descnot">
          <img
            loading="lazy"
            class="object-cover w-full h-full"
            :src="`http://localhost:3000/uploads/${noticia.imgHeroNoticia}`"
            alt="imgnotid"
          />
        </div>
        <!-- desc -->
        <div class="dscnot5k">
          <!-- ttl -->
          <div class="ttls-descnot">
            <p class="ttls-descnot1 text-MarronPerla">NOTICIAS</p>
            <p class="text-AzulPerla ttlcentraldesnot">{{ noticia.titulo }}</p>
            <p class="ttls-descnot2 text-AzulPerla">{{ noticia.fecha }}</p>
          </div>
          <div class="lg:flex lg:items-center">
            <!-- texto centrado -->
            <div
              class="textodesnot text-justify text-AzulPerla break-inside-avoid lg:text-left lg:w-2/4"
            >
              <p>{{ noticia.contenido }}</p>
            </div>
            <!-- swiper -->
            <div class="flex justify-center items-center lg:w-2/4">
              <swiper
                :space-between="30"
                :centered-slides="true"
                :pagination="{ clickable: true }"
                class="mySwiper"
              >
                <swiper-slide v-for="i in noticia.imgsCarouselNoticia" class="" :key="i">
                  <img
                    loading="lazy"
                    class="ncrr object-cover w-full"
                    :src="`http://localhost:3000/uploads/${i}`"
                    alt="noticia"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-back {
  padding: 5%;
  padding-bottom: 0%;
  font-size: 5vw;
}

.cont-des {
  overflow: hidden;
  background-color: #fcf5eb;
}

.descnot {
  height: 65vh;
  width: 100%;
}

.dscnot5k {
  padding: 4%;
}

.ttls-descnot {
  font-family: 'KarbonRegular';
  padding-bottom: 4%;
}

.ttls-descnot1 {
  font-size: 6vw;
  line-height: normal;
}

.ttlcentraldesnot {
  font-family: 'GilroyBold';
  font-size: 8vw;
  line-height: normal;
}

.ttls-descnot2 {
  font-size: 6.5vw;
  line-height: normal;
}

.textodesnot {
  font-family: 'KarbonRegular';
  padding-bottom: 4%;
  font-size: 5vw;
  line-height: normal;
}

@media (min-width: 768px) {
  .btn-back {
    padding: 5%;
    padding-bottom: 0%;
    font-size: 4vw;
  }
}

@media (min-width: 1024px) {
  .btn-back {
    padding: 5%;
    padding-top: 1%;
    padding-right: 1%;
    padding-bottom: 0%;
    font-size: 1vw;
  }

  .cont-des {
    margin-top: 2vh;
  }

  .descnot {
    height: 55vh;
    width: 100%;
  }

  .dscnot5k {
    padding-right: 0%;
  }

  .ttls-descnot1 {
    font-size: 2vw;
  }

  .ttlcentraldesnot {
    font-size: 4vw;
  }

  .ttls-descnot2 {
    font-size: 3vw;
  }

  .textodesnot {
    font-size: 1.8vw;
    padding: 2%;
    padding-right: 4%;
  }
}
</style>
