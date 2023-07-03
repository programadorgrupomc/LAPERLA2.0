<template>
  <div class="contendorPages">
    <div
      v-for="pag in pages"
      :key="pag.id"
      class="itempages w-full bg-azulbsPerla flex justify-between transition-all"
    >
      <p class="ttl-item font-MyriadProRegular">{{ pag.name }}</p>
      <div class="relative flex">
        <button
          class="btn-open"
          @click="pag.isOpen = !pag.isOpen"
          aria-haspopup="true"
          :aria-expanded="pag.isOpen"
        >
          <img class="h-full" src="../../../assets/Dashboard/Paginas/PopThrePoint.svg" alt="" />
        </button>
        <div
          v-show="pag.isOpen"
          class="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <router-link :to="pag.route">
            <a href="" class="block px-4 py-2 text-sm text-gray-700 link-opcion">Editar</a>
          </router-link>
          <!-- <router-link :to="pag.routeview" custom v-slot="{ navigate }">
                        <a href="#" @click="navigate" role="link" class="block px-4 py-2 text-sm text-gray-700 link-opcion"
                            tabindex="-1">
                            Ver Pagina
                        </a>
                    </router-link> -->
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 link-opcion"
            role="menuitem"
            tabindex="-1"
            @click="deletepag(pag.id)"
          >
            Eliminar
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        {
          id: '1',
          name: 'Página de inicio',
          isOpen: false,
          route: '/dashboard/paginas/inicio',
          routeview: '/pages/view'
        },
        {
          id: '2',
          name: 'Nosotros',
          isOpen: false,
          route: '/dashboard/paginas/inicio',
          routeview: '/pages/view'
        },
        {
          id: '3',
          name: 'Recetario',
          isOpen: false,
          route: '/dashboard/paginas/inicio',
          routeview: '/pages/view'
        },
        {
          id: '4',
          name: 'Noticias',
          isOpen: false,
          route: '/dashboard/paginas/inicio',
          routeview: '/pages/view'
        },
        {
          id: '5',
          name: 'Trabaja con nosotros',
          isOpen: false,
          route: '/dashboard/paginas/inicio',
          routeview: '/pages/view'
        },
        {
          id: '6',
          name: 'Contactanos',
          isOpen: false,
          route: '/dashboard/paginas/inicio',
          routeview: '/pages/view'
        },
        {
          id: '7',
          name: 'Codigo de etica',
          isOpen: false,
          route: '/dashboard/paginas/inicio',
          routeview: '/pages/view'
        },
        {
          id: '8',
          name: 'Header',
          isOpen: false,
          route: '/dashboard/paginas/inicio',
          routeview: '/pages/view'
        },
        {
          id: '9',
          name: 'Footer',
          isOpen: false,
          route: '/dashboard/paginas/inicio',
          routeview: '/pages/view'
        }
      ]
    }
  },
  methods: {
    deletepag(id) {
      const index = this.pages.findIndex((page) => page.id === id)
      if (index !== -1) {
        this.pages.splice(index, 1)
      }
    }
  }
}
</script>
<style scoped>
.btn-open {
  width: 3vh;
}

.link-opcion:hover {
  background-color: #4d3b77;
  color: white;
  border-radius: 0.2vw;
}

.contendorPages {
  padding: 5%;
}

.itempages {
  background-color: white;
  width: auto;
  padding: 5%;
  margin: 3%;
  border: solid #aeaeae 0.1vw;
}

.itempages:hover {
  border-radius: 2vw;
  transform: scale(1.01);
}

.itempages p {
  color: #000000;
  font-size: 'MyriadProRegular';
  font-size: 5vw;
  padding-left: 2%;
}

@media (min-width: 768px) {
  .itempages p {
    color: #000000;
    font-size: 3vw;
    padding-left: 2%;
  }

  .itempages {
    background-color: white;
    width: auto;
    padding: 3%;
    margin: 3%;
    border: solid #aeaeae 0.1vw;
  }
}

@media (min-width: 1024px) {
  .itempages p {
    color: #000000;
    font-size: 1.2vw;
    padding-left: 2%;
  }

  .itempages {
    background-color: white;
    width: auto;
    padding: 2%;
    margin: 3%;
    border: solid #aeaeae 0.1vw;
  }

  .itempages:hover {
    border-radius: 0.8vw;
    transform: scale(1.01);
  }
}
</style>
