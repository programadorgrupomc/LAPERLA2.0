<template>
  <div class="navbar h-full">
    <div class="btn-slide hidden lg:flex justify-end items-center relative">
      <button class="absolute top-0">
        <img class="h-full w-full" src="../../../assets/Dashboard/General/left.svg" alt="" />
      </button>
    </div>
    <div class="navbar-hero flex flex-col items-center justify-center">
      <div class="hero-img">
        <img src="../../../assets/Dashboard/General/logoBarraNavegacion.jpg " alt="" />
      </div>
      <div class="hero-txt w-full">
        <p class="text-1 text-center">Molino La Perla</p>
        <p class="text-2 text-center">molinolaperla.com</p>
      </div>
    </div>
    <div class="navbar-menu flex flex-col justify-center items-center">
      <div
        v-for="op in itemsMenu"
        :key="op.id"
        @click="cambiarestadobarra"
        class="w-full flex items-center justify-center"
      >
        <router-link :to="op.link" class="w-full opcion flex items-center justify-center">
          <img :src="op.img" alt="" />
          <p class="text-white">{{ op.title }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import user from '../../../assets/Dashboard/General/User.svg'
import settings from '../../../assets/Dashboard/General/Settings.svg'
import Home from '../../../assets/Dashboard/General/Home2.svg'
import Inputs from '../../../assets/Dashboard/General/Inputs.svg'
import Medios from '../../../assets/Dashboard/General/Medios.svg'
import Statics from '../../../assets/Dashboard/General/Statics.svg'
export default {
  data() {
    return {
      itemsMenu: [
        {
          id: '1',
          title: 'Páginas',
          link: '/dashboard/paginas',
          img: Home
        },
        {
          id: '2',
          title: 'Entradas',
          link: '/dashboard/entradas',
          img: Inputs
        },
        {
          id: '3',
          title: 'Medios',
          link: '/dashboard/medios',
          img: Medios
        },
        {
          id: '4',
          title: 'Estadisticas',
          link: '/dashboard/estadisticas',
          img: Statics
        },
        {
          id: '5',
          title: 'Usuarios',
          link: '/dashboard/usuarios',
          img: user
        },
        {
          id: '6',
          title: 'Ajustes',
          link: '/dashboard/ajustes',
          img: settings
        }
      ],
      estadobarra: true
    }
  },
  methods: {
    cambiarestadobarra() {
      this.estadobarra = false
      this.$emit('estadocam', this.estadobarra)
    }
  }
}
</script>
<style scoped>
.navbar {
  overflow: hidden;
  background-color: #3c2d4e;
  min-width: 200px;
}

.navbar-hero {
  width: 80%;
  height: 38%;
  margin: auto;
}

.hero-img {
  height: 18vh;
  width: 18vh;
  margin-bottom: 5%;
}

.hero-img img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.text-1 {
  font-family: 'KarbonRegular';
  color: #ffffff;
  -webkit-text-stroke: #ffffff 0.1vh;
  font-size: 2.5vh;
}

.text-2 {
  font-family: 'MyriadProRegular';
  color: #ffffff;
  font-size: 2.2vh;
}

.navbar-menu {
  height: 60%;
  max-width: 700px;
  overflow: auto;
}

.opcion {
  width: 100%;
  padding-top: 4%;
  padding-bottom: 4%;
}

.opcion img {
  height: 2.5vh;
}

.opcion p {
  font-family: 'TahomaRegular';
  width: 40%;
  font-size: 2.5vh;
  margin-left: 5%;
}

.opcion:hover {
  background-color: #4d3b77;
}

@media (min-width: 1024px) {
  .navbar-menu {
    height: 60%;
    max-width: none;
    overflow: auto;
  }

  .btn-slide {
    height: 2%;
  }

  .btn-slide button {
    width: 12%;
    padding-top: 5%;
    padding-right: 5%;
  }
}
</style>
