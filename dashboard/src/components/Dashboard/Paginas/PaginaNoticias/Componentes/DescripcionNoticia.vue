

<template>
  <div>
    <div class="overflow-hidden cont-des bg-FondoPerla">
      <!-- hero -->
      <div class="descnot">
        <img loading="lazy" class="object-cover w-full h-full" src="@/assets/Noticias/imgHeroDescNotica.jpg"
          alt="imgnotid" />
      </div>
      <!-- desc -->
      <div class="dscnot5k">
        <!-- ttl -->
        <div class="ttls-descnot">
          <p class="ttls-descnot1 text-MarronPerla">NOTICIAS</p>
          <p class="text-AzulPerla ttlcentraldesnot">{{ noticiaMostrar.titulo }}</p>
          <p class="ttls-descnot2 text-AzulPerla">05 de mayo de 2023</p>
        </div>
        <div class="lg:flex lg:items-center">
          <!-- texto centrado -->
          <div class="textodesnot text-justify text-AzulPerla break-inside-avoid lg:text-left lg:w-2/4">
            <p>{{ textcont }}</p>
          </div>
          <!-- swiper -->
          <div class="flex justify-center items-center lg:w-2/4">
            <swiper :space-between="30" :centered-slides="true" :pagination="{ clickable: true }" class="mySwiper">
              <swiper-slide v-for="i in 5" :key="i">
                <img loading="lazy" class="ncrr object-cover w-full" src="@/assets/Noticias/ImgCar1.jpg" alt="">
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      textcont: "Los orígenes del Día Internacional de los Trabajadores se remontan al año 1886, en Estados Unidos. En esa época los trabajadores iniciaron una lucha para reducir la jornada laboral a 8 horas. El único límite que existía era el no hacer trabajar a una persona más de 18 horas sin causa justificada y la consecuencia era una multa de 25 dólares. El sindicato mayoritario inició una huelga, a partir del 1 de mayo de 1886. En Chicago, los enfrentamientos entre la policía y los trabajadores fueron especialmente duros y sangrientos. Tras varios días de huelga, el 4 de mayo se convocó una concentración en la plaza de Haymarket, con una tensión creciente. Ese día un artefacto explotó en la plaza, resultando muerto un policía. Hubo muchos detenidos, de los cuales cinco de ellos fueron condenados a la horca: tres periodistas, un tipógrafo y un carpintero. Se les conoce como los mártires de Chicago. En honor a la lucha por la jornada laboral de 8 horas y en memoria de los trabajadores de Haymarket, el 1 de mayo se celebra el Día Internacional de los Trabajadores.",
      modules: [Swiper],
      noticiasData: [
        {
          id: '1',
          imghero: 'Hola',
          titulo: 'DÍA DEL TRABAJADOR',
          descripcion: 'En Molino La Perla conmemoramos a nivel mundial al movimiento obrero y la fuerza laboral, como movimiento reivindicativo de diferentes causas relacionadas con el trabajo.'
        },
        {
          id: '2',
          imghero: 'Hola',
          titulo: 'DÍA DE LA MUJER',
          descripcion: 'Conmemoramos el 8 de marzo de 1908, un suceso transcendental que marcó la historia del trabajo y la lucha sindical en el mundo entero: 129 mujeres murieron en un incendio en la fábrica Cotton, de Nueva York.'
        },
        {
          id: '3',
          imghero: 'Hola',
          titulo: 'DÍA DEL AGRADECIMIENTO AL GALPONERO',
          descripcion: 'Celebramos a nuestros granjeros de Molino La Perla y de nuestra nación, y el importante papel que desempeñan en nuestra vida diaria.'
        },
        {
          id: '4',
          imghero: 'Hola',
          titulo: 'DÍA DEL CAMPESINO',
          descripcion: 'El campesino, agricultor o ganadero, hace producir con su trabajo y esfuerzo la tierra y los animales, recursos que nos fueron brindados y que son mundialmente conocidos, porque representan una mayor fuente de riqueza.'
        },
      ],
      noticiaMostrar: '',
      idnoticia: '',
    };
  },
  mounted() {
    //resulta que no es necesario coventir a numero xd
    const noticiaId = this.$route.params.id;
    this.idnoticia = noticiaId;
    this.noticiaMostrar= this.noticiasData.find((noticia) => noticia.id===noticiaId);
  }
};
</script>

<style scoped>
.cont-des {
  overflow: hidden;
  background-color: #FCF5EB;
}

.descnot {
  height: 65vh;
  width: 100%;
}

.dscnot5k {
  padding: 4%;
}

.ttls-descnot {
  font-family: "KarbonRegular";
  padding-bottom: 4%;
}

.ttls-descnot1 {
  font-size: 6vw;
  line-height: normal;
}

.ttlcentraldesnot {
  font-family: "GilroyBold";
  font-size: 8vw;
  line-height: normal;
}

.ttls-descnot2 {
  font-size: 6.5vw;
  line-height: normal;
}

.textodesnot {
  font-family: "KarbonRegular";
  padding-bottom: 4%;
  font-size: 5vw;
  line-height: normal;
}

@media (min-width: 1024px) {


  .cont-des {
    padding-top: 12vh;
  }

  .descnot {
    height: 55vh;
    width: 100%;
  }

  .dscnot5k {
    padding-right: 0%;
  }

  .ttls-descnot1 {
    font-size: 2vw;
  }

  .ttlcentraldesnot {
    font-size: 4vw;
  }

  .ttls-descnot2 {
    font-size: 3vw;
  }

  .textodesnot {
    font-size: 1.8vw;
    padding: 2%;
    padding-right: 4%;
  }
}
</style>
