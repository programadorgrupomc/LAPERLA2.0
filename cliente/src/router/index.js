import { createRouter, createWebHistory } from 'vue-router'
import VistaInicio from '../views/VistaInicio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: VistaInicio
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VistaNosotros.vue')
    },
    {
      path: '/recetario',
      name: 'recetario',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VistaRecetario.vue')
    },
    {
      path: '/noticias',
      name: 'noticias',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VistaNoticias.vue')
    },
    {
      path: '/work',
      name: 'work',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VistaWork.vue')
    },
    {
      path: '/contactanos',
      name: 'contactanos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VistaContactanos.vue')
    },

    //Rutas Secundarias Recetas Y noticias Y Trabajos.
    {
      path: '/receta/desc/:id',
      name: 'recetasdesc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Recetario/DescReceta.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
})



export default router
