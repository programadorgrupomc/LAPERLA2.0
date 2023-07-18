import axios from 'axios'

export default {
  getDataDefG() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-definicion')
  },
  updateDataDefG(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-definicion/${id}`, body)
  },

  //para principios
  getDataPrincipiosG() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-principios')
  },
  updateDataPrincipiosG(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-principios/${id}`, body)
  },
  //responsabilidades
  getDataResponsabilidadesG() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-responsabilidades')
  },
  updateDataResponsabilidadesG(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-responsabilidades/${id}`, body)
  }
}
