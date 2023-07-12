import { defineStore } from "pinia";
import router from "../router";
import decode from "jwt-decode";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    token: "",
    usuarioDB: "",
  }),
  actions: {
    obtenerUsuario(payload) {
      this.token = payload;
      if (payload === "") {
        this.usuarioDB = "";
      } else {
        this.usuarioDB = decode(payload);
        router.push({ name: "dashboard" });
      }
    },
    guardarUsuario(payload) {
      localStorage.setItem("token", payload);
      this.obtenerUsuario(payload);
    },
    cerrarSesion() {
      this.obtenerUsuario("");
      localStorage.removeItem("token");
      router.push({ name: "login" });
    },
    leerToken() {
      const token = localStorage.getItem("token");
      if (token) {
        this.obtenerUsuario(token);
      } else {
        this.obtenerUsuario("");
      }
    },
  },
  getters: {
    estaActivo: (state) => !!state.token,
  },
});
