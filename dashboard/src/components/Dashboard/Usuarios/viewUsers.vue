<script>
import api from '../../../apiRequest/apiUsers/apiusers.js'
import detUser from './detUser.vue'

export default {
  data() {
    return {
      user: {},
      estadoadduser: false,
      estadodetuser: false,
      iduser: ''
    }
  },
  components: {
    detUser
  },
  methods: {
    getUsers() {
      api.getDataUserG().then((response) => {
        this.user = response.data
      })
    },
    cambiarEstadoAddUser() {
      this.estadoadduser = !this.estadoadduser
      this.$emit('estadoaddcambiado', this.estadoadduser)
    },
    actualizarestadodet(valor) {
      this.estadodetuser = valor
    },
    cambiarestadoview2v(id) {
      this.estadodetuser = !this.estadodetuser
      this.iduser = id
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>
<template>
  <detUser
    v-if="estadodetuser"
    @estadocambiadoview2="actualizarestadodet"
    :userdata="user"
    :iduser="iduser"
  />
  <div v-else>
    <h1 class="ttl-view">Usuarios</h1>
    <div class="cont-table">
      <div class="cont-htable flex justify-between items-center border">
        <p class="font-semibold">Miembros</p>
        <button @click="cambiarEstadoAddUser" class="btn-agregar-user">Añadir miembro</button>
      </div>
      <div
        v-for="us in user"
        class="cont-user flex items-center w-full border shadow-md hover:scale-105 bg-white transition-all"
      >
        <div class="img-user flex justify-center items-center">
          <img
            class="rounded-full w-full h-full object-cover"
            :src="'https://api-perla.onrender.com/uploads/' + us.image"
            :alt="image"
            alt="user"
          />
        </div>
        <div class="information-user">
          <h1 class="font-bold">{{ us.nombre }}</h1>
          <p>@{{ us.nombre + us.apellido }}</p>
          <p class="rol-user">{{ us.role }}</p>
        </div>
        <button @click="cambiarestadoview2v(us._id)" class="mr-5">
          <svg
            class="svg-user"
            xmlns="http://www.w3.org/2000/svg"
            width="11.115"
            height="18"
            viewBox="0 0 11.115 18"
          >
            <path
              id="Icon_material-navigate-next"
              data-name="Icon material-navigate-next"
              d="M15,9l-2.115,2.115L19.755,18l-6.87,6.885L15,27l9-9Z"
              transform="translate(-12.885 -9)"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cont-htable {
  height: 8vh;
  padding-left: 2vw;
  padding-right: 2vw;
}

.ttl-view {
  font-weight: bold;
  font-size: 5vw;
  margin-left: 9%;
  margin-bottom: 1.8%;
}

.btn-save-users {
  color: white;
  background-color: #ff7439;
  margin-top: 5%;
  bottom: 5%;
  position: fixed;
  padding: 0.4vw;
  border-radius: 2vw;
  padding-right: 2vw;
  padding-left: 2vw;
}

.cont-table {
  background-color: #ffffff;
  margin-left: 10%;
  margin-right: 10%;
}

.btn-agregar-user {
  background-color: #e5e5e5;
  padding-right: 3%;
  padding-left: 3%;
  border-radius: 2vw;
  margin-top: 1%;
  margin-bottom: 1%;
}

.cont-user {
  height: auto;
  max-height: 20vh;
}

.img-user {
  width: 25vh;
  height: 18vh;
  margin: 2%;
  transform: scale(0.6);
}

.information-user {
  width: 65%;
}

.information-user h1 {
  color: #000000;
  font-size: 4vw;
}

.rol-user {
  color: white;
  background-color: #4d3b77;
  width: 80%;
  text-align: center;
  font-size: 3vw;
}

.svg-user {
  fill: #000000;
}

@media (min-width: 1024px) {
  .btn-save-users {
    color: white;
    background-color: #ff7439;
    position: fixed;
    bottom: 5%;
    padding: 0.3vw;
    border-radius: 0.8vw;
    padding-right: 2vw;
    padding-left: 2vw;
  }

  .ttl-view {
    font-weight: bold;
    font-size: 2vw;
    margin-left: 9%;
    margin-bottom: 1.8%;
  }

  .cont-htable {
    height: 8vh;
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .btn-agregar-user {
    background-color: #e5e5e5;
    padding-right: 3%;
    padding-left: 3%;
    border-radius: 0.8vw;
    margin-top: 1%;
    margin-bottom: 1%;
  }

  .rol-user {
    color: white;
    background-color: #4d3b77;
    width: 25%;
    text-align: center;
    font-size: 0.8vw;
  }

  .information-user h1 {
    color: #000000;
    font-size: 1.2vw;
  }

  .img-user {
    width: 25vh;
    height: 25vh;
    margin: 2%;
    transform: scale(0.6);
  }
}
</style>
