<template>
  <div class="container">
    <label for="">
      Buscar producto:
      <input type="search" name="search" :value="searchText" @input="inputFindTerm">
    </label>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Search',
  computed: mapState([
    'searchText'
  ]),
  methods: {
    ...mapMutations(['findTerm']),
    inputFindTerm (e) {
      this.findTerm(e.target.value)
    }
  }
}
</script>

<style>

</style>
