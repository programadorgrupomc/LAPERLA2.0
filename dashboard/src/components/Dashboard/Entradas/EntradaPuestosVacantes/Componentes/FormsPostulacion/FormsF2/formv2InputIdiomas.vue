<script>
export default {
  data() {
    return {
      idiomas: [
        {
          idioma: '',
          nivelescrito: '',
          niveloral: ''
        }
      ]
    }
  },
  methods: {
    agregaridiomas() {
      this.idiomas.push({
        idioma: '',
        nivelescrito: '',
        niveloral: ''
      })
    },
    eliminarIdiomas(i) {
      this.idiomas.splice(i, 1)
    }
  }
}
</script>
<template>
  <div class="contenedorformMo bg-FondoPerla">
    <p class="titleform text-AzulPerla font-TestKarbonSemiBold">Idiomas</p>
    <form
      action=""
      v-for="(idi, index) in idiomas"
      :key="index"
      class="contenedorform flex flex-col w-full"
    >
      <div v-if="index > 0" class="flex w-full justify-end">
        <button
          @click="eliminarIdiomas(index)"
          type="button"
          class="btn-close hover:bg-red-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
      <div class="contenedorcolumnas lg:columns-3 w-full">
        <div class="inpsel">
          <label for="">Idioma</label>
          <select class="perlaselect" name="idioma" id="idioma">
            <option value="">Seleccionar</option>
          </select>
        </div>
        <div class="inpsel">
          <label for="">Nivel escrito</label>
          <select class="perlaselect" name="nivelescrito" id="nivelescrito">
            <option value="">Seleccionar</option>
          </select>
        </div>
        <div class="inpsel">
          <label for="">Nivel oral</label>
          <select class="perlaselect" name="niveloral" id="niveloral">
            <option value="">Seleccionar</option>
          </select>
        </div>
      </div>
    </form>
    <div class="contenedorbtnanadir flex justify-center lg:justify-start">
      <button
        class="anadir text-NaranjaPerla font-TestKarbonRegular"
        type="button"
        @click="agregaridiomas"
      >
        + Añadir idiomas
      </button>
    </div>
  </div>
</template>

<style scoped>
.perlainput:hover {
  transition: all;
  background-color: #6e5b4423;
}
.perlaselect:hover {
  background-color: #6e5b4446;
}
.contenedorbtnanadir {
  margin-top: 2%;
}

.contenedorform {
  background-color: #f5ede1;
  margin-top: 2%;
  padding: 3%;
  border-radius: 3vw;
}

.anadir {
  font-size: 4.5vw;
  line-height: normal;
}

.contenedorformMo {
  padding: 4%;
}

.titleform {
  font-size: 9vw;
  line-height: normal;
}

.inpsel {
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  padding-bottom: 5%;
  width: 100%;
}

.perlaselect {
  font-size: 3.8vw;
  line-height: normal;
  color: #471d7c;
  font-family: 'KarbonRegular';
  appearance: none;
  text-align: center;
  margin-top: 1%;
  padding: 1%;
  background-color: #f5ede1;
  border: solid #6e5b44 0.1vw;
}

label {
  font-family: 'KarbonRegular';
  font-size: 4.5vw;
  line-height: normal;
  color: #471d7c;
  -webkit-text-stroke: 0.1vw #471d7c;
}

::placeholder {
  font-family: 'KarbonRegular';
  font-size: 4.5vw;
  line-height: normal;
  color: #471d7c;
  -webkit-text-stroke: 0.1vw #471d7c;
}

.perlainput {
  font-size: 3.8vw;
  line-height: normal;
  color: #471d7c;
  font-family: 'KarbonRegular';
  margin-top: 1%;
  padding-top: 1%;
  padding-bottom: 1%;
  background-color: #f5ede1;
  border-bottom: solid #6e5b44 0.12vw;
}

.inptdt {
  margin-bottom: 5%;
  margin-top: 5%;
}
@media (min-width: 768px) {
  .btn-close {
    transform: scale(1.5);
  }
}
@media (min-width: 1024px) {
  .contenedorform {
    border-radius: 2.5vw;
  }
  .contenedorcolumnas {
    padding: 3%;
    gap: 4vw;
  }

  .titleform {
    font-size: 4vw;
    line-height: normal;
  }

  .contenedorformMo {
    padding: 4%;
    padding-left: 15%;
    padding-right: 15%;
  }

  label {
    font-family: 'KarbonRegular';
    font-size: 1.4vw;
    line-height: normal;
    color: #471d7c;
    -webkit-text-stroke: 0.05vw #471d7c;
  }

  ::placeholder {
    font-family: 'KarbonRegular';
    font-size: 1.4vw;
    line-height: normal;
    color: #471d7c;
    -webkit-text-stroke: 0.05vw #471d7c;
  }

  .perlaselect {
    font-size: 1.3vw;
    line-height: normal;
    color: #471d7c;
    font-family: 'KarbonRegular';
    appearance: none;
    text-align: center;
    margin-top: 1%;
    padding: 0.5%;
    background-color: #f5ede1;
    border: solid #6e5b44 0.01vw;
  }

  .perlainput {
    font-size: 1.3vw;
    line-height: normal;
    color: #471d7c;
    font-family: 'KarbonRegular';
    margin-top: 1%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    border-bottom: solid #6e5b44 0.05vw;
  }

  .anadir {
    font-size: 1.4vw;
    line-height: normal;
  }
  .btn-close {
    transform: scale(1.5);
  }
}
@media (min-width: 5120px) {
  .btn-close {
    transform: scale(4.5);
  }
}
</style>
