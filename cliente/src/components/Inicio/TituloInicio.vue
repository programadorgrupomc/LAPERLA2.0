<template>
    <div class="cont-titulo">
        <div class="ttl1">
            <p>
                NUESTRO POLLO
            </p>
        </div>
        <div class="ttl2">
            <img loading="lazy" src="../../assets/Inicio/LaPerlaTitulo.png" alt="la perla">
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.cont-titulo {
    padding-left: 5%;
    padding-bottom: 5%;
    padding-top: 5%;
    width: 100%;
}

.ttl1 {
    color: #FF7439;
    width: 100%;
    font-family: "TestKarbonMedium";
    font-size: 6.5vw;
    padding-left: 1.5%;
    line-height: normal;
    -webkit-text-stroke: 0.1vw #FF7439;

}

.ttl2 img {
    width: 80%;
    object-fit: cover;
}

@media (min-width: 1024px) {
    .cont-titulo {
        padding-top: 4%;
        padding-left: 5%;
        padding-bottom: 8%;
        width: 100%;
    }

    .ttl1 {
        color: #FF7439;
        width: 100%;
        font-family: "TestKarbonMedium";
        font-size: 3.2vw;
        padding-left: 1.5%;
        line-height: normal;
        -webkit-text-stroke: 0.1vw #FF7439;

    }

    .ttl2 img {
        width: 55%;
    }
}
</style>