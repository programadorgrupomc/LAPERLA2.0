<script>
export default {
  data() {
    return {
      usuario: { email: '', pass: '' },
      emailValido: false,
      contraseñaValida: false,
      loading: false
    }
  },
  components: {},
  methods: {
    validarEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      this.emailValido = this.usuario.email.match(emailPattern)
    },
    validarContraseña() {
      this.contraseñaValida = this.usuario.pass.trim().length > 0
    }
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
  }
}
</script>
<template>
  <div class="cont-form">
    <form action="" class="">
      <div class="cont-input flex flex-col w-full lg:flex-row lg:items-center lg:justify-end">
        <label for="">Usuario</label>
        <input v-model="usuario.email" type="email" name="email" id="email" @input="validarEmail" />
      </div>
      <div class="cont-input flex flex-col w-full lg:flex-row lg:items-center lg:justify-end">
        <label for="">Contraseña</label>
        <input v-model="usuario.pass" type="password" @input="validarContraseña;" />
      </div>
      <div class="cont-recuperacion flex justify-end">
        <p>Olvidaste tu contraseña?</p>
      </div>
      <div class="cont-captcha flex justify-center">
        <!-- <captcha /> -->
        Captcha
      </div>
      <div class="cont-btn flex justify-center">
        <button @click="login" type="button" class="flex items-center justify-center">
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
  width: 90%;
}

.cont-input label {
  color: #471d7c;
  font-family: 'BRSonomaRegular';
  font-size: 5vw;
}

.cont-input input {
  margin: 1%;
  background-color: #f9f1e4;
  border: #9b886f solid 0.4vw;
  border-radius: 5vw;
  color: #4d3b7796;
  font-family: 'MyriadProRegular';
  font-size: 5vw;
  text-align: center;
}

.cont-recuperacion {
  padding: 1%;
  margin-top: 2%;
  color: #471d7c;
  font-family: 'BRSonomaRegular';
  font-size: 4vw;
}

.cont-btn {
  margin-top: 3%;
  margin-bottom: 3%;
}

.cont-btn button {
  background-color: #fcab88;
  border: #ff7439 solid 0.1vw;
  font-size: 5vw;
  color: #471d7ca8;
  font-family: 'BRSonomaRegular';
  font-weight: bold;
  width: 50%;
  border-radius: 5vw;
}

@media (min-width: 768px) {
  .cont-form {
    width: 80%;
  }

  .cont-input label {
    font-size: 4vw;
  }

  .cont-input input {
    font-size: 4vw;
  }

  .cont-recuperacion {
    font-size: 3vw;
  }

  .cont-btn button {
    font-size: 4vw;
  }
}

@media (min-width: 1024px) {
  .cont-form {
    width: 55%;
  }

  .cont-input {
    margin-bottom: 2%;
  }

  .cont-input label {
    font-size: 1.5vw;
    width: auto;
  }

  .cont-input input {
    font-size: 1.5vw;
    width: 60%;
    border: #9b886f solid 0.1vw;
  }

  .cont-recuperacion {
    font-size: 1.2vw;
  }

  .cont-btn {
    margin-bottom: 0%;
    margin-top: 3%;
  }

  .cont-btn button {
    width: 30%;
    padding-bottom: 0.5%;
    padding-top: 0.5%;
    font-size: 1.4vw;
  }
}
</style>
