<script>
export default {
  name: "MapaContact",
};
</script>
<template>
  <div class="map-cont m-0 overflow-hidden">
    <div class="title1 font-bold text-3xl flex lg:justify-end md:text-6xl lg:text-8xl p-5">
      <p class="font-TestKarbonMedium">ENCUÉNTRANOS</p>
    </div>
    <iframe class="mapa-framer border-y-4 border-fuchsia-700"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.86048913910687!2d-79.02385073553225!3d-8.125104840351204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d7c95e8bf2d%3A0xcf36eec94539124a!2sMolino%20La%20Perla%20SAC!5e0!3m2!1ses!2spe!4v1676850785810!5m2!1ses!2spe"
      width="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>
<style scoped>
.title1 {
  color: #471D7C;
}

.map-cont {
  background-color: #fff7ecb6;
}

.mapa-framer {
  height: 50vh;
}

@media (min-width: 5120px) {
  .title1 p {
    font-size: 5vw;
    padding: 3vw;
  }
}
</style>
