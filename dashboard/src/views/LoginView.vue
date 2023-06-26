<script setup>
import LogoLogin from '../components/Login/LogoLogin.vue';
import LoginForm from '../components/Login/LoginForm.vue';
</script>

<template>
  <div class="vista-login flex flex-col justify-center items-center">
    <logo-login />
    <login-form />
  </div>
</template>
<style scoped>
.vista-login {
  height: 100%;
  min-height: 100vh;
  margin: auto;
  max-width: 90%;
  min-width: 250px;
  background-color: #FCF5EB;
}

@media (min-width: 768px) {
  .vista-login {
    height: 100%;
    min-height: 100vh;
    margin: auto;
    max-width: 80%;
    background-color: #FCF5EB;
  }
}
</style>