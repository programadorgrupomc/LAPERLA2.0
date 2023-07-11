<template>
  <button @click="cambiarEstado" class="w-full h-full">
    <img src="../../../assets/General/desplegar.svg" class="w-full h-full" alt="boton" />
  </button>
</template>
<script>
export default {
  data() {
    return {
      estadoBoton: false
    }
  },
  methods: {
    cambiarEstado() {
      this.estadoBoton = !this.estadoBoton
      this.$emit('estadoBoton', this.estadoBoton)
    }
  }
}
</script>
<style scoped></style>
