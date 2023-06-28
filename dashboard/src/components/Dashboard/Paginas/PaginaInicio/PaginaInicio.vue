<template>
    <div class="h-full w-full overflow-y-auto">
        <div class="fixed z-40 lg:z-50 cont-btn">
            <BotonesCrud class="btn-crud" />
        </div>
        <div class="cont-components w-full h-full">
            <componentHero />
            <NuestroPollo1/>
        </div>
    </div>
</template>
<script>
import BotonesCrud from '../../General/BotonesCrud.vue';
import componentHero from './Componentes/componentHero.vue';
import NuestroPollo1 from './Componentes/NuestroPollo1.vue';
export default {
    components: {
        BotonesCrud,
        componentHero,
        NuestroPollo1
    }
}
</script>
<style scoped>


.cont-btn {
    height: 7vh;
    width: auto;
    bottom: 10%;
    right: 1%;
}

.btn-crud {
    height: 10vh;
    /* background-color: rgba(220, 20, 60, 0.238); */
}

@media (min-width: 1024px) {
    .cont-btn {
        width: 30vh;
        top: 0%;
        right: 15vw;
    }

    .btn-crud {
        height: 7vh;
        /* background-color: rgba(220, 20, 60, 0.238); */
    }
}
</style>
