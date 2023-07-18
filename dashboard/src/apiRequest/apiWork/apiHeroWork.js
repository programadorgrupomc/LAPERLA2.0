import axios from 'axios'

export default {
  getDataG() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-herowork')
  },
  updateDataHwG(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-herowork/${id}`, body)
  },
  getDataPpptWorkG() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-pptwork')
  },
  updateDataPptWorkG(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-pptwork/${id}`, body)
  },

  //para codigo de etica
  getDataCodEtiWorkG() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-codetiwork')
  },
  updateDataCodEtiWorkG(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-codetiwork/${id}`, body)
  },

  //para puestos vacantes
  getDataPuestosWorkG() {
    return axios.get('https://api-perla.onrender.com/api/v1/puestosvacantes')
  },
  updateDataPuestosWorkG(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/puestosvacantes/${id}`, body)
  }
}
