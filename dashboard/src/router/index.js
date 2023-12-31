import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
//cildren1
import PaginasView from '../views/Dashboard/PaginasView.vue'
import AjustesView from '../views/Dashboard/AjustesView.vue'
import EntradasView from '../views/Dashboard/EntradasView.vue'
import EstadisticasView from '../views/Dashboard/EstadisticasView.vue'
import MediosView from '../views/Dashboard/MediosView.vue'
import UsuariosView from '../views/Dashboard/UsuariosView.vue'
//children 1.1
import PaginaInicio from '../components/Dashboard/Paginas/PaginaInicio/PaginaInicio.vue'
import PaginaNosotros from '../components/Dashboard/Paginas/PaginaNosotros/PaginaNosotros.vue'
import PaginaRecetario from '../components/Dashboard/Paginas/PaginaRecetario/PaginaRecetario.vue'
import PaginaNoticias from '../components/Dashboard/Paginas/PaginaNoticias/PaginaNoticia.vue'
import PaginaWork from '../components/Dashboard/Paginas/PaginaWork/PaginaWork.vue'
import PaginaContactanos from '../components/Dashboard/Paginas/PaginaContactanos/PaginaContactanos.vue'
import PaginaCodigoEtica from '../components/Dashboard/Paginas/PaginaCodigoEtica/PaginaCodigoEtica.vue'
import PaginaHeader from '../components/Dashboard/Paginas/PaginaHeader/PaginaHeader.vue'
import PaginaFooter from '../components/Dashboard/Paginas/PaginaFooter/PaginaFooter.vue'
//children entradas
import EntradaRecetario from '../components/Dashboard/Entradas/EntradaRecetario/EntradaRecetario.vue'
import EntradaNoticias from '../components/Dashboard/Entradas/EntradaNoticias/EntradaNoticias.vue'
import EntradaPuestosVacantes from '../components/Dashboard/Entradas/EntradaPuestosVacantes/EntradaPuestosVacantes.vue'

//children entradas recetario
import NuevaReceta from '../components/Dashboard/Entradas/EntradaRecetario/Componentes/NuevaReceta.vue'
//children entradas noticia
import NuevaNoticia from '../components/Dashboard/Entradas/EntradaNoticias/Componentes/NuevaNoticia.vue'
//children entradas puestos vacantes
import NuevoPv from '../components/Dashboard/Entradas/EntradaPuestosVacantes/Componentes/NuevoPuestoVacante.vue'

//esdisticas {clidren}
import EstadisticasDB from '../components/Dashboard/Estadisticas/BaseDeDatos/BaseDeDatos.vue'
import EstadisticasDash from '../components/Dashboard/Estadisticas/Dashboard/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'paginas',
          name: 'paginas',
          component: PaginasView
        },
        {
          path: 'paginas/inicio',
          name: 'inicio',
          component: PaginaInicio
        },
        {
          path: 'paginas/nosotros',
          name: 'nosotros',
          component: PaginaNosotros
        },
        {
          path: 'paginas/recetario',
          name: 'recetario',
          component: PaginaRecetario
        },
        {
          path: 'paginas/noticia',
          name: 'noticia',
          component: PaginaNoticias
        },
        {
          path: 'paginas/work',
          name: 'work',
          component: PaginaWork
        },
        {
          path: 'paginas/contactanos',
          name: 'contactanos',
          component: PaginaContactanos
        },
        {
          path: 'paginas/codigoetica',
          name: 'codigoetica',
          component: PaginaCodigoEtica
        },
        {
          path: 'paginas/header',
          name: 'header',
          component: PaginaHeader
        },
        {
          path: 'paginas/footer',
          name: 'footer',
          component: PaginaFooter
        },
        //general->Aun nell
        //rutas de entradas
        {
          path: 'entradas',
          name: 'entradas',
          component: EntradasView
        },
        {
          path: 'entradas/recetario',
          name: 'entradasrecetario',
          component: EntradaRecetario
        },
        //rutas crud entradas recetario
        {
          path: 'entradas/recetario/nuevareceta',
          name: 'nuevareceta',
          component: NuevaReceta
        },
        //rutas noticias
        {
          path: 'entradas/noticias',
          name: 'entradasnoticias',
          component: EntradaNoticias
        },
        //rutas crud entrdas noticias
        {
          path: 'entradas/noticias/nuevanoticia',
          name: 'nuevanoticia',
          component: NuevaNoticia
        },

        //rutas puestos vacantes
        {
          path: 'entradas/puestosvacantes',
          name: 'entradaspuestosvacantes',
          component: EntradaPuestosVacantes
        },
        //rutas crud entradas puestos vaccanetes
        {
          path: 'entradas/puestosvacantes/nuevopuestovacante',
          name: 'nuevopv',
          component: NuevoPv
        },
        //solo medios
        {
          path: 'medios',
          name: 'medios',
          component: MediosView
        },
        {
          path: 'ajustes',
          name: 'ajustes',
          component: AjustesView
        },
        //ruta general de estadisticas
        {
          path: 'estadisticas',
          name: 'estadisticas',
          component: EstadisticasView
        },
        //subrutas estadisticas
        {
          path: 'estadisticas/basededatos',
          name: 'basededatos',
          component: EstadisticasDB
        },
        {
          path: 'estadisticas/dashboard',
          name: 'estadisticadash',
          component: EstadisticasDash
        },
        //ruta general de usuarios
        {
          path: 'usuarios',
          name: 'usuarios',
          component: UsuariosView
        }
      ]
    }
    //rutas de dasboard subrutas
  ]
})

export default router
