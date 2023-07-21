<template>
  <div id="table"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ['datapostulantes'],
  mounted() {
    var table = new Tabulator("#table", {
      data: this.datapostulantes,
      columns: [
        { title: "Nombre", field: "datosPersonales.nombre", frozen: true }, //frozen column
        { title: "Apellido", field: "datosPersonales.apellidos" },
        { title: "Tipo de Documento de Identidad", field: "datosPersonales.TipoDocumentoDeIdentidad" },
        { title: "Número de Documento de Identidad", field: "datosPersonales.NumeroDocumentoDeIdentidad" },
        { title: "Fecha de Nacimiento", field: "datosPersonales.fechanacimiento" },
        { title: "Celular", field: "datosPersonales.celular" },
        { title: "Lugar", field: "datosPersonales.lugar" },
        { title: "Dosis de Vacunación COVID", field: "datosPersonales.dosisdevacunacioncovid" },
        { title: "¿Ha trabajado con nosotros?", field: "datosPersonales.hastrabajadoconnosotros" },
        { title: "Currículum", field: "curriculum.documento" },
        { title: "Términos y Condiciones", field: "terminosycondiciones.acepto" },
        { title: "Fecha de Registro", field: "createdAt" },
        { title: "Puesto Vacante", field: "puestoVacante" },
      ],
    });
  },
};
</script>
<style scoped>
@import "tabulator-tables";

#table {
  background-color: white;
}
</style>
