<script>
import { useRecetasStore } from '../../../stores/StoreRecetario/storeRecetas.js';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default {
    data() {
        return {
            estadoverreceta: true,
            recetas: '',
            modules: [Autoplay, Pagination, Navigation],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['idreceta'],
    methods: {
        cambiarestadoverreceta() {
            this.estadoverreceta = !this.estadoverreceta;
            this.$emit('verrecetacam', this.estadoverreceta)
        },
        async obtenerRecetas() {
            const recetasstore = useRecetasStore();
            try {
                await recetasstore.obtenerRecetas();
                this.recetas = recetasstore.recetas;
            } catch (error) {
                console.error('Error al obtener las recetas', error);
            }
        }
    },
    created() {
        this.obtenerRecetas();
    }
}
</script>
<template>
    <div>
        <div class="flex justify-end">
            <button @click="cambiarestadoverreceta" class="btn-back flex items-center"> <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
                <p>Atras</p>
            </button>
        </div>
        <div class="bg-FondoPerla">
            <div class="container lg:hidden bg-FondoPerla mx-auto my-auto">
                <div class="h-auto">
                    <img loading="lazy" class="object-cover w-full" src="../../../assets/AssetsRecetario/receta1.jpg"
                        alt="ImgGenRec">
                </div>
                <div class="ttl-receta px-2 py-4">
                    <h1 class="text-center text-3xl">POLLO DORADO EN SALSA DE SÉSAMO</h1>
                </div>
                <div class="indicator-recetas columns-2 divide-x">
                    <div class="flex flex-col font-KarbonRegular justify-center items-center">
                        <p class="itemind">DIFICULTAD</p>
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21.399" height="16.752"
                                viewBox="0 0 21.399 16.752">
                                <path id="Icon_metro-spoon-fork" data-name="Icon metro-spoon-fork"
                                    d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                                    transform="translate(17.493 -4.025) rotate(60)" fill="#6e5b44" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="21.399" height="16.752"
                                viewBox="0 0 21.399 16.752">
                                <path id="Icon_metro-spoon-fork" data-name="Icon metro-spoon-fork"
                                    d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                                    transform="translate(17.493 -4.025) rotate(60)" fill="#6e5b44" />
                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="21.399" height="16.752"
                                viewBox="0 0 21.399 16.752">
                                <path id="Icon_metro-spoon-fork" data-name="Icon metro-spoon-fork"
                                    d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                                    transform="translate(17.493 -4.025) rotate(60)" fill="#6e5b44" />
                            </svg>
                        </div>
                        <p class="font-KarbonRegular">Media</p>
                    </div>
                    <div class="flex flex-col justify-center items-center font-KarbonRegular break-inside-avoid">
                        <p class="itemind">PORCIONES</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.23" height="18.051"
                                viewBox="0 0 15.23 18.051">
                                <path id="Icon_metro-spoon-fork" data-name="Icon metro-spoon-fork"
                                    d="M6.919,1.928A3.7,3.7,0,0,0,3.535,5.877a3.874,3.874,0,0,0,2.6,3.843l-.56,9.133a1.051,1.051,0,0,0,1.059,1.126H7.2A1.051,1.051,0,0,0,8.26,18.853L7.7,9.719a3.874,3.874,0,0,0,2.6-3.843A3.7,3.7,0,0,0,6.919,1.928Zm11.376,0-.94,5.641H16.65l-.47-5.641h-.47l-.47,5.641h-.705l-.94-5.641h-.47V9.261a.564.564,0,0,0,.564.564h1.469L14.6,18.853a1.051,1.051,0,0,0,1.059,1.126h.564a1.051,1.051,0,0,0,1.059-1.126l-.554-9.028H18.2a.564.564,0,0,0,.564-.564V1.928Z"
                                    transform="translate(-3.535 -1.928)" fill="#6e5b44" />
                            </svg>

                        </div>
                        <p class="font-KarbonRegular">4</p>
                    </div>
                    <div class="flex flex-col justify-center font-KarbonRegular items-center">
                        <p class="itemind">TIEMPO</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23.907" height="23.906"
                                viewBox="0 0 23.907 23.906">
                                <g id="Icon_ionic-ios-timer" data-name="Icon ionic-ios-timer"
                                    transform="translate(16.471 -4.901) rotate(60)">
                                    <path id="Trazado_59" data-name="Trazado 59"
                                        d="M12.339,20.74A8.4,8.4,0,0,1,6.508,6.29a.674.674,0,0,1,.937.97A7.051,7.051,0,1,0,13.011,5.32v2.63a.676.676,0,1,1-1.353,0V4.614a.676.676,0,0,1,.676-.676,8.4,8.4,0,0,1,0,16.8Z"
                                        transform="translate(0 0)" fill="#6e5b44" stroke="#6e5b44" stroke-width="0.7" />
                                    <path id="Trazado_60" data-name="Trazado 60"
                                        d="M11.919,11.331l4.18,3a1.265,1.265,0,0,1-1.47,2.058,1.221,1.221,0,0,1-.294-.294l-3-4.18a.421.421,0,0,1,.588-.588Z"
                                        transform="translate(-2.945 -2.944)" fill="#6e5b44" stroke="#6e5b44"
                                        stroke-width="0.7" />
                                </g>
                            </svg>

                        </div>
                        <p class="font-KarbonRegular">60</p>
                    </div>
                    <div class="flex flex-col justify-center font-KarbonRegular items-center">
                        <p class="itemind">INF. NUTRICIONAL</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.373" height="17.738"
                                viewBox="0 0 16.373 17.738">
                                <g id="Icon_ionic-ios-nutrition" data-name="Icon ionic-ios-nutrition"
                                    transform="translate(-4.5 -3.374)">
                                    <path id="Trazado_61" data-name="Trazado 61"
                                        d="M17.082,13.8h0a.133.133,0,0,1-.017-.026L13.7,10.384h0a1.409,1.409,0,0,0-1.006-.435,1.329,1.329,0,0,0-1.181.695h0s-.145.217-.537.844a.345.345,0,0,0,0,.367l1.143,1.757c.124.162.141.341.06.422l0,0c-.1.1-.252.064-.418-.06L10.38,13.1a.344.344,0,0,0-.473.107c-.934,1.5-2,3.185-3.036,4.861a.341.341,0,0,0,0,.354l.6,1.028c.124.162.141.341.06.422l0,0c-.1.1-.252.064-.418-.06L6.4,19.462a.34.34,0,0,0-.443.124C5.2,20.792,4.76,21.491,4.713,21.568h0a1.5,1.5,0,0,0-.213.759A1.364,1.364,0,0,0,5.86,23.7a1.561,1.561,0,0,0,.878-.324l4.456-3.309a.342.342,0,0,0,.085-.456l-.874-1.369c-.124-.162-.141-.341-.06-.422l0,0c.1-.1.252-.064.418.06l1.595,1.092a.339.339,0,0,0,.4-.009c2.26-1.667,4.157-3.078,4.157-3.078h0a1.389,1.389,0,0,0,.554-1.109,1.338,1.338,0,0,0-.388-.968Z"
                                        transform="translate(0 -2.588)" fill="#6e5b44" />
                                    <path id="Trazado_62" data-name="Trazado 62"
                                        d="M28.008,6.922l-.478-.763a.341.341,0,0,0-.465-.124L24.533,7.6l2.017-3.364a.346.346,0,0,0-.124-.469l-.755-.341a.339.339,0,0,0-.469.128L22.746,8.167,23.966,9.4l3.914-2A.348.348,0,0,0,28.008,6.922Z"
                                        transform="translate(-7.182)" fill="#6e5b44" />
                                </g>
                            </svg>

                        </div>
                        <p class="font-KarbonRegular">711.5 kcal / por porción</p>
                    </div>
                </div>
                <div class="p-4">
                    <h1 class="font-TestKarbonBold">INGREDIENTES:</h1>
                    <p class="font-KarbonRegular">
                        <br />
                        3 pechugas de pollo sin piel<br />
                        <br />
                        Marinada:<br />
                        2 cucharadas de salsa de soya<br />
                        1/4 de taza de vino tinto<br />
                        3 gotas de aceite de sésamo<br />
                        <br />
                        Salsa:<br />
                        1 ½ taza de caldo de pollo<br />
                        ½ taza de agua<br />
                        4 cucharadas de salsa de soya<br />
                        2 cucharadas de aceite de ajonjoli (sésamo)<br />
                        2 dientes de ajo triturados<br />
                        4 cucharadas de vinagre blanco<br />
                        ¾ de taza de azúcar<br />
                        4cucharadas de maicena (fécula de maíz)<br />
                        ½ cucharaditas de pimienta cayena Para<br />
                        <br />
                        freír:<br />
                        1/2 litro de acite vegetal<br />
                    </p>
                </div>
                <div class="p-4">
                    <h1 class="text-right font-TestKarbonBold">PREPARACIÓN:</h1>
                    <p class="font-KarbonRegular">
                        <br>
                        1. Cortas el pollo en cubos y ponerlo a marinar (solo debes de mezclar bien los ingredientes). Deja
                        20
                        minutos.
                        <br>
                        2. Mientras, cocina la salsa. Es tan fácil como mezclar todos los ingredientes y llevar al fuego.
                        Revelve
                        constantemente hasta que hierva. En ese momento baja el fuego al mínimo, mientras cocinas el pollo.
                        <br>
                        3. Fríe el pollo en suficiente aceite vegetal (si tienes aceite de maní, mucho mejor). Retira cuando
                        esten
                        dorados y seca el exceso de aceite con toallas de papel. <br>
                        Coloca en salsa y cocina unos minutos. Espolvorea semillas de sesamos por encima<br>
                    </p>
                </div>
                <!-- carrusel -->
                <div class="flex justify-center items-center ">
                    <swiper :spaceBetween="30" :centeredSlides="true" :pagination="{ clickable: true, }" :modules="modules"
                        class="mySwiper">
                        <swiper-slide><img loading="lazy" class="object-cover w-full"
                                src="../../../assets/AssetsRecetario/receta1.jpg" alt=""></swiper-slide>
                        <swiper-slide><img loading="lazy" class="object-cover w-full"
                                src="../../../assets/AssetsRecetario/receta1.jpg" alt=""></swiper-slide>
                        <swiper-slide><img loading="lazy" class="object-cover w-full"
                                src="../../../assets/AssetsRecetario/receta1.jpg" alt=""></swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <!-- para escritorio -->
        <div v-for="receta in recetas" class="dr5kcr hidden lg:block">
            <div v-if="receta._id === idreceta" class="descrec px-24 flex justify-center">
                <div class="w-full ctndr5k block lg:columns-2 bg-FondoPerla shadow-2xl">
                    <div class="break-inside-avoid">
                        <div class="ttl-receta px-2 py-10">
                            <h1 class="text-center text-5xl">{{ receta.titulo }}</h1>
                        </div>
                        <div class="indicator-recetas columns-4 ">
                            <div
                                class="font-KarbonRegular flex flex-col justify-center items-center break-inside-avoid tex">
                                <p class="itemind">DIFICULTAD</p>
                                <div class="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.399" height="16.752"
                                        viewBox="0 0 21.399 16.752">
                                        <path id="Icon_metro-spoon-fork" data-name="Icon metro-spoon-fork"
                                            d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                                            transform="translate(17.493 -4.025) rotate(60)" fill="#6e5b44" />
                                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="21.399" height="16.752"
                                        viewBox="0 0 21.399 16.752">
                                        <path id="Icon_metro-spoon-fork" data-name="Icon metro-spoon-fork"
                                            d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                                            transform="translate(17.493 -4.025) rotate(60)" fill="#6e5b44" />
                                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="21.399" height="16.752"
                                        viewBox="0 0 21.399 16.752">
                                        <path id="Icon_metro-spoon-fork" data-name="Icon metro-spoon-fork"
                                            d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                                            transform="translate(17.493 -4.025) rotate(60)" fill="#6e5b44" />
                                    </svg>
                                </div>
                                <p class="font-KarbonRegular">{{ receta.dificultad }}</p>
                            </div>
                            <div class="font-KarbonRegular flex flex-col justify-center items-center break-inside-avoid">
                                <p class="itemind">PORCIONES</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.23" height="18.051"
                                        viewBox="0 0 15.23 18.051">
                                        <path id="Icon_metro-spoon-fork" data-name="Icon metro-spoon-fork"
                                            d="M6.919,1.928A3.7,3.7,0,0,0,3.535,5.877a3.874,3.874,0,0,0,2.6,3.843l-.56,9.133a1.051,1.051,0,0,0,1.059,1.126H7.2A1.051,1.051,0,0,0,8.26,18.853L7.7,9.719a3.874,3.874,0,0,0,2.6-3.843A3.7,3.7,0,0,0,6.919,1.928Zm11.376,0-.94,5.641H16.65l-.47-5.641h-.47l-.47,5.641h-.705l-.94-5.641h-.47V9.261a.564.564,0,0,0,.564.564h1.469L14.6,18.853a1.051,1.051,0,0,0,1.059,1.126h.564a1.051,1.051,0,0,0,1.059-1.126l-.554-9.028H18.2a.564.564,0,0,0,.564-.564V1.928Z"
                                            transform="translate(-3.535 -1.928)" fill="#6e5b44" />
                                    </svg>
                                </div>
                                <p class="font-KarbonRegular">{{ receta.porciones }}</p>
                            </div>
                            <div class=" font-KarbonRegular flex flex-col justify-center items-center break-inside-avoid">
                                <p class="itemind">TIEMPO</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23.907" height="23.906"
                                        viewBox="0 0 23.907 23.906">
                                        <g id="Icon_ionic-ios-timer" data-name="Icon ionic-ios-timer"
                                            transform="translate(16.471 -4.901) rotate(60)">
                                            <path id="Trazado_59" data-name="Trazado 59"
                                                d="M12.339,20.74A8.4,8.4,0,0,1,6.508,6.29a.674.674,0,0,1,.937.97A7.051,7.051,0,1,0,13.011,5.32v2.63a.676.676,0,1,1-1.353,0V4.614a.676.676,0,0,1,.676-.676,8.4,8.4,0,0,1,0,16.8Z"
                                                transform="translate(0 0)" fill="#6e5b44" stroke="#6e5b44"
                                                stroke-width="0.7" />
                                            <path id="Trazado_60" data-name="Trazado 60"
                                                d="M11.919,11.331l4.18,3a1.265,1.265,0,0,1-1.47,2.058,1.221,1.221,0,0,1-.294-.294l-3-4.18a.421.421,0,0,1,.588-.588Z"
                                                transform="translate(-2.945 -2.944)" fill="#6e5b44" stroke="#6e5b44"
                                                stroke-width="0.7" />
                                        </g>
                                    </svg>

                                </div>
                                <p class="font-KarbonRegular">{{ receta.tiempo }}</p>
                            </div>
                            <div
                                class="font-KarbonRegular flex flex-col justify-center items-center break-inside-avoid text-center">
                                <p class="itemind">INF. NUTRICIONAL</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.373" height="17.738"
                                        viewBox="0 0 16.373 17.738">
                                        <g id="Icon_ionic-ios-nutrition" data-name="Icon ionic-ios-nutrition"
                                            transform="translate(-4.5 -3.374)">
                                            <path id="Trazado_61" data-name="Trazado 61"
                                                d="M17.082,13.8h0a.133.133,0,0,1-.017-.026L13.7,10.384h0a1.409,1.409,0,0,0-1.006-.435,1.329,1.329,0,0,0-1.181.695h0s-.145.217-.537.844a.345.345,0,0,0,0,.367l1.143,1.757c.124.162.141.341.06.422l0,0c-.1.1-.252.064-.418-.06L10.38,13.1a.344.344,0,0,0-.473.107c-.934,1.5-2,3.185-3.036,4.861a.341.341,0,0,0,0,.354l.6,1.028c.124.162.141.341.06.422l0,0c-.1.1-.252.064-.418-.06L6.4,19.462a.34.34,0,0,0-.443.124C5.2,20.792,4.76,21.491,4.713,21.568h0a1.5,1.5,0,0,0-.213.759A1.364,1.364,0,0,0,5.86,23.7a1.561,1.561,0,0,0,.878-.324l4.456-3.309a.342.342,0,0,0,.085-.456l-.874-1.369c-.124-.162-.141-.341-.06-.422l0,0c.1-.1.252-.064.418.06l1.595,1.092a.339.339,0,0,0,.4-.009c2.26-1.667,4.157-3.078,4.157-3.078h0a1.389,1.389,0,0,0,.554-1.109,1.338,1.338,0,0,0-.388-.968Z"
                                                transform="translate(0 -2.588)" fill="#6e5b44" />
                                            <path id="Trazado_62" data-name="Trazado 62"
                                                d="M28.008,6.922l-.478-.763a.341.341,0,0,0-.465-.124L24.533,7.6l2.017-3.364a.346.346,0,0,0-.124-.469l-.755-.341a.339.339,0,0,0-.469.128L22.746,8.167,23.966,9.4l3.914-2A.348.348,0,0,0,28.008,6.922Z"
                                                transform="translate(-7.182)" fill="#6e5b44" />
                                        </g>
                                    </svg>

                                </div>
                                <p class="font-KarbonRegular text-center">{{ receta.infonutricional }}</p>
                            </div>
                        </div>
                        <div class="indr5k">
                            <h1 class="font-TestKarbonBold">INGREDIENTES:</h1>
                            <p v-for="ingrediente in receta.ingredientes" class="font-KarbonRegular">
                                {{ ingrediente.ingrediente }}
                            </p>
                        </div>
                        <!-- carrusel -->
                        <div class="flex justify-center items-center ">
                            <!-- //:navigation="true"   este activa las flechas -->
                            <swiper :spaceBetween="30" :centeredSlides="true" :pagination="{ clickable: true, }"
                                :modules="modules" class="mySwiper">
                                <swiper-slide><img loading="lazy" class="object-cover w-full"
                                        src="@/assets/AssetsRecetario/receta1.jpg" alt=""></swiper-slide>
                                <swiper-slide><img loading="lazy" class="object-cover w-full"
                                        src="@/assets/AssetsRecetario/receta1.jpg" alt=""></swiper-slide>
                                <swiper-slide><img loading="lazy" class="object-cover w-full"
                                        src="@/assets/AssetsRecetario/receta1.jpg" alt=""></swiper-slide>
                            </swiper>
                        </div>
                    </div>
                    <div>
                        <div class="h-auto">
                            <img loading="lazy" class="object-cover w-full" src="@/assets/AssetsRecetario/receta1.jpg"
                                alt="ImgGenRec">
                        </div>

                        <div class="pdr5kcr">
                            <h1 class="text-right font-TestKarbonBold">PREPARACIÓN:</h1>
                            <p v-for="preparacion in receta.preparacion" class="font-KarbonRegular">
                                {{ preparacion.preparacion }}
                            </p>
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

.itemind {
    -webkit-text-stroke: #41311E 0.1vw;
}

.swiper-button-next {
    color: #ff0000;
}

.swiper-button-prev {
    color: #00ff00;
}

.ttl-receta {
    font-family: "KarbonRegular";
}

.ttl-receta h1 {
    color: #41311E;
    -webkit-text-stroke: 0.7px #41311E;
}

.indicator-recetas {
    background-color: #FBF1E3;

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

    .itemind {
        -webkit-text-stroke: #41311E 0.03vw;
    }

    .descrec {
        padding-top: 5%;
    }

    .header {
        position: fixed;
        margin-top: -12vh;
        z-index: 50;
    }

    svg {
        padding: 0.2vw;
        width: 2vw;
        height: 3vh;
    }

    .indicator-recetas {
        padding: 2%;
        font-size: 1.05vw;
        line-height: normal;
    }

    .ttl-receta h1 {
        font-size: 3vw;
        line-height: normal;
        padding: 1%;
    }

    .indr5k {
        padding-right: 15%;
        padding-left: 15%;
        padding-bottom: 5%;
    }

    .pdr5kcr {
        padding-left: 15%;
        padding-right: 15%;
        padding-bottom: 5%;
    }

    .indr5k h1 {
        font-size: 1.6vw;
        line-height: normal;
    }

    .indr5k p {
        font-size: 1.1vw;
        line-height: normal;
    }

    .pdr5kcr h1 {
        font-size: 1.6vw;
        line-height: normal;
    }

    .pdr5kcr p {
        font-size: 1.2vw;
        line-height: normal;
    }

    .dr5kcr {
        padding-right: 1%;
        padding-left: 1%;
        overflow: hidden;
    }
}

@media (min-width: 5120px) {


    .indicator-recetas {
        font-size: 2vh;
        line-height: normal;
    }

    .dr5kcr {
        padding-right: 5%;
        padding-left: 5%;
    }

    .ttl-receta h1 {
        font-size: 4vw;
        line-height: normal;
        padding: 1%;
    }

    .indr5k h1 {
        font-size: 2.5vw;
        line-height: normal;
    }

    .indr5k p {
        font-size: 1.6vw;
        line-height: normal;
    }

    .pdr5kcr h1 {
        font-size: 2.5vw;
        line-height: normal;
    }

    .pdr5kcr p {
        font-size: 1.6vw;
        line-height: normal;
    }

    .dr5kcr {
        padding-right: 1%;
        padding-left: 1%;
        margin-top: 0vh;
    }
}
</style>