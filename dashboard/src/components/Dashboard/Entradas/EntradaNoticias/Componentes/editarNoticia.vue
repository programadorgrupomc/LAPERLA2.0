<script>
import Swiper from 'swiper'
export default {
  data() {
    return {
      estadoeditarnoticia: true,
      hora: '',
      clasetxt: '',
      imagenHero: '',
      imageSrcList: [],
      noticias: ''
    }
  },
  props: ['idnoticia'],
  components: {

  },
  methods: {
    cambiarEstado() {
      this.estadoeditarnoticia = !this.estadoeditarnoticia
      this.$emit('estadoeditarnoticiacam', this.estadoeditarnoticia)
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
    async obtenerNoticias() {
      const noticiasstore = useNoticiasStore()
      try {
        await noticiasstore.obtenernoticias()
        this.noticias = noticiasstore.noticias
      } catch (error) {
        console.error('Error al obtener las noticias', error)
      }
    },
    eliminarimagecarousel(i) {
      this.imageSrcList.splice(i, 1)
    }
  },
  created() {
    this.obtenerNoticias()
  },
  mounted() {
    // Inicializar el carrusel Swiper
    this.initSwiper()
  }
}
</script>
<template>
  <div class="nueva-noticia">
    <botonesControl
      :nuevareceta="this.nuevaRecetaData"
      @recetavacia="actualizarreceta"
      class="hidden lg:block absolute btn-control"
    />
    <div class="flex justify-end">
      <button @click="cambiarEstado" class="btn-back flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
        <p>Atras</p>
      </button>
    </div>
    <div v-for="noticia in noticias">
      <div v-if="noticia._id === idnoticia" class="cont-noticiadata bg-FondoPerla">
        <div class="hero-nuevanoticia relative flex justify-center items-center">
          <img
            src="../../../assets/cDashboard/Iconmaterial-perm-media.svg"
            alt=""
            class="absolute w-52"
          />
          <input type="file" name="" id="" class="absolute opacity-0" v-on:change="previewImage" />
          <img :src="imagenHero" class="object-cover w-full h-full" alt="img-hero" />
        </div>
        <div class="cont-titulo">
          <p class="not-pre font-TestKarbonMedium">NOTICIAS</p>
          <p
            contenteditable="true"
            class="titulo-not font-TestKarbonBold text-azulbsPerla"
            :style="clasetxt + ' ' + clasetxtl"
          >
            {{ noticia.titulo }}
          </p>
          <textalign @clasetxt="asignarclase" />
          <p class="fecha-not font-TestKarbonMedium text-AzulPerla">02 de mayo de 2023</p>
        </div>
        <div class="cont-notmain lg:grid lg:grid-cols-2 flex flex-col justify-center items-center">
          <div class="desc-noticia flex justify-center items-center">
            <p contenteditable="true" class="cont-desc font-KarbonRegular text-azulbsPerla">
              {{ noticia.descripcion }}
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
  </div>
</template>
<style scoped>
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
  width: 95%;
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
  }

  .cont-notmain {
    height: 100%;
    padding: 2%;
    padding-right: 0%;
    height: 90vh;
  }
}
</style>
