<template>
    <div class="np3 flex flex-col lg:flex-row justify-center">
        <div class="lado1 flex flex-col lg:items-center justify-around lg:justify-around">
            <div class="np3-contenedor contenedor-texto3  flex flex-col justify-center items-center lg:items-start">
                <p class="titulo text-center lg:text-left">JUGOSIDAD</p>
                <p class="texto text-center lg:text-left">Satisfaciendo el gusto más exigente por su suavidad y jugosidad.
                </p>
            </div>
            <div class="np3-contenedor lg:hidden flex justify-center items-center">
                <div class="relative">
                    <div class="circulo-fondo3">
                    </div>
                    <img src="../../assets/Inicio/imgcont3.jpg" class="absolute img-circulo3 shadow-2xl" alt="img-circulo3">
                </div>
            </div>
        </div>
        <div class="hidden lado2 lg:flex lg:items-center lg:justify-center">
            <div class="np3-contenedor np3-contenedorlg relative lg:flex justify-center items-center">
                <div class="relative">
                    <div class="circulo-fondo3">
                    </div>
                    <img src="../../assets/Inicio/imgcont3.jpg" class="absolute img-circulo3 shadow-2xl" alt="img-circulo3">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    data() {
        return {

        }
    },
    methods: {
        animacionNp3() {
            const lineaTiempo = gsap.timeline({
                scrollTrigger: {
                    trigger: ".np3",
                    start: "top top",
                    end: "+=500%",
                    scrub: 1.1,
                    // markers: true,
                    pin: true,
                    //pinSpacing: false,
                    onStart: () => {
                        ScrollTrigger.refresh();
                    },
                    onComplete: () => {
                        ScrollTrigger.refresh();
                    },
                }
            });
            lineaTiempo.from(".img-circulo3", {
                opacity: 0,
                scale: 7,
            });
            lineaTiempo.from(".circulo-fondo3", {
                delay: 0.2,
                opacity: 0
            }, 0);
            lineaTiempo.from(".contenedor-texto3", {
                scale: 0.9,
                opacity: 0,
                xPercent: -50,
                yPercent: -50,
                // duration: 2,
            });
            lineaTiempo.to(".img-circulo3", {
                bottom: "0%",
                right: "5%",
            }, "1");
            lineaTiempo.to(".circulo-fondo3", {
                scale: 1.2,
            }, 1);
        },
        actualizarAnimacion() {
            // Actualiza la animación cuando cambie el tamaño de la ventana
            ScrollTrigger.refresh();
            window.addEventListener('resize', this.actualizarAnimacion);
        },
    },
    mounted() {
        this.animacionNp3();
    },
    beforeUnmount() {
        // Remueve el evento resize al desmontar el componente
        window.removeEventListener('resize', this.actualizarAnimacion);
    },
}
</script>
<style scoped>
.np3 {
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

.np3-contenedor {
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

.circulo-fondo3 {
    width: 25vh;
    height: 25vh;
    background-color: #8A67BF;
    border-radius: 50%;
}

.img-circulo3 {
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

    .np3-contenedor {
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

    .circulo-fondo3 {
        height: 35vw;
        width: 35vw;
    }

    .img-circulo3 {
        width: 30vw;
        height: 30vw;
    }

    .img-1 {
        height: 26vw;
    }

    .row-1 {
        height: 6vw;
        top: -12.5vw;
        right: -20%;
    }

    .indicador {
        font-size: 1.5vw;
        right: -20%;
        top: -15.5vw;
    }

    .porcentaje {
        font-size: 6vw;
    }

    .contenedor-1 {
        top: -60%;
    }
}
</style>