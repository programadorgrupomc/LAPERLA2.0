<template>
    <div class="opciones">
        <div v-for="opcion in opciones" :key="opcion.id" class="opciones-opcion flex">
            <img src="../../../assets/General/circle.svg" class="opcion-circle hidden" alt="circle-svg">
            <p class="opcion">{{ opcion.opcion }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            opciones: [
                { id: '1', opcion: 'Inicio', ruta: '' },
                { id: '2', opcion: 'Nosotros', ruta: '' },
                { id: '3', opcion: 'Recetario', ruta: '' },
                { id: '4', opcion: 'Noticias', ruta: '' },
                { id: '5', opcion: 'Trabaja con nosotros', ruta: '' },
                { id: '6', opcion: 'Contáctanos', ruta: '' },
            ]
        }
    },
}
</script>
  
<style scoped>
.opciones {
    background-color: #EBDAC0;
    height: auto;
    width: 100%;
    padding: 2%;
}

.opcion {
    font-family: "KarbonRegular";
    font-size: 10vw;
    font-weight: bold;
    color: #471D7C;
    -webkit-text-stroke: #471D7C 0.5vw;
}
</style>
  