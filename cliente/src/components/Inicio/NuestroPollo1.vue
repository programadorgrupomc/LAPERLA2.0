<template>
    <div class="np1 flex flex-col lg:flex-row justify-center">
        <div class="lado1 flex flex-col lg:items-center justify-center lg:justify-around">
            <div class="np1-contenedor  flex flex-col justify-center items-center lg:items-start">
                <p class="titulo text-center lg:text-left">IDENTIDAD</p>
                <p class="texto text-center lg:text-left">Su buen color y voluminosidad es el sello del Pollo Perla.</p>
            </div>
            <div class="np1-contenedor lg:hidden flex justify-center items-center">
                <div class="relative">
                    <div class="circulo-fondo">
                    </div>
                    <img src="../../assets/Inicio/imgcont1.jpg" class="absolute img-circulo shadow-2xl" alt="img-circulo">
                </div>
            </div>
            <div class="np1-contenedor flex justify-center items-center">
                <div class="contenedor-1 relative">
                    <img src="../../assets/Inicio/CarnePollo.png" class="img-1 relative" alt="carne-pollo">
                    <img src="../../assets/Inicio/Row1.svg" class="row-1 relative" alt="row-1">
                    <div class="indicador relative flex flex-col justify-center items-center">
                        <p>Pechuga</p>
                        <p class="porcentaje">35%</p>
                        <p>Del Pollo</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden lado2 lg:flex lg:items-center lg:justify-center">
            <div class="np1-contenedor np1-contenedorlg relative lg:flex justify-center items-center">
                <div class="relative">
                    <div class="circulo-fondo">
                    </div>
                    <img src="../../assets/Inicio/imgcont1.jpg" class="absolute img-circulo shadow-2xl" alt="img-circulo">
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
.np1 {
    padding: 2%;
    width: 100%;
    min-width: 250px;
    height: 100vh;
    min-height: 600px;
}

.lado1 {
    width: 100%;
    min-width: 250px;
    min-height: 600px;
}

.np1-contenedor {
    height: 30%;
    max-height: 30%;
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
    background-color: #FFCD00;
    border-radius: 50%;
}

.img-circulo {
    background-color: transparent;
    height: 22vh;
    width: 22vh;
    border-radius: 50%;
    right: -5%;
    bottom: -5%;
}

.contenedor-1 {
    height: 100%;
}

.img-1 {
    height: 80%;
    left: -40%;
}

.row-1 {
    height: 35%;
    top: -40%;
    right: -25%;
}

.indicador {
    font-size: 2.5vh;
    font-family: "KarbonRegular";
    line-height: 1;
    color: #471D7C;
    -webkit-text-stroke: #471D7C 0.1vh;
    height: 25%;
    top: -60%;
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

    .np1-contenedor {
        min-height: 200px;
    }

    .lado1,
    .lado2 {
        width: 35%;
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
        height: 26vw;
    }

    .row-1 {
        height: 6vw;
        top: -8.5vw;
        right: -20%;
    }

    .indicador {
        font-size: 1.5vw;
        right: -20%;
        top: -11.5vw;
    }

    .porcentaje {
        font-size: 6vw;
    }

    .contenedor-1 {
        top: -60%;
    }
}
</style>