import { defineStore } from 'pinia'
import axios from 'axios'

export const usePuestosVacantesStore = defineStore('puestosVacantes', {
  state: () => ({
    puestos: [],
    puestoSeleccionado: null
  }),

  actions: {
    async crearPuestoVacante(nuevoPuestoVacante) {
      try {
        const response = await axios.post(
          'https://api-perla.onrender.com/api/v1/puestosvacantes',
          nuevoPuestoVacante
        )
        return response.data
      } catch (error) {
        throw new Error('Error al crear el puesto vacante')
      }
    },

    async obtenerPuestosVacantes() {
      try {
        const response = await axios.get('https://api-perla.onrender.com/api/v1/puestosvacantes')
        this.puestos = response.data
      } catch (error) {
        throw new Error('Error al obtener los puestos vacantes')
      }
    },

    async obtenerPuestoVacante(id) {
      try {
        const response = await axios.get(
          `https://api-perla.onrender.com/api/v1/puestosvacantes/${id}`
        )
        this.puestoSeleccionado = response.data
      } catch (error) {
        throw new Error('Error al obtener el puesto vacante')
      }
    },

    async actualizarPuestoVacante({ id, datosActualizados }) {
      try {
        const response = await axios.put(
          `https://api-perla.onrender.com/api/v1/puestosvacantes/${id}`,
          datosActualizados
        )
        this.puestoSeleccionado = response.data
      } catch (error) {
        throw new Error('Error al actualizar el puesto vacante')
      }
    },

    async eliminarPuestoVacante(id) {
      try {
        await axios.delete(`https://api-perla.onrender.com/api/v1/puestosvacantes/${id}`)
      } catch (error) {
        throw new Error('Error al eliminar el puesto vacante')
      }
    }
  }
})
