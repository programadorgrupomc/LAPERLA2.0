<script lang="ts">
import { gsap } from "gsap";


export default {
    data() {
        return {
            currentForm: 1,
        };
    },
    methods: {
        nextForm() {
            this.currentForm++;
        },
        backForm() {
            this.currentForm--;
        },
        animacionFormulario() {
            const form1 = document.querySelector(".form1");
            const form2 = document.querySelector(".form2");
            const form3 = document.querySelector(".form3");
            const form4 = document.querySelector(".form4");


            const nextbtn1 = document.querySelector(".next-form1");
            const nextbtn2 = document.querySelector(".next-form2");
            const nextbtn3 = document.querySelector(".next-form3");
            const backbtn2 = document.querySelector(".back-form2");
            const backbtn3 = document.querySelector(".back-form3");
            const backbtn4 = document.querySelector(".back-form4");




            var tr1 = gsap.fromTo(form2, {
                x: 500,
            }, {
                duration: 1,
                x: 0,
            })


            nextbtn1.addEventListener("click", function () {
                tr1.restart();
            });


            var tr2 = gsap.fromTo(form3, {
                x: 500,
            }, {
                duration: 1,
                x: 0,
            })
            nextbtn2.addEventListener("click", function () {
                tr2.restart();
            });




            var tr3 = gsap.fromTo(form4, {
                x: 500,
            }, {
                duration: 1,
                x: 0,
            })
            nextbtn3.addEventListener("click", function () {
                tr3.restart();
            });


            var trb2 = gsap.fromTo(form1, {
                x: -500,
            }, {
                x: 0,
                duration: 1,
            });
            backbtn2.addEventListener("click", function () {
                trb2.restart();
            });
            var trb3 = gsap.fromTo(form2, {
                x: -500,
            }, {
                x: 0,
                duration: 1,
            });
            backbtn3.addEventListener("click", function () {
                trb3.restart();
            });


            var trb4 = gsap.fromTo(form3, {
                x: -500,
            }, {
                x: 0,
                duration: 1,
            });
            backbtn4.addEventListener("click", function () {
                trb4.restart();
            });
        }
    },
    mounted() {
        this.animacionFormulario();
    },
}
</script>


<template>
    <div class="theboss bg-FondoPerla p-2">
        <!-- formulario1 -->
        <div class="form1" v-show="currentForm === 1">
            <div class="barraavance flex justify-center items-center col-span-4">
                <div class="av1" style="background-color: #E2D6C5;"></div>
                <div class="av2" style="background-color: #F5EDE1;"></div>
                <div class="av3" style="background-color: #F5EDE1;"></div>
                <div class="av4" style="background-color: #F5EDE1;"></div>
            </div>
            <div class="bg-FondoPerla overflow-hidden">
                <div class="gen-form">
                    <div class="titleform1 text-AzulPerla">
                        <h1 class="font-TestKarbonSemiBold">Datos Personales</h1>
                    </div>
                    <form action="" class="w-full formulario">
                        <div class="inpformulario lg:columns-2 ">
                            <div class="item-divf1">
                                <label class="labelsel" for="lang">Documento de identidad</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">DNI</option>
                                    <option value="carnet">CARNET EXTRANJERIA</option>
                                </select>
                            </div>
                            <input class="input-formc lg:order-1" required type="text"
                                placeholder="Número de documento de indentidad">
                            <input class="input-formc lg:order-1" required type="text" placeholder="Nombres">
                            <input class="input-formc lg:order-1" required type="text" placeholder="Apellidos">
                            <div class="item-divf1">
                                <label for="lang" class="labelsel">Celular</label>
                                <div class="flex items-center">
                                    <select name="docs" id="lang" class="w-2/4">
                                        <option value="">🇵🇪 +51</option>
                                        <option value="dni">...</option>
                                        <option value="carnet">...</option>
                                    </select>
                                    <input class="input-formc lg:order-1" required type="text">
                                </div>
                            </div>
                            <input class="input-formc lg:order-1" required type="email" placeholder="Email">
                            <div class="item-divf1 break-inside-avoid">
                                <label for="lang" class="labelsel">Fecha de nacimiento</label>
                                <div class="flex">
                                    <select name="docs" id="lang" class="w-full">
                                        <option value="">Día</option>
                                        <option v-for="i in 31" value="dni">{{ i }}</option>


                                    </select>
                                    <select name="docs" id="lang" class="w-full">
                                        <option value="">Mes</option>
                                        <option value="dni">Enero</option>
                                    </select>
                                    <select name="docs" id="lang" class="w-full">
                                        <option value="">Año</option>
                                        <option v-for="i in 100" value="dni">{{ 1940 + i }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="item-divf1">
                                <label for="lang" class="labelsel">Género</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">Masculino</option>
                                    <option value="carnet">Femenino</option>
                                    <option value="carnet">Otro</option>
                                </select>
                            </div>
                            <div class="item-divf1">
                                <label for="lang" class="labelsel">Nacionalidad</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">Peru</option>
                                    <option value="carnet">Otro</option>
                                </select>
                            </div>
                            <div class="item-divf1">
                                <label for="lang" class="labelsel">Pais de residencia</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">Peru</option>
                                    <option value="carnet">Otro</option>
                                </select>
                            </div>
                            <div class="item-divf1">
                                <label for="lang" class="labelsel">Provincia</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">Trujillo</option>
                                    <option value="carnet">Otro</option>
                                </select>
                            </div>
                            <div class="item-divf1">
                                <label for="lang" class="labelsel">Localidad</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">Trujillo</option>
                                    <option value="carnet">Otro</option>
                                </select>
                            </div>
                        </div>
                        <div class="envio flex justify-end lg:justify-end py-8">
                            <div class="flex justify-end">
                                <button @click="nextForm" class="next-form1  px-4 lg:px-8 rounded-3xl text-white"
                                    type="button">Siguiente</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- formulario2 -->
        <div class="bg-FondoPerla form2" v-show="currentForm === 2">
            <div class="barraavance flex justify-center items-center col-span-4">
                <div class="av1" style="background-color: #E2D6C5;"></div>
                <div class="av2" style="background-color: #E2D6C5;"></div>
                <div class="av3" style="background-color: #F5EDE1;"></div>
                <div class="av4" style="background-color: #F5EDE1;"></div>
            </div>
            <div class="bg-FondoPerla overflow-hidden">
                <div class="gen-form ">
                    <div class="titleform1 text-AzulPerla">
                        <h1 class="font-TestKarbonSemiBold">Educacion</h1>
                    </div>
                    <form action="" class="w-full formeducacion formulario">
                        <div class="inpformulario lg:columns-2 ">
                            <div class="item-divf1">
                                <label class="labelsel" for="lang">Estado de estudio</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">DNI</option>
                                    <option value="carnet">CARNET EXTRANJERIA</option>
                                </select>
                            </div>
                            <div class="item-divf1">
                                <label class="labelsel" for="lang">Nivel de estudio</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">DNI</option>
                                    <option value="carnet">CARNET EXTRANJERIA</option>
                                </select>
                            </div>
                            <input class="input-formc lg:order-1" required type="text" placeholder="Titulo">
                            <input class="input-formc lg:order-1" required type="text" placeholder="Institucion">
                        </div>
                        <button type="button" class="addedu text-NaranjaPerla">+ Añadir Educacion</button>
                    </form>
                </div>
            </div>
            <div class="bg-FondoPerla overflow-hidden">
                <div class="gen-form">
                    <div class="titleform1 text-AzulPerla">
                        <h1 class="font-TestKarbonSemiBold">Idiomas</h1>
                    </div>
                    <form action="" class="w-full formulario">
                        <div class="inpformulario lg:columns-2 ">
                            <div class="item-divf1">
                                <label class="labelsel" for="lang">Idioma</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">DNI</option>
                                    <option value="carnet">CARNET EXTRANJERIA</option>
                                </select>
                            </div>
                            <div class="item-divf1">
                                <label class="labelsel" for="lang">Nivel escrito</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">DNI</option>
                                    <option value="carnet">CARNET EXTRANJERIA</option>
                                </select>
                            </div>
                            <div class="item-divf1">
                                <label class="labelsel" for="lang">Nivel oral</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">DNI</option>
                                    <option value="carnet">CARNET EXTRANJERIA</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" class="addedu text-NaranjaPerla">+ Añadir Idioma</button>
                    </form>
                </div>
            </div>
            <div class="envio flex justify-around lg:justify-around py-8">
                <div class="flex justify-end">
                    <button @click="backForm" class="back-form2 bg-NaranjaOscuroPerla px-4 lg:px-8 rounded-2xl text-white"
                        type="button">Anterior</button>
                </div>
                <div class="flex justify-end">
                    <button @click="nextForm" class="next-form2 bg-NaranjaOscuroPerla px-4 lg:px-8 rounded-2xl text-white"
                        type="button">Siguiente</button>
                </div>
            </div>
        </div>
        <!-- formulario3 -->
        <div class="form3" v-show="currentForm === 3">
            <div class="barraavance flex justify-center items-center col-span-4">
                <div class="av1" style="background-color: #E2D6C5;"></div>
                <div class="av2" style="background-color: #E2D6C5;"></div>
                <div class="av3" style="background-color: #E2D6C5;"></div>
                <div class="av4" style="background-color: #F5EDE1;"></div>
            </div>
            <div class="bg-FondoPerla overflow-hidden">
                <div class="gen-form">
                    <div class="titleform1 text-AzulPerla">
                        <h1 class="font-TestKarbonSemiBold">Experiencia Laboral</h1>
                    </div>
                    <form action="" class="w-full formulario">
                        <div class="flex p-4">
                            <input id="default-checkbox" type="radio" value="" class="" />
                            <label for="default-checkbox"
                                class="labeltyc addedu text-justify p-4 text-AzulPerla font-TestKarbonRegular">
                                No tengo experiencia laboral</label>
                        </div>
                        <div class="inpformulario formeducacion lg:px-28 lg:py-5 lg:columns-2 ">
                            <input class="input-formc lg:order-1" required type="text" placeholder="Nombre del Puesto">
                            <input class="input-formc lg:order-1" required type="text"
                                placeholder="Nombre de la empresa/Negocio">
                            <div class="item-divf1 break-inside-avoid">
                                <label for="lang" class="labelsel">Fecha de Inicio</label>
                                <div class="flex">
                                    <select name="docs" id="lang" class="w-full">
                                        <option value="">Mes</option>
                                        <option value="dni">DNI</option>
                                        <option value="carnet">CARNET EXTRANJERIA</option>
                                    </select>
                                    <select name="docs" id="lang" class="w-full">
                                        <option value="">Año</option>
                                        <option value="dni">DNI</option>
                                        <option value="carnet">CARNET EXTRANJERIA</option>
                                    </select>
                                </div>
                                <div class="flex p-4">
                                    <input id="default-checkbox" type="radio" value="" class="" />
                                    <label for="default-checkbox"
                                        class="labeltyc addedu text-justify p-4 text-AzulPerla font-TestKarbonRegular">He
                                        Actualmente Trabajo Aqui</label>
                                </div>
                            </div>
                            <div class="item-divf1">
                                <label class="labelsel" for="lang">Pais</label>
                                <select name="docs" id="lang" class="w-full">
                                    <option value="">Seleccionar</option>
                                    <option value="dni">DNI</option>
                                    <option value="carnet">CARNET EXTRANJERIA</option>
                                </select>
                            </div>
                            <div class="item-divf1 break-inside-avoid">
                                <label for="lang" class="labelsel">Fecha de Finalizacion</label>
                                <div class="flex">
                                    <select name="docs" id="lang" class="w-full">
                                        <option value="">Mes</option>
                                        <option value="dni">DNI</option>
                                        <option value="carnet">CARNET EXTRANJERIA</option>
                                    </select>
                                    <select name="docs" id="lang" class="w-full">
                                        <option value="">Año</option>
                                        <option value="dni">DNI</option>
                                        <option value="carnet">CARNET EXTRANJERIA</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <button type="button" class="addedu text-NaranjaPerla">+ Añadir Experiencia</button>
                    </form>
                </div>
                <div class="envio flex justify-around lg:justify-around py-8">
                    <div class="flex justify-end">
                        <button @click="backForm"
                            class="back-form3 bg-NaranjaOscuroPerla px-4 lg:px-8 rounded-2xl text-white"
                            type="button">Anterior</button>
                    </div>
                    <div class="flex justify-end">
                        <button @click="nextForm"
                            class="next-form3 bg-NaranjaOscuroPerla px-4 lg:px-8 rounded-2xl text-white"
                            type="button">Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- formulario4 -->
        <div class="form4" v-show="currentForm === 4">
            <div class="barraavance flex justify-center items-center col-span-4">
                <div class="av1" style="background-color: #E2D6C5;"></div>
                <div class="av2" style="background-color: #E2D6C5;"></div>
                <div class="av3" style="background-color: #E2D6C5;"></div>
                <div class="av4" style="background-color: #E2D6C5;"></div>
            </div>
            <div class="bg-FondoPerla overflow-hidden">
                <div class="gen-form">
                    <div class="titleform1 text-AzulPerla">
                        <h1 class="font-TestKarbonSemiBold">Curriculum</h1>
                    </div>
                    <form action="" class="w-full ">
                        <div class="lg:columns-2 ">
                            <div class="item-divf1 break-inside-avoid">
                                <label for="lang" class="labelsel">Adjuntar archivo desde</label>
                                <div class="flex flex-col w-full">
                                    <div class="flex w-full">
                                        <select name="docs" id="lang" class="w-full">
                                            <option value="">Mis archivos</option>
                                        </select>
                                        <select name="docs" id="lang" class="w-full">
                                            <option value="">Dropbox</option>
                                        </select>
                                        <select name="docs" id="lang" class="w-full">
                                            <option value="">Drive</option>
                                        </select>
                                    </div>
                                    <p class="addedu">Tamaño maximo 15MB</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="bg-FondoPerla overflow-hidden">
                <div class="gen-form">
                    <div class="titleform1 text-AzulPerla">
                        <h1 class="font-TestKarbonSemiBold">Espectativas Personales</h1>
                    </div>
                    <form action="" class="w-full formulario">
                        <div class="inpformulario flex flex-col">
                            <label for="" class="addedu text-AzulPerla py-2">Añadir Mensaje</label>
                            <textarea class="bg-FondoPerla" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="envio flex justify-start lg:justify-start py-8">
                            <div class="flex justify-end">
                                <button @click="backForm" class="back-form4 px-4 lg:px-8 rounded-2xl text-white"
                                    type="button">Anterior</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="flex justify-center items-center p-4">
                <input id="default-checkbox" type="checkbox" value="" class="" />
                <label for="default-checkbox" class="labeltyc text-justify p-4 text-AzulPerla font-TestKarbonRegular">He
                    leído
                    y
                    acepto los Términos y Condiciones y las Políticas de
                    privacidad</label>
            </div>
            <div class="enviofinal flex justify-between lg:justify-around py-8">
                <button type="reset" class="text-blue-500">Cancelar</button>
                <div class="">
                    <button class="bg-NaranjaOscuroPerla px-4 lg:px-8 rounded-3xl text-white" type="submit">ENVIAR
                        POSTULACION</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '../../assets/styleTailwind.css';
.barraavance {
    width: 100%;
    height: 8vh;
}


.av1,
.av2,
.av3,
.av4 {
    margin: 1%;
    height: 35%;
    width: 25%;
}


.formeducacion {
    background-color: #4637250c;
}


select:hover {
    background-color: #6e5b444d;
}


.envio button {
    color: #6E5B44;
    font-size: 5vw;
    background-color: #F5EDE1;
    border: solid 0.04vw#6E5B44;
}


.enviofinal button {
    font-size: 5vw;
}


.labeltyc {
    font-size: 5vw;
    line-height: normal;
}


.labelsel {
    color: #471D7C;
    font-family: "KarbonRegular";
    font-size: 6vw;
    -webkit-text-stroke: 0.2vw #471D7C;
    line-height: normal;
}


.gen-form {
    padding-left: 5%;
    padding-right: 5%;
}


.titleform1 h1 {
    font-size: 9vw;
    padding-top: 5%;
    padding-bottom: 5%;
}


.item-divf1 select {
    appearance: none;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: #F5EDE1;
    border: solid #6E5B44 1px;
    font-family: "KarbonRegular";
    font-size: 6vw;
    text-align: center;
    line-height: normal;
}


textarea {
    font-size: 4.1vw;
}


.input-formc {
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: #FCF5EB;
    border-bottom: solid #6E5B44 1px;
    font-family: "KarbonRegular";
    font-size: 6vw;
    line-height: normal;
}


.input-formc:focus {
    outline: none;
}


::placeholder {
    color: #471D7C;
    font-family: "KarbonRegular";
    font-size: 6vw;
    -webkit-text-stroke: 0.2vw #471D7C;
    line-height: normal;
}


@media (min-width: 1024px) {


    .barraavance {
        padding-left: 15%;
        padding-right: 15%;
    }


    textarea {
        font-size: 1.1vw;
    }


    .theboss {
        padding-right: 5%;
        padding-left: 5%;
    }


    .addedu {
        font-size: 1.2vw;
    }


    .envio button {
        font-size: 1.5vw;
    }


    .enviofinal button {
        font-size: 1.5vw;
    }


    .labeltyc {
        font-size: 1.4vw;
        padding-top: 1%;
        padding-bottom: 5%;
        line-height: normal;
    }


    .titleform1 h1 {
        font-size: 4vw;
    }


    .inpformulario {
        gap: 10%;
    }


    .formulario {
        padding: 3%;
        padding-left: 10%;
        padding-right: 10%;


    }


    .labelsel {
        font-size: 1.1vw;
        -webkit-text-stroke: 0.05vw #471D7C;
        line-height: normal;
    }


    .item-divf1 select {
        appearance: none;
        padding-top: 2%;
        padding-bottom: 2%;
        margin-top: 2%;
        margin-bottom: 2%;
        font-family: "KarbonRegular";
        font-size: 1.1vw;
        text-align: center;
        line-height: normal;
    }


    .input-formc {
        width: 100%;
        padding-top: 2%;
        padding-bottom: 2%;
        margin-top: 5%;
        margin-bottom: 5%;
        font-size: 1.8vw;
        line-height: normal;
    }


    .input-formc:focus {
        outline: none;
    }


    ::placeholder {
        font-size: 1.1vw;
        -webkit-text-stroke: 0.05vw #471D7C;
    }
}
</style>
