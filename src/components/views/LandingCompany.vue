<template>
  <div class="home">
    <h1>{{ company }}</h1>
    <h2>Listado de productos</h2>
    <div>
      <Search />
      <Filters />
      <ProductsTable />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Search from '@/components/Search'
import Filters from '@/components/Filters'
import ProductsTable from '@/components/ProductsTable'
export default {
  name: 'landing',
  data () {
    return {
      company: 'Nombre empresa'
    }
  },

  mounted () {
    this.company = this.$route.params.company
    this.gid = this.$route.params.gdocId
    this.fetchData(this.gid)
  },

  methods: {
    ...mapActions(['fetchData'])
  },

  components: {ProductsTable, Search, Filters}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
