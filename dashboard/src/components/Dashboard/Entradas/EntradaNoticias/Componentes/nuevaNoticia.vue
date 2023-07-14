<script>
import BtnBack from '../../../General/BtnBack.vue'
import Swiper from 'swiper'
import FileUploaderRect from '../../../General/FileUploaderRect.vue'
import BotonesCrudNoticias from '../BotonesCrudNoticias.vue'
import FileUploaderCarousel from '../../../General/FileUploaderCarousel.vue'
export default {
  data() {
    return {
      data: {
        fechaActual: ""
      },
      estadonuevanoticia: true,
      hora: '',
      clasetxt: '',
      imagenHero: '',
      imageSrcList: [],
      newNoticiaData: {
        titulo: '',
        contenido: '',
        imgHeroNoticia: '',
        imgsCarouselNoticia: [],
        fecha:''
      }
    }
  },
  components: {
    BtnBack,
    FileUploaderRect,
    BotonesCrudNoticias,
    FileUploaderCarousel
  },
  methods: {
    mostrarFecha() {
      var fecha = new Date();
      var opciones = { day: "2-digit", month: "long", year: "numeric" };
      this.data.fechaActual = fecha.toLocaleDateString("es-ES", opciones);
    },
    cambiarEstado() {
      this.estadonuevanoticia = !this.estadonuevanoticia;
      this.$emit('estadonuevanoticiacam', this.estadonuevanoticia);
    },
    asignarclase(valor) {
      this.clasetxt = valor;
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagenHero = URL.createObjectURL(file);
      } else {
        this.imagenHero = '';
      }
    },
    initSwiper() {
      new Swiper('.swiper-container', {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    },
    previewImages(event) {
      const files = event.target.files;
      this.imageSrcList = [];
      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const imageSrc = URL.createObjectURL(file);
          this.imageSrcList.push(imageSrc);
        }
      }
    },
    eliminarimagecarousel(i) {
      this.imageSrcList.splice(i, 1);
    },
    titulo(event) {
      this.newNoticiaData.titulo = event.target.innerText;
      this.newNoticiaData.fecha = this.data.fechaActual;
      console.log(this.newNoticiaData);
      this.$emit('newNoticiaData', this.newNoticiaData);
    },
    contenido(event) {
      this.newNoticiaData.contenido = event.target.innerText;
      console.log(this.newNoticiaData);
      this.$emit('newNoticiaData', this.newNoticiaData);
    },
    asignarImagen(valor) {
      this.newNoticiaData.imgHeroNoticia = valor;
      console.log(this.newNoticiaData);
      this.$emit('newNoticiaData', this.newNoticiaData);
    },
    actualizarCarousel(valor) {
      if (!Array.isArray(valor)) {
        valor = [valor];
      }
      this.newNoticiaData.imgsCarouselNoticia = valor;
      console.log(valor);
      this.$emit('newNoticiaData', this.newNoticiaData);
    }
  },
  mounted() {
    this.mostrarFecha();
    setInterval(this.mostrarFecha, 1000);
  }
}
</script>
<template>
  <div class="nueva-noticia overflow-hidden">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrudNoticias :newnoticiasdata="newNoticiaData" class="btn-crud" />
    </div>
    <div class="flex justify-end">
      <BtnBack />
    </div>
    <div class="cont-noticiadata bg-FondoPerla">
      <div class="hero-nuevanoticia relative flex justify-center items-center overflow-hidden">
        <FileUploaderRect @imgrecortada="asignarImagen" />
      </div>
      <div class="cont-titulo">
        <p class="not-pre font-TestKarbonMedium">NOTICIAS</p>
        <p contenteditable="true" class="titulo-not font-TestKarbonBold text-azulbsPerla" @input="titulo">
          TITULO DE LA NOTICIA
        </p>
        <!-- <textalign @clasetxt="asignarclase" /> -->
        <p class="fecha-not font-TestKarbonMedium text-AzulPerla"><span v-text="data.fechaActual"></span></p>
      </div>
      <div class="cont-notmain lg:grid lg:grid-cols-2 flex flex-col justify-center items-center">
        <div class="desc-noticia flex justify-center items-center">
          <p contenteditable="true" class="cont-desc font-KarbonRegular text-azulbsPerla" @input="contenido">
            Texto Descriptivo
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
