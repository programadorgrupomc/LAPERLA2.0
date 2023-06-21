<script>
import emailjs from 'emailjs-com'
export default {
    name: "formContact",
    data() {
        return {
            contacto: {
                nombres: '',
                email: '',
                telefono: '',
                mensaje: '',
                ciudad: '',
            }
        }
    },
    methods: {
        EnviarForm() {
            // Configurar los parámetros para enviar el correo electrónico
            const serviceID = 'service_7y9yl0i';
            const templateID = 'template_kiyxnhk';
            const userID = 'nvMUJprykpjUK_bBV';

            // Definir los parámetros del correo electrónico
            const params = {
                // // to_email: this.emailjsdata, // Dirección de correo electrónico del destinatario
                // from_name: 'La perla', // Tu nombre
                // to_name: 'ADMIN',//nomre del usuario
                nombrecli: this.contacto.nombres,
                emailcli: this.contacto.email,
                telefono: this.contacto.telefono,
                ciudas: this.contacto.ciudad,
                message: this.contacto.mensaje, // Mensaje de la invitación
            };

            // Enviar el correo electrónico utilizando EmailJS
            const rpta = window.confirm("Desea Desea Contactarse con La Perla?")
            if (rpta) {
                emailjs.send(serviceID, templateID, params, userID)
                    .then((response) => {
                        alert('Correo electrónico enviado:', response.status, response.text);
                        // Realizar cualquier acción adicional después de enviar el correo electrónico
                    })
                    .catch((error) => {
                        alert('Error al enviar el correo electrónico:', error);
                    });
            }
        }
    }
};
</script>
<template>
    <div class="cont-form overflow-hidden shadow-2xl">
        <div class="h-full lg:mx-auto lg:my-auto  flex flex-col justify-around lg:justify-center items-center lg:block">
            <h1 class="ttl-form text-AzulPerla">CONTACTANOS</h1>
            <form action="" class="formulario">
                <div class="lg:columns-2 lg:gap-20">
                    <input v-model="contacto.nombres" class="input-formc lg:order-1" required type="text"
                        placeholder="NOMBRES" />
                    <input v-model="contacto.email" class="input-formc lg:order-2" required type="email"
                        placeholder="EMAIL" />
                    <input v-model="contacto.ciudad" class="input-formc lg:order-4" required type="text"
                        placeholder="CIUDAD" />
                    <input v-model="contacto.telefono" class="input-formc lg:order-5" required type="text"
                        placeholder="TELEFONO" pattern="[9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]" />
                    <input v-model="contacto.mensaje" class="input-formc lg:order-3" type="text" placeholder="MENSAJE" />
                </div>
                <div class="cont-btn flex justify-center">
                    <button @click="EnviarForm" type="button" class="btnsubmit bg-NaranjaPerla text-white font-TestKarbonMedium transition-all">
                        ENVIAR
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

.cont-form {
    background-color: #fffbf3;
    height: auto;
    border-radius: 12vw;
    margin: 8%;
    padding-top: 8%;
}

.ttl-form {
    font-family: "TestKarbonSemibold";
    font-size: 6vw;
}

.formulario {
    padding: 7%;
}

.input-formc {
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    margin-top: 3%;
    margin-bottom: 3%;
    background-color: #fffbf3;
    border-bottom: solid #471d7c 1px;
    font-family: "KarbonRegular";
    font-size: 6vw;
}

.input-formc:focus {
    outline: none;
}

::placeholder {
    color: #471d7c;
    font-family: "KarbonRegular";
    font-size: 6vw;
    -webkit-text-stroke: 0.2vw #471d7c;
}

.cont-btn {
    padding-top: 10%;
}

.btnsubmit {
    padding: 2%;
    padding-left: 8%;
    padding-right: 8%;
    font-size: 5.5vw;
    border-radius: 3.5vw;
}

@media (min-width: 768px) {
    .cont-form {
        background-color: #fffbf3;
        height: auto;
        border-radius: 12vw;
        margin: 8%;
        padding-top: 8%;
    }

    .ttl-form {
        font-family: "TestKarbonSemibold";
        font-size: 5.5vw;
    }

    .formulario {
        padding-left: 7%;
        padding-right: 7%;
        padding-top: 1%;
    }

    .input-formc {
        width: 100%;
        padding-top: 4%;
        padding-bottom: 1%;
        margin-top: 2%;
        margin-bottom: 2%;
        background-color: #fffbf3;
        border-bottom: solid #471d7c 1px;
        font-family: "KarbonRegular";
        font-size: 4vw;
    }

    .input-formc:focus {
        outline: none;
    }

    ::placeholder {
        color: #471d7c;
        font-family: "KarbonRegular";
        font-size: 3.5vw;
        -webkit-text-stroke: 0.2vw #471d7c;
    }

    .cont-btn {
        padding-top: 10%;
    }

    .btnsubmit {
        padding: 1%;
        padding-left: 8%;
        padding-right: 8%;
        font-size: 3vw;
        border-radius: 2.5vw;
    }
}

@media (min-width: 1024px) {

    .cont-form {
        background-color: #fffbf3;
        height: auto;
        border-radius: 9vw;
        margin: 5%;
        padding-top: 2%;
    }

    .ttl-form {
        font-family: "TestKarbonSemibold";
        font-size: 6vw;
        padding-left: 10%;
    }

    .formulario {
        padding-left: 14%;
        padding-right: 14%;
        padding-bottom: 4.2%;
        padding-top: 0%;
    }

    .input-formc {
        width: 100%;
        padding-top: 5%;
        padding-bottom: 2%;
        margin-top: 7%;
        margin-bottom: 3%;
        background-color: #fffbf3;
        border-bottom: solid #471d7c 1px;
        font-family: "KarbonRegular";
        font-size: 1.2vw;
    }

    .input-formc:focus {
        outline: none;
    }

    ::placeholder {
        color: #471d7c;
        font-family: "KarbonRegular";
        font-size: 1.5vw;
        -webkit-text-stroke: 0.02vw #471d7c;
    }

    .cont-btn {
        padding-top: 3%;
    }

    .btnsubmit {
        padding: 0.5%;
        padding-left: 4%;
        padding-right: 4%;
        font-size: 1.4vw;
        border-radius: 1vw;
    }

    .btnsubmit:hover {
        padding-left: 8%;
        padding-right: 8%;
    }
}
</style>