import axios from 'axios'
import { BASE_URL } from '../config'

const apiProcesos = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  }
})
export default {
  getProcesos() {
    return apiProcesos.get('/procesos')
  },
  getProcesosId(id) {
    return apiProcesos.get(`/procesos/${id}`)
  },
  createProceso(procesosData) {
    return apiProcesos.post('/procesos', procesosData)
  },
  updateProceso(id, procesosData) {
    return apiProcesos.put(`/procesos/${id}`, procesosData)
  },
  deleteProceso(id) {
    return apiProcesos.delete(`/procesos/${id}`)
  }
}
