import axios from "axios";

export default {
  getDataUsuariosG() {
    return axios.get("https://api-perla.onrender.com/api/v1/get-usuario");
  },
 loginG(body){
    return axios.post("https://api-perla.onrender.com/api/v1/post-login",body);
 }
};
