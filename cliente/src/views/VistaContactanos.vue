<template>
    <div class="vista-contactanos">
        <ContactanosFormulario />
        <ContactanosMapa />
        <ContactanosDirecciones />
    </div>
</template>
<script>
import ContactanosFormulario from '../components/Contactanos/ContactanosFormulario.vue';
import ContactanosDirecciones from '../components/Contactanos/ContactanosDirecciones.vue';
import ContactanosMapa from '../components/Contactanos/ContactanosMapa.vue';
export default {
    components: {
        ContactanosFormulario,
        ContactanosDirecciones,
        ContactanosMapa
    }
}   
</script>
<style scoped>
.vista-contactanos{
    background-color: #FCF5EB;
}
@media (min-width: 1024px) {
    .vista-contactanos {
    padding-top: 12vh;
}
}
</style>