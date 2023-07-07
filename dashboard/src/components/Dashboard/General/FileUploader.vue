<template>
  <div width="auto">
    <div class="upload-example">
      <Cropper ref="cropper" class="upload-example-cropper" :src="image"
        :stencil-component="$options.components.StencilFup" />
      <div class="button-wrapper">
        <!-- <span class="button" @click="$refs.file.click()">
                    <input type="file" ref="file" @change="uploadImage($event)" accept="image/*" />
                    Upload image
                </span> -->
        <!-- <button class="button" @click="">Nuevo</button> -->
        <button class="button" @click="cropImage">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import StencilFup from './StencilFup.vue'

export default {
  name: 'vueImageCropperExample',
  components: {
    Cropper,
    StencilFup
  },
  data() {
    return {
      cropperOptions: {}
    }
  },
  props: ['image'],
  methods: {
    cropImage() {
      const result = this.$refs.cropper.getResult()

      // const newTab = window.open();
      // newTab.document.body.innerHTML = `<img src="${result.canvas.toDataURL(
      //     "image/jpeg"
      // )}"></img>`;

      //mandar la imagen recortada
      this.$emit('imagecroped', result.canvas.toDataURL('image/jpeg'))
    }
  }
}
</script>

<style scoped>
.upload-example-cropper {
  border: solid 1px #eee;
  min-height: 300px;
  height: 50vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.484);
  border-radius: 2vw;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 17px;
}

.button {
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  background: #3fb37f;
  cursor: pointer;
  transition: background 0.5s;
  font-family: Open Sans, Arial;
  margin: 0 10px;
  border-radius: 3vw;
}

.button:hover {
  background: #38d890;
}

.button input {
  display: none;
}
</style>
