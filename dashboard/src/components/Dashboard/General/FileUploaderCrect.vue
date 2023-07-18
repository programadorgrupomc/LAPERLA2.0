<template>
  <div>
    <div class="upload-example">
      <Cropper ref="cropper" class="upload-example-cropper" :src="image" :options="cropperOptions" />
      <div class="button-wrapper">
        <button class="button" @click="cropImage">Guardar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

export default {
  name: 'vueImageCropperExample',
  components: {
    Cropper
  },
  data() {
    return {
      cropperOptions: {} // You can set specific options for the cropper here
    }
  },
  props: ['image'],
  methods: {
    cropImage() {
      const result = this.$refs.cropper.getResult()

      // emit the cropped image data
      this.$emit('imagecroped', result.canvas.toDataURL('image/jpeg'))
    }
  }
}
</script>

<style scoped>
.upload-example {
  height: 100%;
  transform: scale(0.75);
}

.upload-example-cropper {
  border: solid 1px #eee;
  min-height: 300px;
  height: 100%;
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
