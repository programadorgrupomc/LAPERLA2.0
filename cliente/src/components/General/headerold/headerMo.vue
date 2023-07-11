<template>
  <div class="contenedor-gen">
    <div class="contenedor-logo">
      <logoHeader />
    </div>
    <div class="contenedor-btn">
      <button @click="toggleMenu" class="btn-menu">
        <svg v-if="!showMenu" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
          />
        </svg>
        <svg
          v-else
          class=" "
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </button>
    </div>
    <div v-if="showMenu" class="contenedor-menu">
      <div class="logo-btn">
        <logoHeader />
      </div>
      <div class="contenedor-items">
        <router-link to="/" custom v-slot="{ navigate }">
          <a @click="navigate" role="link" href="" onclick="location.reload()" class="item-menu">{{
            titulo1
          }}</a>
        </router-link>
        <router-link to="/nosotros" custom v-slot="{ navigate }">
          <a @click="navigate" role="link" href="" class="item-menu">{{ titulo2 }}</a>
        </router-link>
        <router-link to="/recetario" custom v-slot="{ navigate }">
          <a @click="navigate" role="link" href="" class="item-menu">{{ titulo3 }}</a>
        </router-link>
        <router-link to="/noticias" custom v-slot="{ navigate }">
          <a @click="navigate" role="link" href="" class="item-menu">{{ titulo4 }}</a>
        </router-link>
        <router-link to="/work" custom v-slot="{ navigate }">
          <a @click="navigate" role="link" href="" class="item-menu">{{ titulo5 }}</a>
        </router-link>
        <router-link to="/contactanos" custom v-slot="{ navigate }">
          <a @click="navigate" role="link" href="" class="item-menu">{{ titulo6 }}</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import logoHeader from './logoHeader.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      showMenu: false,
      titulo1: 'INICIO',
      titulo2: 'NOSOTROS',
      titulo3: 'RECETARIO',
      titulo4: 'NOTICIAS',
      titulo5: 'TRABAJA CON NOSOTROS',
      titulo6: 'CONTACTANOS'
    }
  },
  components: {
    logoHeader
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    btnAnimado() {
      const showAnim = gsap
        .from('.btn-menu', {
          x: 200,
          border: '1px solid black',
          paused: true,
          duration: 0.8
        })
        .progress(1)

      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        scrub: 1,

        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      })
    },
    animarDesplegable() {
      // Selecciona el botón
      const botondes = document.querySelector('.btn-menu')

      botondes.addEventListener('click', () => {
        gsap.from('.contenedor-menu', {
          duration: 0.8,
          opacity: 0
        })
      })
    },
    resetShowMenu() {
      this.showMenu = false
    }
  },
  mounted() {
    this.btnAnimado()
    this.animarDesplegable()
    this.$router.afterEach(() => {
      this.resetShowMenu()
    })
  }
}
</script>

<style scoped>
.contenedor-gen {
  background-color: #fcf5eb;
  height: 10vh;
  display: flex;
  justify-content: space-between;
}

.contenedor-logo {
  display: flex;
  align-items: center;
  padding: 2%;
}

.contenedor-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
}

.btn-menu {
  position: fixed;
  border: black solid 0vw;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  width: 10vh;
  height: auto;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 5vw 0vw 0vw 5vw;
  height: 6.5vh;
  background-color: #624f8f;
  display: flex;
  justify-content: center;
  z-index: 100;
}

.contenedor-menu {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: #fcf5eb;
  z-index: 50;
}

.logo-btn {
  display: flex;
  justify-content: space-between;
  padding: 2%;
}

.btn-close {
  padding-left: 4%;
  padding-right: 4%;
  width: 20%;
  height: 8vh;
  border: none;
  background-color: #fcf5eb;
}

.contenedor-items {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding-left: 5%;
  background-color: #faebd7;
}

.item-menu {
  -webkit-text-stroke: 0.3vw #471d7c;
  font-size: 6vw;
  font-family: 'KarbonRegular';
  text-decoration: none;
}

svg {
  width: 5vh;
  height: 100%;
}

@media (min-width: 768px) {
  .btn-menu {
    position: fixed;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    width: 13vh;
    height: auto;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
    padding-bottom: 1%;
    border-radius: 5vw 0vw 0vw 5vw;
    height: 6.5vh;
    background-color: #ff7439;
    display: flex;
    justify-content: center;
  }
}
</style>
