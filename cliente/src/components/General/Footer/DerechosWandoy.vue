<template>
  <div class="derechos flex justify-center items-center">
    <p>&copy; Wandoy 2023</p>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.derechos {
  background-color: #dedede;
  height: 7vh;
}

.derechos p {
  color: #471d7c;
  font-size: 2vh;
}

@media (min-width: 1024px) {
  .derechos {
    background-color: #dedede;
    height: 5vw;
  }

  .derechos p {
    color: #471d7c;
    font-size: 1.5vw;
  }
}
</style>
