<script setup>
// import HeaderWeb from './components/General/HeaderWeb.vue'
import headerPerla from './components/General/headerold/headerPerla.vue';
// import footerPerla from './components/General/headerold/footerPerla.vue';
</script>

<template>
  <header class="lg:fixed w-full z-50">
    <!-- <HeaderWeb /> -->
    <headerPerla />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <!-- <footerPerla /> -->
  </footer>
</template>

<style scoped></style>
