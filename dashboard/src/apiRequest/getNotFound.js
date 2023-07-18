import axios from 'axios'

export default {
  getDataGnf() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-notfound')
  },
  updateDataGnf(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-notfound/${id}`, body)
  }
}
