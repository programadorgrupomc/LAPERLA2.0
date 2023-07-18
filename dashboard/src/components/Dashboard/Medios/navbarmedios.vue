<script>
export default {
  data() {
    return {
      images: '',
      viewimagenes: true,
      viewdocs: false,
      viewvideos: false
    }
  },
  methods: {
    showImagenes() {
      this.viewimagenes = true
      this.$emit('estcam', this.viewimagenes)
    },
    showDocs() {
      this.viewdocs = true
      this.$emit('estdoc', this.viewdocs)
    },
    showVideos() {
      this.viewvideos = true
      this.$emit('estvid', this.viewvideos)
    }
  }
}
</script>

<template>
  <div class="cont-nav flex flex-col lg:flex-row justify-center items-center">
    <div class="cont-btnsa flex justify-center items-center">
      <button @click="showImagenes" class="typemedio">Imagenes</button>
      <button class="typemedio" @click="showDocs">Documentos</button>
      <button class="typemedio" @click="showVideos">Videos</button>
    </div>
    <button class="btn-selfile relative flex justify-center items-center">
      <input type="file" multiple class="opacity-0 absolute z-50 w-3/4" />
      <p>Selecionar Archivos</p>
    </button>
  </div>
</template>

<style scoped>
.cont-nav {
  width: 100%;
  justify-content: center;
  padding-bottom: 4%;
}

.cont-btnsa {
  width: 90%;
  height: 6vh;
  margin: 1%;
  background-color: white;
  border-radius: 3vw;
  border: solid #c5c5c5 0.15vw;
}

.typemedio {
  background-color: white;
  border: solid #c5c5c5 0.15vw;
  width: 32%;
  height: 75%;
  margin: auto;
  border-radius: 3vw;
  font-size: 4vw;
}

.typemedio:hover {
  background-color: #e1e1e1;
}

.btn-selfile {
  margin: 1%;
  background-color: #ff7439;
  color: white;
  padding-left: 3%;
  padding-right: 3%;
  border-radius: 3vw;
  font-size: 5vw;
  width: 90%;
}

.btn-selfile:hover {
  background-color: #ff8239;
}

@media (min-width: 1024px) {
  .cont-nav {
    width: 100%;
    justify-content: center;
  }

  .cont-btnsa {
    width: 70%;
    height: 5.5vh;
    margin: 1%;
    background-color: white;
    border-radius: 1vw;
    border: solid #c5c5c5 0.15vw;
  }

  .typemedio {
    background-color: white;
    border: solid #c5c5c5 0.15vw;
    width: 32%;
    height: 75%;
    margin: auto;
    border-radius: 1vw;
    font-size: 1vw;
  }

  .typemedio:hover {
    background-color: #e1e1e1;
  }

  .btn-selfile {
    margin: 1%;
    background-color: #ff7439;
    color: white;
    padding-left: 3%;
    padding-right: 3%;
    border-radius: 1vw;
    font-size: 1.2vw;
    padding: 0.5%;
    width: 20%;
    height: 5.5vh;
  }

  .btn-selfile:hover {
    background-color: #ff8239;
  }
}
</style>
