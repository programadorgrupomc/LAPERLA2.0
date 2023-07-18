import axios from 'axios'

export default {
  //para hero home
  getDataG() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-hero')
  },
  updateDataG(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-hero/${id}`, body)
  },

  //para contenido 1
  getDataCont1G() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-cont1')
  },
  updateCont1G(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-cont1/${id}`, body)
  },

  //para contenido 2
  getDataCont2G() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-cont2')
  },
  updateCont2G(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-cont2/${id}`, body)
  },

  //para cotenido 3
  getDataCont3G() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-cont3')
  },
  updateCont3G(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-cont3/${id}`, body)
  },

  //para contenido 4
  getDataCont4G() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-cont4')
  },
  updateCont4G(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-cont4/${id}`, body)
  },

  //para nuestros procesos
  getDataNpG() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-np')
  },
  updateNpG(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-np/${id}`, body)
  }
}
