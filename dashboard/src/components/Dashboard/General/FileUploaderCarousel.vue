<template>
  <div class="relative cont-general h-2/4 w-2/4">
    <div class="carousel" ref="carousel">
      <div class="slide flex relative" v-for="(item, index) in images" :key="index">
        <div class="w-full h-full" v-if="item.type === 'image'">
          <img class="object-contain w-full h-full" :src="item.url" :alt="item.name" />
        </div>
        <div v-else-if="item.type === 'video'">
          <video class="object-contain w-full h-full" :src="item.url" :alt="item.name" autoplay></video>
        </div>
        <button class="absolute btn-deletefile transition-all button" @click="deleteFile(index)">Eliminar</button>
      </div>
    </div>
    <div class="absolute cont-addfile">
      <img class="w-full h-full" src="../../../assets/Dashboard/General/IconoLoadVideo.svg" alt="" />
      <input class="absolute w-full h-full top-0 opacity-0" multiple type="file" @change="handleFileUpload" />
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      images: []
    };
  },
  methods: {
    handleFileUpload(event) {
      const files = event.target.files;
      const convertedFiles = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const type = this.getFileType(file);
        convertedFiles.push(file);
        this.images.push({
          name: file.name,
          url: URL.createObjectURL(file),
          type: type
        });
      }
      console.log(this.images);
      this.$emit("imagesCarousel", convertedFiles);
      this.$nextTick(() => {
        this.scrollToActiveImage();
      });
    },
    getFileType(file) {
      const type = file.type.split('/')[0];
      if (type === 'image') {
        return 'image';
      } else if (type === 'video') {
        return 'video';
      }
      return 'unknown';
    },
    deleteFile(index) {
      const decision = window.confirm("¿Desea eliminar el archivo?");
      if (decision) {
        const file = this.images[index].file;
        URL.revokeObjectURL(this.images[index].url);
        this.images.splice(index, 1);
        this.$emit("imagesCarousel", convertedFiles);//revisar aca :v
      } else {
        alert('No se eliminó ningún archivo.');
      }
    },
    scrollToActiveImage() {
      const activeSlide = this.$refs.carousel.querySelector('.slide.active');
      if (activeSlide) {
        const containerWidth = this.$refs.carousel.offsetWidth;
        const slideWidth = activeSlide.offsetWidth;
        const slideOffsetLeft = activeSlide.offsetLeft;
        const scrollLeft = slideOffsetLeft - (containerWidth - slideWidth) / 2;
        this.$refs.carousel.scrollLeft = scrollLeft;
      }
    }
  }
};
</script>
  
  
<style scoped>
.cont-general {
  border: #9B886F solid;
}

.carousel {
  height: 100%;
  width: 100%;
  display: flex;
  overflow-x: scroll;
}

.slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}

.cont-addfile {
  top: 2%;
  right: 0%;
  height: 15%;
  width: 15%;
  animation: myAnim 2s ease 0s infinite normal forwards;
}

.btn-deletefile {
  top: 2%;
  left: 1%;
  background-color: bisque;
  padding: 1%;
  border-radius: 1vw;
}

.btn-deletefile:hover {
  background-color: rgba(255, 0, 0, 0.459);
  color: white;
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
  