<script>


export default {
  name: "direcciones",
  data() {
    return {
      directions: [
        {
          ciudad: 'Trujillo',
          direccion:'Calle 86 No. 9A – 46, Of',
          telefono:'+58 (9) 321 234 5'
        }
      ]
    }
  },
  methods: {

  },
  mounted() {
   
  }
};
</script>
<template>
  <div v-if="directions" class="lg:columns-2 p-20 cont-dir bg-FondoPerla font-bold overflow-hidden">
    <div v-for="i in directions" :key="i"
      class="dir-contactuno py-2 text-center text-AzulPerla flex flex-col break-inside-avoid md:text-3xl lg:text-xl">
      <p class="">{{ i.ciudad }}</p>
      <p>{{ i.direccion }}</p>
      <p>Telefono: {{ i.telefono }}</p>
    </div>
  </div>
</template>
<style scoped> 

 .cont-dir {
   font-family: "KarbonRegular";
   -webkit-text-stroke: 0.4px #471d7c;
 }

 .dir-contactuno {
   padding: 2%;
 }

 .dir-contactuno p {
   font-size: 2.5vh;
   line-height: normal;
 }
</style>

