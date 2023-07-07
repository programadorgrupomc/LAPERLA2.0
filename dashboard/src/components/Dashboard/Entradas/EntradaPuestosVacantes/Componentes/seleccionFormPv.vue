<script>
import form1 from './FormsPostulacion/FormPost1.vue'
import form2 from './FormsPostulacion/FormPost2.vue'
import botonesControl from '../../cDashboard/botonesControl.vue';


export default {
    data() {
        return {
            estadoseleccionform: true,
            estadoform1: false,
            estadoform2: false,
            seleccionado: '',

        }
    },
    components: {
        form1, form2, botonesControl,
    },
    methods: {
        cambiarestadoseleccionform() {
            this.estadoseleccionform = !this.estadoseleccionform;
            this.$emit("seleccionformcam", this.estadoseleccionform);
        },
        cambiarestadoform1() {
            this.estadoform1 = !this.estadoform1;
        },
        cambiarestadoform2() {
            this.estadoform2 = !this.estadoform2;
        },
        seleccionar(ind) {
            this.seleccionado = ind;
            if (ind == 'form1') {
                document.getElementById('btn1').style.backgroundColor = 'green';
                document.getElementById('btn2').style.backgroundColor = '#FCAB88';
            } else if (ind == 'form2') {
                document.getElementById('btn2').style.backgroundColor = 'green';
                document.getElementById('btn1').style.backgroundColor = '#FCAB88';
            }
        }
    }
}
</script>

<template>
    <div class="general">
        <botonesControl class="hidden lg:block absolute btn-control" />
        <div class="cont-selform transition-all">
            <p>Seleccionar Formulario:</p>
            <div class="cont-forms ">
                <div class="form flex justify-between items-center">
                    <p>Formulario 1</p>
                    <div class="cont-btn flex justify-center items-center">
                        <button @click="cambiarestadoform1" class="btn">
                            <p v-if="estadoform1 === false">Vizualizar</p>
                            <p v-if="this.estadoform1">Ocultar</p>
                        </button>
                        <button @click="seleccionar('form1')" id="btn1" class="btn">Seleccionar</button>
                    </div>
                </div>
                <form1 v-if="estadoform1" />
                <div class="form flex justify-between items-center">
                    <p>Formulario 2</p>
                    <div class="cont-btn flex justify-center items-center">
                        <button @click="cambiarestadoform2" class="btn">
                            <p v-if="estadoform2 === false">Vizualizar</p>
                            <p v-if="this.estadoform2">Ocultar</p>
                        </button>
                        <button @click="seleccionar('form2')" id="btn2" class="btn">Seleccionar</button>
                    </div>
                </div>
                <form2 v-if="estadoform2" />
            </div>
        </div>
        <div class="flex justify-center">
            <button @click="cambiarestadoseleccionform" class="btn-nav shadow-2xl">Atras</button>
        </div>
    </div>
</template>
<style scoped>


.cont-selform {
    padding: 5%;
    margin-left: 1%;
    margin-right: 1%;
    font-size: 5vw;
}
.general{
    padding-bottom: 15vh;
}

.form {
    background-color: #F9F1E4;
    border: #8e8982 solid 0.1vw;
    margin: 1%;
    padding: 1%;
    font-size: 4.1vw;
}

.cont-btn {
    width: 50%;
}

.btn {
    background-color: #FCAB88;
    margin: 1%;
    font-size: 3.05vw;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.929);
}

.btn-nav {
    background-color: rgb(89, 35, 140);
    width: 40%;
    font-size: 4.2vw;
    margin: 2%;
    border-radius: 2vw;
    font-weight: bold;
    color: white;
}

@media (min-width: 1024px) {
    .btn-control {
        height: 6vh;
        top: -0%;
        right: 8vw;

    }

    .cont-selform {
        padding: 2%;
        margin-left: 10%;
        margin-right: 10%;
        font-size: 2vw;
    }

    .form {
        background-color: #F9F1E4;
        border: #8e8982 solid 0.1vw;
        margin: 1%;
        padding: 1%;
        font-size: 1.1vw;
    }

    .cont-btn {
        width: 30%;
    }

    .btn {
        background-color: #FCAB88;
        margin: 1%;
        font-size: 1.05vw;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.929);
    }

    .btn-nav {
        background-color: rgb(89, 35, 140);
        width: 20%;
        font-size: 1.2vw;
        margin: 2%;
        border-radius: 2vw;
        font-weight: bold;
        color: white;
    }
}
</style>