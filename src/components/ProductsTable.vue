<template>
  <div class="container table-responsive">

    <table class="table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in activesProducts" :key="i">
          <td>{{product.producto}}</td>
          <td>{{product.precio}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductsTable',
  computed: mapGetters([
    'activesProducts'
  ])
}
</script>

<style>
div.table-responsive {
  margin: 0 auto;
}
table.table {
  width: 100%;
  margin-top: 2rem;
}
th:first-child,
td:first-child {
  text-align: left;
}
th:last-child,
td:last-child {
  text-align: right;
}
tbody td {
  padding: 8px 0;
}

tbody tr:nth-child(even) {
  background: #f3f3f3;
}

</style>
