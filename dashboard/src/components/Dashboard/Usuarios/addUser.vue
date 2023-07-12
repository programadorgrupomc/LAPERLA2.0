<script>
import emailjs from 'emailjs-com';
export default {
    data() {
        return {
            emailjsdata: '',
            estadoviewusers: true
        }
    },

    methods: {
        enviarInvitacion() {
            const rpta = window.confirm("Esta Seguro que desea enviar invitacion?")
            // Configurar los parámetros para enviar el correo electrónico
            const serviceID = 'service_7y9yl0i';
            const templateID = 'template_m172fiy';
            const userID = 'nvMUJprykpjUK_bBV';

            // Definir los parámetros del correo electrónico
            const params = {
                to_email: this.emailjsdata, // Dirección de correo electrónico del destinatario
                from_name: 'La perla', // Tu nombre
                to_name: 'ADMIN',//nomre del usuario
                message: 'Ingrese Al siguente Link Para Completar Su Registro:  https://dashboardlaperla.web.app/new-user', // Mensaje de la invitación
            };

            if (rpta) {
                // Enviar el correo electrónico utilizando EmailJS
                emailjs.send(serviceID, templateID, params, userID)
                    .then((response) => {
                        alert('Correo electrónico enviado:', response.status, response.text);
                        // Realizar cualquier acción adicional después de enviar el correo electrónico
                    })
                    .catch((error) => {
                        alert('Error al enviar el correo electrónico:', error);
                    });
            }
        },
        cambiarestadoview() {
            this.estadoviewusers = !this.estadoviewusers;
            this.$emit('estadoviewcambiado', this.estadoviewusers)
        }
    },
}
</script>
<template>
    <div>
        <p class="ttl-adduser">Añadir Miembro</p>
        <div class="flex justify-end items-center">
            <button @click="cambiarestadoview" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
                <p>Atras</p>
            </button>
        </div>
        <div class="flex flex-col">
            <label for="">Perfil</label>
            <select name="" id="">
                <option value="">Seleccione</option>
                <option value="">ADMIN</option>
                <option value="">COLABORADOR</option>
                <option value="">VISUALIZADOR</option>
            </select>
        </div>
        <div class="flex flex-col">
            <label for="">Email/User</label>
            <input v-model="emailjsdata" type="email" placeholder="example@laperla.com" name="" id="">
        </div>
        <div class="flex justify-center">
            <button @click="enviarInvitacion" class="btn-save-users">Enviar Invitación</button>
        </div>
    </div>
</template>
<style scoped>
.ttl-adduser {
    font-size: 2vw;
    font-weight: 500;
    margin-bottom: 10px;
}

.btn-save-users {
    color: white;
    background-color: #FF7439;
    position: fixed;
    bottom: 5%;
    padding: 0.3vw;
    border-radius: 0.8vw;
    padding-right: 2vw;
    padding-left: 2vw;
}

select,
input {
    background-color: #FFFFFF;
    border-radius: 1vw;
    padding: 1%;
    margin: 1%;
    border: solid #AEAEAE 0.02vw;
}
</style>