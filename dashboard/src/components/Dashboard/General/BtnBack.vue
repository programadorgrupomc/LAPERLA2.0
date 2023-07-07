<template>
    <button @click="back" class="flex">
        <img class="w-full" src="../../../assets/Dashboard/General/back.svg" alt="back">
        <p>Atras</p>
    </button>
</template>
<script>
export default{
    methods:{
        back(){
            this.$router.go(-1); //Goes to the previous page in history stack
        }
    }
}
</script>
<style scoped>
@media (min-width: 1024px) {
    button {
        width: 5vw;
        font-size: 1.3vw;
    }

    bottom:hover {
        transform: scale(0.8);
    }
}
</style>