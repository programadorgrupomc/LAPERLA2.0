import { defineStore } from 'pinia'
import axios from 'axios'

export const useNoticiasStore = defineStore('noticias', {
  state: () => ({
    noticias: [],
    noticiaSeleccionada: null
  }),
  actions: {
    async crearNoticia(nuevoNoticia) {
      try {
        const response = await axios.post(
          'https://api-perla.onrender.com/api/v1/noticias',
          nuevoNoticia
        )
        return response.data
      } catch (error) {
        throw new Error('Error al crear el noticia')
      }
    },

    async obtenernoticias() {
      try {
        const response = await axios.get('https://api-perla.onrender.com/api/v1/noticias')
        this.noticias = response.data
      } catch (error) {
        throw new Error('Error al obtener los noticias')
      }
    },

    async obtenerNoticia(id) {
      try {
        const response = await axios.get(`https://api-perla.onrender.com/api/v1/noticias/${id}`)
        this.noticiaSeleccionada = response.data
      } catch (error) {
        throw new Error('Error al obtener el noticia')
      }
    },

    async actualizarNoticia({ id, datosActualizados }) {
      try {
        const response = await axios.put(
          `https://api-perla.onrender.com/api/v1/noticias/${id}`,
          datosActualizados
        )
        this.noticiaSeleccionada = response.data
      } catch (error) {
        throw new Error('Error al actualizar el noticia')
      }
    },

    async eliminarNoticia(id) {
      try {
        await axios.delete(`https://api-perla.onrender.com/api/v1/noticias/${id}`)
      } catch (error) {
        throw new Error('Error al eliminar el noticia')
      }
    }
  }
})
