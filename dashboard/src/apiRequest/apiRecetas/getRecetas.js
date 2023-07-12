import axios from "axios";

export default {
  getDataRecetas() {
    return axios.get("https://api-perla.onrender.com/api/v1/recetas");
  },

  updateDataRecetas(id, body) {
    return axios.put(
      `https://api-perla.onrender.com/api/v1/recetas/${id}`,
      body
    );
  },
};
