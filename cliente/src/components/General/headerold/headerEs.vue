
<template>
    <div class="cont-navbar">
        <div class="parte1">
            <router-link to="/" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="itemH item-nav-uno" href="" onclick="location.reload()">
                    <p class="vineta puntito">●</p>
                    <p class="">{{ titulo1 }}</p>
                </a>
            </router-link>
            <router-link to="/nosotros" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="itemH item-nav-dos" href="">
                    <p class="vineta puntitodos">●</p>
                    <p class="">{{ titulo2 }}</p>
                </a>
            </router-link>
            <router-link to="/recetario" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="itemH item-nav-tres" href="">
                    <p class="vineta puntitotres">●</p>
                    <p class="">{{ titulo3 }}</p>
                </a>
            </router-link>
        </div>
        <div class="parte2">
            <logo-header />
        </div>
        <div class="parte3">

            <router-link to="/noticias" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="itemH item-nav-cuatro" href="">
                    <p class="vineta puntitocuatro">●</p>
                    <p class="">{{ titulo4 }}</p>
                </a>
            </router-link>
            <router-link to="/work" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="itemH item-nav-cinco" href="">
                    <p class="vineta puntitocinco">●</p>
                    <p class="">{{ titulo5 }}</p>
                </a>
            </router-link>
            <router-link to="/contactanos" custom v-slot="{ navigate }">
                <a @click="navigate" role="link" class="itemH item-nav-ceis" href="">
                    <p class="vineta puntitoceis">●</p>
                    <p class="">{{ titulo6 }}</p>
                </a>
            </router-link>

        </div>
    </div>
</template>
<script>
import logoHeader from "./logoHeader.vue";
import { gsap } from "gsap";

export default {
    data() {
        return {
            titulo1: 'INICIO',
            titulo2: 'NOSOTROS',
            titulo3: 'RECETARIO',
            titulo4: 'NOTICIAS',
            titulo5: 'TRABAJA CON NOSOTROS',
            titulo6: 'CONTACTANOS',
        }
    },
    components: {
        logoHeader,
    },
    mounted() {
        this.animacionHeaderEs();
    },
    methods: {
        animacionHeaderEs() {
            let i1 = document.querySelector(".item-nav-uno");
            let i2 = document.querySelector(".item-nav-dos");
            let i3 = document.querySelector(".item-nav-tres");
            let i4 = document.querySelector(".item-nav-cuatro");
            let i5 = document.querySelector(".item-nav-cinco");
            let i6 = document.querySelector(".item-nav-ceis");

            // para item uno
            let animation = gsap.to(".item-nav-uno", {
                paused: true,
                duration: 0.2,
                x: 4,
            });

            let animation11 = gsap.from(".puntito", {
                paused: true,
                duration: 0.2,
                scale: 0,
                x: 5,
            });

            i1.addEventListener("mouseenter", () => animation.play());
            i1.addEventListener("mouseleave", () => animation.reverse());
            i1.addEventListener("mouseenter", () => animation11.play());
            i1.addEventListener("mouseleave", () => animation11.reverse());

            // para item 2
            let animation2 = gsap.to(".item-nav-dos", {
                paused: true,
                duration: 0.2,
                x: 4,
            });

            let animation21 = gsap.from(".puntitodos", {
                paused: true,
                duration: 0.2,
                scale: 0,
                x: 5,
            });

            i2.addEventListener("mouseenter", () => animation2.play());
            i2.addEventListener("mouseleave", () => animation2.reverse());
            i2.addEventListener("mouseenter", () => animation21.play());
            i2.addEventListener("mouseleave", () => animation21.reverse());

            // para item 3
            let animation3 = gsap.to(".item-nav-tres", {
                paused: true,
                duration: 0.2,
                x: 4,
            });

            let animation31 = gsap.from(".puntitotres", {
                paused: true,
                duration: 0.2,
                scale: 0,
                x: 5,
            });

            i3.addEventListener("mouseenter", () => animation3.play());
            i3.addEventListener("mouseleave", () => animation3.reverse());
            i3.addEventListener("mouseenter", () => animation31.play());
            i3.addEventListener("mouseleave", () => animation31.reverse());

            // para item 4
            let animation4 = gsap.to(".item-nav-cuatro", {
                paused: true,
                duration: 0.2,
                x: 4,
            });

            let animation41 = gsap.from(".puntitocuatro", {
                paused: true,
                duration: 0.2,
                scale: 0,
                x: 5,
            });

            i4.addEventListener("mouseenter", () => animation4.play());
            i4.addEventListener("mouseleave", () => animation4.reverse());
            i4.addEventListener("mouseenter", () => animation41.play());
            i4.addEventListener("mouseleave", () => animation41.reverse());

            // para item 5
            let animation5 = gsap.to(".item-nav-cinco", {
                paused: true,
                duration: 0.2,
                x: 4,
            });

            let animation51 = gsap.from(".puntitocinco", {
                paused: true,
                duration: 0.2,
                scale: 0,
                x: 5,
            });

            i5.addEventListener("mouseenter", () => animation5.play());
            i5.addEventListener("mouseleave", () => animation5.reverse());
            i5.addEventListener("mouseenter", () => animation51.play());
            i5.addEventListener("mouseleave", () => animation51.reverse());

            // para item 6
            let animation6 = gsap.to(".item-nav-ceis", {
                paused: true,
                duration: 0.2,
                x: 4,
            });

            let animation61 = gsap.from(".puntitoceis", {
                paused: true,
                duration: 0.2,
                scale: 0,
                x: 5,
            });

            i6.addEventListener("mouseenter", () => animation6.play());
            i6.addEventListener("mouseleave", () => animation6.reverse());
            i6.addEventListener("mouseenter", () => animation61.play());
            i6.addEventListener("mouseleave", () => animation61.reverse());
        },

    },
};
</script>
<style scoped>
.cont-navbar {
    background-color: #FCF5EB;
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.parte1,
.parte3 {
    display: flex;
    justify-content: space-around;
    width: 40%;
}

.parte2 {
    width: 15%;
    display: flex;
    justify-content: center;

}

.itemH {
    display: flex;
    justify-content: center;
    font-family: "KarbonRegular";
    -webkit-text-stroke: 0.06vw #471d7c;
    font-size: 1.06vw;
    padding-right: 1%;
    padding-left: 1%;
    padding-top: 2%;
    width: 35%;
    text-decoration: none;
}

.vineta {
    color: #471d7c;
    padding-right: 2%;
}
</style>