<template>
    <div class="np2 flex flex-col lg:flex-row justify-center">
        <div class="hidden lado2 lg:flex lg:items-center lg:justify-center">
            <div class="np2-contenedor np2-contenedorlg relative lg:flex justify-center items-center">
                <div class="relative">
                    <div class="circulo-fondo">
                    </div>
                    <img src="../../assets/Inicio/imgcont2.jpg" class="absolute img-circulo shadow-2xl" alt="img-circulo">
                </div>
            </div>
        </div>
        <div class="lado1 flex flex-col lg:items-center justify-around lg:justify-around">
            <div class="np2-contenedor  flex flex-col justify-center items-center lg:items-end">
                <p class="titulo text-center lg:text-right">FIRMEZA</p>
                <p class="texto text-center lg:text-right">Carne de buena consistencia y excelente textura y fibra muscular.
                </p>
            </div>
            <div class="np2-contenedor lg:hidden flex justify-center items-center">
                <div class="relative">
                    <div class="circulo-fondo">
                    </div>
                    <img src="../../assets/Inicio/imgcont2.jpg" class="absolute img-circulo shadow-2xl" alt="img-circulo">
                </div>
            </div>

        </div>


    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.np2 {
    padding: 2%;
    width: 100%;
    min-width: 250px;
    height: 100vh;
    min-height: 600px;
}

.lado1 {
    width: 100%;
    min-width: 250px;
    min-height: 90vh;
    border: #471D7C solid;
}

.np2-contenedor {
    height: 33%;
    max-height: 33%;
}

.titulo {
    width: 60%;
    font-family: "TestKarbonMedium";
    font-size: 5vh;
    color: #471D7C;
    -webkit-text-stroke: #471D7C 0.1vh;
}

.texto {
    width: 80%;
    font-family: "KarbonRegular";
    color: #471D7C;
    font-size: 3vh;
    -webkit-text-stroke: #471D7C 0.1vh;
}

.circulo-fondo {
    width: 25vh;
    height: 25vh;
    background-color: #EBDAC0;
    border-radius: 50%;
}

.img-circulo {
    background-color: transparent;
    height: 22vh;
    width: 22vh;
    border-radius: 50%;
    right: 12.5%;
    bottom: -5%;
}

.contenedor-2 {
    height: 100%;
}

.img-1 {
    height: 60%;
    left: -30%;
    top: 10%;
}

.row-1 {
    height: 22%;
    top: -20%;
    right: -28%;
}

.indicador {
    font-size: 2.5vh;
    font-family: "KarbonRegular";
    line-height: 1;
    color: #471D7C;
    -webkit-text-stroke: #471D7C 0.1vh;
    height: 25%;
    top: -20%;
    right: -50%;
}

.porcentaje {
    font-size: 6vh;
    font-family: "MuseoSans";
    line-height: normal;
}

@media (min-width: 768px) {
    .texto {
        width: 60%;
    }
}

@media (min-width: 1024px) {

    .np2-contenedor {
        min-height: 200px;
    }

    .lado1,
    .lado2 {
        width: 35%;
        border: #471D7C solid;
    }

    .titulo {
        font-size: 4vw;
    }

    .texto {
        padding-top: 5%;
        font-size: 1.5vw;
    }

    .circulo-fondo {
        height: 35vw;
        width: 35vw;
    }

    .img-circulo {
        width: 30vw;
        height: 30vw;
    }

    .img-1 {
        height: 10vw;
        top: 10vw;
        transform: translateX(150%);
    }

    .row-1 {
        height: 4vw;
        top: 2vw;
        right: 25%;
    }

    .indicador {
        font-size: 2vw;
        right: -20%;
        top: 5vw;
    }

    .porcentaje {
        font-size: 6vw;
    }

    .contenedor-2 {
        top: -60%;
    }
}
</style>