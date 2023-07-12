<script>
// import textalign from '../../cDashboard/textAligin.vue'
import BtnBack from '../../../General/BtnBack.vue'
import Swiper from 'swiper'
import FileUploaderRect from '../../../General/FileUploaderRect.vue'
import BotonesCrudNoticias from '../BotonesCrudNoticias.vue'
export default {
  data() {
    return {
      estadonuevanoticia: true,
      hora: '',
      clasetxt: '',
      imagenHero: '',
      imageSrcList: []
    }
  },
  components: {
    BtnBack,
    FileUploaderRect,
    BotonesCrudNoticias
    // textalign,
  },
  methods: {
    cambiarEstado() {
      this.estadonuevanoticia = !this.estadonuevanoticia
      this.$emit('estadonuevanoticiacam', this.estadonuevanoticia)
    },
    asignarclase(valor) {
      this.clasetxt = valor
    },
    previewImage(event) {
      const file = event.target.files[0] // Obtener el archivo seleccionado

      // Verificar si se seleccionó un archivo
      if (file) {
        // Crear una URL local para el archivo seleccionado
        this.imagenHero = URL.createObjectURL(file)
      } else {
        this.imagenHero = '' // Limpiar la URL de la imagen si no se selecciona ningún archivo
      }
    },
    initSwiper() {
      new Swiper('.swiper-container', {
        // Configuración de Swiper
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    },
    previewImages(event) {
      const files = event.target.files // Obtener los archivos seleccionados

      // Limpiar la lista de URLs de imágenes existentes
      this.imageSrcList = []

      // Verificar si se seleccionaron archivos
      if (files.length > 0) {
        // Iterar sobre cada archivo seleccionado
        for (let i = 0; i < files.length; i++) {
          const file = files[i]

          // Crear una URL local para el archivo seleccionado
          const imageSrc = URL.createObjectURL(file)

          // Agregar la URL a la lista de URLs de imágenes
          this.imageSrcList.push(imageSrc)
        }
      }
    },

    eliminarimagecarousel(i) {
      this.imageSrcList.splice(i, 1)
    }
  },
  mounted() {
    // Inicializar el carrusel Swiper
    this.initSwiper()
  }
}
</script>
<template>
  <div class="nueva-noticia overflow-hidden">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrudPuestoVacante class="btn-crud" :newpuestoData="newpuesto" />
    </div>
    <div class="flex justify-end">
      <BtnBack />
    </div>
    <div class="cont-noticiadata bg-FondoPerla">
      <div class="hero-nuevanoticia relative flex justify-center items-center overflow-hidden">
        <FileUploaderRect />
      </div>
      <div class="cont-titulo">
        <p class="not-pre font-TestKarbonMedium">NOTICIAS</p>
        <p contenteditable="true" class="titulo-not font-TestKarbonBold text-azulbsPerla">
          TITULO DE LA NOTICIA
        </p>
        <!-- <textalign @clasetxt="asignarclase" /> -->
        <p class="fecha-not font-TestKarbonMedium text-AzulPerla">02 de mayo de 2023</p>
      </div>
      <div class="cont-notmain lg:grid lg:grid-cols-2 flex flex-col justify-center items-center">
        <div class="desc-noticia flex justify-center items-center">
          <p contenteditable="true" class="cont-desc font-KarbonRegular text-azulbsPerla">
            Texto Descriptivo
          </p>
        </div>
        <div class="cont-imgot overflow-hidden relative shadow-2xl">
          <img
            src="../../../assets/cDashboard/Iconmaterial-perm-media.svg"
            alt=""
            class="absolute w-52"
          />
          <input type="file" multiple class="relative" v-on:change="previewImages" />
          <div class="swiper-container">
            <div class="swiper-wrapper h-full">
              <div
                class="swiper-slide relative"
                v-for="(imageSrc, index) in imageSrcList"
                :key="index"
              >
                <button
                  @click="eliminarimagecarousel(index)"
                  class="bg-white absolute right-0 m-5 p-2 rounded-2xl hover:bg-red-300"
                >
                  Eliminar
                </button>
                <img class="object-cover w-full h-full" :src="imageSrc" alt="" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cont-btn {
  height: auto;
  width: auto;
  bottom: 10%;
  right: 1%;
}

.btn-crud {
  height: 10vh;
  /* background-color: rgba(220, 20, 60, 0.238); */
}
.btn-back {
  padding: 5%;
  padding-top: 1%;
  padding-bottom: 2%;
  font-size: 4vw;
}

.hero-nuevanoticia {
  min-height: 400px;
  background-color: #cbcbcb;
}

.cont-titulo {
  padding: 3%;
  padding-left: 5%;
  width: 100%;
}

.not-pre {
  color: #b8a391;
  font-size: 4.5vw;
}

.fecha-not {
  font-size: 4.4vw;
}

.titulo-not {
  font-size: 7.5vw;
  border: #cbcbcb solid 0.1vw;
  width: 95%;
  border-radius: 2.5vw;
  padding: 1%;
  background-color: #ffffff33;
}

.cont-desc {
  width: 90vw;
  padding: 2%;
  border-radius: 2.5vw;
  background-color: #ffffff33;
  border: #cbcbcb solid 0.1vw;
  min-height: 400px;
  font-size: 5vw;
  -webkit-text-stroke: 0.1vw;
}

.cont-imgot {
  margin: 2%;
  margin-top: 4%;
  min-height: 300px;
  background-color: #cbcbcb;
  width: 90vw;
}

@media (min-width: 1024px) {
  .btn-control {
    height: 6vh;
    top: -0%;
    right: 8vw;
  }

  .btn-back {
    padding: 5%;
    padding-top: 1%;
    padding-bottom: 2%;
    font-size: 1.2vw;
  }

  .hero-nuevanoticia {
    height: 20vh;
    min-height: 400px;
    background-color: #cbcbcb;
  }

  .cont-titulo {
    padding: 3%;
    padding-left: 5%;
    width: 100%;
  }

  .not-pre {
    color: #b8a391;
    font-size: 1.5vw;
  }

  .fecha-not {
    font-size: 1.2vw;
  }

  .titulo-not {
    font-size: 2.2vw;
    border: #cbcbcb solid 0.1vw;
    width: 95%;
    border-radius: 2vw;
    padding: 1%;
    background-color: #ffffff33;
  }

  .cont-desc {
    width: 95%;
    padding: 2%;
    border-radius: 2vw;
    background-color: #ffffff33;
    border: #cbcbcb solid 0.1vw;
    min-height: 400px;
    height: 50vh;
    font-size: 1.5vw;
    -webkit-text-stroke: 0.05vw;
  }

  .cont-imgot {
    margin: 2%;
    margin-top: 4%;
    min-height: 200px;
    background-color: #cbcbcb;
    height: 70%;
    width: 100%;
  }

  .cont-notmain {
    height: 100%;
    padding: 2%;
    padding-right: 0%;
    height: 90vh;
  }
}
</style>
