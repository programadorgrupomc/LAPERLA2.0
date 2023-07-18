import axios from 'axios'
import { BASE_URL } from '../config.js'

const apiPuestosVacantes = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export default {
  // Obtener todos los héroes
  getPuestosVacantes() {
    return apiPuestosVacantes.get('/puestovacante')
  },

  // Obtener un héroe por su ID
  getPuestosVacantesById(id) {
    return apiPuestosVacantes.get(`/puestovacante/${id}`)
  },

  // Crear un nuevo héroe
  createPuestosVacantes(PuestosVacantesData) {
    return apiPuestosVacantes.post('/puestovacante', PuestosVacantesData)
  },

  // Actualizar un héroe
  updatePuestosVacantes(id, PuestosVacantesData) {
    return apiPuestosVacantes.put(`/puestovacante/${id}`, PuestosVacantesData)
  },

  // Eliminar un héroe
  deletePuestosVacantes(id) {
    return apiPuestosVacantes.delete(`/puestovacante/${id}`)
  }
}
