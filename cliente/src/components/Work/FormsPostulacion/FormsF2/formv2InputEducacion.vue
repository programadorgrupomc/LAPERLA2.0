<script>


export default {
    components: {

    },
    data() {
        return {
            educacion: [{
                estadoest: '',
                titulo: '',
                nivelest: '',
                institucion: ''
            }],
        }
    },
    methods: {
        agregarEducacion() {
            this.educacion.push({
                estadoest: '',
                titulo: '',
                nivelest: '',
                institucion: ''
            });
        },
        eliminarEducacion(i){
            this.educacion.splice(i, 1);
        }
    },
}
</script>
<template>
    <!-- <div>
        <pruebaTabs/>
    </div> -->
    <div class="contenedorformMo bg-FondoPerla">

        <p class="titleform text-AzulPerla font-TestKarbonSemiBold">Educacion</p>
        <form action="" v-for="(edu, index) in educacion" :key="index" class="contenedorform flex flex-col w-full">
            <div v-if="index > 0" class=" flex w-full justify-end"><button @click="eliminarEducacion(index)" type="button" class="btn-close hover:bg-red-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
            </div>
            <div class="contenedorcolumnas lg:columns-2 w-full">
                <div class="inpsel">
                    <label for="">Estado de estudio</label>
                    <select class="perlaselect" name="estadoest" id="estadoest">
                        <option value="">Seleccionar</option>
                    </select>
                </div>
                <input class="perlainput inptdt w-full" type="text" placeholder="Titulo" v-model="edu.titulo">
                <div class="inpsel">
                    <label for="">Nivel de estudio</label>
                    <select class="perlaselect" name="nivelest" id="nivelest">
                        <option value="">Seleccionar</option>
                    </select>
                </div>
                <input class="perlainput inptdt w-full" type="text" placeholder="Institucion">
            </div>
        </form>
        <div class="contenedorbtnanadir flex justify-center lg:justify-start">
            <button class="anadir text-NaranjaPerla font-TestKarbonRegular" type="button" @click="agregarEducacion">+ Añadir Educacion</button>
        </div>
    </div>
</template>
<style scoped>
.perlainput:hover {
    transition: all;
    background-color: #6e5b4423;
}

.perlaselect:hover {
    background-color: #6e5b4446;
}

.contenedorbtnanadir {
    margin-top: 2%;
}

.contenedorform {
    background-color: #f5ede1;
    margin-top: 2%;
    padding: 3%;
    border-radius: 3.5vw;
}

.anadir {
    font-size: 4.5vw;
    line-height: normal;
}

.contenedorformMo {
    padding: 4%;
}

.titleform {
    font-size: 9vw;
    line-height: normal;
}

.inpsel {
    display: flex;
    flex-direction: column;
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
}

.perlaselect {
    font-size: 3.8vw;
    line-height: normal;
    color: #471D7C;
    font-family: "KarbonRegular";
    appearance: none;
    text-align: center;
    margin-top: 1%;
    padding: 1%;
    background-color: #F5EDE1;
    border: solid #6E5B44 0.1vw;
}

label {
    font-family: "KarbonRegular";
    font-size: 4.5vw;
    line-height: normal;
    color: #471D7C;
    -webkit-text-stroke: 0.1vw #471D7C;
}

::placeholder {
    font-family: "KarbonRegular";
    font-size: 4.5vw;
    line-height: normal;
    color: #471D7C;
    -webkit-text-stroke: 0.1vw #471D7C;
}

.perlainput {
    font-size: 3.8vw;
    line-height: normal;
    color: #471D7C;
    font-family: "KarbonRegular";
    margin-top: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: #f5ede1;
    border-bottom: solid #6E5B44 0.12vw;
}

.inptdt {
    margin-bottom: 5%;
    margin-top: 5%;
}
@media (min-width: 768px) {
    .btn-close{
        transform: scale(1.5);
    }
}
@media (min-width: 1024px) {
    .contenedorform{
        border-radius: 2.5vw;
    }
    .contenedorcolumnas {
        padding: 3%;
        gap: 13vw;
    }

    .titleform {
        font-size: 4vw;
        line-height: normal;
    }

    .contenedorformMo {
        padding: 4%;
        padding-left: 15%;
        padding-right: 15%;
    }

    label {
        font-family: "KarbonRegular";
        font-size: 1.4vw;
        line-height: normal;
        color: #471D7C;
        -webkit-text-stroke: 0.05vw #471D7C;
    }

    ::placeholder {
        font-family: "KarbonRegular";
        font-size: 1.4vw;
        line-height: normal;
        color: #471D7C;
        -webkit-text-stroke: 0.05vw #471D7C;
    }

    .perlaselect {
        font-size: 1.3vw;
        line-height: normal;
        color: #471D7C;
        font-family: "KarbonRegular";
        appearance: none;
        text-align: center;
        margin-top: 1%;
        padding: 0.5%;
        background-color: #F5EDE1;
        border: solid #6E5B44 0.01vw;
    }

    .perlainput {
        font-size: 1.3vw;
        line-height: normal;
        color: #471D7C;
        font-family: "KarbonRegular";
        margin-top: 1%;
        padding-top: 0.5%;
        padding-bottom: 0.5%;
        border-bottom: solid #6E5B44 0.05vw;
    }

    .anadir {
        font-size: 1.4vw;
        line-height: normal;
    }
    .btn-close{
        transform: scale(1.5);
    }
}
@media (min-width: 5120px) {
    .btn-close{
        transform: scale(4.5);
    }
}
</style>