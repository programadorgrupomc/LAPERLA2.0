import axios from 'axios'

export default {
  getDataHeader() {
    return axios.get('https://api-perla.onrender.com/api/v1/get-itemsheader')
  },
  updateDataHeader(id, body) {
    return axios.put(`https://api-perla.onrender.com/api/v1/update-itemsheader/${id}`, body)
  }
}
