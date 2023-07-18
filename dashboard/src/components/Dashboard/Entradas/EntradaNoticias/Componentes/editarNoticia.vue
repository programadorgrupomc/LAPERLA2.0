<script>
import apiNoticias from '../../../../../services/Noticias/apiNoticias'
import BtnBack from '../../../../../components/Dashboard/General/BtnBack.vue'
import BotonesCrudActualizar from '../BotonesCrudActualizarNoticias.vue'
export default {
  data() {
    return {
      estadoeditarnoticia: true,
      hora: '',
      clasetxt: '',
      imagenHero: '',
      imageSrcList: [],
      noticias: '',
      newDataNot: []
    }
  },
  props: ['idnoticia'],
  components: {
    BtnBack,
    BotonesCrudActualizar,
  },
  methods: {
    cambiarEstado() {
      this.estadoeditarnoticia = !this.estadoeditarnoticia
      this.$emit('estadoeditarnoticiacam', this.estadoeditarnoticia)
    },
    asignarclase(valor) {
      this.clasetxt = valor
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
    fetchNoticias() {
      apiNoticias.getNoticias()
        .then((response) => {
          this.noticias = response.data;
          this.newDataNot = this.noticias.find((noticia) => noticia._id === this.idnoticia)
          this.$emit('newDataNot', this.newDataNot)
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    }

  },
  created() {
    this.fetchNoticias()
  },
  mounted() {

  }
}
</script>
<template>
  <div class="nueva-noticia">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrudActualizar :newnoticiasdata="newDataNot" class="btn-crud" />
    </div>
    <div class="flex justify-end">
      <BtnBack />
    </div>
    <div v-for="noticia in noticias">
      <div v-if="noticia._id === idnoticia" class="cont-noticiadata bg-FondoPerla">
        <div class="hero-nuevanoticia relative flex justify-center items-center">
          <img src="../../../assets/cDashboard/Iconmaterial-perm-media.svg" alt="" class="absolute w-52" />
          <input type="file" name="" id="" class="absolute opacity-0" v-on:change="previewImage" />
          <img :src="imagenHero" class="object-cover w-full h-full" alt="img-hero" />
        </div>
        <div class="cont-titulo">
          <p class="not-pre font-TestKarbonMedium">NOTICIAS</p>
          <p contenteditable="true" class="titulo-not font-TestKarbonBold text-azulbsPerla"
            :style="clasetxt + ' ' + clasetxtl">
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
            <img src="../../../assets/cDashboard/Iconmaterial-perm-media.svg" alt="" class="absolute w-52" />
            <input type="file" multiple class="relative" v-on:change="previewImages" />
            <div class="swiper-container">
              <div class="swiper-wrapper h-full">
                <div class="swiper-slide relative" v-for="(imageSrc, index) in imageSrcList" :key="index">
                  <button @click="eliminarimagecarousel(index)"
                    class="bg-white absolute right-0 m-5 p-2 rounded-2xl hover:bg-red-300">
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
  .cont-btn {
    width: 30vh;
    height: 7vh;
    top: 0%;
    right: 15vw;
  }

  .btn-crud {
    height: 7vh;
    /* background-color: rgba(220, 20, 60, 0.238); */
  }

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
