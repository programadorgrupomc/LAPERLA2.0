import axios from 'axios'

export default {
  getDataNoticiasG() {
    return axios.get('https://api-perla.onrender.com/api/v1/noticias')
  },
  updateDataNoticiasG(id, body) {
    return axios.put(`https://api-perla.onrender.com/v1/noticias/${id}`, body)
  }
}
