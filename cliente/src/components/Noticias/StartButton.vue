<script>
import { gsap } from 'gsap'

function animarStb() {
  gsap.to('.btn-start', {
    duration: 0.2,
    y: -10,
    ease: 'circ',
    yoyo: true,
    repeat: -1
  })
}

export default {
  name: 'StartButton',
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  mounted() {
    animarStb()
  }
}
</script>
<template>
  <div class="flex items-center justify-end">
    <div
      v-on:click="scrollTop"
      class="btn-start shadow-2xl w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-up"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 5120px) {
  .btn-start {
    transform: scale(4);
    margin: 3%;
  }
}
</style>
