<script>
import BtnBack from '../../../../../components/Dashboard/General/BtnBack.vue'
import BotonesCrudActualizar from '../BotonesCrudActualizarNoticias.vue'
import FileUploaderRect from '../../../General/FileUploaderRect.vue'
import FileUploaderCarousel from '../../../General/FileUploaderCarousel.vue'
import apiNoticias from '../../../../../services/Noticias/apiNoticias'

export default {
  data() {
    return {
      estadoeditarnoticia: true,
      hora: '',
      clasetxt: '',
      imagenHero: '',
      imageSrcList: [],
      noticias: '',
      newDataNot: null // Initialize newDataNot to null
    }
  },
  props: ['idnoticia'],
  components: {
    BtnBack,
    BotonesCrudActualizar,
    FileUploaderRect,
    FileUploaderCarousel
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
      apiNoticias
        .getNoticias()
        .then((response) => {
          this.noticias = response.data
          this.newDataNot = this.noticias.find((noticia) => noticia._id === this.idnoticia)
          this.$emit('newDataNot', this.newDataNot)
        })
        .catch((error) => {
          console.log('Hubo un problema con la peticion', error)
        })
    },
    asignarImagen(imagen) {
      // Implementar la lógica para asignar la imagen recibida desde el componente FileUploaderRect
    },
    actualizarCarousel(images) {
      // Implementar la lógica para actualizar el carrusel de imágenes recibidas desde el componente FileUploaderCarousel
    }
  },
  created() {
    this.fetchNoticias()
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
    <div v-if="newDataNot" class="cont-noticiadata bg-FondoPerla">
      <div class="hero-nuevanoticia relative flex justify-center items-center">
        <FileUploaderRect @imgrecortada="asignarImagen" :imagedetbd="newDataNot.imgHeroNoticia" />
      </div>
      <div class="cont-titulo">
        <p class="not-pre font-TestKarbonMedium">NOTICIAS</p>
        <p contenteditable="true" class="titulo-not font-TestKarbonBold text-azulbsPerla">
          {{ newDataNot.titulo }}
        </p>
        <p class="fecha-not font-TestKarbonMedium text-AzulPerla">02 de mayo de 2023</p>
      </div>
      <div class="cont-notmain lg:grid lg:grid-cols-2 flex flex-col justify-center items-center">
        <div class="desc-noticia flex justify-center items-center">
          <p contenteditable="true" class="cont-desc font-KarbonRegular text-azulbsPerla">
            {{ newDataNot.contenido }}
          </p>
        </div>
        <div class="cont-imgot overflow-hidden relative shadow-2xl">
          <FileUploaderCarousel class="w-full h-full" @imagesCarousel="actualizarCarousel" />
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
