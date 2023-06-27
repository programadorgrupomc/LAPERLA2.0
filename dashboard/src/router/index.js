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
          component: PaginasView,
        },
        {
          path: 'paginas/inicio',
          name: 'inicio',
          component: PaginaInicio
        },
        {
          path: 'entradas',
          name: 'entradas',
          component: EntradasView
        },
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
        {
          path: 'estadisticas',
          name: 'estadisticas',
          component: EstadisticasView
        },
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

export default router;
