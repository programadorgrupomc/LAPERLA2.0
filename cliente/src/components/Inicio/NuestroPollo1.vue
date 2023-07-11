<template>
  <div class="np1 flex flex-col lg:flex-row justify-center">
    <div class="lado1 flex flex-col lg:items-center justify-center lg:justify-around">
      <div
        class="np1-contenedor contenedor-texto1 flex flex-col justify-center items-center lg:items-start"
      >
        <p class="titulo text-center lg:text-left">IDENTIDAD</p>
        <p class="texto text-center lg:text-left">
          Su buen color y voluminosidad es el sello del Pollo Perla.
        </p>
      </div>
      <div class="np1-contenedor lg:hidden flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo1"></div>
          <img
            src="../../assets/Inicio/imgcont1.jpg"
            class="absolute img-circulo1 shadow-2xl"
            alt="img-circulo1"
          />
        </div>
      </div>
      <div class="np1-contenedor flex justify-center items-center">
        <div class="contenedor-1 relative">
          <img
            src="../../assets/Inicio/CarnePollo.png"
            class="imgNp-1 relative"
            alt="carne-pollo"
          />
          <img src="../../assets/Inicio/Row1.svg" class="rowNp-1 relative" alt="rowNp-1" />
          <div class="indicador1 relative flex flex-col justify-center items-center">
            <p>Pechuga</p>
            <p class="porcentaje">35%</p>
            <p>Del Pollo</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lado2 lg:flex lg:items-center lg:justify-center">
      <div class="np1-contenedor np1-contenedorlg relative lg:flex justify-center items-center">
        <div class="relative">
          <div class="circulo-fondo1"></div>
          <img
            src="../../assets/Inicio/imgcont1.jpg"
            class="absolute img-circulo1 shadow-2xl"
            alt="img-circulo1"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {}
  },
  methods: {
    animacionNp1() {
      const lineaTiempo = gsap.timeline({
        scrollTrigger: {
          trigger: '.np1',
          start: 'top top',
          end: '+=500%',
          scrub: 1.1,
          //markers: true,
          pin: true,
          //pinSpacing: false,
          onStart: () => {
            ScrollTrigger.refresh()
          },
          onComplete: () => {
            ScrollTrigger.refresh()
          }
        }
      })
      lineaTiempo.from('.img-circulo1', {
        opacity: 0,
        scale: 7
      })
      lineaTiempo.from(
        '.circulo-fondo1',
        {
          delay: 0.2,
          opacity: 0
        },
        0
      )
      lineaTiempo.from('.contenedor-texto1', {
        scale: 0.9,
        opacity: 0,
        xPercent: -50,
        yPercent: -50
        // duration: 2,
      })
      lineaTiempo.to(
        '.img-circulo1',
        {
          bottom: '0%',
          right: '5%'
        },
        '1'
      )
      lineaTiempo.to(
        '.circulo-fondo1',
        {
          scale: 1.2
        },
        1
      )
      lineaTiempo.from('.imgNp-1', {
        xPercent: -300
      })
      lineaTiempo.from('.rowNp-1', {
        opacity: 0,
        y: 200
      })
      lineaTiempo.from('.indicador1', {
        opacity: 0,
        y: 200
      })
    },
    actualizarAnimacion() {
      // Actualiza la animación cuando cambie el tamaño de la ventana
      ScrollTrigger.refresh()
      window.addEventListener('resize', this.actualizarAnimacion)
    }
  },
  mounted() {
    this.animacionNp1()
  },
  beforeUnmount() {
    // Remueve el evento resize al desmontar el componente
    window.removeEventListener('resize', this.actualizarAnimacion)
  }
}
</script>
<style scoped>
.np1 {
  padding: 2%;
  width: 100%;
  min-width: 250px;
  height: 100vh;
  min-height: 600px;
}

.lado1 {
  width: 100%;
  min-width: 250px;
  min-height: 90vh;
  /* border: #471D7C solid; */
}

.np1-contenedor {
  height: 30%;
  max-height: 30%;
}

.titulo {
  width: 60%;
  font-family: 'TestKarbonMedium';
  font-size: 5vh;
  color: #471d7c;
  -webkit-text-stroke: #471d7c 0.1vh;
}

.texto {
  width: 80%;
  font-family: 'KarbonRegular';
  color: #471d7c;
  font-size: 3vh;
  -webkit-text-stroke: #471d7c 0.1vh;
}

.circulo-fondo1 {
  width: 25vh;
  height: 25vh;
  background-color: #ffcd00;
  border-radius: 50%;
}

.img-circulo1 {
  background-color: transparent;
  height: 22vh;
  width: 22vh;
  border-radius: 50%;
  right: -5%;
  bottom: -5%;
}

.contenedor-1 {
  height: 100%;
  width: 25vh;
}

.imgNp-1 {
  height: 80%;
  left: -40%;
}

.rowNp-1 {
  height: 35%;
  top: -40%;
  right: -25%;
}

.indicador1 {
  font-size: 2.5vh;
  font-family: 'KarbonRegular';
  line-height: 1;
  color: #471d7c;
  -webkit-text-stroke: #471d7c 0.1vh;
  height: 25%;
  top: -60%;
  right: -50%;
}

.porcentaje {
  font-size: 6vh;
  font-family: 'MuseoSans';
  line-height: normal;
}

@media (min-width: 768px) {
  .texto {
    width: 60%;
  }
}

@media (min-width: 1024px) {
  .np1-contenedor {
    min-height: 200px;
  }

  .lado1,
  .lado2 {
    width: 35%;
    /* border: #471D7C solid; */
  }

  .titulo {
    font-size: 4vw;
  }

  .texto {
    padding-top: 5%;
    font-size: 1.5vw;
  }

  .circulo-fondo1 {
    height: 35vw;
    width: 35vw;
  }

  .img-circulo1 {
    width: 30vw;
    height: 30vw;
  }

  .imgNp-1 {
    height: 26vw;
  }

  .rowNp-1 {
    height: 6vw;
    top: -12.5vw;
    right: -20%;
  }

  .indicador1 {
    font-size: 1.5vw;
    right: -20%;
    top: -15.5vw;
  }

  .porcentaje {
    font-size: 6vw;
  }

  .contenedor-1 {
    width: auto;
    top: -60%;
  }
}
</style>
