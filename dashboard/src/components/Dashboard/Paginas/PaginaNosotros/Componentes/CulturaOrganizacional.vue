<script>
import FileUploaderRect from '../../../General/FileUploaderRect.vue'
export default {
  data() {
    return {
      cultOrg: [
        {
          texto: 'Compromiso con la calidad de servicio.',
          img: '',
          altimg: 'ImgCultura1'
        },
        {
          texto:
            'Comprometidos con la norma y políticas de la empresa y respeto a las leyes vigentes.',
          img: '',
          altimg: 'ImgCultura2'
        },
        {
          texto:
            'Nuestros clientes y proveedores son considerados nuestros socios y por ende son parte de nuestra organización.',
          img: '',
          altimg: 'ImgCultura3'
        },
        {
          texto: 'Nos motiva elevar la calidad de vida intraorganizacional y extraorganizacional.',
          img: '',
          altimg: 'ImgCultura4'
        },
        {
          texto: 'Actitud de servicio, trabajo en equipo, responsabilidad compartida y honestidad.',
          img: '',
          altimg: 'ImgCultura5'
        },
        {
          texto:
            'Nos adaptamos a los cambios internos y externos en paralelo a la flexibilidad productiva y comercial.',
          img: '',
          altimg: 'ImgCultura1'
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
<template>
  <div class="bg-FondoPerla py-10 lg:px-40 lg:py-24">
    <!-- title cult -->
    <div class="ttlcult py-4 px-14 lg:py-16">
      <h1 class="text-MarronPerla text-2xl md:text-5xl lg:text-6xl">CULTURA ORGANIZACIONAL</h1>
    </div>
    <!-- contenido de cultura ORGANIZACIONAL -->
    <div
      v-for="(cultitm, index) in cultOrg"
      :key="index"
      class="cont-cult mx-14 flex items-center flex-col lg:flex-row lg:justify-center lg:px-14 lg:h-96"
      :class="
        ({
          'bg-FondoCul2': index % 2 == 1,
          'bg-FondoCul1': index % 2 == 0
        },
        'ncoani' + index)
      "
    >
      <div class="p-2 scale-50">
        <!-- <img loading="lazy" class="img-itemco object-cover md:w-72 lg:w-96" :class="'coimage' + index"
                    :src="cultitm.img" :alt="cultitm.altimg"> -->
        <FileUploaderRect />
      </div>
      <div
        class="p-4 lg:w-2/4 text-MarronPerla text-center text-lg md:text-4xl lg:text-2xl lg:px-20"
        :class="
          ({
            'lg:order-first': index % 2 == 1,
            'lg:order-none': index % 2 == 0
          },
          'cotextani' + index)
        "
      >
        <p class="txtcon">{{ cultitm.texto }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ttlcult {
  font-family: 'KarbonRegular';
  -webkit-text-stroke: 1px #463725;
}

.ttlcult h1 {
  font-size: 6.3vw;
}

.cont-cult {
  font-family: 'KarbonRegular';
}

.txtcon {
  font-size: 5vw;
  line-height: normal;
}

@media (min-width: 768px) {
  .txtcon {
    font-size: 3.5vw;
  }
}

@media (min-width: 1024px) {
  .txtcon {
    font-size: 2vw;
    line-height: normal;
  }

  .ttlcult h1 {
    font-size: 4.5vw;
    -webkit-text-stroke: #463725 0.1vw;
  }
}

@media (min-width: 5120px) {
  .ttlcult h1 {
    font-size: 5vw;
    line-height: normal;
    -webkit-text-stroke: 0.2vw #463725;
  }

  .txtcon {
    font-size: 1.5vw;
    line-height: normal;
  }

  .cont-cult {
    padding-top: 8%;
    padding-bottom: 8%;
  }

  .img-itemco {
    width: 20vw;
  }
}
</style>
