import './assets/main.css'
import './assets/Fonts/Fonts.css'
import 'boxicons'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

/*Modelos Base de datos:

Inicio
------------------
Hero:
contenido->String
usuarioUltimaAct->String
fechaUltimaAct->Date

NuestroPollo:
titulo->String
contenido->String
imgGeneral->file
imgDetalle->file
usuarioUltimaAct->String
fechaUltimaAct->Date




oxy(Object) {_id: '64a596a9d35691fa07d08df6', titulo: 'IDENTIDAD', contenido: 'Su buen color y voluminosidad es el sello del Pollo Perla.', imgGeneral: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…Vo9yExNUMY6MlwPM38EoaUg2z/gn4jYLEMHuXSxh3aExH/9k=', imgDetalle: '1688580367077-474205498.png', …} */
