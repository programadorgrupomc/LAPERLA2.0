import axios from 'axios'
import { BASE_URL } from '../config.js'

const apiNoticias = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export default {
  // Obtener todos los noticias
  getNoticias() {
    return apiNoticias.get('/noticia')
  },

  // Obtener un noticia por su ID
  getNoticiasById(id) {
    return apiNoticias.get(`/noticia/${id}`)
  },

  // Crear un nuevo noticia
  createNoticias(NoticiasData) {
    console.log(NoticiasData)
    return apiNoticias.post('/noticia', NoticiasData)
  },

  // Actualizar un noticia
  updateNoticias(id, NoticiasData) {
    return apiNoticias.put(`/noticia/${id}`, NoticiasData)
  },

  // Eliminar un noticia
  deleteNoticias(id) {
    return apiNoticias.delete(`/noticia/${id}`)
  }
}
