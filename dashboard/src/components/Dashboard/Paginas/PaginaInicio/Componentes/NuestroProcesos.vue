<template>
    <div class="block overflow-hidden">
        <!-- contenido del titulo -->
        <div class="cont-ttlnp bg-AzulPerla  flex items-center  lg:justify-end">
            <h1 class="text-FondoPerla text-4xl pl-4 md:text-7xl lg:pr-20 lg:text-8xl xl:text-9xl">
                NUESTRO PROCESO
            </h1>
        </div>

        <!-- items de nuestros procesos -->

        <!-- Items Iteractivos -->
        <div v-for="(npro, index) in nuestrosPro" :key="index" class="item-np flex flex-col lg:flex lg:flex-row" :class="{
            'bg-FondoNp1': index % 2 == 0,
            'bg-FondoNp2': index % 2 == 1,
        }, 'npani' + index">
            <!-- imagen -->
            <div class="cont-imgnp h-auto flex justify-center lg:w-1/2" :class="'npimgani' + index">
                <!-- <img class="h-full w-full object-cover imgnpgen py-6" :src="npro.image" :class="{
                    'lg:pl-0': index % 2 == 0,
                    'lg:pr-0': index % 2 == 1,
                }" /> -->
                <div class="h-full w-full object-cover imgnpgen py-6" :class="{
                    'lg:pl-0': index % 2 == 0,
                    'lg:pr-0': index % 2 == 1,
                }">
                    <FileUploaderRect />
                </div>
            </div>
            <!-- contenido cuerpo -->
            <div class="cont-textnp p-14 flex flex-col justify-center lg:w-2/4 lg:px-24 order-first" :class="{
                'lg:order-none': index % 2 == 0,
                'lg:order-first': index % 2 == 1,
            }, 'nptextani' + index">
                <div class="ttlnpe text-NaranjaPerla text-3xl lg:text-4xl break-words">
                    <p class="md:text-6xl" :class="{
                        'text-right': index % 2 == 0,
                        'text-left': index % 2 == 1,
                    }">
                        Etapa {{ index + 1 }}
                    </p>
                </div>
                <div contenteditable="true"
                    class="border border-black ttlnpp text-AzulPerla text-5xl md:text-8xl py-5 lg:text-7xl break-words"
                    :class="{ 'text-right': index % 2 == 0, 'text-left': index % 2 == 1 }">
                    {{ npro.subtitle }}
                </div>
                <div contenteditable="true" class="border border-black ttlnpd text-AzulPerla text-xl">
                    <p class="text-justify md:text-5xl lg:text-xl" :class="{
                        'lg:text-right': index % 2 == 0,
                        'lg:text-left': index % 2 == 1,
                        'lg:pl-28': index % 2 == 0,
                        'lg:pr-28': index % 2 == 1,
                    }">
                        {{ npro.text }}
                    </p>
                </div>
            </div>

            <!-- <div class="w-1" :class="{ 'hidden': index != 2, }"><img class="img-decor relative"
                    src="@/assets/HomeAssets/NpAss/starnpR.png" alt=""></div>
            <div class="w-1" :class="{ 'hidden': index != 4, }"><img class="img-decor2 relative"
                    src="@/assets/HomeAssets/NpAss/starnpR.png" alt="">
            </div> -->
        </div>
    </div>
</template>
<script>
// import imagen1 from "@/assets/Inicio/imgnp.jpeg";
// import imagen2 from "@/assets/Inicio/imgnp (1).jpeg";
// import imagen3 from "@/assets/Inicio/imgnp (2).jpeg";
// import imagen4 from "@/assets/Inicio/imgnp (3).jpeg";
// import imagen5 from "@/assets/Inicio/imgnp (4).jpg";
// import imagen6 from "@/assets/Inicio/imgnp (4).jpg";

import FileUploaderRect from '../../../General/FileUploaderRect.vue';

export default {
    name: "NuestrosProcesos",
    data() {
        return {
            nuestrosPro: [
                {
                    title: "Etapa 1",
                    subtitle: "Reproducción",
                    text: "Nuestras granjas reproductoras están construidas en lugares ideales, aislados con temperatura moderada y cuentan con alta bioseguridad que ayudarán a tener un huevo fértil de calidad.",
                    image: '',
                    alt: "imagen 1",
                },
                {
                    title: "Etapa 2",
                    subtitle: "Incubación",
                    text: "Contamos con una sala de incubación, en la cual los huevos son colocados en bandejas y supervisados constantemente para su correcto desarrollo.",
                    image: '',
                    alt: "imagen 2",
                },
                {
                    title: "Etapa 3",
                    subtitle: "Alimentación",
                    text: "Producimos su alimento con equipos de alta tecnología, utilizando materias primas e insumos rigurosamente seleccionados.",
                    image: '',
                    alt: "imagen 3",
                },
                {
                    title: "Etapa 4",
                    subtitle: "Pollo de Engorde",
                    text: "Le proveemos a nuestras aves alimentos nutritivos para su crecimiento y desarrollo, obteniendo un pollo de excelente rendimiento y buena calidad.",
                    image: '',
                    alt: "imagen 4",
                },
                {
                    title: "Etapa 5",
                    subtitle: "Centro de Beneficio",
                    text: "El proceso final de nuestras aves es una etapa muy importante para garantizar la calidad de nuestro producto.",
                    image: '',
                    alt: "imagen 5",
                },
                {
                    title: "Etapa 6",
                    subtitle: "Distribución",
                    text: "Contamos con una moderna flota de camiones para la distribución del pollo Perla, para estar siempre atentos a las necesidades de nuestros clientes.",
                    image: '',
                    alt: "imagen 6",
                },
            ],
        };
    },
    components: {
        FileUploaderRect
    },
    methods: {

    },
    mounted() {

    },

};
</script>

<style scoped>
.item-np {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.173);
}

.cont-imgnp {
    background-color: rgba(0, 0, 0, 0);
}

.imgnpgen {
    min-height: 20vh;
}

.cont-ttlnp h1 {
    font-family: "TestKarbonSemiBold";
}

.ttlnpe {
    font-family: "TestKarbonRegular";
}

.ttlnpp {
    font-family: "KarbonRegular";
    -webkit-text-stroke: 1px #471d7c;
}

.ttlnpd {
    font-family: "TestKarbonRegular";
}

.img-decor {
    scale: 40;
    left: -180vh;
    top: -0.3%;
}

.img-decor2 {
    scale: 40;
    left: -25vh;
    top: -0.3%;
}

.cont-ttlnp {
    height: 15vh;
}

@media (min-width:1024px) {
    .cont-imgnp {
        background-color: rgba(0, 0, 0, 0);
    }


    .cont-ttlnp h1 {
        font-size: 7vw;
    }

    .cont-ttlnp {
        height: 30vh;
    }

    .ttlnpd p {
        font-size: 1.8vw;
        line-height: normal;
    }
}

@media (min-width: 5120px) {
    .cont-textnp {
        padding: 4%;
    }

    .cont-ttlnp {
        height: 800px;
        line-height: normal;
    }

    .ttlnpe p {
        font-size: 3.5vw;
        line-height: normal;
    }

    .ttlnpp {
        font-size: 5vw;
        line-height: normal;
    }

    .ttlnpd p {
        font-size: 1.8vw;
        line-height: normal;
    }

    .img-decor {
        scale: 150;
        left: -90vw;
        top: -0.3%;
    }

    .img-decor2 {
        scale: 150;
        left: -10vw;
        top: -0.25%;
    }
}
</style>