import axios from 'axios'
import { BASE_URL } from '../config'

const apiFormOperario = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
export default {
  //crear nuevo formulario
  createFormOperario(formData) {
    return apiFormOperario.post('/foperario', formData)
  },
  //
  getFormOperario() {
    return apiFormOperario.get('./foperario')
  }
}
