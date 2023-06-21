<template>
    <div class="vista-nosotros">
        <PresentacionNosotros />
        <CulturaOrganizacional />
    </div>
</template>
<script>
import PresentacionNosotros from '../components/Nosotros/PresentacionNosotros.vue';
import CulturaOrganizacional from '../components/Nosotros/CulturaOrganizacional.vue';
export default {
    components: {
        PresentacionNosotros,
        CulturaOrganizacional,
    }
}
</script>
<style scoped>
@media (min-width: 1024px) {
    .vista-nosotros {
        padding-top: 12vh;
    }
}
</style>