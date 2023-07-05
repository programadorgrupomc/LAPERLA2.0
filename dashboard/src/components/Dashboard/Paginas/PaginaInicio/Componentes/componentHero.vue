<template>
  <div v-if="heroesdata && heroesdata.length > 0" class="cont-ch w-full h-full">
    <FileUploaderRect :imagedetbd="heroesdata[3].imgVisual" />
  </div>
</template>
<script>
import FileUploaderRect from '../../../General/FileUploaderRect.vue'
export default {
  methods: {
    playVideo(className) {
      const video = document.getElementsByClassName(className)[0]
      video.play()
    }
  },
  components: {
    FileUploaderRect
  },
  props: ['heroesdata'],
}
</script>
<style scoped>
.cont-ch {
  max-height: 100vh;
  height: 100vh;
}

.video-es {
  width: 100%;
  height: 90vh;
  object-fit: fill;
  display: none;
}

.video-ta {
  width: 100%;
  height: 90vh;
  object-fit: fill;
  display: none;
}

.video-mo {
  width: 100%;
  height: 90vh;
  object-fit: fill;
}

@media (min-width: 768px) {
  .video-ta {
    display: block;
  }

  .video-mo {
    display: none;
  }
}

@media (min-width: 1024px) {
  .video-es {
    display: block;
  }

  .video-ta {
    display: none;
  }

  .video-mo {
    display: none;
  }
}
</style>
