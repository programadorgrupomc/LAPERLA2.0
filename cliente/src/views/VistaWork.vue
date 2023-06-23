<template>
    <div class="vista-work">
        <HeroWork />
        <PresentacionWork />
        <CodigoEtica/>
    </div>
</template>
<script>
import HeroWork from '../components/Work/HeroWork.vue';
import PresentacionWork from '../components/Work/PresentacionWork.vue';
import CodigoEtica from '../components/Work/CodigoEtica.vue';
export default {
    components: {
        HeroWork,
        PresentacionWork,
        CodigoEtica
    }
}
</script>

<style scoped>
.vista-work {
    padding-top: 0vh;
}

@media (min-width: 1024px) {
    .vista-work {
        padding-top: 12vh;
    }
}
</style>