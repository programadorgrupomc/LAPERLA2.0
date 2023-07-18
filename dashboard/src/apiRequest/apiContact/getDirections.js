import axios from 'axios'

export default {
  getDataDirections() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-directions')
  },

  updateDataDirections(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-directions/${id}`, body)
  }
}
