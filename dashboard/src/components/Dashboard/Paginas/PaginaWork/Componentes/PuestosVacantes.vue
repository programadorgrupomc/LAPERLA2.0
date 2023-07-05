<script>
import FiltroVac from './FiltroVac.vue'
import Search from './search.vue'
import FileUploaderRect from '../../../General/FileUploaderRect.vue'
import imagenpuesto from '../../../../../assets/Dashboard/Work/imgwork1 (1).jpg'

export default {
  components: {
    FiltroVac,
    Search,
    FileUploaderRect
  },
  data() {
    return {
      puestos: [
        {
          id: '1',
          titulo: 'Analista Senior de Transformacion de Procesos',
          experiencia: '',
          departamento: '',
          tipoempleo: 'FullTime',
          descripcion:
            'Ejecutar procesos y proyectos de transformación del banco, acompañando a las distintas áreas durante el ciclo de vida de la transformación (concepción, diseño, implementación y control), con el objetivo de generar eficiencias y automatizaciones.',
          funciones:
            'Liderar proyectos de mejora (mediano plazo) y proyectos de transformación (largo plazo), principalmente de carácter tecnológico, acompañando al negocio durante el todo el ciclo de vida (concepto, propuesta de diseño, implementación, resultados, seguimiento). Se puede tener más de 1 proyecto simultáneamente. Ejecutar relevamientos, entrevistas, medición de tiempos en proyectos de mejora y proyectos de transformación. Ejecutar proyectos de mejora y transformación, de acuerdo a la asignación del jefe. Atender pedidos, formalizaciones o miniproyectos (menor duración). Atender pedidos y formalizaciones. Realizar Mentoring a los Analistas Junior y Middle como guía de proyectos.',
          requisitos:
            'Liderar proyectos de mejora (mediano plazo) y proyectos de transformación (largo plazo), principalmente de carácter tecnológico, acompañando al negocio durante el todo el ciclo de vida (concepto, propuesta de diseño, implementación, resultados, seguimiento). Se puede tener más de 1 proyecto simultáneamente. Ejecutar relevamientos, entrevistas, medición de tiempos en proyectos de mejora y proyectos de transformación. Ejecutar proyectos de mejora y transformación, de acuerdo a la asignación del jefe. Atender pedidos, formalizaciones o miniproyectos (menor duración). Atender pedidos y formalizaciones. Realizar Mentoring a los Analistas Junior y Middle como guía de proyectos.',
          sueldo: '',
          formulario: '',
          imagen: imagenpuesto
        },
        {
          id: '2',
          titulo: 'Analista Junior de Estrategia Comercial',
          experiencia: '',
          departamento: '',
          tipoempleo: 'FullTime',
          descripcion:
            'Ejecutar procesos y proyectos de transformación del banco, acompañando a las distintas áreas durante el ciclo de vida de la transformación (concepción, diseño, implementación y control), con el objetivo de generar eficiencias y automatizaciones.',
          funciones:
            'Liderar proyectos de mejora (mediano plazo) y proyectos de transformación (largo plazo), principalmente de carácter tecnológico, acompañando al negocio durante el todo el ciclo de vida (concepto, propuesta de diseño, implementación, resultados, seguimiento). Se puede tener más de 1 proyecto simultáneamente. Ejecutar relevamientos, entrevistas, medición de tiempos en proyectos de mejora y proyectos de transformación. Ejecutar proyectos de mejora y transformación, de acuerdo a la asignación del jefe. Atender pedidos, formalizaciones o miniproyectos (menor duración). Atender pedidos y formalizaciones. Realizar Mentoring a los Analistas Junior y Middle como guía de proyectos.',
          requisitos:
            'Liderar proyectos de mejora (mediano plazo) y proyectos de transformación (largo plazo), principalmente de carácter tecnológico, acompañando al negocio durante el todo el ciclo de vida (concepto, propuesta de diseño, implementación, resultados, seguimiento). Se puede tener más de 1 proyecto simultáneamente. Ejecutar relevamientos, entrevistas, medición de tiempos en proyectos de mejora y proyectos de transformación. Ejecutar proyectos de mejora y transformación, de acuerdo a la asignación del jefe. Atender pedidos, formalizaciones o miniproyectos (menor duración). Atender pedidos y formalizaciones. Realizar Mentoring a los Analistas Junior y Middle como guía de proyectos.',
          sueldo: '',
          formulario: '',
          imagen: imagenpuesto
        },
        {
          id: '3',
          titulo: 'Operario de Produccion',
          experiencia: '',
          departamento: '',
          tipoempleo: 'FullTime',
          descripcion:
            'Ejecutar procesos y proyectos de transformación del banco, acompañando a las distintas áreas durante el ciclo de vida de la transformación (concepción, diseño, implementación y control), con el objetivo de generar eficiencias y automatizaciones.',
          funciones:
            'Liderar proyectos de mejora (mediano plazo) y proyectos de transformación (largo plazo), principalmente de carácter tecnológico, acompañando al negocio durante el todo el ciclo de vida (concepto, propuesta de diseño, implementación, resultados, seguimiento). Se puede tener más de 1 proyecto simultáneamente. Ejecutar relevamientos, entrevistas, medición de tiempos en proyectos de mejora y proyectos de transformación. Ejecutar proyectos de mejora y transformación, de acuerdo a la asignación del jefe. Atender pedidos, formalizaciones o miniproyectos (menor duración). Atender pedidos y formalizaciones. Realizar Mentoring a los Analistas Junior y Middle como guía de proyectos.',
          requisitos:
            'Liderar proyectos de mejora (mediano plazo) y proyectos de transformación (largo plazo), principalmente de carácter tecnológico, acompañando al negocio durante el todo el ciclo de vida (concepto, propuesta de diseño, implementación, resultados, seguimiento). Se puede tener más de 1 proyecto simultáneamente. Ejecutar relevamientos, entrevistas, medición de tiempos en proyectos de mejora y proyectos de transformación. Ejecutar proyectos de mejora y transformación, de acuerdo a la asignación del jefe. Atender pedidos, formalizaciones o miniproyectos (menor duración). Atender pedidos y formalizaciones. Realizar Mentoring a los Analistas Junior y Middle como guía de proyectos.',
          sueldo: '',
          formulario: '',
          imagen: imagenpuesto
        },
        {
          id: '4',
          titulo: 'Practicante de Mesa de Distribución',
          experiencia: '',
          departamento: '',
          tipoempleo: 'FullTime',
          descripcion:
            'Ejecutar procesos y proyectos de transformación del banco, acompañando a las distintas áreas durante el ciclo de vida de la transformación (concepción, diseño, implementación y control), con el objetivo de generar eficiencias y automatizaciones.',
          funciones:
            'Liderar proyectos de mejora (mediano plazo) y proyectos de transformación (largo plazo), principalmente de carácter tecnológico, acompañando al negocio durante el todo el ciclo de vida (concepto, propuesta de diseño, implementación, resultados, seguimiento). Se puede tener más de 1 proyecto simultáneamente. Ejecutar relevamientos, entrevistas, medición de tiempos en proyectos de mejora y proyectos de transformación. Ejecutar proyectos de mejora y transformación, de acuerdo a la asignación del jefe. Atender pedidos, formalizaciones o miniproyectos (menor duración). Atender pedidos y formalizaciones. Realizar Mentoring a los Analistas Junior y Middle como guía de proyectos.',
          requisitos:
            'Liderar proyectos de mejora (mediano plazo) y proyectos de transformación (largo plazo), principalmente de carácter tecnológico, acompañando al negocio durante el todo el ciclo de vida (concepto, propuesta de diseño, implementación, resultados, seguimiento). Se puede tener más de 1 proyecto simultáneamente. Ejecutar relevamientos, entrevistas, medición de tiempos en proyectos de mejora y proyectos de transformación. Ejecutar proyectos de mejora y transformación, de acuerdo a la asignación del jefe. Atender pedidos, formalizaciones o miniproyectos (menor duración). Atender pedidos y formalizaciones. Realizar Mentoring a los Analistas Junior y Middle como guía de proyectos.',
          sueldo: '',
          formulario: '',
          imagen: imagenpuesto
        }
      ]
    }
  },
  mounted() {}
}
</script>
<template>
  <div>
    <div>
      <div class="cont-encabezado lg:flex justify-between items-center">
        <p class="font-TestKarbonSemiBold titulo-pv">Puestos Vacantes</p>
        <div class="cont-search">
          <search />
        </div>
      </div>
      <div class="cont-filttro">
        <filtro-vac />
      </div>
    </div>
    <div v-for="pv in puestos" class="cont-itempv shadow-2xl lg:flex transition-all">
      <file-uploader-rect />
      <div class="flex flex-col justify-center">
        <div class="cont-text">
          <p class="pvname font-TestKarbonMedium text-AzulPerla">{{ pv.titulo }}</p>
          <div class="pvtype font-TestKarbonRegular text-AzulPerla">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.25 22.25">
              <path
                id="Icon_material-watch-later"
                data-name="Icon material-watch-later"
                d="M14.125,3A11.125,11.125,0,1,0,25.25,14.125,11.158,11.158,0,0,0,14.125,3ZM18.8,18.8l-5.785-3.56V8.562h1.669v5.785l5.006,3Z"
                transform="translate(-3 -3)"
                fill="#df9575"
              />
            </svg>
            &nbsp; &nbsp;{{ pv.tipoempleo }}
          </div>
          <p class="pvdescription font-KarbonRegular text-AzulPerla">{{ pv.descripcion }}</p>
        </div>
        <div class="cont-btn">
          <button
            @click="navigate"
            class="font-KarbonRegular flex justify-center items-center shadow-2xl transition-all"
          >
            Postular
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cont-search {
  padding-top: 3%;
  padding-left: 6%;
  padding-right: 6%;
}

.cont-itempv {
  margin: 4%;
  margin-bottom: 10%;
  margin-top: 6%;
  padding: 3%;
  background-color: #fecfab;
  border-radius: 4vw;
}

.cont-encabezado {
  padding: 4%;
}

.titulo-pv {
  font-size: 11vw;
  color: #471d7c;
}

.pvimage {
  border-radius: 4vw;
}

.pvname {
  font-size: 7.5vw;
  -webkit-text-stroke: #471d7c 0.1vw;
  padding: 4%;
  padding-bottom: 1%;
  text-align: center;
  color: #471d7c;
}

.pvtype {
  padding: 4%;
  padding-top: 1%;
  display: flex;
  justify-content: flex-end;
  font-size: 5vw;
  -webkit-text-stroke: #471d7c 0.1vw;
}

.pvtype svg {
  width: 7%;
}

.pvdescription {
  padding: 4%;
  font-size: 5vw;
  text-align: justify;
}

.cont-btn {
  padding: 4%;
  display: flex;
  justify-content: flex-end;
}

.cont-btn button {
  background-color: #e87a4b;
  color: white;
  font-size: 5vw;
  padding: 1%;
  padding-left: 10%;
  padding-right: 10%;
  border-radius: 4vw;
  -webkit-text-stroke: white 0.1vw;
}

@media (min-width: 768px) {
  .cont-search {
    padding-top: 3%;
    padding-left: 1%;
    padding-right: 1%;
  }

  .cont-itempv {
    margin: 8%;
    margin-bottom: 10%;
    margin-top: 6%;
    padding: 3%;
    background-color: #fecfab;
    border-radius: 4vw;
  }

  .cont-encabezado {
    padding: 4%;
  }

  .titulo-pv {
    font-size: 10vw;
    color: #471d7c;
  }

  .pvimage {
    border-radius: 4vw;
    height: 30vh;
    width: 100%;
  }

  .pvname {
    font-size: 6vw;
    -webkit-text-stroke: #471d7c 0.1vw;
    padding: 4%;
    padding-bottom: 1%;
    text-align: center;
    color: #471d7c;
  }

  .pvtype {
    padding: 4%;
    padding-top: 1%;
    display: flex;
    justify-content: flex-end;
    font-size: 4vw;
    color: #471d7c;
    -webkit-text-stroke: #471d7c 0.1vw;
  }

  .pvtype svg {
    width: 6%;
  }

  .pvdescription {
    padding: 4%;
    padding-top: 0%;
    font-size: 4.1vw;
    text-align: justify;
  }

  .cont-btn {
    padding: 2%;
    display: flex;
    justify-content: flex-end;
  }

  .cont-btn button {
    background-color: #e87a4b;
    color: white;
    font-size: 4vw;
    padding: 1%;
    padding-left: 10%;
    padding-right: 10%;
    border-radius: 4vw;
    -webkit-text-stroke: white 0.1vw;
  }
}

@media (min-width: 1024px) {
  .cont-search {
    padding-top: 3%;
    padding-left: 0%;
    padding-right: 3.5%;
    width: 25vw;
  }

  .cont-filttro {
    padding-left: 4%;
    padding-right: 4%;
  }

  .cont-itempv {
    margin: 5%;
    margin-bottom: 6%;
    margin-top: 5%;
    padding: 0%;
    background-color: #fecfab;
    border-radius: 0vw;
    height: 25vw;
    max-height: 25vw;
    overflow: hidden;
    /* border: #471D7C solid; */
  }

  .cont-itempv:hover {
    border-radius: 2vw;
    overflow: hidden;
    filter: brightness(95%);
  }

  .cont-encabezado {
    padding: 4%;
  }

  .titulo-pv {
    font-size: 5vw;
    color: #471d7c;
  }

  .pvimage {
    border-radius: 0vw;
    height: 100%;
    width: 35vw;
  }

  .cont-text {
    padding: 4%;
    padding-top: 0%;
    padding-bottom: 0%;
    height: 80%;
    /* border: #471D7C solid; */
  }

  .pvname {
    font-size: 2.6vw;
    -webkit-text-stroke: #471d7c 0.1vw;
    padding: 4%;
    padding-top: 0%;
    padding-bottom: 1%;
    text-align: center;
    /* border: #471D7C solid; */
  }

  .pvtype {
    padding: 4%;
    padding-top: 1%;
    padding-bottom: 1%;
    display: flex;
    justify-content: flex-end;
    font-size: 1.5vw;
    -webkit-text-stroke: #471d7c 0.1vw;
  }

  .pvtype svg {
    width: 4%;
  }

  .pvdescription {
    padding: 4%;
    padding-top: 0%;
    font-size: 1.3vw;
    -webkit-text-stroke: #471d7c 0.02vw;
    text-align: justify;
  }

  .cont-btn {
    padding: 0%;
    padding-right: 7%;
    display: flex;
    justify-content: flex-end;
  }

  .cont-btn button {
    background-color: #e87a4b;
    color: white;
    font-size: 1.5vw;
    padding: 0.3%;
    padding-left: 12%;
    padding-right: 12%;
    border-radius: 4vw;
    -webkit-text-stroke: white 0.1vw;
  }

  .cont-btn button:hover {
    padding-left: 15%;
    padding-right: 15%;
  }
}
</style>
