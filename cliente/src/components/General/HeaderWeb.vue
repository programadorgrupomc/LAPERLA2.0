<template>
    <div class="header flex items-center p-1">
        <div class="header-logo">
            <LogoHeader />
        </div>
    </div>
    <div class="header-opciones absolute">
        <OpcionesHeader />
    </div>
</template>
<script>
import LogoHeader from './Header/LogoHeader.vue';
import OpcionesHeader from './Header/OpcionesHeader.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        LogoHeader,
        OpcionesHeader,
    }

}
</script>
<style scoped>
.header {
    background-color: #FCF5EB;
    min-height: 75px;
    height: 9vh;
    max-height: 90px;
    width: 100%;
    min-width: 250px;
}

.header-logo {
    height: 90%;
    width: auto;
}

.header-opciones {
    background-color: #EBDAC0;
    width: 100%;
    height: 100%;
    min-height: 85%;
    min-width: 250px;
}
</style>