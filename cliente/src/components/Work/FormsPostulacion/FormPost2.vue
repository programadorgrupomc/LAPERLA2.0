<script>
import formv1 from './FormsF2/formv1.vue'
import formv2 from './FormsF2/formv2.vue'
import formv3 from './FormsF2/formv3.vue'
import formv4 from './FormsF2/formv4.vue'

import { gsap } from 'gsap'

export default {
  components: {
    formv1,
    formv2,
    formv3,
    formv4
  },
  data() {
    return {
      currentForm: 1
    }
  },
  methods: {
    cancelar() {
      const rpta = window.confirm('Esta Seguro de Cancelar?')
      if (rpta) {
        location.reload()
      }
    },
    enviar() {
      const rpta = window.confirm('Esta Seguro de Enviar su postulacion?')
      if (rpta) {
        alert('Postulacion Enviada!')
        location.reload()
      }
    },
    nextForm() {
      this.currentForm++
    },
    backForm() {
      this.currentForm--
    },
    animacionFormulario() {
      const form1 = document.querySelector('.form1')
      const form2 = document.querySelector('.form2')
      const form3 = document.querySelector('.form3')
      const form4 = document.querySelector('.form4')

      const nextbtn1 = document.querySelector('.next-form1')
      const nextbtn2 = document.querySelector('.next-form2')
      const nextbtn3 = document.querySelector('.next-form3')
      const backbtn2 = document.querySelector('.back-form2')
      const backbtn3 = document.querySelector('.back-form3')
      const backbtn4 = document.querySelector('.back-form4')

      var tr1 = gsap.fromTo(
        form2,
        {
          x: 500
        },
        {
          duration: 1,
          x: 0
        }
      )

      nextbtn1.addEventListener('click', function () {
        tr1.restart()
      })

      var tr2 = gsap.fromTo(
        form3,
        {
          x: 500
        },
        {
          duration: 1,
          x: 0
        }
      )
      nextbtn2.addEventListener('click', function () {
        tr2.restart()
      })

      var tr3 = gsap.fromTo(
        form4,
        {
          x: 500
        },
        {
          duration: 1,
          x: 0
        }
      )
      nextbtn3.addEventListener('click', function () {
        tr3.restart()
      })

      var trb2 = gsap.fromTo(
        form1,
        {
          x: -500
        },
        {
          x: 0,
          duration: 1
        }
      )
      backbtn2.addEventListener('click', function () {
        trb2.restart()
      })
      var trb3 = gsap.fromTo(
        form2,
        {
          x: -500
        },
        {
          x: 0,
          duration: 1
        }
      )
      backbtn3.addEventListener('click', function () {
        trb3.restart()
      })

      var trb4 = gsap.fromTo(
        form3,
        {
          x: -500
        },
        {
          x: 0,
          duration: 1
        }
      )
      backbtn4.addEventListener('click', function () {
        trb4.restart()
      })
    },
    scrollToForm() {
      this.nextForm()
      this.$nextTick(() => {
        const formElement = document.getElementById('form2')
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    },
    scrollToForm2() {
      this.nextForm()
      this.$nextTick(() => {
        const formElement = document.getElementById('form3')
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    },
    scrollToForm3() {
      this.nextForm()
      this.$nextTick(() => {
        const formElement = document.getElementById('form4')
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    },
    scrollToForm2back() {
      this.backForm()
      this.$nextTick(() => {
        const formElement = document.getElementById('form1')
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    },
    scrollToForm3back() {
      this.backForm()
      this.$nextTick(() => {
        const formElement = document.getElementById('form2')
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    },
    scrollToForm4back() {
      this.backForm()
      this.$nextTick(() => {
        const formElement = document.getElementById('form3')
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  },
  mounted() {
    this.animacionFormulario()
  }
}
</script>
<template>
  <div class="bg-FondoPerla">
    <div id="form1" class="form1" v-show="currentForm === 1">
      <div class="barraavance bg-FondoPerla flex justify-center items-center col-span-4">
        <div class="av1" style="background-color: #e2d6c5"></div>
        <div class="av2" style="background-color: #f5ede1"></div>
        <div class="av3" style="background-color: #f5ede1"></div>
        <div class="av4" style="background-color: #f5ede1"></div>
      </div>
      <formv1 class="" />
      <div class="envio flex bg-FondoPerla justify-end lg:justify-end py-8">
        <div class="flex justify-end">
          <button
            @click="scrollToForm"
            class="next-form1 px-4 lg:px-8 rounded-3xl text-white font-TestKarbonRegular"
            type="button"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
    <div id="form2" class="form2" v-show="currentForm === 2">
      <div class="barraavance bg-FondoPerla flex justify-center items-center col-span-4">
        <div class="av1" style="background-color: #e2d6c5"></div>
        <div class="av2" style="background-color: #e2d6c5"></div>
        <div class="av3" style="background-color: #f5ede1"></div>
        <div class="av4" style="background-color: #f5ede1"></div>
      </div>
      <formv2 class="" />
      <div class="envio flex bg-FondoPerla justify-around lg:justify-between py-8">
        <div class="flex justify-end">
          <button
            @click="scrollToForm2back"
            class="back-form2 bg-NaranjaOscuroPerla px-4 lg:px-8 text-white font-TestKarbonRegular"
            type="button"
          >
            Anterior
          </button>
        </div>
        <div class="flex justify-end">
          <button
            @click="scrollToForm2"
            class="next-form2 bg-NaranjaOscuroPerla px-4 lg:px-8 text-white font-TestKarbonRegular"
            type="button"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
    <div id="form3" class="form3" v-show="currentForm === 3">
      <div class="barraavance bg-FondoPerla flex justify-center items-center col-span-4">
        <div class="av1" style="background-color: #e2d6c5"></div>
        <div class="av2" style="background-color: #e2d6c5"></div>
        <div class="av3" style="background-color: #e2d6c5"></div>
        <div class="av4" style="background-color: #f5ede1"></div>
      </div>
      <formv3 class="form3" />
      <div class="envio bg-FondoPerla flex justify-around lg:justify-between py-8">
        <div class="flex justify-end">
          <button
            @click="scrollToForm3back"
            class="back-form3 bg-NaranjaOscuroPerla px-4 lg:px-8 text-white font-TestKarbonRegular"
            type="button"
          >
            Anterior
          </button>
        </div>
        <div class="flex justify-end">
          <button
            @click="scrollToForm3"
            class="next-form3 bg-NaranjaOscuroPerla px-4 lg:px-8 text-white font-TestKarbonRegular"
            type="button"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
    <div id="form4" class="form4" v-show="currentForm === 4">
      <div class="barraavance bg-FondoPerla flex justify-center items-center col-span-4">
        <div class="av1" style="background-color: #e2d6c5"></div>
        <div class="av2" style="background-color: #e2d6c5"></div>
        <div class="av3" style="background-color: #e2d6c5"></div>
        <div class="av4" style="background-color: #e2d6c5"></div>
      </div>
      <formv4 class="" />
      <div class="bg-FondoPerla">
        <div class="flex termsandcon items-center justify-center">
          <input class="ckboxperla" type="checkbox" />
          <p class="texto">
            He leído y acepto los Términos y Condiciones y las Políticas de privacidad
          </p>
        </div>
        <div class="descicionbtn flex flex-col lg:flex-row lg:justify-evenly items-center">
          <button @click="enviar" class="btnsub font-TestKarbonMedium" type="submit">
            ENVIAR POSTULACION
          </button>
        </div>
      </div>
      <div class="envio bg-FondoPerla flex justify-start lg:justify-start py-8 lg:py-1 lg:pb-40">
        <div class="flex justify-end">
          <button
            @click="scrollToForm4back"
            class="back-form4 px-4 lg:px-8 text-white font-TestKarbonRegular"
            type="button"
          >
            Anterior
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.back-form2,
.back-form3,
.back-form4 {
  border-radius: 4vw;
}

.next-form1,
.next-form2,
.next-form3 {
  border-radius: 4vw;
}

.btnesc:hover {
  color: rgba(255, 0, 0, 0.651);
}

.btnsub:hover {
  transition: all;
  scale: 1.01;
}

.next-form1:hover {
  background-color: #d7d0c5;
}

.next-form2:hover {
  background-color: #d7d0c5;
}

.next-form3:hover {
  background-color: #d7d0c5;
}

.back-form4:hover {
  background-color: #d7d0c5;
}

.back-form3:hover {
  background-color: #d7d0c5;
}

.back-form2:hover {
  background-color: #d7d0c5;
}

.envio {
  padding-left: 5%;
  padding-right: 5%;
}

.envio button {
  color: #6e5b44;
  font-size: 5vw;
  background-color: #f5ede1;
  border: solid 0.04vw#6E5B44;
}

.barraavance {
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  height: 8vh;
}

.av1,
.av2,
.av3,
.av4 {
  margin: 1%;
  height: 35%;
  width: 25%;
}

.termsandcon {
  padding-top: 5%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}

.termsandcon p {
  padding-left: 4%;
}

.descicionbtn {
  padding-top: 5%;
  padding-bottom: 5%;
}

.btnsub {
  font-size: 4.5vw;
  line-height: normal;
  background-color: #e97b4d;
  color: white;
  width: 75%;
  border-radius: 1.5vw;
  padding-top: 1%;
  padding-bottom: 1%;
}

.btnesc {
  margin-top: 2%;
  color: #471d7c;
  font-size: 4vw;
}

.texto {
  font-family: 'KarbonRegular';
  font-size: 4.5vw;
  line-height: normal;
  color: #471d7c;
  -webkit-text-stroke: 0.1vw #471d7c;
}

.ckboxperla {
  transform: scale(1.2);
}

@media (min-width: 768px) {
  .ckboxperla {
    transform: scale(2);
  }

  .termsandcon {
    padding-top: 5%;
    padding-left: 8%;
    padding-right: 8%;
    padding-bottom: 5%;
  }
}

@media (min-width: 1024px) {
  .form1,
  .form2,
  .form3,
  .form4 {
    padding-top: 10vh;
  }

  .back-form2,
  .back-form3,
  .back-form4 {
    border-radius: 1.5vw;
  }

  .next-form1,
  .next-form2,
  .next-form3 {
    border-radius: 1.5vw;
  }

  .barraavance {
    padding-left: 15%;
    padding-right: 15%;
    width: 100%;
    height: 6vw;
  }

  .envio {
    padding-left: 18%;
    padding-right: 18%;
  }

  .envio button {
    font-size: 1.5vw;
  }

  .termsandcon {
    padding-top: 3%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 3%;
  }

  .termsandcon p {
    padding-left: 4%;
  }

  .descicionbtn {
    padding-top: 0%;
    padding-bottom: 5%;
  }

  .btnsub {
    font-size: 1.5vw;
    line-height: normal;
    background-color: #e97b4d;
    color: white;
    width: 20%;
    border-radius: 1.5vw;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
  }

  .btnesc {
    margin-top: 2%;
    color: #471d7c;
    font-size: 1.2vw;
  }

  .texto {
    font-family: 'KarbonRegular';
    font-size: 1.4vw;
    line-height: normal;
    color: #471d7c;
    -webkit-text-stroke: 0.05vw #471d7c;
  }

  .ckboxperla {
    transform: scale(2);
  }

  .termsandcon {
    padding-top: 5%;
    padding-left: 0%;
    padding-right: 0%;
    padding-bottom: 5%;
  }
}

@media (min-width: 5120px) {
  .ckboxperla {
    transform: scale(5);
  }

  .termsandcon {
    padding-top: 5%;
    padding-left: 8%;
    padding-right: 8%;
    padding-bottom: 5%;
  }
}
</style>
