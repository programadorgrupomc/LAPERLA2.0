<script>
import navbarmedios from './navbarmedios.vue'
import gallery from './galleryFiles.vue'

export default {
  data() {
    return {
      images: '',
      viewimagenes: true,
      viewdocs: false,
      viewvideos: false
    }
  },
  components: {
    navbarmedios,
    gallery
  },
  methods: {
    actualizarest1(valor) {
      this.viewimagenes = valor
      this.viewdocs = false
      this.viewvideos = false
    },
    actualizarest2(valor) {
      this.viewdocs = valor
      this.viewimagenes = false
      this.viewvideos = false
    },
    actualizarest3(valor) {
      this.viewvideos = valor
      this.viewdocs = false
      this.viewimagenes = false
    }
  }
}
</script>
<template>
  <div class="w-full flex flex-col justify-center">
    <navbarmedios
      class="navbar-file"
      @estcam="actualizarest1"
      @estdoc="actualizarest2"
      @estvid="actualizarest3"
    />
    <!-- imagenes -->
    <div v-if="viewimagenes" class="cont-gallery flex justify-center">
      <!-- <div class="gallery grid grid-cols-2 lg:grid-cols-5 gap-10 mx-auto">
                <div v-for="i in 4" class="item-gallery w-full rounded">
                    <img src="@/assets/Dashboard/Recetario/receta1.jpg" alt="image">
                    <p class="text-center">Imagen{{ i }}.jpeg</p>
                </div>
            </div> -->
      <gallery />
    </div>
    <!-- documentos -->
    <div v-if="viewdocs" class="cont-gallery flex justify-center">
      <div class="gallery grid grid-cols-2 lg:grid-cols-5 gap-10 mx-auto">
        <div v-for="i in 5" class="item-gallery w-full rounded">
          <img
            src="data:image/png;base64,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"
            alt="image"
          />
          <p class="text-center">Documento{{ i }}.txt</p>
        </div>
      </div>
    </div>
    <!-- videos -->
    <div v-if="viewvideos" class="cont-gallery flex justify-center">
      <div class="gallery grid grid-cols-2 lg:grid-cols-5 gap-10 mx-auto">
        <div v-for="i in 9" class="item-gallery w-full rounded">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8GKzEAJiwAKS81TlMAGSEAICcAGyMAIyoAABIAFB0AISjq6+sAERsAFyAAGCCkrrCbpqgADBeMmZv2+PgACRVxgILV2dp+jI/e4uNYaGsAAAnx8/PS1daVoKKEkZS9w8QdOD0AMDckQUa4v8DIzM2utbdGW18mRUpUZWg6UFV0g4ZodnksRUoUNDpmeHumuv2nAAAKBElEQVR4nO2dbXuiOhCGjwQBUVARRa3iu6zv///fnQSsM+26TdCg0GvuL3tt22iGQOaZScj89x9BEARBEARBEARBEARBEARBEARBEARBEARBEARBEJUknExarZEgiqLpdLrZzOfr9Xq77XS63W4cxz3BcJByOByGw9mM/yCOu91Op7Ndr+eb6ZQ3jfgntFqTSfhOW1qjqej+tss7fBnvkv3ePJ0Wi3ONMaNp2XXf9YLA47iu63PadY6dYiHSH4hftf2277qeaOT6dcsx2Pm8WJ1O5j7ZjS+HWa+7FfaPWkVaPZmuO73BOPmztIOs667brvMONx3HSGFXak9z/aD0Ux2HXzJxzVxxCTzPXp6SY6+zjnQaG0bx8dwI3LbNr66hw4SnrDecpt12+4E5XE+02DeanYK6816z7mJYHjtunravdbRt4922/BNmufvnbAxnDauEo4cxGuPW4wZGK//dBihgOfNHDVxbzrt7rwTzeo8Z2O2X/AYFvMsjBsYNHd/96SQz55b6t08+f2Jo8KOPmLjtK/U/c8nCJ3NhkuoSLkz6/QYnCFzftpqMLZfnxWK14hqFk4xTdgknlUKrFRdDyyVzLN8T7fp9IYe4nGgLGZQJCrn53iyvgaO/PWBmDtdk3I6A9+Xjo28tV2YyPg6GmbpMteVmGmW6UhBi7n8T/F40EMo24op2LdRsHM8Ox3FirpZW/+Oj0eeazq3flx3Mzes1kq+TDHPqrnNe7XeXQ6oRuUTUoyfUEWI4lcKHcbI6W+43N2Ys8sm4bfDFPtvadaejV9v0A5PRfHB2v9jYzjehnrGOcdzZE061MCYdZuFh8PKMwNZDTf19Ge0ThGPcz3qeQTyhIfQPhfXweXptNIg19SdxisRafVhgB5+nh7rqrpWbHWyYok4Fdk8He7jdnLFqo3AFrfrPB2DFMgVlwpjqhLEBV2HsC+2eDtAgulvFNjO4Sd1Oob3Twda99bZ5VGwDV4UZZXUUQMu4OX7GFJtAUKH+7L6RMQjMfqTUYg3DrnxjvxN0m9a7Si3gMWTNUcG908GoebtNFe85EDSld4YZ4NyYo9QAtJ41KLhveriAAA9U1PcILPSr8BjyBxHEqaciUDZgYTAtvHc6QArFnSv8PZpKG+X3hgLk3nwVhdIFtf5ReOf08HHrsa2SkBrenltmFd43PSDdppJVBIlg/Cm8b3pY3ByikSj8OajSSmg2ASQGlTw4OHyr3OE9MIAHSyGnODnfhrwev6B3OohBZyoEwS1IJ7c1BIcvybF2bi5fRUmPQALlyOz8k1XvBZtGUHThy+OnCP5aSQJJMIOFhuskYQ4yzJPLMCTa+hpiJ9Mw3F3RMViEZJv8eqIRb2h4iEw+MzuNQ7G3KpJtCnNHtw7XQ0O/zNT31JeFZrRCGENbntpHET7TZmGNefsC45QQFjst+RrEAbznSp+FYgHrUpjnCMGHW/KE4rH5+ceGqeHLTcjXWl5RCiIEHaaQMj2CxlNRsTKQhTXmnuYaPvIOubQ0hBbOTsN3m1+2jBl+MZ4jydPpBC6Hao78J8xvm+Ka3qwAz4EiPulCSwgDriXT9t3CGquf9ee30ORxkl1A9NAqTLxy/rKQ2xgkuj3HIIcDmEC8rCU8vGMhv//9gV7PgVzcWfbJk+XNQqWsjoy7FtaY1dcqclBuaSm1kL3CQiFyTI2ry1iISS2E1TgFiSfnXxbyOcF7ZuvrV5CFjuxDWxAA2zokyL8t5A+6lmso6MGqtS21EEILLWmanyyssTbTEx4jC32phRAAKy43/syPFgrPsVNbtv2ZGMbFk1oImzd0JKJkFgrPoSE8RkFtX2phzlUOGVILxcbHp78IWShdTXq9hTo8R9ktFJ7j+JTnKL+F3HM0n/EcVbCwxvzl/OFvqYSF/FYNHg6PK2IhD4/t4WOeozIW1lhj+dCMUxkLf/sY/vbn8NfPpZbzu/2h4f5uTfM2Xfqa6On1sQWKD18QAWuKD1EEHPzSGB+yGPIYH/btvSRPM9fwHTnzNChrVclcmyW10Kl6vrQsGWG9OW+U1ZfnvF+S1X/rusX5t689has8Gzfk3F8/1OEhMLB+aEjXD/EKaYXWgGGV25TqB7StoTrr+Ls8G0h2ldyLYeTo9LiK+2nMPDdegXuigsL2RMG7XSp7onLtCpfymn1tsPlAYXrE8qAyexORLJU7cSRivarsL51A2K4QLsC+dy0vdr1kj/Ao17IuenUt0CA9XrLPG72e582lfz1F+9717NWXf+ezoFFR2KsfQZBfnfctUGJCft+hN6Mr884MpNqYIX8i0FtBWtIYrwDmf3aWz47hIo/3LAegw5R230P45OgQpq8A4iElpYleV1wU3jc9gGhTiocutyGvuYX3TQ8gaZQeLHQ6TUXe5Q7Ru9wq+cEOOJeKvI+PRJvSYSxzvS8gvgD0+qHSmQpItmlZXysetLbmqUjpCchYLbmo4tmhQ4aUNCI6d6ka7gI0ClsqNYDkY83WnbotgilEtIoqDB39oWUZuGjQArDixBGhs750pEyLBpKltYZirA0iqFYv/1FYI/BuyjITpHoVDo7A67+qa0nofNYKiG90aLJCkiajhRuV/TCsDtyk8rXDG+icPi1p4QKZ2DAaCu9xf4JyVzWr1NPpZI9O5VYSpVfQbFqzk/JGGCMTnQada86I0QHENceLS3qndjx8rrqbR56EdXwYOGs7h02JjivPaHVO3pdeNnM1j9GTKFpbAUsGvfV09P7RDCejaNMZ7hz36wK6l09h4sOSr0Yalu36xvmUnq3fEfWXNtGoVXTdqbA1iqab+Xq97c4Ol93+tFqcDdtrW98rGzh5z+nc+HcLLqT1EZqW3c7qT6UVEj76vrFc/DGT3ViUSRB1EuKuqMO13YpiCfxKbKZpIa5RKyuZwP9pZaW9+K/Swl6irlcnres1Gx4Gx3GyN1dLZgcfoiJCPy0G4YuiCE5WDONex/zc65NxcOdz/kVWocNJS11YWRkuv+2LehdpFapAlLzoZ1Uvroj/8h9/FvZyfVHOop7V9MpqZOUr6RE8EAUNVUp4lIX+Q/u3ZpWpM8OCBzeobe1q1Aoy/IcD9eirxykp9vmZpGfXrZfcRqfx5C6WsLd0m6U1klm+jn2O8+Mi8C2jbGYyxw4WB03JwEnUHZzshufbTgnKHxqOVfe9hp3MNIvlsLXZ9sbm0r05aT8rOKW9hGXtWwlLC5WwdNlqvxvEnXmhKbLJteZUN+ZS8XgtQyoqb525ehUlr3wvK0OaXoarVvlSgPR7HVL/s9yXKENqN/kTIap8nU77fTK+DIa9bkeov+jN9ZjSUrJXvTmN0lKyn4Vk415vNhsOh4fDYHD8rCU7zGrJxlkt2W0q5dNaslcB+/4ohiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCI/PwP+CTI2yqa3WYAAAAASUVORK5CYII="
            alt="image"
          />
          <p class="text-center">Video{{ i }}.mp4</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.navbar-file {
  margin-top: 5%;
  margin-bottom: 2%;
  width: 100%;
}

.cont-gallery {
  width: 100%;
}

.gallery {
  width: 90%;
}

.item-gallery img {
  border-radius: 4vw;
}

.item-gallery:hover {
  filter: brightness(85%);
}

@media (min-width: 1024px) {
  .cont-gallery {
    width: 100%;
  }

  .gallery {
    width: 90%;
  }

  .item-gallery:hover {
    filter: brightness(85%);
  }

  .item-gallery img {
    border-radius: 0.5vw;
  }
}
</style>
