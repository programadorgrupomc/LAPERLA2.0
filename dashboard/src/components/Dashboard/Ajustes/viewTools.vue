<script>
//importacion de la api
import api from '../../../apiRequest/getNotFound.js'

import btnBack from '../../Dashboard/General/BtnBack.vue'

export default {
  data() {
    return {
      notfoundData: {
        status: '',
        mensaje: ''
      },
      idnotFound: '6447f3663960ca082e2d1f10',
      imagenHero: ''
    }
  },
  components: {
    btnBack
  },
  mounted() {
    this.getDataNF()
    setInterval(this.getDataNF, 5000)
    setTimeout(() => {
      this.asigCheck()
    }, 1000)
  },
  methods: {
    previewImage(event) {
      const file = event.target.files[0] // Obtener el archivo seleccionado

      // Verificar si se seleccionó un archivo
      if (file) {
        // Crear una URL local para el archivo seleccionado
        this.imagenHero = URL.createObjectURL(file)
      } else {
        this.imagenHero = '' // Limpiar la URL de la imagen si no se selecciona ningún archivo
      }
    },
    getDataNF() {
      api.getDataGnf().then((response) => {
        this.notfoundData.status = response.data[0].status
        this.notfoundData.mensaje = response.data[0].mensaje
      })
    },
    asigCheck() {
      document.getElementById('switch').checked = this.notfoundData.status
    },
    saveCheckBox() {
      const checkbox = document.getElementById('switch')
      if (checkbox.checked) {
        this.notfoundData.status = false
      } else {
        this.notfoundData.status = true
      }
      console.log(this.notfoundData.status)

      this.updateStatus()
    },
    updateStatus() {
      api
        .updateDataGnf(this.idnotFound, { status: this.notfoundData.status })
        .then((response) => {
          alert('Estado Actualizado', response.data)
        })
        .catch((error) => {
          alert('Hubo un error:', error)
        })
    }
  }
}
</script>
<template>
  <div class="contendorPages">
    <!-- error en overflow-auto (scroll) -->
    <div class="h-screen">
      <p class="tll-section">Ajustes</p>
      <div class="flex flex-col lg:flex-row items-center apt2">
        <div class="break-inside-avoid lg:w-1/4">
          <p>Icono Del Sitio</p>
          <div class="cont-upload flex justify-center items-center p-2 object-cover w-40 border-2 relative">
            <img src="../../assets/cDashboard/Iconmaterial-perm-media.svg" alt="" class="absolute w-full h-full" />
            <input type="file" name="" id="" class="absolute w-full h-full z-50 opacity-0" v-on:change="previewImage" />
            <img :src="imagenHero" class="object-cover w-full h-full" alt="img-hero" />
          </div>
        </div>
        <div class="break-inside-avoid w-full lg:ml-10">
          <p>Titulo del Sitio</p>
          <input class="input-tide" type="text" />
          <p>Descripcion Corta Del Sitio Web</p>
          <textarea name="" id="" class="w-96 h-20 input-tide"></textarea>
        </div>
      </div>
      <div class="h-auto">
        <p class="ttlidzo">Idioma</p>
        <div>
          <select class="selectIdioma" name="" id="">
            <option value="">ES</option>
          </select>
          <input class="input-idzo" type="text" />
        </div>
        <p class="ttlidzo">Zona Horaria del sitio web</p>
        <input class="input-idzo2" type="text" />
      </div>
      <div class="apartado-mat flex justify-between items-center bg-white">
        <div>
          <p class="w-3/4 lg:w-full">Publicar Cambios Realizados</p>
          <!-- <p>............................</p> -->
        </div>
        <button @click="() => alert('Cambios Guardados!')" class="btn-publicar bg-NaranjaPerla text-white">
          Publicar
        </button>
      </div>
      <div class="apartado-mat flex justify-between items-center bg-white">
        <p>Web en mantenimiento</p>
        <input type="checkbox" id="switch" />
        <label @click="saveCheckBox" class="toogle" for="switch">Toggle</label>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cont-upload {
  min-height: 30vw;
}

.tll-section {
  font-size: 5vw;
  font-weight: bold;
}

.selectIdioma {
  background: white;
  border: #aeaeae solid 0.1vw;
  margin-right: 2%;
  padding: 0.2%;
  padding-left: 1%;
  padding-right: 1%;
}

.apt2 {
  padding-top: 2%;
  padding-bottom: 2%;
}

.ttlidzo {
  padding-bottom: 1%;
  padding-top: 1%;
}

.apartado-mat {
  height: 15vw;
  margin-top: 2%;
  padding: 1%;
  padding-left: 3%;
  padding-right: 3%;
  border-radius: 2.5vw;
  border: #aeaeae solid 0.1vw;
}

.btn-publicar {
  padding: 1%;
  padding-left: 6%;
  padding-right: 6%;
  border-radius: 2.5vw;
}

.toogle {
  scale: 0.45;
  transform: translateX(50%);
}

.input-idzo {
  background: white;
  border: #aeaeae solid 0.1vw;
  border-radius: 1vw;
  width: 31.4%;
  padding: 1%;
}

.input-idzo2 {
  background: white;
  border: #aeaeae solid 0.1vw;
  border-radius: 2vw;
  width: 40%;
  padding: 1%;
}

.input-tide {
  background: white;
  border: #aeaeae solid 0.1vw;
  border-radius: 2vw;
  width: 100%;
  padding: 1%;
}

.contendorPages {
  /* por este se mueve la web */
  padding: 5%;
  padding-left: 10%;
  padding-right: 10%;
  background: #f7f7f7;
  height: 100vh;
  padding-bottom: 10vh;
}

input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 200px;
  height: 100px;
  background: #f8f4ee;
  display: block;
  border-radius: 100px;
  position: relative;
  border: #aeaeae solid 0.1vw;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 90px;
  height: 90px;
  background: #ffab57;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked+label {
  /* capas no es necesario */
  background: rgba(172, 255, 47, 0.24);
}

input:checked+label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
  background: #ff8629;
}

label:active:after {
  width: 130px;
}

@media (min-width: 1024px) {
  .cont-upload {
    min-height: 10vw;
  }

  .tll-section {
    font-size: 1.2vw;
    font-weight: bold;
  }

  .input-idzo2 {
    background: white;
    border: #aeaeae solid 0.1vw;
    border-radius: 1vw;
    width: 40%;
    padding: 1%;
  }

  .input-tide {
    background: white;
    border: #aeaeae solid 0.1vw;
    border-radius: 1vw;
    width: 100%;
    padding: 1%;
  }

  .contendorPages {
    /* por este se mueve la web */
    padding: 4.6%;
    padding-left: 15%;
    padding-right: 15%;
    background: #f7f7f7;
  }

  .apartado-mat {
    height: 5vw;
    margin-top: 2%;
    padding: 1%;
    padding-left: 3%;
    padding-right: 3%;
    border-radius: 1.5vw;
    border: #aeaeae solid 0.1vw;
  }

  .toogle {
    scale: 0.45;
  }
}
</style>
