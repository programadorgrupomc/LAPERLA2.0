import axios from 'axios'

export default {
  getDataFooter() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-footer')
  },

  getDataFooterRs() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-rsfooter')
  },

  updateDataFooter(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-footer/${id}`)
  },
  updateDataRsFooter(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-rsfooter/${id}`)
  }
}
