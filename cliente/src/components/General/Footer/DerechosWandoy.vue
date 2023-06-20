<template>
    <div class="derechos flex justify-center items-center">
        <p>&copy; Wandoy 2023</p>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.derechos {
    background-color: #DEDEDE;
    height: 7vh;
}

.derechos p {
    color: #471D7C;
    font-size: 2vh;
}

@media (min-width: 1024px) {
    .derechos {
        background-color: #DEDEDE;
        height: 5vw;
    }

    .derechos p {
        color: #471D7C;
        font-size: 1.5vw;
    }
}
</style>