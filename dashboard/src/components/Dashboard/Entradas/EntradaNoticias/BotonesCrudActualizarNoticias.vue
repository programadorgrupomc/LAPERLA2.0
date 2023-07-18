<template>
  <div class="botones-crud flex flex-col lg:flex-row justify-center items-center">
    <button @click="guardar" class="flex justify-center items-center">
      <img
        class="w-full h-full lg:hidden"
        src="../../../assets/Dashboard/General/Guardar.svg"
        alt=""
      />
      <p class="hidden lg:block">Actualizar</p>
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
import apiPuestosVacantes from '../../../../services/Work/apiPuestosVacantes'
export default {
  data() {
    return {
      datanewpuesto: ''
    }
  },
  props: ['newDatapv'],
  methods: {
    guardar() {
      const rpta = window.confirm('Desea Actualizar el Puesto?')
      if (rpta) {
        // const nombreArchivo = 'imagen_salida.png'
        // let archivo
        // if (this.isBase64(this.newDatapv.imgPuesto)) {
        //     archivo = this.base64ToFile(this.newDatapv.imgPuesto, nombreArchivo)
        // } else {
        //     archivo = ''
        // }
        // const formData = new FormData()
        // formData.append('titulo', this.newDatapv.titulo)
        // formData.append('experiencia', this.newDatapv.experiencia)
        // formData.append('departamento', this.newDatapv.departamento)
        // formData.append('tipoempleo', this.newDatapv.tipoempleo)
        // formData.append('objetivoPuesto', this.newDatapv.objetivoPuesto)
        // formData.append('imgPuesto', archivo)
        // apiPuestosVacantes.updatePuestosVacantes(this.newDatapv._id, formData)
        //     .then((response) => {
        //         alert('Registro Exitoso!')
        //         this.retroceder();
        //     })
        //     .catch((error) => {
        //         console.log(`Hubo un error al Actualizar ${error}`)
        //     })
      }
    },
    retroceder() {
      this.$router.go(-1)
    },
    restaurar() {
      const rpta = window.confirm('Esta seguro de restaurar los datos!')
      if (rpta) {
        location.reload()
        alert('No se encontro Servidor!')
      } else {
        alert('Error en Funcion, Revisar!')
      }
    },
    base64ToFile(base64String, fileName) {
      var byteCharacters = atob(base64String.split(',')[1])
      var byteNumbers = new Array(byteCharacters.length)
      for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      var byteArray = new Uint8Array(byteNumbers)
      var blob = new Blob([byteArray], { type: 'image/jpeg' }) // Puedes ajustar el tipo de archivo según el formato de la imagen

      var file = new File([blob], fileName, { type: 'image/jpeg' }) // Puedes ajustar el tipo de archivo según el formato de la imagen

      return file
    },
    isBase64(str) {
      if (typeof str !== 'string') {
        return false
      }
      const regex = /^data:image\/[a-z]+;base64,/
      return regex.test(str)
    }
  },
  updated() {
    this.datanewpuesto = this.newDatapv
    console.log(this.datanewpuesto)
  },
  mounted() {},
  watch: {
    newpuesto(newVal) {
      this.datanewpuesto = newVal
      console.log(this.newDatapv)
    }
  }
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
