<template>
  <div width="auto">
    <div class="upload-example">
      <Cropper
        ref="cropper"
        class="upload-example-cropper"
        :src="image"
        :stencil-component="$options.components.StencilFup"
        :options="cropperOptions"
      />
      <div class="button-wrapper">
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
      cropperOptions: {
        aspectRatio: 16 / 9 // Establecer la relación de aspecto 16:9
      }
    }
  },
  props: ['image'],
  methods: {
    cropImage() {
      const result = this.$refs.cropper.getResult()
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
