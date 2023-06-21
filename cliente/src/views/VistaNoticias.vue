<template>
    <div class="vista-noticias">
        <NoticiasNoticia />
    </div>
</template>
<script>
import NoticiasNoticia from '../components/Noticias/NoticiasNoticia.vue';
export default {
    components: {
        NoticiasNoticia,
    }
}
</script>
<style scoped>
@media (min-width: 1024px) {
    .vista-noticias {
        padding-top: 12vh;
    }
}
</style>