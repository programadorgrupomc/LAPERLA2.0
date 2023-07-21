<template>
  <div>
    <div id="table"></div>
    <button class="bg-green-300 m-1 px-2 rounded-2xl border font-bold hover:bg-green-500" @click="savedoc">
      Descargar como Excel
    </button>
  </div>
</template>

<script>
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import iconsave from '../../../../../../assets/Dashboard/Estadisticas/icondescargar.svg'
export default {
  data() {
    return {
      table: null,

    }
  },
  props: ['datapostulantes'],
  mounted() {
    this.initializeTable()
  },
  methods: {
    iconFormatter(cell, formatterParams, onRendered) {
      return `<img src="${iconsave}" alt="Icono Descargar" width="24" height="24">`;
    },
    descargarCurriculum(nombre) {
      const fileUrl = `http://localhost:3000/uploads/documents/${nombre}`; // Reemplaza con la ruta correcta del archivo
      window.open(fileUrl, '_blank');
    },


    initializeTable() {
      this.table = new Tabulator('#table', {
        data: this.datapostulantes,
        tooltips: true,

        columns: [
          { title: 'Nombre', field: 'datosPersonales.nombre', frozen: true },
          { title: 'Apellido', field: 'datosPersonales.apellidos', frozen: true },
          {
            title: 'Tipo de Documento de Identidad',
            field: 'datosPersonales.TipoDocumentoDeIdentidad',
            hozAlign: 'center'
          },
          {
            title: 'Número de Documento de Identidad',
            field: 'datosPersonales.NumeroDocumentoDeIdentidad',
            hozAlign: 'center'
          },
          {
            title: 'Fecha de Nacimiento',
            field: 'datosPersonales.fechanacimiento',
            hozAlign: 'center'
          },
          { title: 'Celular', field: 'datosPersonales.celular', hozAlign: 'center' },
          { title: 'Lugar', field: 'datosPersonales.lugar', hozAlign: 'center' },
          {
            title: 'Dosis de Vacunación COVID',
            field: 'datosPersonales.dosisdevacunacioncovid',
            hozAlign: 'center'
          },
          {
            title: '¿Ha trabajado con nosotros?',
            field: 'datosPersonales.hastrabajadoconnosotros',
            hozAlign: 'center', formatter: "tickCross"
          },
          { title: 'Currículum', field: 'curriculum.documento' },
          {
            formatter: this.iconFormatter, cellClick: (e, cell) => {
              const documento = cell.getData().curriculum.documento;
              this.descargarCurriculum(documento);
            },
          },
          {
            title: 'Términos y Condiciones',
            field: 'terminosycondiciones.acepto',
            hozAlign: 'center',
            formatter: "tickCross"
          },
          { title: 'Fecha de Registro', field: 'createdAt', hozAlign: 'center' },
          { title: 'Puesto Vacante', field: 'puestoVacante', hozAlign: 'center' }
        ]
      })

    },
    savedoc() {
      this.table.download("xlsx", "data.xlsx", { sheetName: "Postulantes La Perla" });
    }

  }
}
</script>
<style scoped>
.tabulator {
  border-radius: 1vh;
}
</style>
