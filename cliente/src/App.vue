<script setup>
// import HeaderWeb from './components/General/HeaderWeb.vue'
import headerPerla from './components/General/headerold/headerPerla.vue';
</script>

<template>
  <header>
    <!-- <HeaderWeb /> -->
    <headerPerla />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>aca ira el footer</footer>
</template>

<style scoped></style>
