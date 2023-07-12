<script>
export default {}
</script>
<template>
  <div>
    <!-- para mobile -->
    <div class="stark p-2 overflow-hidden font-TestKarbonSemiBold bg-FondoPerla lg:hidden">
      <div class="py-3">
        <p class="ttlmobilepresen text-AzulPerla text-center text-5xl">NOSOTROS</p>
      </div>
      <div class="textopptNosostros">
        <p class="text-MarronPerla font-KarbonRegular p-2 md:p-8 md:text-3xl text-justify">
          Con más de 60 años de experiencia, Molino La Perla S.A.C. se destaca en el mercado avícola del norte del país.
          Somos reconocidos por brindar calidad a las familias peruanas como una de las principales productoras de pollos
          de carne a nivel nacional. <br />
          <br />
          Nos destacamos por nuestras instalaciones renovadas y equipadas con tecnología de punta, lo que nos permite
          optimizar nuestros procesos de producción. Contamos con un equipo de profesionales altamente capacitados que
          lideran nuestra línea de producción, asegurando los estándares de calidad que nos caracterizan. Nuestro
          compromiso es seguir siendo líderes en el mercado avícola, ofreciendo productos de calidad superior para
          satisfacer las necesidades de nuestros clientes.
        </p>
      </div>
      <div class="p-4">
        <img loading="lazy" class="object-cover" src="@/assets/Nosotros/NosotrosPrimeraFoto.jpg" alt="imgnn" />
      </div>
      <div class="font-KarbonRegular det-nnpre flex md:text-4xl flex-col justify-evenly items-center text-AzulPerla py-3">
        MAS DE
        <p class="yearperla text-5xl md:text-6xl font-bold">60 AÑOS</p>
        SIRVIENDO AL PERU
      </div>
      <div class="img-nnpre flex justify-center scale-50 md:scale-90">
        <img loading="lazy" class="object-cover" src="@/assets/Nosotros/imgLogoNosotros.png" alt="logo" />
      </div>
    </div>
    <!-- para escritorio -->
    <div class="contenedor-nosotros overflow-hidden hidden lg:block pb-12 pl-12 bg-FondoPerla">
      <div class="relative contendortitulonp1">
        <p class="titulonp1 text-AzulPerla font-TestKarbonSemiBold">NOSOTROS</p>
      </div>
      <div class="relative w-full h-full">
        <div class="ellipse">
          <img loading="lazy" class="object-cover w-full" src="@/assets/Nosotros/NosotrosPrimeraFoto.jpg"
            alt="imgEllipse" />
        </div>
        <div class="relative">
          <p class="relative contenedor-texto text-MarronPerla font-KarbonRegular">
            Con más de 60 años de experiencia, Molino La Perla S.A.C. se destaca en el mercado avícola del norte del país.
            Somos reconocidos por brindar calidad a las familias peruanas como una de las principales productoras de
            pollos
            de carne a nivel nacional. <br />
            <br />
            Nos destacamos por nuestras instalaciones renovadas y equipadas con tecnología de punta, lo que nos permite
            optimizar nuestros procesos de producción. Contamos con un equipo de profesionales altamente capacitados que
            lideran nuestra línea de producción, asegurando los estándares de calidad que nos caracterizan. Nuestro
            compromiso es seguir siendo líderes en el mercado avícola, ofreciendo productos de calidad superior para
            satisfacer las necesidades de nuestros clientes.
          </p>
          <div class="relative textogen text-AzulPerla font-KarbonRegular flex flex-col justify-center items-center">
            MAS DE
            <p class="textoyear">60 AÑOS</p>
            SIRVIENDO AL PERU
          </div>
          <div class="imgnpend relative">
            <img loading="lazy" class="object-cover" src="@/assets/Nosotros/imgLogoNosotros.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.stark {
  height: 280vw;
}

.contenedor-nosotros {
  height: 100vw;
}

.ellipse {
  float: right;
  shape-outside: ellipse();
  width: 60%;
}

.ellipse img {
  --webkit-clip-path: ellipse(30% 40% at 50% 50%);
  clip-path: ellipse(30% 40% at 50% 50%);
  transform: scaleY(1.6) scaleX(1.35);
}

.contenedor-texto {
  font-size: 1.5vw;
  padding-top: 8%;
  padding-bottom: 9%;
  padding-left: 8.4%;
  left: -3%;
}

.titulonp1 {
  font-size: 10vw;
}

.contendortitulonp1 {
  left: 2%;
}

.textogen {
  font-size: 1.6vw;
  line-height: normal;
  padding-bottom: 5%;
}

.textoyear {
  font-size: 4.5vw;
  line-height: normal;
  -webkit-text-stroke: 0.1vw #471d7c;
}

.imgnpend {
  width: 15vw;
  left: 18%;
}

@media (min-width: 768px) {
  .stark {
    height: 220vw;
  }
}

@media (min-width: 5120px) {
  .imgnpend {
    transform: scale(3.5);
    left: 36%;
    padding-top: 2%;
  }
}
</style>
