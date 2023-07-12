import axios from "axios";

export default {
  //para la cultorg
  getDataCultOrgG() {
    return axios.get("https://api-perla.onrender.com/api/v1/get-culturaorg");
  },
  updateDataCultOrgG(id, body) {
    return axios.put(
      `https://api-perla.onrender.com/api/v1/update-culturaorg/${id}`,
      body
    );
  },

  //para Filosofia
  getDataFilosofiaG() {
    return axios.get("https://api-perla.onrender.com/api/v1/get-nuestrafilosofia");
  },
  updateDataFilosofiaG(id, body) {
    return axios.put(
      `https://api-perla.onrender.com/api/v1/update-nuestrafilosofia/${id}`,
      body
    );
  },

  //para ppt nosotros
  getDataPptNosG() {
    return axios.get("https://api-perla.onrender.com/api/v1/get-pptnosotros");
  },
  updateDataPptNosG(id, body) {
    return axios.put(
      `https://api-perla.onrender.com/api/v1/update-pptnosotros/${id}`,
      body
    );
  },

  //para time line
  getDataTimeline(){
    return axios.get("https://api-perla.onrender.com/api/v1/get-timeline");
  },
  updateDataTimeline(id, body) {
    return axios.put(
      `https://api-perla.onrender.com/api/v1/update-timeline/${id}`,
      body
    );
  }
};
