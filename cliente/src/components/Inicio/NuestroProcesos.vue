<template>
    <div class="nuestros-procesos">
        <div class="procesos-titulo flex  items-center">
            <div class="titulo m-auto text-end">
                NUESTROS PROCESOS
            </div>
        </div>
        <div v-for="(proceso, index) in myData" :key="index" class="proceso-item lg:flex" :class="{
            'bg-FondoNp1': index % 2 == 0,
            'bg-FondoNp2': index % 2 == 1,
        }">
            <div class="item-txt flex">
                <div class="txt">
                    <p class="txt-etapa" :class="{
                        'text-right': index % 2 == 0,
                        'text-left': index % 2 == 1,
                    }">Etapa {{ proceso.id }}</p>
                    <p class="txt-titulo" :class="{
                        'text-right': index % 2 == 0,
                        'text-left': index % 2 == 1,
                    }">{{ proceso.titulo }}</p>
                    <p class="txt-descripcion">{{ proceso.descripcion }}</p>
                </div>
            </div>
            <div class="item-img" :class="{
                'lg:order-none': index % 2 == 1,
                'lg:order-first': index % 2 == 0,
            }">
                <img :src="proceso.imagen" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import img0 from '../../assets/Inicio/imgnp.jpeg'

export default {
    data() {
        return {
            myData: [
                {
                    id: '1',
                    titulo: 'Reproducción',
                    descripcion: 'Nuestras granjas reproductoras están construidas en lugares ideales, aislados con temperatura moderada y cuentan con alta bioseguridad que ayudarán a tener un huevo fértil de calidad.',
                    imagen: img0
                },
                {
                    id: '2',
                    titulo: 'Incubación',
                    descripcion: 'Nuestra planta de Incubación cuenta con salas de ambiente controlado y un sistema de monitoreo tecnologico.',
                    imagen: img0
                },
                {
                    id: '3',
                    titulo: 'Alimentación',
                    descripcion: 'Producimos su alimento con equipos de alta tecnología, utilizando materias primas e insumos rigurosamente seleccionados.',
                    imagen: img0
                },
                {
                    id: '4',
                    titulo: 'Pollo de Engorde',
                    descripcion: 'Le proveemos a nuestras aves alimentos nutritivos para su crecimiento y desarrollo, obteniendo un pollo de excelente rendimiento y buena calidad.',
                    imagen: img0
                },
                {
                    id: '5',
                    titulo: 'Centro de Beneficio',
                    descripcion: 'El proceso final de nuestras aves es una etapa muy importante para garantizar la calidad de nuestro producto.',
                    imagen: img0
                },
                {
                    id: '6',
                    titulo: 'Distribución',
                    descripcion: 'Contamos con una moderna flota de camiones para la distribución del pollo Perla, para estar siempre atentos a las necesidades de nuestros clientes.',
                    imagen: img0
                },
            ]
        }
    }
}
</script>

<style scoped>
.nuestros-procesos {
    width: 100%;
    min-width: 250px;
}

.procesos-titulo {
    background-color: #471D7C;
    min-height: 12vh;
}

.titulo {
    width: 95%;
    font-family: "TestKarbonSemiBold";
    color: #FCF5EB;
    font-size: 4.5vh;
}

.proceso-item {
    border: #471D7C solid;
}

.item-txt {
    border: #471D7C solid;
    min-height: 40vh;
}

.txt {
    border: #471D7C solid;
    text-align: right;
    width: 90%;
    margin: auto;
}

.txt-etapa {
    font-family: "TestKarbonRegular";
    color: #FF7439;
    font-size: 5vh;
    line-height: normal;
}

.txt-titulo {
    font-family: "KarbonRegular";
    color: #471D7C;
    -webkit-text-stroke: #471D7C 0.2vh;
    font-size: 6vh;
    line-height: normal;
}

.txt-descripcion {
    font-family: "TestKarbonRegular";
    color: #471D7C;
    font-size: 2.5vh;
    text-align: justify;
    line-height: normal;
}

.item-img {
    border: #471D7C solid;
    height: 35vh;
    min-height: 40%;
}

.item-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (min-width: 1024px) {
    .procesos-titulo {
        min-height: 15vw;
    }

    .titulo {
        font-size: 7vw;
    }

    .item-txt,
    .item-img {
        width: 100%;
        min-height: 30vw;
    }

    .txt {
        height: 95%;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .txt-etapa {
        font-size: 4vw;
    }

    .txt-titulo {
        font-size: 4.1vw;
    }

    .txt-descripcion {
        font-size: 2vw;
        padding-top: 2%;
    }
}
</style>
