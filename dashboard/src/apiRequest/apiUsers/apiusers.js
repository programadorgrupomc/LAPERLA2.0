import axios from "axios";

export default {
  getDataUserG() {
    return axios.get("https://api-perla.onrender.com/api/v1/get-usuario");
  },

};
