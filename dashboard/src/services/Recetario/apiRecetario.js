import axios from 'axios'
import { BASE_URL } from '../config'
const apiRecetario = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
export default {
  //obtener todas las recetas
  getRecetas() {
    return apiRecetario.get('/recetas')
  },
  //obtner receta por sus id
  getRecetasById(id) {
    return apiRecetario.get(`/recetas/${id}`)
  },
  //crear nueva receta
  createReceta(recetaData) {
    return apiRecetario.post('/recetas', recetaData)
  },
  //Actualizar receta
  updateReceta(id, recetaData) {
    return apiRecetario.put(`/recetas/${id}`, recetaData)
  },
  //eliminar receta
  deleteRecetas(id) {
    return apiRecetario.delete(`/recetas/${id}`)
  }
}
