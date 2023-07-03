<template>
  <div class="vista-login flex flex-col justify-center items-center">
    <logo-login />
    <transition name="fade" appear>
      <login-form v-show="showform" />
    </transition>
  </div>
</template>

<script>
import LogoLogin from '../components/Login/LogoLogin.vue'
import LoginForm from '../components/Login/LoginForm.vue'
export default {
  data() {
    return {
      showform: false
    }
  },
  components: {
    LogoLogin,
    LoginForm
  },
  methods: {
    showformf() {
      setTimeout(() => {
        this.showform = true
      }, 2500)
    }
  },
  mounted() {
    this.showformf()
    document.title = 'Login'
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.vista-login {
  height: 100%;
  min-height: 100vh;
  margin: auto;
  max-width: 90%;
  min-width: 250px;
  background-color: #fcf5eb;
}

@media (min-width: 768px) {
  .vista-login {
    height: 100vh;
    min-height: 600px;
    margin: auto;
    max-width: 80%;
    background-color: #fcf5eb;
  }
}
</style>
