import axios from 'axios';
import { BASE_URL } from '../config.js';

const apiNosotros = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export default {
  // Obtener todos los héroes
  getNosotros() {
    return apiNosotros.get('/nosotros');
  },

  // Obtener un héroe por su ID
  getNosotrosById(id) {
    return apiNosotros.get(`/nosotros/${id}`);
  },

  // Crear un nuevo héroe
  createNosotros(NosotrosData) {
    return apiNosotros.post('/nosotros', NosotrosData);
  },

  // Actualizar un héroe
  updateNosotros(id, NosotrosData) {
    return apiNosotros.put(`/nosotros/${id}`, NosotrosData);
  },

  // Eliminar un héroe
  deleteNosotros(id) {
    return apiNosotros.delete(`/nosotros/${id}`);
  }
};
