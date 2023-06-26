<script>
export default {
    data() {
        return {
            usuario: { email: '', pass: '' },
            emailValido: false,
            contraseñaValida: false,
            loading: false,
        }
    },
    components: {

    },
    methods: {
        validarEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailValido = this.usuario.email.match(emailPattern);
        },
        validarContraseña() {
            this.contraseñaValida = this.usuario.pass.trim().length > 0;
        },
        // login() {
        //     if (this.emailValido && this.contraseñaValida) {
        //         this.loading = true;

        //         api.loginG(this.usuario)
        //             .then(res => {
        //                 const token = res.data.token;
        //                 const store = useUserStore();
        //                 store.guardarUsuario(token);
        //                 router.push("/dashboard");
        //             })
        //             .catch(err => {
        //                 alert(err.response.data.mensaje);
        //                 this.mensaje = err.response.data.mensaje;
        //                 this.usuario.email = '';
        //                 this.usuario.pass = '';
        //             })
        //             .finally(() => {
        //                 this.loading = false;
        //             });
        //     } else {
        //         alert("ERROR: Verifica que los datos ingresados sean correctos...")
        //     }
        // },
    },
}
</script>
<template>
    <div class="cont-form">
        <form action="" class="">
            <div class="cont-input flex flex-col w-full">
                <label for="">Usuario</label>
                <input v-model="usuario.email" type="email" name="email" id="email" @input="validarEmail">
            </div>
            <div class="cont-input flex flex-col w-full">
                <label for="">Contraseña</label>
                <input v-model="usuario.pass" type="password" @input="validarContraseña">
            </div>
            <div class="cont-recuperacion">
                <p>Olvidaste tu contraseña?</p>
            </div>
            <div class="cont-captcha flex justify-end">
                <!-- <captcha /> -->
                Captcha
            </div>
            <div class="cont-btn flex justify-center">
                <button @click="login" type="button">
                    <span>Ingresar</span>
                </button>
            </div>
        </form>
    </div>
</template>
<style scoped>
.cont-form {
    margin: 1%;
    padding: 5%;
    width: 80%;
    border: grey solid;
}

.cont-input {
    border: grey solid;

}
.cont-input label{
    color: #471D7C;
    
}
.cont-input input {
    margin: 1%;
    background-color: #F9F1E4;
    border: #9B886F solid 0.4vw;
    border-radius: 5vw;
}

.cont-recuperacion {
    border: rgb(204, 86, 86) solid;
}

.cont-btn {
    border: rgb(102, 204, 86) solid;
}

.cont-btn button {
    background-color: #FCAB88;
    border: #FF7439 solid 0.1vw;
    width: 50%;
    border-radius: 5vw;
}
</style>