import axios from 'axios'
import { BASE_URL } from '../config'
const apiRecetario = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  }
})
export default {
  createReceta(recetaData) {
    return apiRecetario.post('/recetas', recetaData)
  }
}
