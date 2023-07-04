<template>
  <div class="captcha-container">
    <div class="g-recaptcha" data-sitekey="6LeSfAQmAAAAAG4Hpuarb6Gu6Wk7CTfxlMRGvULl"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js'
    document.head.appendChild(script)
  },
  methods: {
    onSubmit(token) {
      console.log(token);
      document.getElementById('demo-form').submit()
    }
  }
}
</script>

<style scoped>
.captcha-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
</style>
