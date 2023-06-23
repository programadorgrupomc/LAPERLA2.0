<template>
  <div class="contenedornf bg-FondoPerla h-screen flex flex-col justify-start items-center overflow-hidden w-full">
    <div class="ttlnf w-full">
      <h1 class="text-AzulPerla font-TestKarbonMedium text-center lg:text-left">NUESTRA FILOSOFIA</h1>
    </div>

    <!-- Para escritorio -->
    <div class="conttrianglegen hidden h-screen md:flex justify-center items-end">
      <div class="imgtrianglenf1 relative flex justify-center items-center">
        <img loading="lazy" class="w-full h-full object-cover" src="@/assets/Nosotros/nftriangle(1).svg" alt="">
        <div class="absolute conttritem1 w-full h-full flex flex-col justify-center items-center">
          <img loading="lazy" class="imgtr" src="@/assets/Nosotros/imgnp1(3).png" alt="">
          <h1 class="ttlfilosofia font-TestKarbonMedium">VISION</h1>
          <p class="text-center font-TestKarbonRegular">Ser una empresa líder en el mercado nacional en la producción y
            comercialización de
            alimentos, con exigentes estándares de calidad.</p>
        </div>
      </div>
      <div class="trianglecentral relative flex justify-center items-center">
        <img loading="lazy" class="w-full h-full object-cover" src="@/assets/Nosotros/nftriangle(3).svg" alt="">
        <div class="absolute conttritem2 w-full h-full flex flex-col justify-center items-center">
          <img loading="lazy" class="imgtr" src="@/assets/Nosotros/imgnp1(1).png" alt="">
          <h1 class="ttlfilosofia font-TestKarbonMedium">VALORES</h1>
          <ul class="text-center font-TestKarbonRegular">
            <li>Integridad</li>
            <li>Respeto</li>
            <li>Agilidad</li>
            <li>Mejora continua</li>
            <li>Excelencia</li>
          </ul>
        </div>
      </div>

      <div class="imgtrianglenf2 relative flex justify-center items-center">
        <img loading="lazy" class="w-full h-full object-cover" src="@/assets/Nosotros/nftriangle(2).svg" alt="">
        <div class="absolute conttritem3 w-full h-full flex flex-col justify-center items-center">
          <img loading="lazy" class="imgtr" src="@/assets/Nosotros/imgnp1(2).png" alt="">
          <h1 class="ttlfilosofia font-TestKarbonMedium">MISION</h1>
          <p class="text-center font-TestKarbonRegular">En base a nuestra trayectoria de crianza de aves desde 1962,
            ofrecer un producto avícola
            de alta calidad, contribuyendo a una alimentación nutritiva y saludable para nuestros consumidores.</p>
        </div>
      </div>
    </div>

    <!-- Para mobile -->
    <div class="conttrianglegen md:hidden h-screen flex justify-center items-end">
      <div class="imgtrianglenf1 relative flex justify-center items-center">
        <img loading="lazy" class="w-full h-full object-cover" src="@/assets/Nosotros/nftriangle(1).svg" alt="">
      </div>
      <div class="trianglecentral relative flex justify-center items-center">
        <img loading="lazy" class="w-full h-full object-cover" src="@/assets/Nosotros/nftriangle(3).svg" alt="">
      </div>

      <div class="imgtrianglenf2 relative flex justify-center items-center">
        <img loading="lazy" class="w-full h-full object-cover" src="@/assets/Nosotros/nftriangle(2).svg" alt="">
      </div>
    </div>

    <div class="absolute md:hidden conttritem1 w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <img loading="lazy" class="imgtr" src="@/assets/Nosotros/imgnp1(3).png" alt="">
      <h1 class="ttlfilosofia font-TestKarbonMedium">VISION</h1>
      <p class="text-center font-TestKarbonRegular">Ser una empresa líder en el mercado nacional en la producción y
        comercialización de
        alimentos, con exigentes estándares de calidad.</p>
    </div>

    <div class="absolute md:hidden conttritem2 w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <img loading="lazy" class="imgtr" src="@/assets/Nosotros/imgnp1(1).png" alt="">
      <h1 class="ttlfilosofia font-TestKarbonMedium">VALORES</h1>
      <ul class="text-center font-TestKarbonRegular">
        <li>Integridad</li>
        <li>Respeto</li>
        <li>Agilidad</li>
        <li>Mejora continua</li>
        <li>Excelencia</li>
      </ul>
    </div>

    <div class="absolute md:hidden conttritem3 w-full h-full flex flex-col justify-center items-center overflow-hidden">
      <img loading="lazy" class="imgtr" src="@/assets/Nosotros/imgnp1(2).png" alt="">
      <h1 class="ttlfilosofia font-TestKarbonMedium">MISION</h1>
      <p class="text-center font-TestKarbonRegular">En base a nuestra trayectoria de crianza de aves desde 1962, ofrecer
        un producto avícola de
        alta calidad, contribuyendo a una alimentación nutritiva y saludable para nuestros consumidores.</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.animarFilosofia();
  },
  methods: {
    animarFilosofia() {
      if (window.innerWidth > 768) {
        const tlnf = gsap.timeline({
          scrollTrigger: {
            trigger: ".contenedornf",
            start: "top top",
            end: "+=250% top",
            scrub: 1.4,
            pin: true,
            pinSpacing: true,
            onStart: () => {
              ScrollTrigger.refresh();
            },
            onComplete: () => {
              ScrollTrigger.refresh();
            },
          },
        });
        tlnf.fromTo(
          ".conttrianglegen .trianglecentral",
          { opacity: 0, yPercent: -30 },
          { opacity: 1, yPercent: -10 }
        );
        tlnf.fromTo(
          ".conttrianglegen .imgtrianglenf1",
          { opacity: 0, yPercent: 30 },
          { opacity: 1, yPercent: -20 },
          0
        );
        tlnf.fromTo(
          ".conttrianglegen .imgtrianglenf2",
          { opacity: 0, yPercent: 30 },
          { opacity: 1, yPercent: -20 },
          0
        );
        tlnf.to(".conttrianglegen .imgtrianglenf2", { delay: 0.1 });
      }
      if (window.innerWidth < 768) {
        const tlnf = gsap.timeline({
          scrollTrigger: {
            trigger: ".contenedornf",
            start: "top top",
            end: "+=150% top",
            scrub: 1.4,
            pin: true,
            pinSpacing: true,
            onStart: () => {
              ScrollTrigger.refresh();
            },
            onComplete: () => {
              ScrollTrigger.refresh();
            },
          },
        });

        tlnf.fromTo(
          ".conttritem2",
          { opacity: 0, yPercent: -30 },
          { opacity: 1, yPercent: 7 }
        );
        tlnf.fromTo(
          ".trianglecentral",
          { opacity: 0, yPercent: -30 },
          { opacity: 1, yPercent: 0 }, 0
        );
        tlnf.fromTo(
          ".conttritem1",
          { opacity: 0, yPercent: 30 },
          { opacity: 1, yPercent: 9 },
          0
        );
        tlnf.fromTo(
          " .imgtrianglenf1",
          { opacity: 0, yPercent: 30 },
          { opacity: 1, yPercent: 0 },
          0
        );
        tlnf.fromTo(
          ".conttritem3",
          { opacity: 0, yPercent: 30 },
          { opacity: 1, yPercent: 8 },
          0
        );
        tlnf.fromTo(
          ".imgtrianglenf2",
          { opacity: 0, yPercent: 30 },
          { opacity: 1, yPercent: 0 },
          0
        );

      }
    },
    actualizarAnimacion() {
      // Actualiza la animación cuando cambie el tamaño de la ventana
      ScrollTrigger.refresh();
      window.addEventListener('resize', this.actualizarAnimacion);
    },
  },
  beforeUnmount() {
    // Remueve el evento resize al desmontar el componente
    window.removeEventListener('resize', this.actualizarAnimacion);
  },
};
</script>

<style scoped>
.ttlnf {
  padding-top: 5%;
  font-size: 10vw;
  font-weight: bold;
}

.conttrianglegen {
  transform: scaleX(0.375) scaleY(0.6);
}

.trianglecentral,
.imgtrianglenf1,
.imgtrianglenf2 {
  height: auto;
  width: 60vh;
}

.imgtrianglenf1 {
  right: -30vh;
}

.imgtrianglenf2 {
  right: 30vh;
}

.imgtr {
  width: 14vw;
}

.ttlfilosofia {
  font-size: 6vw;
}

.conttritem2 ul {
  font-size: 3.2vw;
  width: 60%;
}

.conttritem1 p,
.conttritem3 p {
  font-size: 2vw;
  width: 27%;

}

.conttritem1,
.conttritem3 {
  bottom: 5vh;
}

.conttritem1 {
  transform: translateY(24vh) translateX(-11vh);
}

.conttritem3 {
  transform: translateY(23vh) translateX(11vh);
}

@media (min-width: 768px) {
  .conttrianglegen {
    transform: scale(0.55);
  }

  .ttlnf {

    font-size: 8vw;
    font-weight: bold;
  }

  .conttritem2 ul {
    font-size: 3vw;
  }

  .ttlfilosofia {
    font-size: 7vw;
  }

  .conttritem1 p,
  .conttritem3 p {
    padding-top: 2%;
    font-size: 2.1vw;
  }

  .conttritem1 {
    padding-top: 5%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    transform: translateY(5vh) translateX(0vh);
  }

  .conttritem3 {
    padding-top: 5%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    transform: translateY(4vh) translateX(0vh);
  }
}

@media (min-width: 1024px) {
  .ttlnf {
    padding-top: 5%;
    font-size: 5vw;
    font-weight: bold;
    padding-left: 10%;
    /* border: black solid; */
  }

  .conttrianglegen {
    transform: scale(0.70) translateY(-8vh);
    /* border: black solid; */
  }

  .imgtr {
    width: 6.5vw;
    /* border: black solid; */
  }

  .conttritem1 {
    padding-top: 5%;
    /* border: black solid; */
  }

  .conttritem1 p {
    font-size: 1.04vw;
    width: 60%;
    padding-bottom: 2%;
    padding-left: 2.5%;
    padding-right: 2.5%;
    /* border: black solid; */
  }

  .ttlfilosofia {
    font-size: 2.5vw;
    /* border: black solid; */
  }

  .conttritem2 ul {
    font-size: 1.35vw;
    width: 60%;
    /* border: black solid; */
  }

  .conttritem3 p {
    font-size: 1vw;
    width: 60%;
    padding-bottom: 1%;
    padding-left: 1%;
    padding-right: 1%;
    /* border: black solid; */
  }

  .conttritem3 {
    padding-top: 5%;
    /* border: black solid; */
  }
}

@media (min-width: 5120px) {
  .ttlnf {
    font-size: 5vw;
    font-weight: bold;
    padding-left: 10%;
  }

  .conttrianglegen {
    transform: scale(0.68) translateY(-8vh);
  }

  .imgtr {
    width: 6.2vw;
  }

  .conttritem1 {
    padding-top: 5%;
  }

  .conttritem1 p {
    font-size: 1.04vw;
    width: 60%;
    padding-bottom: 2%;
    padding-left: 2.5%;
    padding-right: 2.5%;
  }

  .ttlfilosofia {
    font-size: 2.5vw;
  }

  .conttritem2 ul {
    font-size: 1.35vw;
    width: 60%;
  }

  .conttritem3 p {
    font-size: 1vw;
    width: 60%;
    padding-bottom: 1%;
    padding-left: 1%;
    padding-right: 1%;
  }

  .conttritem3 {
    padding-top: 5%;
  }
}
</style>
