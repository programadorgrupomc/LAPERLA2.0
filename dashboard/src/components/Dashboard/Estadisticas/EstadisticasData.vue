<template>
  <div class="cont-inputs">
    <div class="cont-input bg1 flex flex-col justify-center items-center text-white transition-all">
      Base de datos
      <router-link to="/dashboard/estadisticas/basededatos">
        <button @click="cambiarestadoRf" class="btn-plus">Ver mas</button>
      </router-link>
    </div>
    <div class="cont-input bg2 flex flex-col justify-center items-center text-white transition-all">
      Dashboard
      <router-link to="/dashboard/estadisticas/dashboard">
        <button @click="cambiarestadonot" class="btn-plus">Ver mas</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.cont-input {
  height: 30%;
  margin-top: 3vw;
  margin-bottom: 3vw;
  overflow: hidden;
  width: 100%;
  font-size: 6vw;
  font-weight: bold;
  min-height: 150px;
}

.btn-plus {
  font-size: 4vw;
  font-weight: lighter;
}

.bg1 {
  background-image: url('@/assets/Dashboard/Entradas/wel-es1.jpg');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
}

.bg2 {
  background-image: url('@/assets/Dashboard/Entradas/wel-es2.jpg');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
}

@media (min-width: 768px) {
  .cont-input {
    height: 29%;
    margin-top: 3vw;
    margin-bottom: 3vw;
    overflow: hidden;
    width: 100%;
    font-size: 5vw;
    font-weight: bold;
    min-height: 150px;
  }

  .btn-plus {
    font-size: 3.5vw;
    font-weight: lighter;
  }
}

@media (min-width: 1024px) {
  .cont-input {
    height: 40%;
    margin-top: 1vw;
    margin-bottom: 1vw;
    overflow: hidden;
    width: 100%;
    font-size: 2vw;
    font-weight: bold;
    min-height: 300px;
  }

  .btn-plus {
    font-size: 1.5vw;
    font-weight: lighter;
  }
}
</style>
