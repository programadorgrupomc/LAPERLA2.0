<template>
  <div class="logo flex justify-center items-center relative">
    <img src="../../../assets/General/logo-laperla.png" class="logo-img w-full h-full" alt="logo-laperla" />
    <img src="../../../assets/General/star-logo-laperla.png" class="logo-star-img absolute" alt="star-logo-laperla" />
    
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  data() {
    return {
      isHovered: false,
    }
  },
  methods: {
    animationLogo() {
      const logocont = document.querySelector(".logo-img");

      const animationL1 = gsap.to(".logo-img", {
        paused: true,
        duration: 0.3,
        scale: 1.1,
      });

      const animationL12 = gsap.to(".logo-star-img", {
        paused: true,
        duration: 0.3,
        rotate: 30,
        y: -5,
        x: 6,
      });

      logocont.addEventListener("mouseenter", () => animationL1.play());
      logocont.addEventListener("mouseleave", () => animationL1.reverse());
      logocont.addEventListener("mouseenter", () => animationL12.play());
      logocont.addEventListener("mouseleave", () => animationL12.reverse());
    },
  },
  mounted() {
    this.animationLogo();
  }
}
</script>

<style scoped>
.logo {
  height: 100%;
  width: auto;
}

.logo-star-img {
  height: 25%;
  width: auto;
  top: -5%;
  right: 28%;
}
</style>
