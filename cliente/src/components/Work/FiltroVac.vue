<script >
export default {
  name: "FiltroVac",
  data() {
    return {};
  },
};
</script>
<template>
  <div class="filtro-vacantes p-5 px-10 flex flex-col justify-center lg:flex-row lg:justify-between">
    <!-- dropdown -->
    <div>
      <select name="" id="" class="dropfiltro">
        <option value="">Fecha de publicación</option>
        <!-- <option value="">Item1</option> -->
        <!-- <option value="">Item1</option> -->
        <!-- <option value="">Item1</option> -->
      </select>
    </div>
    <div>
      <select name="" id="" class="dropfiltro">
        <option value="">Fecha de vencimiento</option>
        <!-- <option value="">Item1</option> -->
        <!-- <option value="">Item1</option> -->
        <!-- <option value="">Item1</option> -->
      </select>
    </div>
    <div>
      <select name="" id="" class="dropfiltro">
        <option value="">Área</option>
        <!-- <option value="">Item1</option> -->
        <!-- <option value="">Item1</option> -->
        <!-- <option value="">Item1</option> -->
      </select>
    </div>
    <div>
      <select name="" id="" class="dropfiltro">
        <option value="">Carga horaria</option>
        <!-- <option value="">Item1</option> -->
        <!-- <option value="">Item1</option> -->
        <!-- <option value="">Item1</option> -->
      </select>
    </div>
  </div>
</template>

<style scoped>

.dropfiltro {
  background-color: #FFFBF5;
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  border: solid #C8B5A6 0.4vw;
  font-family: "KarbonRegular";
  font-size: 6vw;
  color: black;
  text-align: center;
}

@media (min-width: 768px) {
  .dropfiltro {
    background-color: #FFFBF5;
    width: 100%;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-top: 1%;
    margin-bottom: 1%;
    border: solid #C8B5A6 0.4vw;
    font-family: "KarbonRegular";
    font-size: 4.5vw;
    color: black;
    text-align: center;
  }
}

@media (min-width: 1024px) {
  .dropfiltro {
    width: 18vw;
    padding: 2%;
    margin-top: 2%;
    margin-bottom: 2%;
    border: solid #C8B5A6 0.15vw;
    font-family: "KarbonRegular";
    font-size: 1.5vw;
    color: black;
    text-align: center;

  }

  select {
    overflow: hidden;

  }
}</style>