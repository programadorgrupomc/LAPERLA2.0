<template>
  <div class="cont-logo">
    <img
      loading="lazy"
      class="img-logo"
      src="../../../assets/General/logo-laperla.png"
      alt="Logo la perla"
    />
    <img
      loading="lazy"
      class="img-star"
      src="../../../assets/General/star-logo-laperla.png"
      alt="estrella logo perla"
    />
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'logoHeader',
  mounted() {
    this.animationLogo()
  },
  methods: {
    animationLogo() {
      const logocont = document.querySelector('.img-logo')

      const animationL1 = gsap.to('.img-logo', {
        paused: true,
        duration: 0.3,
        scale: 1.1
      })

      const animationL12 = gsap.to('.img-star', {
        paused: true,
        duration: 0.3,
        rotate: 30,
        y: -5,
        x: 6
      })

      logocont.addEventListener('mouseenter', () => animationL1.play())
      logocont.addEventListener('mouseleave', () => animationL1.reverse())
      logocont.addEventListener('mouseenter', () => animationL12.play())
      logocont.addEventListener('mouseleave', () => animationL12.reverse())
    }
  }
}
</script>
<style scoped>
.cont-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 8vh;
  position: relative;
}

.img-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.img-star {
  width: auto;
  height: 2vh;
  object-fit: contain;
  position: absolute;
  right: 28%;
  top: -0.4vh;
}

@media (min-width: 1024px) {
  .cont-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 8vh;
    position: relative;
  }

  .img-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .img-star {
    width: auto;
    height: 2vh;
    object-fit: contain;
    position: absolute;
    right: 28%;
    top: -0.4vh;
  }
}
</style>
