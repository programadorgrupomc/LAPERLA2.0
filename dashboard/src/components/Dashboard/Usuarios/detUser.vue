<script>
import { useUserStore } from '@/stores/storeLogin.js';

export default {
    data() {
        return {
            viewUser: true,
            users: [],
            userrole: ''
        };
    },
    props: ['userdata', 'iduser'],
    methods: {
        getUser() {
            // api.getDataUserG().then(res => {
            //     this.users = res.data
            //     this.useruimage = res.data[0].image
            // })
            const user = useUserStore();
            this.users = user.usuarioDB;
            this.userrole = this.users.data.role;//consumiendo desde la tienda de usuarios
        },
        cambiarestadoview2() {
            this.viewUser = !this.viewUser;
            this.$emit('estadocambiadoview2', this.viewUser)
        },
        saveCambios(){
            const rpta=window.confirm("Desea Guardar Los Cambios Del Usuario?");
            if(rpta){
                alert("Cambios Guardados!!")
            }
        }
    },
    mounted() {
        this.getUser()
    }
}

</script>
<template>
    <div v-if="userrole">
        <div class="cont-btnback flex justify-end items-center">
            <button @click="cambiarestadoview2" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
                <p>Atras</p>
            </button>
        </div>
        <div class="cont-table">
            <div class="cont-htable flex items-center justify-center border px-10">
                <p class="font-semibold text-center">Detalles de Usuario</p>
            </div>
            <div v-for="us in userdata" :key="us._id"
                class="cont-target-user w-full border shadow-md hover:scale-105 bg-white transition-all">
                <div v-if="us._id === iduser">
                    <div class="cont-user flex items-center shadow-sm w-full">
                        <div class="img-user flex justify-center items-center">
                            <img class="rounded-full object-cover"
                                :src="'https://api-perla.onrender.com/uploads/' + us.image" :alt="image" alt="user">
                        </div>
                        <div class="information-user">
                            <h1 class="font-bold">{{ us.nombre }}</h1>
                            <p>@{{ us.nombre + us.apellido }}</p>
                            <p class="rol-user">{{ us.role }}</p>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <div v-if="userrole === 'ADMINISTRADOR'" class="cont-role flex justify-around items-center shadow-sm">
                            <label for="">Rol: </label>
                            <select name="" id="" class="shadow-sm">
                                <option value="" selected>{{ us.role }}</option>
                                <option v-if="us.role != 'ADMINISTRADOR'" value="">ADMINISTRADOR</option>
                                <option v-if="us.role != 'COLABORADOR'" value="">COLABORADOR</option>
                                <option v-if="us.role != 'VISUALIZADOR'" value="">VISUALIZADOR</option>
                            </select>
                        </div>
                        <div v-else class="w-full flex flex-col items-center justify-center">
                            <div disabled class="cont-role flex justify-around items-center shadow-sm">
                                <label for="">Rol: </label>
                                <select disabled name="" id="" class="shadow-sm">
                                    <option value="" selected>{{ us.role }}</option>
                                    <option v-if="us.role != 'ADMINISTRADOR'" value="">ADMINISTRADOR</option>
                                    <option v-if="us.role != 'COLABORADOR'" value="">COLABORADOR</option>
                                    <option v-if="us.role != 'VISUALIZADOR'" value="">VISUALIZADOR</option>
                                </select>
                            </div>
                            <p>*Necesita Autorizacion*</p>
                        </div>

                    </div>

                    <div class="user-det-register text-center p-2 text-gray-600">
                        Este Usuario fue registrado en {{ us.date }}
                    </div>

                </div>
            </div>

        </div>
        <div class="flex justify-center">
            <button @click="saveCambios" class="btn-save-users">Guardar cambios</button>
        </div>
    </div>
</template>
<style scoped>
.btn-save-users {
    color: white;
    background-color: #FF7439;
    margin-top: 5%;
    bottom: 5%;
    position: fixed;
    padding: 0.4vw;
    border-radius: 2vw;
    padding-right: 2vw;
    padding-left: 2vw;
}

.cont-btnback {
    margin-right: 10%;
    margin-bottom: 2%;
}

.cont-htable {
    height: 8vh;
}

.cont-table {
    background-color: #FFFFFF;
    margin-left: 10%;
    margin-right: 10%;
}

.cont-user {
    height: auto;
    max-height: 20vh;
}

.img-user {
    width: 25vh;
    height: 20vh;
    margin: 2%;
    transform: scale(0.6);
}

.information-user {
    width: 65%;
}

.information-user h1 {
    color: #000000;
    font-size: 5vw;
}

.rol-user {
    color: white;
    background-color: #4D3B77;
    width: 80%;
    text-align: center;
    font-size: 4vw;
}

.cont-htable p {
    font-size: 5vw;
}

@media (min-width: 1024px) {

    .select-options {
        border: solid;
    }

    .rol-user {
        color: white;
        background-color: #4D3B77;
        width: 25%;
        text-align: center;
        font-size: 0.8vw;
    }

    .information-user h1 {
        color: #000000;
        font-size: 1.2vw;
    }

    .img-user {
        width: 15vw;
        height: 15vw;
        margin: 2%;
        transform: scale(0.6);
    }

    .img-user img {
        height: 15vw;
        width: 15vw;
    }

    .cont-htable p {
        font-size: 1.2vw;
    }

    .cont-role {
        border-radius: 1vw;
        border: solid 0.1vw #e6e6e6;
        margin: 2%;
        padding: 2%;
        padding-top: 1%;
        padding-bottom: 1%;
        width: 80%;
    }

    .cont-role select {
        border: solid 0.1vw #e6e6e6;
        border-radius: 1vw;
        padding: 1%;
    }

    .cont-role select:hover {
        background-color: #4d3b77;
        color: white;
    }

    .user-det-register {
        padding-bottom: 3%;
    }
    .cont-user{
       margin-top: 1%;
       padding-bottom: 1%;
    }
}
</style>