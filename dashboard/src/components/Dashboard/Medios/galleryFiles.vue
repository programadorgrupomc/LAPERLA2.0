<template>
  <div>
    <div class="gallery relative">
      <div
        v-for="file in fileList"
        :key="file.name"
        class="gallery-item m-auto"
        @click="selectImage(file)"
      >
        <img
          loading="lazy"
          class="bg-slate-700 rounded-3xl"
          :src="`http://localhost:3000/uploads/images/${file.name}`"
          :alt="file.name"
        />
        <p class="text-center">{{ file.name }}</p>
      </div>
    </div>
    <div v-if="selectedImage" class="modal">
      <div class="modal-content m-auto">
        <img
          class=" "
          :src="`http://localhost:3000/uploads/images/${selectedImage.name}`"
          :alt="selectedImage.name"
        />
        <button class="close-button" @click="selectedImage = null">Cerrar</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      fileList: [],
      selectedImage: null
    }
  },
  mounted() {
    this.fetchFiles()
  },
  methods: {
    fetchFiles() {
      axios
        .get('http://localhost:3000/files')
        .then((response) => {
          this.fileList = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    selectImage(image) {
      this.selectedImage = image
    }
  }
}
</script>
<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
}

.gallery-item {
  flex: 0 0 25%;
  padding: 10px;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: auto;
}

.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0%;
  left: 10%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 60%;
  max-height: 60%;
}

.modal-content img {
  object-fit: cover;
  max-height: 60vh;
}

.close {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}

.close:hover {
  color: #ccc;
}

.close-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
}
</style>
