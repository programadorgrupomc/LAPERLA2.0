<script>

import { useNoticiasStore } from '../../../stores/StoreNoticias/storeNoticias'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
    data() {
        return {
            estadovernoticia: true,
            noticias: '',
            modules: [Swiper],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['idnoticia'],
    methods: {
        cambiarestadovernoticia() {
            this.estadovernoticia = !this.estadovernoticia;
            this.$emit('vernoticiacam', this.estadovernoticia);
        },
        async obtenerNoticiasf() {
            const noticiasstore = useNoticiasStore();
            try {
                await noticiasstore.obtenernoticias();
                this.noticias = noticiasstore.noticias;
            } catch (error) {
                console.log('Error al obtener usuarios');
            }
        }
    },
    created() {
        this.obtenerNoticiasf();
    }
}
</script>
<template>
    <div>
        <div class="flex justify-end">
            <button @click="cambiarestadovernoticia" class="btn-back flex items-center"> <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
                <p>Atras</p>
            </button>
        </div>

        <div v-for="noticia in noticias">
            <div v-if="noticia._id === idnoticia" class="overflow-hidden cont-des bg-FondoPerla">
                <!-- hero -->
                <div class="descnot">
                    <img loading="lazy" class="object-cover w-full h-full"
                        src="../../../assets/AssetsNoticias/imgHeroDescNotica.jpg" alt="imgnotid" />
                </div>
                <!-- desc -->
                <div class="dscnot5k">
                    <!-- ttl -->
                    <div class="ttls-descnot">
                        <p class="ttls-descnot1 text-MarronPerla">NOTICIAS</p>
                        <p class="text-AzulPerla ttlcentraldesnot">{{ noticia.titulo }}</p>
                        <p class="ttls-descnot2 text-AzulPerla">{{ noticia.fecha }}</p>
                    </div>
                    <div class="lg:flex lg:items-center">
                        <!-- texto centrado -->
                        <div class="textodesnot text-justify text-AzulPerla break-inside-avoid lg:text-left lg:w-2/4">
                            <p>{{ noticia.descripcion }}</p>
                        </div>
                        <!-- swiper -->
                        <div class="flex justify-center items-center lg:w-2/4">
                            <swiper :space-between="30" :centered-slides="true" :pagination="{ clickable: true }"
                                class="mySwiper">
                                <swiper-slide v-for="i in 5" :key="i">
                                    <img loading="lazy" class="ncrr object-cover w-full"
                                        src="../../../assets/AssetsNoticias/imgnot1(4).jpg" alt="noticia">
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.btn-back {
    padding: 5%;
    padding-bottom: 0%;
    font-size: 5vw;
}

.cont-des {
    overflow: hidden;
    background-color: #FCF5EB;
}

.descnot {
    height: 65vh;
    width: 100%;
}

.dscnot5k {
    padding: 4%;
}

.ttls-descnot {
    font-family: "KarbonRegular";
    padding-bottom: 4%;
}

.ttls-descnot1 {
    font-size: 6vw;
    line-height: normal;
}

.ttlcentraldesnot {
    font-family: "GilroyBold";
    font-size: 8vw;
    line-height: normal;
}

.ttls-descnot2 {
    font-size: 6.5vw;
    line-height: normal;
}

.textodesnot {
    font-family: "KarbonRegular";
    padding-bottom: 4%;
    font-size: 5vw;
    line-height: normal;
}

@media (min-width: 768px) {
    .btn-back {
        padding: 5%;
        padding-bottom: 0%;
        font-size: 4vw;
    }
}

@media (min-width: 1024px) {
    .btn-back {
        padding: 5%;
        padding-bottom: 0%;
        font-size: 1vw;
    }


    .cont-des {
        margin-top: 2vh;
    }

    .descnot {
        height: 55vh;
        width: 100%;
    }

    .dscnot5k {
        padding-right: 0%;
    }

    .ttls-descnot1 {
        font-size: 2vw;
    }

    .ttlcentraldesnot {
        font-size: 4vw;
    }

    .ttls-descnot2 {
        font-size: 3vw;
    }

    .textodesnot {
        font-size: 1.8vw;
        padding: 2%;
        padding-right: 4%;
    }
}
</style>