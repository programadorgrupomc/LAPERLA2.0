<template>
    <div class="vista-nosotros">
        <PresentacionNosotros />
        <!-- <div class="h-96"> -->
        <LineaDeTiempo />
        <NuestraFilosofia />
        <CulturaOrganizacional />
    </div>
</template>
<script>
import PresentacionNosotros from '../components/Nosotros/PresentacionNosotros.vue';
import CulturaOrganizacional from '../components/Nosotros/CulturaOrganizacional.vue';
import NuestraFilosofia from '../components/Nosotros/NuestraFilosofia.vue';
import LineaDeTiempo from '../components/Nosotros/LineaDeTiempo.vue';
export default {
    components: {
        PresentacionNosotros,
        CulturaOrganizacional,
        NuestraFilosofia,
        LineaDeTiempo,
    }
}
</script>
<style scoped>
.vista-nosotros {
    overflow: hidden;
}

@media (min-width: 1024px) {
    .vista-nosotros {
        padding-top: 12vh;
    }
}
</style>