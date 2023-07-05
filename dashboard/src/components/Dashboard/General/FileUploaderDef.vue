<template>
  <div class="w-full h-full relative">
    <div v-if="!showEditPopup && previewUrl" class="absolute z-40 lg:z-50 w-full h-full cont-btn">
      <button @click="nuevoClick">Reemplazar</button>
      <!-- <button v-if="!showEditPopup" @click="showEditPopup = true">Editar</button>
            <button v-if="showEditPopup" @click="showEditPopup = false">Cancelar</button> -->
    </div>
    <div class="relative h-full z-30 w-full lg:h-full flex justify-center items-center" v-if="!previewUrl">
      <img class="absolute loadicon" src="../../../assets/Dashboard/General/IconoLoadVideo.svg" alt="" />
      <input type="file" @change="handleFileChange" class="bg-black h-1/4 w-1/4 opacity-0" />
    </div>

    <div v-if="previewUrl" class="h-full w-full">
      <img :src="previewUrl" v-if="isImage" class="w-full h-full object-cover rounded-full" />
      <video :src="previewUrl" v-else-if="isVideo" class="h-full w-full" controls></video>
      <iframe :src="previewUrl" v-else-if="isPDF" class="h-screen lg:h-full w-full"></iframe>
      <div v-else>Archivo no compatible</div>
    </div>
    <!-- proceso de editar la imagen -->
    <div class="popup absolute z-50" v-if="showEditPopup">
      <!-- este seria el uploader circular -->
      <FileUploader :image="this.previewUrl" class=" " @imagecroped="actualizarimagen" />
    </div>
  </div>
</template>
<script>
import FileUploader from './FileUploader.vue'
export default {
  data() {
    return {
      previewUrl: '',
      isImage: false,
      isVideo: false,
      isPDF: false,
      fileLoaded: false,
      showEditPopup: false
    }
  },
  props: ['imagebd'],
  components: {
    FileUploader
  },
  methods: {
    nuevoClick() {
      // Restablecer o reiniciar las propiedades relacionadas con la imagen aquí
      this.previewUrl = ''
      this.isImage = false
      this.isVideo = false
      this.isPDF = false
      this.fileLoaded = false
    },
    handleFileChange(event) {
      const file = event.target.files[0]

      if (file) {
        const reader = new FileReader()
        reader.onload = () => {
          this.previewUrl = reader.result

          if (file.type.includes('image')) {
            this.isImage = true
            this.isVideo = false
            this.isPDF = false
          } else if (file.type.includes('video')) {
            this.isImage = false
            this.isVideo = true
            this.isPDF = false
          } else if (file.type.includes('pdf')) {
            this.isImage = false
            this.isVideo = false
            this.isPDF = true
          } else {
            this.isImage = false
            this.isVideo = false
            this.isPDF = false
          }
        }

        reader.readAsDataURL(file)
        this.fileLoaded = true
        this.showEditPopup = true
      } else {
        this.previewUrl = ''
        this.isImage = false
        this.isVideo = false
        this.isPDF = false
        this.fileLoaded = false
        this.showEditPopup = true
      }
    },
    handleProcess: function (event) {
      console.log(event)
      // this.inlineResult = URL.createObjectURL(event.detail.dest);
    },
    actualizarimagen(valor) {
      this.previewUrl = valor
      this.showEditPopup = false
      this.$emit('imgrecortada', this.previewUrl);
    }
  },
  mounted() {
    this.previewUrl = `http://localhost:3000/uploads/${this.imagebd}`
    this.isImage = true
  }
}
</script>

<style scoped>
.cont-btn {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2%;
}

.cont-btn button {
  border: white solid;
  border-radius: 5vh;
  margin: 0.5%;
  padding: 0.5%;
  padding-left: 1.5%;
  padding-right: 1.5%;
  color: white;
  background-color: #ff7439;
}

.popup {
  height: 100%;
  width: 100%;
  top: 0%;
  background-color: rgba(255, 255, 255, 0.484);
  border-radius: 2vw;
}

.loadicon {
  animation: myAnim 2s ease 0s infinite normal forwards;
}

@keyframes myAnim {
  0% {
    animation-timing-function: ease-out;
    transform: scale(1);
    transform-origin: center center;
  }

  10% {
    animation-timing-function: ease-in;
    transform: scale(0.91);
  }

  17% {
    animation-timing-function: ease-out;
    transform: scale(0.98);
  }

  33% {
    animation-timing-function: ease-in;
    transform: scale(0.87);
  }

  45% {
    animation-timing-function: ease-out;
    transform: scale(1);
  }
}
</style>
