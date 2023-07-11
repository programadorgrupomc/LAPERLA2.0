<script>
export default {
  name: 'direcciones',
  data() {
    return {
      directions: [
        {
          ciudad: 'TRUJILLO',
          direccion: 'John F. Kennedy N° 189 – Urb. La Perla',
          telefono: '044 221355'
        },
        {
          ciudad: 'CHICLAYO',
          direccion: 'Calle San José 531 – Of. 301',
          telefono: '044 221980'
        },
        {
          ciudad: 'VALLE CHICAMA',
          direccion: '',
          telefono: '949336483'
        },
        {
          ciudad: 'CAJAMARCA',
          direccion: 'Jr. Emilio Barrantes N° 231 – Urb. Horacio Zevallos',
          telefono: '044 368323'
        },
        {
          ciudad: 'CHIMBOTE',
          direccion: 'Jr. Enrique Palacios N° 441 – Of. 201 (casco urbano)',
          telefono: '044 323882'
        },
        {
          ciudad: 'PIURA',
          direccion: 'Av. Loreto N° 142 – 2do. Piso – Of. N° 2',
          telefono: '044 300071'
        },
        {
          ciudad: 'PACASMAYO',
          direccion: 'Jr. 02 de Mayo N° 538 – San Pedro de Lloc',
          telefono: '044 221355'
        },
        {
          ciudad: 'BARRANCA',
          direccion: 'Mz. G – Lote 23 – Urb. Jardín',
          telefono: '01-2355848'
        },
        {
          ciudad: 'CASMA',
          direccion: 'Calle Los Cipreces Mz. B – Lote 09',
          telefono: '01-2355848'
        }
      ]
    }
  },
  methods: {},
  mounted() {}
}
</script>
<template>
  <div v-if="directions" class="lg:columns-2 p-20 cont-dir bg-FondoPerla font-bold overflow-hidden">
    <div
      v-for="i in directions"
      :key="i"
      class="dir-contactuno py-2 text-center text-AzulPerla flex flex-col break-inside-avoid md:text-3xl lg:text-xl"
    >
      <p class="font-TestKarbonBold">{{ i.ciudad }}</p>
      <p>{{ i.direccion }}</p>
      <p>Telefono: {{ i.telefono }}</p>
    </div>
  </div>
</template>
<style scoped>
.cont-dir {
  font-family: 'KarbonRegular';
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
