<template>
  <div class="botones-crud flex flex-col lg:flex-row justify-center items-center">
    <button @click="guardar" class="flex justify-center items-center">
      <img class="w-full h-full lg:hidden" src="@/assets/Dashboard/General/Guardar.svg" alt="" />
      <p class="hidden lg:block">Guardar</p>
    </button>
    <button @click="restaurar" class="flex justify-center items-center">
      <img class="w-full h-full lg:hidden" src="@/assets/Dashboard/General/escoba.svg" alt="" />
      <p class="hidden lg:block">Restaurar</p>
    </button>
    <button class="flex justify-center items-center" @click="retroceder">
      <img class="w-full h-full lg:hidden" src="@/assets/Dashboard/General/deshacer.svg" alt="" />
      <p class="hidden lg:block">Atras</p>
    </button>
  </div>
</template>

<script>
import apiPuestosVacantes from '../../../../services/Work/apiPuestosVacantes'

export default {
  props: {
    newpuestoData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    async guardar() {
      const rpta = window.confirm('Desea Guardar La Publicacion?')
      if (rpta) {
        if (this.newpuestoData._idformulario === null) {
          alert('Debe Selleccionar un Tipo de Formulario!')
        } else {
          const nombreArchivo = 'imagen_salida.png'
          let archivo

          if (this.isBase64(this.newpuestoData.imgPuesto)) {
            archivo = this.base64ToFile(this.newpuestoData.imgPuesto, nombreArchivo)
          } else {
            archivo = ''
          }

          const formData = new FormData()
          formData.append('titulo', this.newpuestoData.titulo)
          formData.append('experiencia', this.newpuestoData.experiencia)
          formData.append('departamento', this.newpuestoData.departamento)
          formData.append('tipoempleo', this.newpuestoData.tipoempleo)
          formData.append('objetivoPuesto', this.newpuestoData.objetivoPuesto)
          formData.append('funciones', this.newpuestoData.funciones)
          formData.append('requisitos', this.newpuestoData.requisitos)
          formData.append('_idformulario', this.newpuestoData._idformulario)
          formData.append('imgPuesto', archivo)

          try {
            const response = await apiPuestosVacantes.createPuestosVacantes(formData)
            alert('Registro Exitoso!')
            this.retroceder()
          } catch (error) {
            console.log(`Hubo un error al crear ${error}`)
          }
        }
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
