<template>
  <div class="">
    <!-- escritorio -->
    <div
      v-if="pptData"
      class="ppt-work h-screen bg-AzulPerla flex relative justify-center items-center text-white overflow-hidden"
    >
      <div class="bloque1 absolute flex flex-col h-screen justify-center items-center">
        <img
          loading="lazy"
          class="imgpptn1 object-cover"
          src="@/assets/Work/imgppt1.png"
          alt="Imgb1"
        />
        <h1 class="font-TestKarbonMedium text-center ttl-pptn1">{{ title1 }}</h1>
        <p class="cont-b1 font-KarbonRegular text-center">{{ content1 }}</p>
      </div>
      <div class="bloque2 absolute flex flex-col h-screen justify-center items-center">
        <img
          loading="lazy"
          class="imgpptn2 object-cover"
          src="@/assets/Work/imgppt2.png"
          alt="Imgb2"
        />
        <h1 class="text-center font-TestKarbonMedium ttl-pptn2">{{ title2 }}</h1>
        <p class="cont-b2 font-KarbonRegular text-center">{{ content2 }}</p>
      </div>
      <div class="bloque3 absolute flex flex-col h-screen justify-center items-center">
        <img
          loading="lazy"
          class="imgpptn3 object-cover"
          src="@/assets/Work/imgppt3.png"
          alt="Imgb3"
        />
        <h1 class="text-center font-TestKarbonMedium ttl-pptn3">{{ title3 }}</h1>
        <p class="cont-b3 font-KarbonRegular text-center">{{ content3 }}</p>
      </div>
    </div>
    <p v-else>No hay Data</p>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'PresentacionWork',
  data() {
    return {
      pptData: [],
      title1: 'Te estamos buscando',
      content1:
        'Queremos que tu talento se sume a Molino La Perla, donde juntos tendremos la posibilidad de continuar sirviendo a nuestro país, teniendo como objetivo que los peruanos mantengan una alimentación saludable y beneficiosa.',
      image1: '',
      title2: 'Para crecer contigo',
      content2:
        'Tendrás la oportunidad de desarrollarte y crecer profesionalmente a través de un aprendizaje continuo, conocimientos, habilidades y experiencias nuevas.',
      image2: '',
      title3: 'Y cuidar de ti',
      content3:
        'Nos preocupamos por el bienestar y cuidado de nuestro equipo, ofreciéndoles beneficios a su medida y asegurando el mejor ambiente laboral.',
      image3: ''
    }
  },
  methods: {
    animacionPpt() {
      if (window.innerWidth > 1024) {
        const tlppt1 = gsap.timeline({
          scrollTrigger: {
            trigger: '.ppt-work',
            start: '-=10% top',
            end: 'bottom',
            duration: 10,
            toggleActions: 'restart none none none',
            onEnter: () => {
              document.body.style.overflow = 'hidden'
            },
            onLeaveBack: () => {
              document.body.style.overflow = 'auto'
            }
          }
        })
        tlppt1.fromTo(
          '.ttl-pptn1',
          {
            opacity: 0,
            scale: 0.3,
            yPercent: 0
          },
          {
            opacity: 1,
            scale: 1,
            yPercent: -110
          }
        )
        tlppt1.fromTo(
          '.ttl-pptn2',
          {
            scale: 0,
            opacity: 0,
            yPercent: 0
          },
          {
            opacity: 1,
            scale: 1,
            yPercent: -50
          }
        )
        tlppt1.fromTo(
          '.ttl-pptn3',
          {
            scale: 0,
            opacity: 0,
            yPercent: 0
          },
          {
            scale: 1,
            opacity: 1,
            onComplete: () => {
              document.body.style.overflow = 'auto'
            }
          }
        )
      }
    },
    animacionPpt2() {
      const tlppt21 = gsap.timeline({
        scrollTrigger: {
          trigger: '.ppt-work',
          start: 'top top',
          end: '+=900% bottom',
          scrub: 2,
          //markers: true,
          pin: true,
          onStart: () => {
            ScrollTrigger.refresh()
          },
          onComplete: () => {
            ScrollTrigger.refresh()
          }
        }
      })
      tlppt21.fromTo(
        '.ttl-pptn3',
        {
          yPercent: 20,
          opacity: 1,
          xPercent: 0
        },
        {
          yPercent: 400,
          opacity: 0,
          xPercent: 0
        }
      )
      tlppt21.fromTo(
        '.ttl-pptn2',
        {
          yPercent: -50,
          opacity: 1,
          xPercent: 0
        },
        {
          yPercent: 400,
          opacity: 0,
          xPercent: 0
        },
        0
      )
      tlppt21.fromTo(
        '.ttl-pptn1',
        {
          yPercent: -120
        },
        {
          yPercent: 0
        },
        0
      )
      tlppt21.fromTo(
        '.imgpptn1',
        {
          scale: 0
        },
        {
          scale: 1
        },
        '1'
      )
      tlppt21.fromTo(
        '.cont-b1',
        {
          yPercent: 400,
          opacity: 0
        },
        {
          yPercent: 0,
          opacity: 1
        },
        1
      )
      tlppt21.fromTo(
        '.bloque1',
        {
          yPercent: 0,
          scale: 1,
          opacity: 1
        },
        {
          yPercent: 50,
          scale: 0,
          opacity: 0
        },
        '2'
      )
      tlppt21.fromTo(
        '.ttl-pptn2',
        {
          opacity: 0,
          xPercent: -500,
          yPercent: 0
        },
        {
          delay: 0.4,
          opacity: 1,
          xPercent: 0,
          yPercent: 0
        },
        2
      )
      tlppt21.fromTo(
        '.imgpptn2',
        {
          scale: 0
        },
        {
          scale: 1
        },
        '3'
      )
      tlppt21.fromTo(
        '.cont-b2',
        {
          yPercent: 400,
          opacity: 0
        },
        {
          yPercent: 0,
          opacity: 1
        },
        3
      )
      tlppt21.fromTo(
        '.bloque2',
        {
          yPercent: 0,
          scale: 1,
          opacity: 1
        },
        {
          yPercent: 50,
          scale: 0,
          opacity: 0
        },
        '4'
      )
      tlppt21.fromTo(
        '.ttl-pptn3',
        {
          opacity: 0,
          xPercent: -500,
          yPercent: 0
        },
        {
          delay: 0.4,
          opacity: 1,
          xPercent: 0,
          yPercent: 0
        },
        4
      )
      tlppt21.fromTo(
        '.imgpptn3',
        {
          scale: 0
        },
        {
          scale: 1
        },
        '5'
      )
      tlppt21.fromTo(
        '.cont-b3',
        {
          yPercent: 50,
          opacity: 0
        },
        {
          yPercent: 0,
          opacity: 1
        },
        5
      )
      tlppt21.to('.cont-b3', {
        delay: 1
      })
    },
    actualizarAnimacion() {
      // Actualiza la animación cuando cambie el tamaño de la ventana
      ScrollTrigger.refresh()
      window.addEventListener('resize', this.actualizarAnimacion)
    }
  },
  mounted() {
    this.animacionPpt2()
  },
  beforeUnmount() {
    // Remueve el evento resize al desmontar el componente
    window.removeEventListener('resize', this.actualizarAnimacion)
  }
}
</script>

<style scoped>
.bloque1 {
  width: 100%;
  padding: 6%;
}

.imgpptn1 {
  height: 20vh;
}

.ttl-pptn1 {
  padding-top: 2%;
  padding-bottom: 2%;
  font-size: 10vw;
  line-height: normal;
  -webkit-text-stroke: 0.2vw white;
}

.cont-b1 {
  padding-right: 5%;
  padding-left: 5%;
  font-size: 5.5vw;
  line-height: normal;
}

.bloque2 {
  width: 100%;
  padding: 6%;
}

.imgpptn2 {
  height: 20vh;
}

.ttl-pptn2 {
  padding-top: 2%;
  padding-bottom: 2%;
  font-size: 10vw;
  line-height: normal;
  -webkit-text-stroke: 0.2vw white;
}

.cont-b2 {
  padding-right: 5%;
  padding-left: 5%;
  font-size: 5.5vw;
  line-height: normal;
}

.bloque3 {
  width: 100%;
  padding: 6%;
}

.imgpptn3 {
  height: 20vh;
}

.ttl-pptn3 {
  padding-top: 2%;
  padding-bottom: 2%;
  font-size: 10vw;
  line-height: normal;
  -webkit-text-stroke: 0.2vw white;
}

.cont-b3 {
  padding-right: 5%;
  padding-left: 5%;
  font-size: 5.5vw;
  line-height: normal;
}

@media (min-width: 768px) {
  .cont-b3 {
    padding-right: 5%;
    padding-left: 5%;
    font-size: 4.5vw;
    line-height: normal;
  }

  .cont-b2 {
    padding-right: 5%;
    padding-left: 5%;
    font-size: 4.5vw;
    line-height: normal;
  }

  .cont-b1 {
    padding-right: 5%;
    padding-left: 5%;
    font-size: 4.5vw;
    line-height: normal;
  }
}

@media (min-width: 1024px) {
  .bloque1 {
    padding: 6%;
    padding-right: 15%;
    padding-left: 15%;
  }

  .imgpptn1 {
    width: auto;
    height: 10vw;
  }

  .ttl-pptn1 {
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 4.5vw;
    line-height: normal;
    width: 100%;
    -webkit-text-stroke: 0.1vw white;
  }

  .cont-b1 {
    padding-right: 18%;
    padding-left: 18%;
    font-size: 1.7vw;
    line-height: normal;
  }

  .bloque2 {
    padding: 6%;
    padding-right: 15%;
    padding-left: 15%;
  }

  .imgpptn2 {
    width: auto;
    height: 10vw;
  }

  .ttl-pptn2 {
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 4.5vw;
    line-height: normal;
    width: 100%;
    -webkit-text-stroke: 0.1vw white;
  }

  .cont-b2 {
    padding-right: 18%;
    padding-left: 18%;
    font-size: 1.7vw;
    line-height: normal;
  }

  .bloque3 {
    padding: 6%;
    padding-right: 15%;
    padding-left: 15%;
  }

  .imgpptn3 {
    width: auto;
    height: 10vw;
  }

  .ttl-pptn3 {
    padding-top: 2%;
    padding-bottom: 2%;
    font-size: 4.5vw;
    line-height: normal;
    width: 100%;
    -webkit-text-stroke: 0.1vw white;
  }

  .cont-b3 {
    padding-right: 18%;
    padding-left: 18%;
    font-size: 1.7vw;
    line-height: normal;
  }
}
</style>
