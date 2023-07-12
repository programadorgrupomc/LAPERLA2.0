import { defineStore } from "pinia";
import axios from "axios";

export const useRecetasStore = defineStore("recetas", {
  state: () => ({
    recetas: [],
    recetaSeleccionada: null,
  }),
  actions: {
    async crearReceta(nuevaReceta) {
      console.log(nuevaReceta);
      try {
        const response = await axios.post(
          "https://api-perla.onrender.com/api/v1/recetas",
          nuevaReceta
        );
        return response.data;
      } catch (error) {
        throw new Error("Error al crear la receta " + error);
      }
    },
    async obtenerRecetas() {
      try {
        const response = await axios.get(
          "https://api-perla.onrender.com/api/v1/recetas"
        );
        this.recetas = response.data;
      } catch (error) {
        throw new Error("Error al obtener las recetas");
      }
    },
    async obtenerReceta(titulo) {
      try {
        const response = await axios.get(
          `https://api-perla.onrender.com/api/v1/recetas/${titulo}`
        );
        this.recetaSeleccionada = response.data;
      } catch (error) {
        throw new Error("Error al obtener la receta");
      }
    },
    async actualizarReceta({ id, datosActualizados }) {
      try {
        const response = await axios.put(
          `https://api-perla.onrender.com/api/v1/recetas/${id}`,
          datosActualizados
        );
        this.recetaSeleccionada = response.data;
      } catch (error) {
        throw new Error("Error al actualizar la receta");
      }
    },
    async eliminarReceta(id) {
      try {
        await axios.delete(`https://api-perla.onrender.com/api/v1/recetas/${id}`);
      } catch (error) {
        throw new Error("Error al eliminar la receta");
      }
    },
    async buscarRecetasPorNombre(nombre) {
      try {
        const response = await axios.get(
          `https://api-perla.onrender.com/api/v1/recetas/buscar?nombre=${nombre}`
        );
        this.recetas = response.data;
      } catch (error) {
        throw new Error("Error al buscar las recetas");
      }
    },
  },
});
