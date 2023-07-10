<template>
  <div class="table-container">
    <div class="table-scroll">
      <table class="responsive-table">
        <thead>
          <tr class="">
            <th class="fixed-column shadow-2xl border">Nombre</th>
            <th v-for="(column, index) in columns" :key="index" class="nowrap padded-cell">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td class="fixed-column shadow-2xl padded-cell">{{ row[0] }}</td>
            <td v-for="(cell, cellIndex) in row.slice(1)" :key="cellIndex" class="padded-cell">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        'Documento de Identidad',
        'N° de Documento',
        'Apellidos',
        'Celular',
        'De donde eres?',
        'Fecha De Nacimiento',
        'Dosis COVID-19',
        'Has Trabajado Anteriormente Con Nosotros?',
        'Otro'
      ], // Add more columns as needed
      rows: [
        ['Ejemplo 1', 'Data 1', 'Data 2', 'Data 3'],
        ['Ejemplo 2', 'Data 4', 'Data 5', 'Data 6']
        // Add more rows and data as needed
      ]
    }
  }
}
</script>
<style>
.table-container {
  overflow-x: hidden;
}

.table-scroll {
  overflow-x: auto;
  width: 100%;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
}

.responsive-table th,
.responsive-table td {
  font-size: 2vh;
  text-align: left;
  border: 1px solid #ccc;
  padding: 15px;
}

.fixed-column {
  position: sticky;
  left: 0;
  background-color: white;
}

.nowrap {
  white-space: nowrap;
}

.padded-cell {
  white-space: nowrap;
  padding: 15px;
  border: 1px solid #ccc;
  /* Agregar el valor de padding deseado */
}
</style>
