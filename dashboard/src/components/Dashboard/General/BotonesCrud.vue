<template>
  <div class="botones-crud flex flex-col lg:flex-row justify-center items-center">
    <button @click="guardar" class="flex justify-center items-center">
      <img
        class="w-full h-full lg:hidden"
        src="../../../assets/Dashboard/General/Guardar.svg"
        alt=""
      />
      <p class="hidden lg:block">Guardar</p>
    </button>
    <button @click="restaurar" class="flex justify-center items-center">
      <img
        class="w-full h-full lg:hidden"
        src="../../../assets/Dashboard/General/escoba.svg"
        alt=""
      />
      <p class="hidden lg:block">Restaurar</p>
    </button>
    <button class="flex justify-center items-center" @click="retroceder">
      <img
        class="w-full h-full lg:hidden"
        src="../../../assets/Dashboard/General/deshacer.svg"
        alt=""
      />
      <p class="hidden lg:block">Atras</p>
    </button>
  </div>
</template>
<script>
import apiNuestroPollo from '@/services/Inicio/apiNuestroPollo.js'

export default {
  data() {
    return {
      datanp1: ''
    }
  },
  props: ['dataNuestroPollo1'],
  methods: {
    retroceder() {
      this.$router.go(-1)
    },
    guardar() {
      console.log(this.datanp1)
      const rpta = window.confirm('Esta seguro de guardar los datos!')
      if (rpta) {
        apiNuestroPollo
          .updateNuestroPollo(this.datanp1._id, this.datanp1)
          .then((response) => {
            alert(response)
          })
          .catch((error) => {
            console.log(`Hubo un error al actualizar ${error}`)
          })
        alert('No se encontro Servidor!')
      } else {
        alert('Error en datos, Revisar!')
      }
    },
    restaurar() {
      const rpta = window.confirm('Esta seguro de restaurar los datos!')
      if (rpta) {
        location.reload()
        alert('No se encontro Servidor!')
      } else {
        alert('Error en Funcion, Revisar!')
      }
    }
  },
  updated() {
    this.datanp1 = this.dataNuestroPollo1
  },
  mounted() {}
}
</script>
<style scoped>
.botones-crud {
  height: 100%;
}

.botones-crud button {
  background-color: #4d3b77;
  height: 70%;
  width: 100%;
  border: white solid;
  border-radius: 2vh;
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 1vh;
  margin-right: 1vh;
  padding: 1vh;
  color: white;
  font-size: 2vh;
  font-family: 'TahomaRegular';
}

.botones-crud button:hover {
  background-color: #9b886f;
  transform: scale(1.1);
}

@media (min-width: 1024px) {
  .botones-crud {
    height: 100%;
  }

  .botones-crud button {
    background-color: transparent;
    height: 70%;
    width: 100%;
    border: white solid;
    border-radius: 3vh;
    margin-left: 1vh;
    margin-right: 1vh;
    padding: 1vh;
    padding-left: 2vh;
    padding-right: 2vh;
    color: white;
    font-family: 'TahomaRegular';
  }
}
</style>
