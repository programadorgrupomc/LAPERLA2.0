<template>
  <div class="header flex items-center justify-between p-1 lg:relative lg:justify-center">
    <div class="header-logo lg:absolute">
      <LogoHeader />
    </div>
    <div class="hidden lg:flex lg:w-full">
      <OpcionesHeader />
    </div>
    <div class="header-boton lg:hidden">
      <BotonHeader @estadoBoton="manejarMenu" />
    </div>
  </div>
  <Transition name="fade">
    <div v-if="estadoMenu" class="header-opciones absolute">
      <OpcionesHeader />
    </div>
  </Transition>
</template>
<script>
import LogoHeader from './Header/LogoHeader.vue'
import OpcionesHeader from './Header/OpcionesHeader.vue'
import BotonHeader from './Header/BotonHeader.vue'

export default {
  data() {
    return {
      estadoMenu: false,
    }
  },
  components: {
    LogoHeader,
    OpcionesHeader,
    BotonHeader
  },
  methods: {
    manejarMenu(valor) {
      this.estadoMenu = valor;
    }
  }
}
</script>
<style scoped>
.header {
  background-color: #fcf5eb;
  min-height: 75px;
  height: 9vh;
  max-height: 90px;
  width: 100%;
  min-width: 250px;
}

.header-logo {
  padding-left: 2%;
  height: 80%;
  width: auto;
}

.header-boton {
  height: 70%;
  width: auto;
}

.header-opciones {
  background-color: #ebdac0;
  width: 100%;
  height: 100%;
  min-height: 85%;
  min-width: 250px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

@media (min-width: 1024px) {
  .header {
    min-height: auto;
    height: 5.5vw;
    max-height: 500px;
    width: 100%;
    min-width: 250px;
  }

  .header-logo {
    padding-left: 0%;
  }
}
</style>
