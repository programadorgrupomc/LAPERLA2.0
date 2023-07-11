<template>
  <div class="logo-footer flex justify-center items-center relative">
    <img
      src="../../../assets/General/logo-laperla-footer.png"
      class="logo-perla w-full h-full"
      alt="logo-laperla-footer w-full h-full"
    />
    <img
      src="../../../assets/General/star-logo-footer.png"
      class="star-logo absolute"
      alt="star-laperla-footer"
    />
    <div class="ojo-logo absolute"></div>
  </div>
</template>
<script>
import { gsap } from 'gsap'
export default {
  methods: {
    animacionlogo() {
      const logogeneral = document.querySelector('.logo-perla')
      const animacionStar = gsap.to('.star-logo', {
        paused: true,
        duration: 0.3,
        rotate: 30,
        y: -5,
        x: 12
      })

      const animacionOjo = gsap.to('.ojo-logo', {
        paused: true,
        duration: 0.3,
        backgroundColor: '#FF7439',
        top: '7vw'
      })

      logogeneral.addEventListener('mouseenter', () => animacionStar.play())
      logogeneral.addEventListener('mouseleave', () => animacionStar.reverse())
      logogeneral.addEventListener('mouseenter', () => animacionOjo.play())
      logogeneral.addEventListener('mouseleave', () => animacionOjo.reverse())
    }
  },
  mounted() {
    this.animacionlogo()
  }
}
</script>
<style scoped>
.logo-footer {
  padding: 3%;
  background-color: rgba(128, 128, 128, 0.307);
}

.logo-perla {
  height: 100%;
  width: auto;
}

.star-logo {
  height: 20%;
  width: auto;
  top: 17%;
  left: 20.5%;
}

.ojo-logo {
  background-color: #ff743900;
  height: 1.5vw;
  width: 1.5vw;
  top: 19%;
  left: 13.25%;
  border-radius: 50%;
}
</style>
