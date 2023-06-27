<template>
  <div class="cont-logo">
    <img
      class="img-logo"
      src="@/assets/Login/logodashboard1.png"
      alt="LoadLaPerla"
      @load="imageLoaded"
    />
    <div class="eye"></div>
  </div>
</template>
<script>
export default {
  methods: {
    imageLoaded() {
      const img = document.querySelector('.img-logo')
      setTimeout(() => {
        img.classList.add('loaded')
      }, 500)
    }
  }
}
</script>
<style scoped>
.cont-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.img-logo {
  width: 95%;
  object-fit: cover;
  transform: scale(0);
  transition: transform 1s ease;
}

.img-logo.loaded {
  transform: scale(1);
}

.eye {
  position: absolute;
  width: 1.5vw;
  height: 1.5vw;
  background-color: #ff7439;
  border-radius: 50%;
  /* transition: transform 0.5s ease; */
  left: 12.82%;
  top: 14%;
  animation: parpadear 0.5s ease 1.5s normal;
  opacity: 0;
}

@keyframes parpadear {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }

  50% {
    transform: translateY(45%);
    opacity: 1;
  }

  100% {
    transform: translateY(0%);
    opacity: 0;
  }
}

@media (min-width: 1024px) {
  .cont-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 45%;
  }

  .img-logo {
    width: 95%;
    object-fit: cover;
    transform: scale(0);
    transition: transform 1s ease;
  }

  .img-logo.loaded {
    transform: scale(1);
  }

  .eye {
    position: absolute;
    width: 0.68vw;
    height: 0.65vw;
    background-color: #ff7439;
    border-radius: 50%;
    left: 12.82%;
    top: 14%;
    opacity: 0;
  }
}
</style>
