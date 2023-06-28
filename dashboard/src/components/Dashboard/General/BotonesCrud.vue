<template>
    <div class="botones-crud flex flex-col lg:flex-row justify-center items-center">
        <button class="flex justify-center items-center">
            <img class="w-full h-full lg:hidden" src="../../../assets/Dashboard/General/Guardar.svg" alt="">
            <p class="hidden lg:block">Guardar</p>
        </button>
        <button class="flex justify-center items-center">
            <img class="w-full h-full lg:hidden" src="../../../assets/Dashboard/General/escoba.svg" alt="">
            <p class="hidden lg:block">Restaurar</p>
        </button>
        <button class="flex justify-center items-center" @click="retroceder">
            <img class="w-full h-full lg:hidden" src="../../../assets/Dashboard/General/deshacer.svg" alt="">
            <p class="hidden lg:block">Atras</p>
        </button>
    </div>
</template>
<script>
export default {
    methods: {
        retroceder() {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.botones-crud {
    height: 100%;
}

.botones-crud button {
    background-color: #4D3B77;
    height: 70%;
    width: 100%;
    border: white solid;
    border-radius: 2vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    margin-left: 1vh;
    margin-right: 1vh;
    padding: 1vh;
    color: white;
    font-family: "TahomaRegular";
}

@media (min-width: 1024px) {
    .botones-crud {
        height: 100%;
    }

    .botones-crud button {
        background-color: transparent;
        height: 70%;
        width: 100%;
        border: white solid;
        border-radius: 3vh;
        margin-left: 1vh;
        margin-right: 1vh;
        padding: 1vh;
        padding-left: 2vh;
        padding-right: 2vh;
        color: white;
        font-family: "TahomaRegular";
    }
}
</style>