<template>
  <div>
    <div class="bg-yellow-300">
      <LogoFooter />
    </div>
    <div>Resto</div>
  </div>
  <div>
    <DerechosWandoy />
  </div>
</template>
<script>
import LogoFooter from './Footer/LogoFooter.vue'
import DerechosWandoy from './Footer/DerechosWandoy.vue'
export default {
  components: {
    LogoFooter,
    DerechosWandoy
  }
}
</script>
<style scoped></style>
