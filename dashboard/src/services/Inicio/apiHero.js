import axios from 'axios'
import { BASE_URL } from '../config.js'

const apiHero = axios.create({
  baseURL: BASE_URL, // Reemplaza esta URL con la URL de tu API
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export default {
  // Obtener todos los héroes
  getHeroes() {
    return apiHero.get('/heroes')
  },

  // Obtener un héroe por su ID
  getHero(id) {
    return apiHero.get(`/heroes/${id}`)
  },

  // Crear un nuevo héroe
  createHero(heroData) {
    return apiHero.post('/heroes', heroData)
  },

  // Actualizar un héroe
  updateHero(id, heroData) {
    return apiHero.put(`/heroes/${id}`, heroData)
  },

  // Eliminar un héroe
  deleteHero(id) {
    return apiHero.delete(`/heroes/${id}`)
  }
}
