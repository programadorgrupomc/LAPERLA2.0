<template>
    <div>
        <!-- footer -->
        <footer class="bg-BlancoFoo footer-contenedor w-full lg:columns-3 lg:flex lg:items-center overflow-hidden">
            <!-- logo  footer -->
            <div class="logofooterh flex justify-center items-center px-8 pt-8 lg:w-2/4 lg:scale-125">
                <div class="img-footergroup relative w-96">
                    <img loading="lazy" class="img-logofoo" @mouseenter="hover = true" @mouseleave="hover = false"
                        :class="{ 'img-logofoovue': hover }" src="@/assets/General/logo-laperla-footer.png" alt="logofoo">
                    <img loading="lazy" class="relative star-mor star-basfoo w-8 h-8" :class="{ 'star-basfoovue': hover }"
                        src="@/assets/General/star-logo-footer.png" alt="starfoo">
                    <div class="relative eye-orange ojo-perla rounded-full" :class="{ 'ojo-perlavue': hover }">
                    </div>
                </div>
            </div>
            <!-- links  -->
            <div
                class="links-foo flex flex-col items-center justify-center pb-4 text-AzulPerla lg:break-inside-avoid lg:w-1/4">
                <router-link to="/" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="hover:underline linksnav" href="" onclick="location.reload()">{{
                        titulo1 }}</a>
                </router-link>
                <router-link to="/nosotros" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="hover:underline linksnav" href="">{{ titulo2 }}</a>
                </router-link>
                <router-link to="/recetario" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="hover:underline linksnav" href="">{{ titulo3 }}</a>
                </router-link>
                <router-link to="/noticias" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="hover:underline linksnav" href="">{{ titulo4 }}</a>
                </router-link>
                <router-link to="/work" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="hover:underline linksnav" href="">{{ titulo5 }}</a>
                </router-link>
            </div>
            <!-- direcciones -->
            <div class="dir-perla text-AzulPerla  flex items-center flex-col lg:items-end">
                <router-link to="/contactanos" custom v-slot="{ navigate }">
                    <a @click="navigate" role="link" class="links-foo hover:underline" href="">{{ titulo6 }}</a>
                </router-link>

                <div v-if="footerData" class="flex flex-col items-center lg:items-end">
                    <div class="flex justify-center">
                        <span v-for="itemfo in footerData" class="flex">{{ itemfo.telefono }} &nbsp; &nbsp;</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-directions" viewBox="0 0 27.169 27.213">
                            <path id="Icon_feather-phone" data-name="Icon feather-phone"
                                d="M26.315,20.365v3.492a2.328,2.328,0,0,1-2.537,2.328,23.033,23.033,0,0,1-10.044-3.573A22.7,22.7,0,0,1,6.75,15.628,23.033,23.033,0,0,1,3.177,5.537,2.328,2.328,0,0,1,5.493,3H8.985a2.328,2.328,0,0,1,2.328,2,14.944,14.944,0,0,0,.815,3.27,2.328,2.328,0,0,1-.524,2.456l-1.478,1.478a18.622,18.622,0,0,0,6.983,6.983l1.478-1.478a2.328,2.328,0,0,1,2.456-.524,14.944,14.944,0,0,0,3.27.815,2.328,2.328,0,0,1,2,2.363Z"
                                transform="translate(-1.901 -0.199) rotate(-3)" fill="none" stroke="#471d7c"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2.7" />
                        </svg>

                    </div>
                    <div class="flex justify-center py-1">
                        <span v-for="itemfo in footerData" class="flex">{{ itemfo.correo }} &nbsp; &nbsp;</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-directions" viewBox="0 0 27.703 22.162">
                            <path id="Icon_material-mail-outline" data-name="Icon material-mail-outline"
                                d="M27.932,6H5.77A2.767,2.767,0,0,0,3.014,8.77L3,25.392a2.778,2.778,0,0,0,2.77,2.77H27.932a2.778,2.778,0,0,0,2.77-2.77V8.77A2.778,2.778,0,0,0,27.932,6Zm0,19.392H5.77V11.541l11.081,6.926,11.081-6.926ZM16.851,15.7,5.77,8.77H27.932Z"
                                transform="translate(-3 -6)" fill="#471d7c" />
                        </svg>

                    </div>
                    <div class="flex justify-center">
                        <span v-for="itemfo in footerData" class="flex lg:pl-14">{{ itemfo.location }}
                            &nbsp;
                            &nbsp;</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-directions" viewBox="0 0 22.642 27.073">
                            <g id="Icon_feather-map-pin" data-name="Icon feather-map-pin" transform="translate(1.35 1.35)">
                                <path id="Trazado_26" data-name="Trazado 26"
                                    d="M24.442,11.471c0,7.755-9.971,14.4-9.971,14.4S4.5,19.226,4.5,11.471a9.971,9.971,0,0,1,19.942,0Z"
                                    transform="translate(-4.5 -1.5)" fill="none" stroke="#471d7c" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2.7" />
                                <path id="Trazado_27" data-name="Trazado 27"
                                    d="M20.147,13.824A3.324,3.324,0,1,1,16.824,10.5a3.324,3.324,0,0,1,3.324,3.324Z"
                                    transform="translate(-6.853 -3.853)" fill="none" stroke="#471d7c" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-width="2.7" />
                            </g>
                        </svg>

                    </div>
                </div>
                <!-- redes sociales -->
                <div v-if="rsData" class="flex justify-center py-4">
                    <div v-for="itemrs in rsData" class="px-2">
                        <svg v-if="itemrs.rs == 'facebook'" xmlns="http://www.w3.org/2000/svg" class="svg-redessociales"
                            @click="Facebook" viewBox="0 0 13.39 25">
                            <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f"
                                d="M14.122,14.063l.694-4.524H10.475V6.6a2.262,2.262,0,0,1,2.551-2.444H15V.306A24.068,24.068,0,0,0,11.5,0C7.92,0,5.584,2.167,5.584,6.09V9.538H1.609v4.524H5.584V25h4.891V14.063Z"
                                transform="translate(-1.609)" fill="#471d7c" />
                        </svg>
                        <svg v-if="itemrs.rs == 'instagram'" xmlns="http://www.w3.org/2000/svg" class="svg-redessociales2"
                            viewBox="0 0 25.006 25">
                            <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram"
                                d="M12.5,8.328a6.41,6.41,0,1,0,6.41,6.41A6.4,6.4,0,0,0,12.5,8.328Zm0,10.577a4.167,4.167,0,1,1,4.167-4.167A4.175,4.175,0,0,1,12.5,18.9ZM20.667,8.066a1.5,1.5,0,1,1-1.5-1.5A1.492,1.492,0,0,1,20.667,8.066Zm4.245,1.517a7.4,7.4,0,0,0-2.019-5.238,7.447,7.447,0,0,0-5.238-2.019c-2.064-.117-8.251-.117-10.315,0A7.437,7.437,0,0,0,2.1,4.339,7.423,7.423,0,0,0,.083,9.578c-.117,2.064-.117,8.251,0,10.315A7.4,7.4,0,0,0,2.1,25.13,7.457,7.457,0,0,0,7.34,27.15c2.064.117,8.251.117,10.315,0a7.4,7.4,0,0,0,5.238-2.019,7.447,7.447,0,0,0,2.019-5.238c.117-2.064.117-8.245,0-10.309ZM22.246,22.107a4.219,4.219,0,0,1-2.376,2.376c-1.646.653-5.551.5-7.369.5s-5.729.145-7.369-.5a4.219,4.219,0,0,1-2.376-2.376c-.653-1.646-.5-5.551-.5-7.369s-.145-5.729.5-7.369A4.219,4.219,0,0,1,5.131,4.992c1.646-.653,5.551-.5,7.369-.5s5.729-.145,7.369.5a4.219,4.219,0,0,1,2.376,2.376c.653,1.646.5,5.551.5,7.369S22.9,20.467,22.246,22.107Z"
                                transform="translate(0.005 -2.238)" fill="#471d7c" />
                        </svg>
                        <svg @click="Whatsapp" v-if="itemrs.rs == 'whatsapp'" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" class="bi bi-whatsapp svg-redessociales2" viewBox="0 0 16 16">
                            <path
                                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                        <svg @click="Twiter" v-if="itemrs.rs == 'twitter'" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" class="bi bi-twitter svg-redessociales2" viewBox="0 0 16 16">
                            <path
                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        <svg @click="Tiktok" v-if="itemrs.rs == 'tiktok'" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" class="bi bi-tiktok svg-redessociales2" viewBox="0 0 16 16">
                            <path
                                d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                        </svg>
                        <svg @click="Youtube" v-if="itemrs.rs == 'youtube'" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" class="bi bi-youtube svg-redessociales2" viewBox="0 0 16 16">
                            <path
                                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
        <!-- final -->
        <div class="drwandoy bg-GrisDr flex justify-center items-center copy-content">
            <div class="endfoo">&copy; 2023 Wandoy</div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            hover: false,
            footerData: [
                {telefono:'(044) 256487'},
                {correo:'informes@molinolaperla.com'},
                {location:'John F. Kennedy N° 189'},
            ],
            rsData: [
                { rs: 'facebook' },
                { rs: 'instagram' },
            ],
            itemsHeader: null,
            titulo1: 'INICIO',
            titulo2: 'NOSOTROS',
            titulo3: 'RECETARIO',
            titulo4: 'NOTICIAS',
            titulo5: 'TRABAJA CON NOSOTROS',
            titulo6: 'CONTACTANOS',
        };
    },
    methods: {

        Facebook() {
            const newWindow = window.open();
            newWindow.location.href = 'https://www.facebook.com/MolinoLaPerlaSAC/';
        },
        Whatsapp() {
            const newWindow = window.open();
            newWindow.location.href = 'https://web.whatsapp.com/';
        }
        ,
        Twiter() {
            const newWindow = window.open();
            newWindow.location.href = 'https://twitter.com/?lang=es';
        },
        Tiktok() {
            const newWindow = window.open();
            newWindow.location.href = 'https://tiktok.com';
        },
        Youtube() {
            const newWindow = window.open();
            newWindow.location.href = 'https://youtube.com';
        }
    },
    mounted() {


    }
}
</script>
<style scoped>
.copy-content {
    height: 8vh;
}

.linksnav {
    margin-top: 2%;
}

.endfoo {
    font-size: 5vw;
    line-height: normal;
}

.logofooterh {
    height: 20vh;
}

.drwandoy {
    font-family: 'LeelawadeeRegular';
}

.star-mor {
    top: -5.8rem;
    left: 3.5rem;
}

.eye-orange {
    height: 0.3rem;
    width: 0.3rem;
    top: -6.8rem;
    left: 2.26rem;
}

.svg-redessociales {
    width: 3vw;
}

.svg-redessociales2 {
    width: 6vw;
}

.links-foo {
    font-size: 5vw;
    font-family: 'LeelawadeeRegular';
    -webkit-text-stroke: 0.4vw #471d7c;
}

.svg-directions {
    width: 5%;
}

.dir-perla {
    font-family: 'LeelawadeeRegular';
    -webkit-text-stroke: 0.1vw #471d7c;
}

.dir-perla a {
    padding-bottom: 5%;
}

.star-basfoo {
    transition: all 0.5s;
}

.star-basfoovue {
    scale: 1.03px;
    transition: all 0.5s;
    transform: translateX(5px) translateY(-15px) rotate(20deg);
}

.ojo-perla {
    transition: all 0.5s;
}

.ojo-perlavue {
    transition: all 0.5s;
    background-color: #ff7439;
    transform: translateX(0px) translateY(3.3px);
}

.dir-perla span {
    font-size: 5vw;
    line-height: normal;
}

@media (min-width: 768px) {
    .copy-content {
        height: 8vh;
    }

    .linksnav {
        margin-top: 2%;
    }

    .endfoo {
        font-size: 2vw;
        line-height: normal;
    }

    .logofooterh {
        height: 20vh;
    }

    .drwandoy {
        font-family: 'LeelawadeeRegular';
    }

    .star-mor {
        top: -5.8rem;
        left: 3.5rem;
    }

    .eye-orange {
        height: 0.3rem;
        width: 0.3rem;
        top: -6.8rem;
        left: 2.26rem;
    }

    .svg-redessociales {
        width: 2vw;
        padding-top: 4%;
    }

    .svg-redessociales2 {
        width: 4vw;
    }

    .links-foo {
        font-size: 3vw;
        font-family: 'LeelawadeeRegular';
        -webkit-text-stroke: 0.2vw #471d7c;
    }

    .svg-directions {
        width: 5%;
    }

    .dir-perla {
        font-family: 'LeelawadeeRegular';
        -webkit-text-stroke: 0.1vw #471d7c;
    }

    .dir-perla a {
        padding-bottom: 5%;
    }

    .star-basfoo {
        transition: all 0.5s;
    }

    .star-basfoovue {
        scale: 1.03px;
        transition: all 0.5s;
        transform: translateX(5px) translateY(-15px) rotate(20deg);
    }

    .ojo-perla {
        transition: all 0.5s;
    }

    .ojo-perlavue {
        transition: all 0.5s;
        background-color: #ff7439;
        transform: translateX(0px) translateY(3.3px);
    }

    .dir-perla span {
        font-size: 3vw;
        line-height: normal;
    }
}

@media (min-width: 1024px) {
    .footer-contenedor {
        padding-top: 2%;
        padding-bottom: 2%;
    }

    .svg-redessociales {
        width: 1vw;
    }

    .svg-redessociales2 {
        width: 2vw;
    }

    .dir-perla{
        margin-right: 5%;

    }
    .svg-directions {
        width: 1.2vw;
    }

    .star-mor {
        top: -6.5rem;
        left: 4.3rem;
    }

    .links-foo {
        font-size: 1.2vw;
        font-family: 'LeelawadeeRegular';
        -webkit-text-stroke: 0.08vw #471d7c;
    }

    .dir-perla a {
        font-size: 1.2vw;
        font-family: 'LeelawadeeRegular';
        -webkit-text-stroke: 0.08vw #471d7c;
    }

    .dir-perla span {
        font-size: 1.2vw;
        line-height: normal;
        -webkit-text-stroke: 0.03vw #471d7c;
        
    }

    .eye-orange {
        height: 0.4rem;
        width: 0.4rem;
        top: -7.55rem;
        left: 2.6rem;
    }

    .endfoo {
        font-size: 1.3vw;
    }
}

@media (min-width: 5120px) {
    .img-footergroup {
        transform: scale(3);
    }

    .drwandoy {
        padding: 1.5%;
    }
}
</style>