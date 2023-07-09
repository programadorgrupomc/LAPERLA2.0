import axios from 'axios'
import { BASE_URL } from '../config'

const apiNuestroPollo = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  }
})
export default {
  //obener nuestros pollos
  getNuestroPollos() {
    return apiNuestroPollo.get('/nuestropollo')
  },

  //obtener nuestro pollo por id
  getNuestroPollo(id) {
    return apiNuestroPollo.get(`/nuestropollo/${id}`)
  },

  //crear nuevo nuestro pollo
  createNewNuestroPollo(nuestropolloData) {
    return apiNuestroPollo.post('/nuestropollo', nuestropolloData)
  },

  //actualizar nuestro pollo
  updateNuestroPollo(id, nuestropolloData) {
    return apiNuestroPollo.put(`/nuestropollo/${id}`, nuestropolloData)
  },

  //Eliminar nuestro pollo
  deleteNuestroPollo(id) {
    return apiNuestroPollo.delete(`/nuestropollo/${id}`)
  }
}
