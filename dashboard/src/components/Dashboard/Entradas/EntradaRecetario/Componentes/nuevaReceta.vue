<template>
  <div class="cont-nuevarecetagen">
    <div class="fixed z-40 lg:z-50 cont-btn">
      <BotonesCrudEntradaRec class="btn-crud" />
    </div>
    <!-- <botonesControl :nuevareceta="this.nuevaRecetaData" @recetavacia="actualizarreceta"
      class="hidden lg:block absolute btn-control" /> -->
    <div class="flex justify-end">
      <BtnBack />
    </div>
    <!-- contenido nueva receta para mobile -->
    <div class="cont-nuevareceta shadow-2xl flex flex-col items-center justify-center lg:hidden">
      <div class="img-rec1">imagen editable</div>
      <div class="cont-titulo">
        <p contenteditable="true" class="text-center font-KarbonRegular"></p>
      </div>
      <div class="cont-indicadores font-KarbonRegular">
        <div class="indicator1">
          <p>DIFICULTAD</p>
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.399"
              height="16.752"
              viewBox="0 0 21.399 16.752"
            >
              <path
                id="Icon_metro-spoon-fork"
                data-name="Icon metro-spoon-fork"
                d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                transform="translate(17.493 -4.025) rotate(60)"
                fill="#6e5b44"
              /></svg
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.399"
              height="16.752"
              viewBox="0 0 21.399 16.752"
            >
              <path
                id="Icon_metro-spoon-fork"
                data-name="Icon metro-spoon-fork"
                d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                transform="translate(17.493 -4.025) rotate(60)"
                fill="#6e5b44"
              /></svg
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.399"
              height="16.752"
              viewBox="0 0 21.399 16.752"
            >
              <path
                id="Icon_metro-spoon-fork"
                data-name="Icon metro-spoon-fork"
                d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                transform="translate(17.493 -4.025) rotate(60)"
                fill="#6e5b44"
              />
            </svg>
          </div>
          <p contenteditable="true" class="ind-edit text-center">Facil/Media/Avanzada</p>
        </div>
        <div class="indicator2">
          <p>PORCIONES</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.23"
              height="18.051"
              viewBox="0 0 15.23 18.051"
            >
              <path
                id="Icon_metro-spoon-fork"
                data-name="Icon metro-spoon-fork"
                d="M6.919,1.928A3.7,3.7,0,0,0,3.535,5.877a3.874,3.874,0,0,0,2.6,3.843l-.56,9.133a1.051,1.051,0,0,0,1.059,1.126H7.2A1.051,1.051,0,0,0,8.26,18.853L7.7,9.719a3.874,3.874,0,0,0,2.6-3.843A3.7,3.7,0,0,0,6.919,1.928Zm11.376,0-.94,5.641H16.65l-.47-5.641h-.47l-.47,5.641h-.705l-.94-5.641h-.47V9.261a.564.564,0,0,0,.564.564h1.469L14.6,18.853a1.051,1.051,0,0,0,1.059,1.126h.564a1.051,1.051,0,0,0,1.059-1.126l-.554-9.028H18.2a.564.564,0,0,0,.564-.564V1.928Z"
                transform="translate(-3.535 -1.928)"
                fill="#6e5b44"
              />
            </svg>
          </div>
          <p contenteditable="true" class="ind-edit text-center">Cantidad de porciones</p>
        </div>
        <div class="indicator3">
          <p>TIEMPO</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.907"
              height="23.906"
              viewBox="0 0 23.907 23.906"
            >
              <g
                id="Icon_ionic-ios-timer"
                data-name="Icon ionic-ios-timer"
                transform="translate(16.471 -4.901) rotate(60)"
              >
                <path
                  id="Trazado_59"
                  data-name="Trazado 59"
                  d="M12.339,20.74A8.4,8.4,0,0,1,6.508,6.29a.674.674,0,0,1,.937.97A7.051,7.051,0,1,0,13.011,5.32v2.63a.676.676,0,1,1-1.353,0V4.614a.676.676,0,0,1,.676-.676,8.4,8.4,0,0,1,0,16.8Z"
                  transform="translate(0 0)"
                  fill="#6e5b44"
                  stroke="#6e5b44"
                  stroke-width="0.7"
                />
                <path
                  id="Trazado_60"
                  data-name="Trazado 60"
                  d="M11.919,11.331l4.18,3a1.265,1.265,0,0,1-1.47,2.058,1.221,1.221,0,0,1-.294-.294l-3-4.18a.421.421,0,0,1,.588-.588Z"
                  transform="translate(-2.945 -2.944)"
                  fill="#6e5b44"
                  stroke="#6e5b44"
                  stroke-width="0.7"
                />
              </g>
            </svg>
          </div>
          <p contenteditable="true" class="ind-edit text-center">Tiempo estimado</p>
        </div>
        <div class="indicator4">
          <p>INF. NUTRICIONAL</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.373"
              height="17.738"
              viewBox="0 0 16.373 17.738"
            >
              <g
                id="Icon_ionic-ios-nutrition"
                data-name="Icon ionic-ios-nutrition"
                transform="translate(-4.5 -3.374)"
              >
                <path
                  id="Trazado_61"
                  data-name="Trazado 61"
                  d="M17.082,13.8h0a.133.133,0,0,1-.017-.026L13.7,10.384h0a1.409,1.409,0,0,0-1.006-.435,1.329,1.329,0,0,0-1.181.695h0s-.145.217-.537.844a.345.345,0,0,0,0,.367l1.143,1.757c.124.162.141.341.06.422l0,0c-.1.1-.252.064-.418-.06L10.38,13.1a.344.344,0,0,0-.473.107c-.934,1.5-2,3.185-3.036,4.861a.341.341,0,0,0,0,.354l.6,1.028c.124.162.141.341.06.422l0,0c-.1.1-.252.064-.418-.06L6.4,19.462a.34.34,0,0,0-.443.124C5.2,20.792,4.76,21.491,4.713,21.568h0a1.5,1.5,0,0,0-.213.759A1.364,1.364,0,0,0,5.86,23.7a1.561,1.561,0,0,0,.878-.324l4.456-3.309a.342.342,0,0,0,.085-.456l-.874-1.369c-.124-.162-.141-.341-.06-.422l0,0c.1-.1.252-.064.418.06l1.595,1.092a.339.339,0,0,0,.4-.009c2.26-1.667,4.157-3.078,4.157-3.078h0a1.389,1.389,0,0,0,.554-1.109,1.338,1.338,0,0,0-.388-.968Z"
                  transform="translate(0 -2.588)"
                  fill="#6e5b44"
                />
                <path
                  id="Trazado_62"
                  data-name="Trazado 62"
                  d="M28.008,6.922l-.478-.763a.341.341,0,0,0-.465-.124L24.533,7.6l2.017-3.364a.346.346,0,0,0-.124-.469l-.755-.341a.339.339,0,0,0-.469.128L22.746,8.167,23.966,9.4l3.914-2A.348.348,0,0,0,28.008,6.922Z"
                  transform="translate(-7.182)"
                  fill="#6e5b44"
                />
              </g>
            </svg>
          </div>
          <p contenteditable="true" class="ind-edit text-center">Calorias por porcion</p>
        </div>
      </div>
      <div class="cont-ingredienes font-KarbonRegular">
        <p class="titulo-ing">Ingredientes:</p>
        <p contenteditable="true" class="desc-ing text-left"></p>
      </div>
      <div class="cont-preparacion font-KarbonRegular">
        <p class="titulo-pre text-right">Preparacion:</p>
        <p contenteditable="true" class="desc-pre text-right"></p>
      </div>
      <div class="img-rec2">imagen editable</div>
    </div>
    <!-- contenido nueva receta escritorio -->
    <div class="hidden lg:block">
      <div class="cont-nuevareceta shadow-2xl items-center justify-center grid grid-cols-2">
        <div class="parte1">
          <div class="cont-titulo">
            <p
              contenteditable="true"
              class="text-center font-KarbonRegular"
              @input="capturarTitulo($event)"
            ></p>
          </div>

          <div class="cont-indicadores font-KarbonRegular">
            <div class="indicator1">
              <p>DIFICULTAD</p>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.399"
                  height="16.752"
                  viewBox="0 0 21.399 16.752"
                >
                  <path
                    id="Icon_metro-spoon-fork"
                    data-name="Icon metro-spoon-fork"
                    d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                    transform="translate(17.493 -4.025) rotate(60)"
                    fill="#6e5b44"
                  /></svg
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.399"
                  height="16.752"
                  viewBox="0 0 21.399 16.752"
                >
                  <path
                    id="Icon_metro-spoon-fork"
                    data-name="Icon metro-spoon-fork"
                    d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                    transform="translate(17.493 -4.025) rotate(60)"
                    fill="#6e5b44"
                  /></svg
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.399"
                  height="16.752"
                  viewBox="0 0 21.399 16.752"
                >
                  <path
                    id="Icon_metro-spoon-fork"
                    data-name="Icon metro-spoon-fork"
                    d="M7.343,1.928c-2.1,0-3.808,1.989-3.808,4.443A4.359,4.359,0,0,0,6.465,10.7L5.834,20.973A1.182,1.182,0,0,0,7.026,22.24h.635a1.182,1.182,0,0,0,1.192-1.267L8.222,10.7a4.359,4.359,0,0,0,2.93-4.324C11.152,3.917,9.447,1.928,7.343,1.928Z"
                    transform="translate(17.493 -4.025) rotate(60)"
                    fill="#6e5b44"
                  />
                </svg>
              </div>
              <p
                contenteditable="true"
                class="ind-edit text-center"
                @input="capturarDificultad($event)"
              ></p>
            </div>
            <div class="indicator2">
              <p>PORCIONES</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.23"
                  height="18.051"
                  viewBox="0 0 15.23 18.051"
                >
                  <path
                    id="Icon_metro-spoon-fork"
                    data-name="Icon metro-spoon-fork"
                    d="M6.919,1.928A3.7,3.7,0,0,0,3.535,5.877a3.874,3.874,0,0,0,2.6,3.843l-.56,9.133a1.051,1.051,0,0,0,1.059,1.126H7.2A1.051,1.051,0,0,0,8.26,18.853L7.7,9.719a3.874,3.874,0,0,0,2.6-3.843A3.7,3.7,0,0,0,6.919,1.928Zm11.376,0-.94,5.641H16.65l-.47-5.641h-.47l-.47,5.641h-.705l-.94-5.641h-.47V9.261a.564.564,0,0,0,.564.564h1.469L14.6,18.853a1.051,1.051,0,0,0,1.059,1.126h.564a1.051,1.051,0,0,0,1.059-1.126l-.554-9.028H18.2a.564.564,0,0,0,.564-.564V1.928Z"
                    transform="translate(-3.535 -1.928)"
                    fill="#6e5b44"
                  />
                </svg>
              </div>
              <p
                contenteditable="true"
                class="ind-edit text-center"
                @input="capturarPorciones($event)"
              ></p>
            </div>
            <div class="indicator3">
              <p>TIEMPO</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.907"
                  height="23.906"
                  viewBox="0 0 23.907 23.906"
                >
                  <g
                    id="Icon_ionic-ios-timer"
                    data-name="Icon ionic-ios-timer"
                    transform="translate(16.471 -4.901) rotate(60)"
                  >
                    <path
                      id="Trazado_59"
                      data-name="Trazado 59"
                      d="M12.339,20.74A8.4,8.4,0,0,1,6.508,6.29a.674.674,0,0,1,.937.97A7.051,7.051,0,1,0,13.011,5.32v2.63a.676.676,0,1,1-1.353,0V4.614a.676.676,0,0,1,.676-.676,8.4,8.4,0,0,1,0,16.8Z"
                      transform="translate(0 0)"
                      fill="#6e5b44"
                      stroke="#6e5b44"
                      stroke-width="0.7"
                    />
                    <path
                      id="Trazado_60"
                      data-name="Trazado 60"
                      d="M11.919,11.331l4.18,3a1.265,1.265,0,0,1-1.47,2.058,1.221,1.221,0,0,1-.294-.294l-3-4.18a.421.421,0,0,1,.588-.588Z"
                      transform="translate(-2.945 -2.944)"
                      fill="#6e5b44"
                      stroke="#6e5b44"
                      stroke-width="0.7"
                    />
                  </g>
                </svg>
              </div>
              <p
                contenteditable="true"
                class="ind-edit text-center"
                @input="capturarTiempo($event)"
              ></p>
            </div>
            <div class="indicator4">
              <p>INF. NUTRICIONAL</p>
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.373"
                  height="17.738"
                  viewBox="0 0 16.373 17.738"
                >
                  <g
                    id="Icon_ionic-ios-nutrition"
                    data-name="Icon ionic-ios-nutrition"
                    transform="translate(-4.5 -3.374)"
                  >
                    <path
                      id="Trazado_61"
                      data-name="Trazado 61"
                      d="M17.082,13.8h0a.133.133,0,0,1-.017-.026L13.7,10.384h0a1.409,1.409,0,0,0-1.006-.435,1.329,1.329,0,0,0-1.181.695h0s-.145.217-.537.844a.345.345,0,0,0,0,.367l1.143,1.757c.124.162.141.341.06.422l0,0c-.1.1-.252.064-.418-.06L10.38,13.1a.344.344,0,0,0-.473.107c-.934,1.5-2,3.185-3.036,4.861a.341.341,0,0,0,0,.354l.6,1.028c.124.162.141.341.06.422l0,0c-.1.1-.252.064-.418-.06L6.4,19.462a.34.34,0,0,0-.443.124C5.2,20.792,4.76,21.491,4.713,21.568h0a1.5,1.5,0,0,0-.213.759A1.364,1.364,0,0,0,5.86,23.7a1.561,1.561,0,0,0,.878-.324l4.456-3.309a.342.342,0,0,0,.085-.456l-.874-1.369c-.124-.162-.141-.341-.06-.422l0,0c.1-.1.252-.064.418.06l1.595,1.092a.339.339,0,0,0,.4-.009c2.26-1.667,4.157-3.078,4.157-3.078h0a1.389,1.389,0,0,0,.554-1.109,1.338,1.338,0,0,0-.388-.968Z"
                      transform="translate(0 -2.588)"
                      fill="#6e5b44"
                    />
                    <path
                      id="Trazado_62"
                      data-name="Trazado 62"
                      d="M28.008,6.922l-.478-.763a.341.341,0,0,0-.465-.124L24.533,7.6l2.017-3.364a.346.346,0,0,0-.124-.469l-.755-.341a.339.339,0,0,0-.469.128L22.746,8.167,23.966,9.4l3.914-2A.348.348,0,0,0,28.008,6.922Z"
                      transform="translate(-7.182)"
                      fill="#6e5b44"
                    />
                  </g>
                </svg>
              </div>
              <p
                contenteditable="true"
                class="ind-edit text-center"
                @input="capturarInfoNutricional($event)"
              ></p>
            </div>
          </div>

          <div class="cont-ingredienes font-KarbonRegular">
            <p class="titulo-ing">Ingredientes:</p>
            <div class="desc-ing text-left">
              <ul contenteditable="true" class="list-disc" @input="capturarIngredientes($event)">
                <li></li>
              </ul>
            </div>
          </div>
          <div class="img-rec2 overflow-hidden relative shadow-2xl">
            <!-- <img src="../../../assets/cDashboard/Iconmaterial-perm-media.svg" alt="" class="absolute w-52" /> -->
            <input
              type="file"
              multiple
              class="relative"
              v-on:change="previewImages"
              @change="capturarImagenes($event)"
            />
            <div class="swiper-container">
              <div class="swiper-wrapper h-full">
                <div
                  class="swiper-slide relative"
                  v-for="(imageSrc, index) in imageSrcList"
                  :key="index"
                >
                  <button
                    @click="eliminarimagecarousel(index)"
                    class="bg-white absolute right-0 m-5 p-2 rounded-2xl hover:bg-red-300"
                  >
                    Eliminar
                  </button>
                  <img class="object-cover w-full h-full" :src="imageSrc" alt="" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>

        <div class="parte2">
          <div class="img-rec1 relative flex justify-center items-center">
            <FileUploaderRect />
            <!-- <img src="../../../assets/cDashboard/Iconmaterial-perm-media.svg" alt="" class="absolute w-52" />
            <input class="absolute z-50 opacity-0" type="file" @change="capturarImagen($event)"
              v-on:change="previewImage" />
            <img :src="imagerec1" class="object-cover w-full h-full" alt="" />
            <video :src="imagerec1" autoplay loop class="object-cover absolute w-full h-full"></video> -->
          </div>
          <div class="cont-preparacion font-KarbonRegular">
            <p class="titulo-pre text-right">Preparacion:</p>
            <div class="desc-pre text-left">
              <ul contenteditable="true" class="list-decimal" @input="capturarPreparacion($event)">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import BtnBack from '../../../General/BtnBack.vue'
import FileUploaderRect from '../../../General/FileUploaderRect.vue'
import BotonesCrudEntradaRec from '../BotonesCrudEntradaRec.vue'
export default {
  data() {
    return {
      estadonuevareceta: true,
      nuevaRecetaData: {
        titulo: '',
        dificultad: '',
        tiempo: '',
        porciones: '',
        infonutricional: '',
        ingredientes: [],
        preparacion: [],
        categoria: '',
        imagen: '',
        carousel: []
      },
      imagerec1: '',
      imageSrcList: []
    }
  },
  components: {
    BtnBack,
    FileUploaderRect,
    BotonesCrudEntradaRec
  },
  methods: {
    cambiarEstado() {
      this.estadonuevareceta = !this.estadonuevareceta
      this.$emit('estadonuevarecetacam', this.estadonuevareceta)
    },
    //items normales
    capturarTitulo(event) {
      const titulo = event.target.textContent.trim()
      this.nuevaRecetaData.titulo = titulo
    },
    capturarDificultad(event) {
      const dificultad = event.target.textContent.trim()
      this.nuevaRecetaData.dificultad = dificultad
    },
    capturarPorciones(event) {
      const porciones = event.target.textContent.trim()
      this.nuevaRecetaData.porciones = porciones
    },
    capturarTiempo(event) {
      const tiempo = event.target.textContent.trim()
      this.nuevaRecetaData.tiempo = tiempo
    },
    capturarInfoNutricional(event) {
      const infonutricional = event.target.textContent.trim()
      this.nuevaRecetaData.infonutricional = infonutricional
    },
    //para ingredientes y preparacion
    capturarIngredientes(event) {
      const ingredientesHTML = event.target.innerHTML
      const parser = new DOMParser()
      const htmlDoc = parser.parseFromString(ingredientesHTML, 'text/html')
      const elementosLi = htmlDoc.getElementsByTagName('li')
      const ingredientes = Array.from(elementosLi).map((li) => ({
        ingrediente: li.innerHTML.trim()
      }))
      this.nuevaRecetaData.ingredientes = ingredientes
    },
    capturarPreparacion(event) {
      const preparacionHTML = event.target.innerHTML
      const parser = new DOMParser()
      const htmlDoc = parser.parseFromString(preparacionHTML, 'text/html')
      const elementosLi = htmlDoc.getElementsByTagName('li')
      const preparacion = Array.from(elementosLi).map((li) => ({
        preparacion: li.innerHTML.trim()
      }))
      this.nuevaRecetaData.preparacion = preparacion
    },
    //imagen normal
    capturarImagen(event) {
      const archivo = event.target.files[0]
      // Crear un objeto URL para la imagen seleccionada
      const urlImagen = URL.createObjectURL(archivo)
      // Asignar la URL de la imagen a la variable imagerec1
      this.nuevaRecetaData.imagen = urlImagen
    },
    //carousel
    capturarImagenes(event) {
      const archivos = event.target.files
      for (let i = 0; i < archivos.length; i++) {
        const archivo = archivos[i]
        const urlImagen = URL.createObjectURL(archivo)
        this.nuevaRecetaData.carousel.push({ imagen: urlImagen })
      }
    },

    //Faltaria Captura Categoria A
    previewImage(event) {
      const file = event.target.files[0] // Obtener el archivo seleccionado

      // Verificar si se seleccionó un archivo
      if (file) {
        // Crear una URL local para el archivo seleccionado
        this.imagerec1 = URL.createObjectURL(file)
      } else {
        this.imagerec1 = '' // Limpiar la URL de la imagen si no se selecciona ningún archivo
      }
    },
    initSwiper() {
      new Swiper('.swiper-container', {
        // Configuración de Swiper
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      })
    },
    previewImages(event) {
      const files = event.target.files // Obtener los archivos seleccionados

      // Limpiar la lista de URLs de imágenes existentes
      this.imageSrcList = []

      // Verificar si se seleccionaron archivos
      if (files.length > 0) {
        // Iterar sobre cada archivo seleccionado
        for (let i = 0; i < files.length; i++) {
          const file = files[i]

          // Crear una URL local para el archivo seleccionado
          const imageSrc = URL.createObjectURL(file)

          // Agregar la URL a la lista de URLs de imágenes
          this.imageSrcList.push(imageSrc)
        }
      }
    },

    actualizarreceta(valor) {
      this.nuevaRecetaData = valor
    }
  },
  mounted() {
    // Inicializar el carrusel Swiper
    this.initSwiper()
  }
}
</script>
<style scoped>
.cont-btn {
  height: auto;
  width: auto;
  bottom: 10%;
  right: 1%;
}

.btn-crud {
  height: 10vh;
  /* background-color: rgba(220, 20, 60, 0.238); */
}
.btn-back {
  padding: 5%;
  padding-top: 1%;
  padding-bottom: 0%;
  font-size: 5vw;
}

.cont-nuevarecetagen {
  margin: 2%;
  padding: 2%;
  margin-bottom: 0%;
  padding-bottom: 0%;
}

.cont-nuevareceta {
  padding: 2%;
  margin-top: 4%;
  background-color: #fff7ec;
  padding-top: 0%;
  padding-bottom: 0%;
}

.cont-titulo {
  background-color: #ffffff33;
  width: 80%;
  margin: 1%;
  margin-top: 4%;
  border: solid #aeaeae 0.1vw;
  border-radius: 2.5vw;
}

.cont-titulo p {
  color: #41311e;
  font-size: 6vw;
  -webkit-text-stroke: #41311e 0.3vw;
}

.cont-indicadores {
  overflow: hidden;
  width: 104%;
  background-color: #fbf1e3;
  margin-top: 3%;
  margin-bottom: 3%;
  columns: 2;
  gap: 0;
  color: #411e1ec2;
  font-size: 4.7vw;
  -webkit-text-stroke: #41311e 0.05vw;
}

.indicator1,
.indicator2,
.indicator3,
.indicator4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
}

.indicator1,
.indicator2 {
  border-right: #aeaeae solid;
}

.indicator1,
.indicator3 {
  border-bottom: #aeaeae solid;
}

.ind-edit {
  border: solid #aeaeae 0.1vw;
  width: 95%;
  border-radius: 2.5vw;
}

.cont-ingredienes {
  width: 90%;
}

.titulo-ing,
.titulo-pre {
  font-size: 6vw;
  -webkit-text-stroke: #41311e 0.1vw;
}

.desc-ing {
  min-height: 200px;
  background-color: #ffffff33;
  border: solid #aeaeae 0.1vw;
  border-radius: 2.5vw;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 2%;
  font-size: 4.5vw;
}

.cont-preparacion {
  width: 90%;
}

.desc-pre {
  min-height: 200px;
  background-color: #ffffff33;
  border: solid #aeaeae 0.1vw;
  border-radius: 2.5vw;
  margin-top: 3%;
  margin-bottom: 3%;
  padding: 2%;
  font-size: 4.5vw;
}

.img-rec1,
.img-rec2 {
  width: 104%;
  min-height: 300px;
  background-color: #cbcbcb;
}

@media (min-width: 1024px) {
  .cont-btn {
    width: 30vh;
    height: 7vh;
    top: 0%;
    right: 15vw;
  }

  .btn-crud {
    height: 7vh;
    /* background-color: rgba(220, 20, 60, 0.238); */
  }
  .btn-control {
    height: 6vh;
    top: -0%;
    right: 8vw;
  }

  .btn-back {
    padding: 5%;
    padding-top: 1%;
    padding-bottom: 0%;
    font-size: 1vw;
  }

  .cont-nuevarecetagen {
    margin: 2%;
    padding: 2%;
    margin-bottom: 0%;
    padding-bottom: 0%;
  }

  .cont-nuevareceta {
    padding: 0%;
    margin-top: 4%;
    background-color: #fff7ec;
    padding-top: 0%;
    padding-bottom: 0%;
  }

  .cont-titulo {
    background-color: #ffffff33;
    width: auto;
    margin: 5%;
    margin-bottom: 10%;
  }

  .cont-titulo p {
    color: #41311e;
    font-size: 1.8vw;
    border: solid #aeaeae 0.1vw;
    border-radius: 2.5vw;
    -webkit-text-stroke: #41311e 0.03vw;
  }

  .cont-indicadores {
    overflow: hidden;
    width: 104%;
    background-color: #fbf1e3;
    margin-top: 3%;
    margin-bottom: 3%;
    columns: 4;
    gap: 0;
    color: #411e1ec2;
    font-size: 0.8vw;
    width: 100%;
    -webkit-text-stroke: #41311e 0.05vw;
    padding: 1%;
  }

  .indicator1,
  .indicator2,
  .indicator3,
  .indicator4 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
    height: 10vh;
  }

  .indicator1,
  .indicator2,
  .indicator1,
  .indicator3 {
    border-right: #aeaeaeb1 solid;
  }

  .indicator1,
  .indicator3 {
    border-bottom: none;
  }

  .ind-edit {
    border: solid #aeaeae 0.1vw;
    width: 95%;
    border-radius: 2.5vw;
  }

  .cont-ingredienes {
    width: 100%;
    padding: 5%;
  }

  .titulo-ing,
  .titulo-pre {
    font-size: 1.5vw;
    -webkit-text-stroke: #41311e 0.05vw;
  }

  .desc-ing {
    min-height: 200px;
    background-color: #ffffff33;
    border: solid #aeaeae 0.1vw;
    border-radius: 1.5vw;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 2%;
    font-size: 1.1vw;
    padding-left: 5%;
  }

  .cont-preparacion {
    width: 100%;
    padding: 5%;
  }

  .desc-pre {
    min-height: 200px;
    background-color: #ffffff33;
    border: solid #aeaeae 0.1vw;
    border-radius: 1.5vw;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 2%;
    font-size: 1.2vw;
    padding-left: 5%;
  }

  .img-rec1,
  .img-rec2 {
    width: 100%;
    min-height: 400px;
    height: 75vh;
    background-color: #cbcbcb;
  }

  .parte1,
  .parte2 {
    height: 100%;
  }
}
</style>
