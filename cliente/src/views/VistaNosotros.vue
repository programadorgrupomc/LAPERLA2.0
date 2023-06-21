<template>
    <div class="vista-nosotros">
        <!-- <PresentacionNosotros /> -->
        <div class="h-96">

        </div>
        <LineaDeTiempo />
        <CulturaOrganizacional />
    </div>
</template>
<script>
import PresentacionNosotros from '../components/Nosotros/PresentacionNosotros.vue';
import CulturaOrganizacional from '../components/Nosotros/CulturaOrganizacional.vue';
import LineaDeTiempo from '../components/Nosotros/LineaDeTiempo.vue';
export default {
    components: {
        PresentacionNosotros,
        CulturaOrganizacional,
        LineaDeTiempo,
    }
}
</script>
<style scoped>
.vista-nosotros{
    overflow: hidden;
}
@media (min-width: 1024px) {
    .vista-nosotros {
        padding-top: 12vh;
    }
}
</style>