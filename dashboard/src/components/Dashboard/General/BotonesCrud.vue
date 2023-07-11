<template>
  <div class="botones-crud flex flex-col lg:flex-row justify-center items-center">
    <button @click="guardarDatosCompletos" class="flex justify-center items-center">
      <img class="w-full h-full lg:hidden" src="../../../assets/Dashboard/General/Guardar.svg" alt="" />
      <p class="hidden lg:block">Guardar</p>
    </button>
    <button @click="restaurar" class="flex justify-center items-center">
      <img class="w-full h-full lg:hidden" src="../../../assets/Dashboard/General/escoba.svg" alt="" />
      <p class="hidden lg:block">Restaurar</p>
    </button>
    <button class="flex justify-center items-center" @click="retroceder">
      <img class="w-full h-full lg:hidden" src="../../../assets/Dashboard/General/deshacer.svg" alt="" />
      <p class="hidden lg:block">Atras</p>
    </button>
  </div>
</template>
<script>
import apiNuestroPollo from '@/services/Inicio/apiNuestroPollo.js'
import apiProcesos from '@/services/Inicio/apiProcesos.js'
import apiHero from '@/services/Inicio/apiHero.js'

export default {
  data() {
    return {
      datahero: '',
      datanp1: '',
      datanp2: '',
      datanp3: '',
      datanp4: '',
      dataproceso: ''
    }
  },
  props: [
    'dataNuestroPollo1',
    'dataNuestroPollo2',
    'dataNuestroPollo3',
    'dataNuestroPollo4',
    'newProcesos',
    'newhero'
  ],
  methods: {
    guardarDatosCompletos() {
      const rpta = window.confirm('Esta seguro de guardar los datos!')

      if (rpta) {
        this.guardarhero();
        // this.guardarnp1();
        // this.guardarnp2();
        // this.guardarnp3();
        // this.guardarnp4();
        //this.guardarprocesos()
      } else {
        alert('Error en datos, Revisar!')
      }
      //location.reload();
    },
    retroceder() {
      this.$router.go(-1)
    },

    guardarhero() {
      const nombreArchivo = 'imagen_salida.png'
      let archivo
      const formData = new FormData()

      if (this.isBase64(this.datahero.imgVisual)) {
        archivo = this.base64ToFile(this.datahero.imgVisual, nombreArchivo)
        formData.append('contenido', this.datahero.contenido)
        formData.append('imgVisual', archivo)
      } else {
        formData.append('contenido', this.datahero.contenido)
        formData.append('imgVisual', this.datahero.imgVisual)
      }

      console.log(archivo)
      apiHero
        .updateHero(this.datahero._id, formData)
        .then((response) => {
          alert('Registro Exitoso!')
        })
        .catch((error) => {
          console.log(`Hubo un error al actualizar ${error}`)
        })
    }
    ,
    guardarnp1() {
      const nombreArchivo = 'imagen_salida.png'
      let archivo

      if (this.isBase64(this.datanp1.imgGeneral)) {
        archivo = this.base64ToFile(this.datanp1.imgGeneral, nombreArchivo)
      } else {
        archivo = ''
      }
      console.log(archivo)
      const formData = new FormData()
      formData.append('titulo', this.datanp1.titulo)
      formData.append('contenido', this.datanp1.contenido)
      formData.append('imgGeneral', archivo) // archivoImgGeneral es un objeto File de la imagen general
      // formData.append('imgDetalle', archivo); // archivoImgDetalle es un objeto

      apiNuestroPollo
        .updateNuestroPollo(this.datanp1._id, formData)
        .then((response) => {
          alert('Registro Exitoso!')
        })
        .catch((error) => {
          console.log(`Hubo un error al actualizar ${error}`)
        })
    },
    guardarnp2() {
      const nombreArchivo = 'imagen_salida.png'
      let archivo

      if (this.isBase64(this.datanp2.imgGeneral)) {
        archivo = this.base64ToFile(this.datanp2.imgGeneral, nombreArchivo)
      } else {
        archivo = ''
      }
      console.log(archivo)
      const formData = new FormData()
      formData.append('titulo', this.datanp2.titulo)
      formData.append('contenido', this.datanp2.contenido)
      formData.append('imgGeneral', archivo) // archivoImgGeneral es un objeto File de la imagen general

      apiNuestroPollo
        .updateNuestroPollo(this.datanp2._id, formData)
        .then((response) => {
          alert('Registro Exitoso!')
        })
        .catch((error) => {
          console.log(`Hubo un error al actualizar ${error}`)
        })
    },
    guardarnp3() {
      const nombreArchivo = 'imagen_salida.png'
      let archivo

      if (this.isBase64(this.datanp3.imgGeneral)) {
        archivo = this.base64ToFile(this.datanp3.imgGeneral, nombreArchivo)
      } else {
        archivo = ''
      }
      console.log(archivo)
      const formData = new FormData()
      formData.append('titulo', this.datanp3.titulo)
      formData.append('contenido', this.datanp3.contenido)
      formData.append('imgGeneral', archivo) // archivoImgGeneral es un objeto File de la imagen general

      apiNuestroPollo
        .updateNuestroPollo(this.datanp3._id, formData)
        .then((response) => {
          alert('Registro Exitoso!')
        })
        .catch((error) => {
          console.log(`Hubo un error al actualizar ${error}`)
        })
    },
    guardarnp4() {
      const nombreArchivo = 'imagen_salida.png'
      let archivo

      if (this.isBase64(this.datanp4.imgGeneral)) {
        archivo = this.base64ToFile(this.datanp4.imgGeneral, nombreArchivo)
      } else {
        archivo = ''
      }

      const formData = new FormData()
      formData.append('titulo', this.datanp4.titulo)
      formData.append('contenido', this.datanp4.contenido)
      formData.append('imgGeneral', archivo) // archivoImgGeneral es un objeto File de la imagen general

      apiNuestroPollo
        .updateNuestroPollo(this.datanp4._id, formData)
        .then((response) => {
          alert('Registro Exitoso!')
        })
        .catch((error) => {
          console.log(`Hubo un error al actualizar ${error}`)
        })
    },
    guardarprocesos() {
      for (let i = 0; i < this.dataproceso.length; i++) {
        const proceso = this.dataproceso[i]
        const nombreArchivo = 'imagen_salida.png'
        let archivo
        console.log(proceso)
        if (this.isBase64(proceso.imagen)) {
          archivo = this.base64ToFile(proceso.imagen, nombreArchivo)
        } else {
          archivo = ''
        }
        console.log(archivo)
        const formData = new FormData()
        formData.append('titulo', proceso.titulo)
        formData.append('contenido', proceso.contenido)
        formData.append('imagen', archivo)
        apiProcesos
          .updateProceso(proceso._id, formData)
          .then((response) => {
            alert('Registro Exitoso procesos!')
          })
          .catch((error) => {
            console.log(`Hubo un error al actualizar ${error}`)
          })
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
    this.datanp1 = this.dataNuestroPollo1
    this.datanp2 = this.dataNuestroPollo2
    this.datanp3 = this.dataNuestroPollo3
    this.datanp4 = this.dataNuestroPollo4
    this.dataproceso = this.newProcesos
    this.datahero = this.newhero
  },
  mounted() { }
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
