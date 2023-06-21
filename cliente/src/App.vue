<script setup>
// import HeaderWeb from './components/General/HeaderWeb.vue'
import headerPerla from './components/General/headerold/headerPerla.vue';
// import footerPerla from './components/General/headerold/footerPerla.vue';
// import FooterWeb from './components/General/FooterWeb.vue';
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
    <!-- <FooterWeb/> -->
  </footer>
</template>

<style scoped></style>
